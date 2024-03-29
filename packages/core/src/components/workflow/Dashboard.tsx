import {
  DndContext,
  DragOverlay,
  defaultDropAnimation,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { Dashboard as DashboardIcon } from '@styled-icons/material/Dashboard';
import React, { useCallback, useMemo, useState } from 'react';

import { updateUnpublishedEntryStatus } from '@staticcms/core/actions/editorialWorkflow';
import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import useTranslate from '@staticcms/core/lib/hooks/useTranslate';
import classNames from '@staticcms/core/lib/util/classNames.util';
import { PointerSensor } from '@staticcms/core/lib/util/dnd.util';
import { generateClassNames } from '@staticcms/core/lib/util/theming.util';
import { selectUseOpenAuthoring } from '@staticcms/core/reducers/selectors/globalUI';
import { useAppDispatch, useAppSelector } from '@staticcms/core/store/hooks';
import MainView from '../MainView';
import ActiveWorkflowCard from './ActiveWorkflowCard';
import WorkflowColumn from './WorkflowColumn';
import useWorkflowBoardSections from './hooks/useWorkflowBoardSections';
import useWorkflowEntriesByCollection from './hooks/useWorkflowEntriesByCollection';
import { getEntryId } from './util/workflow.util';

import type { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import type { FC } from 'react';

import './Dashboard.css';

const classes = generateClassNames('Dashboard', [
  'root',
  'dragging',
  'header-wrapper',
  'header',
  'header-icon-wrapper',
  'header-icon',
  'header-label',
  'header-description',
  'board',
  'columns',
]);

const Dashboard: FC = () => {
  const t = useTranslate();

  const dispatch = useAppDispatch();

  const useOpenAuthoring = useAppSelector(selectUseOpenAuthoring);

  const { boardSections, entriesById, setBoardSections } = useWorkflowBoardSections();

  const inReviewEntries = useWorkflowEntriesByCollection(WorkflowStatus.PENDING_REVIEW);
  const readyEntries = useWorkflowEntriesByCollection(WorkflowStatus.PENDING_PUBLISH);

  const [isDragging, setIsDragging] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

  const handleOnDragStart = useCallback(({ active }: DragStartEvent) => {
    setIsDragging(true);
    setActiveTaskId(active.id as string);
  }, []);

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    // Find the containers
    const activeEntry = entriesById[active.id as string];
    const activeStatus = activeEntry.boardStatus;
    const overStatus = over?.id as WorkflowStatus;

    if (!activeStatus || !overStatus || activeStatus === overStatus) {
      return;
    }

    setBoardSections(boardSection => {
      const activeItems = boardSection[activeStatus];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex(entry => getEntryId(entry) === active.id);

      return {
        ...boardSection,
        [activeStatus]: [
          ...boardSection[activeStatus].filter(entry => getEntryId(entry) !== active.id),
        ],
        [overStatus]: [boardSections[activeStatus][activeIndex], ...boardSection[overStatus]],
      };
    });
  };

  const handleOnDragEnd = useCallback(
    ({ over, active }: DragEndEvent) => {
      const entry = entriesById[active.id];
      if (entry && entry.status && over) {
        dispatch(
          updateUnpublishedEntryStatus(
            entry.collection,
            entry.slug,
            entry.status,
            over.id as WorkflowStatus,
          ),
        );
      }

      setIsDragging(false);
      setActiveTaskId(null);
    },
    [dispatch, entriesById],
  );

  const handleOnDragCancel = useCallback(() => {
    setIsDragging(false);
    setActiveTaskId(null);
  }, []);

  const activeEntry = useMemo(
    () => (activeTaskId ? entriesById[activeTaskId] : null),
    [activeTaskId, entriesById],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  return (
    <MainView breadcrumbs={[{ name: 'Dashboard' }]} showQuickCreate showLeftNav noMargin>
      <div className={classNames(classes.root, isDragging && classes.dragging)}>
        <div className={classes['header-wrapper']}>
          <h2 className={classes.header}>
            <div className={classes['header-icon-wrapper']}>
              <DashboardIcon className={classes['header-icon']} />
            </div>
            <div className={classes['header-label']}>{t('workflow.workflow.workflowHeading')}</div>
          </h2>
          <div className={classes['header-description']}>
            {t('workflow.workflow.description', {
              smart_count: inReviewEntries.length,
              readyCount: readyEntries.length,
            })}
          </div>
        </div>
        <DndContext
          onDragStart={handleOnDragStart}
          onDragEnd={handleOnDragEnd}
          onDragOver={handleDragOver}
          onDragCancel={handleOnDragCancel}
          sensors={sensors}
        >
          <div className={classNames(classes.board, 'CMS_Scrollbar_root')}>
            {(Object.keys(boardSections) as WorkflowStatus[])
              .filter(ws => !useOpenAuthoring || ws !== WorkflowStatus.PENDING_PUBLISH)
              .map(status => (
                <WorkflowColumn
                  key={status}
                  entries={boardSections[status]}
                  status={status}
                  dragging={isDragging}
                  useOpenAuthoring={useOpenAuthoring}
                />
              ))}
          </div>
          <DragOverlay dropAnimation={defaultDropAnimation}>
            {activeEntry ? <ActiveWorkflowCard entry={activeEntry} /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    </MainView>
  );
};

export default Dashboard;
