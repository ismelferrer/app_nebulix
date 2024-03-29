import {
  collapseSelection,
  deleteText,
  getAboveNode,
  getMarks,
  getParentNode,
  getPluginType,
  insertElements,
  isBlockTextEmptyAfterSelection,
  isStartPoint,
  moveNodes,
  select,
  splitNodes,
  withoutNormalizing,
  wrapNodes,
} from '@udecode/plate';
import { Path, Range } from 'slate';

import { ELEMENT_LI, ELEMENT_LIC } from '../createListPlugin';

import type { PlateEditor, TElement } from '@udecode/plate';
import type { MdListItemElement, MdValue } from '@staticcms/markdown';

/**
 * Insert list item if selection in li>p.
 * TODO: test
 */
const insertListItem = (editor: PlateEditor<MdValue>): boolean => {
  const liType = getPluginType(editor, ELEMENT_LI);
  const licType = getPluginType(editor, ELEMENT_LIC);

  if (!editor.selection) {
    return false;
  }

  const licEntry = getAboveNode(editor, { match: { type: licType } });
  if (!licEntry) {
    return false;
  }

  const [, paragraphPath] = licEntry;

  const listItemEntry = getParentNode<MdListItemElement>(editor, paragraphPath);
  if (!listItemEntry) {
    return false;
  }

  const [listItemNode, listItemPath] = listItemEntry;
  if (listItemNode.type !== liType) {
    return false;
  }

  let success = false;

  withoutNormalizing(editor, () => {
    if (!Range.isCollapsed(editor.selection!)) {
      deleteText(editor);
    }

    const isStart = isStartPoint(editor, editor.selection!.focus, paragraphPath);
    const isEnd = isBlockTextEmptyAfterSelection(editor);

    const nextParagraphPath = Path.next(paragraphPath);
    const nextListItemPath = Path.next(listItemPath);

    /**
     * If start, insert a list item before
     */
    if (isStart) {
      insertElements(
        editor,
        {
          type: liType,
          checked: listItemNode.checked,
          children: [{ type: licType, children: [{ text: '' }] }],
        },
        { at: listItemPath },
      );

      success = true;

      return;
    }

    /**
     * If not end, split nodes, wrap a list item on the new paragraph and move it to the next list item
     */
    if (!isEnd) {
      withoutNormalizing(editor, () => {
        splitNodes(editor);
        wrapNodes<TElement>(
          editor,
          {
            type: liType,
            checked: listItemNode.checked,
            children: [],
          },
          { at: nextParagraphPath },
        );
        moveNodes(editor, {
          at: nextParagraphPath,
          to: nextListItemPath,
        });
        select(editor, nextListItemPath);
        collapseSelection(editor, {
          edge: 'start',
        });
      });
    } else {
      /**
       * If end, insert a list item after and select it
       */
      const marks = getMarks(editor) || {};
      insertElements(
        editor,
        {
          type: liType,
          checked: listItemNode.checked,
          children: [{ type: licType, children: [{ text: '', ...marks }] }],
        },
        { at: nextListItemPath },
      );
      select(editor, nextListItemPath);
    }

    /**
     * If there is a list in the list item, move it to the next list item
     */
    if (listItemNode.children.length > 1) {
      moveNodes(editor, {
        at: nextParagraphPath,
        to: nextListItemPath.concat(1),
      });
    }

    success = true;
  });

  return success;
};

export default insertListItem;
