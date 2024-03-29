import controlComponent from './RelationControl';
import previewComponent from './RelationPreview';
import RelationSummary from './RelationSummary';
import schema from './schema';
import validator from './validator';

import type { RelationField, WidgetParam } from '@staticcms/core';

function RelationWidget(): WidgetParam<string | string[], RelationField> {
  return {
    name: 'relation',
    controlComponent,
    previewComponent,
    options: {
      validator,
      schema,
    },
  };
}

export {
  controlComponent as RelationControl,
  previewComponent as RelationPreview,
  RelationSummary,
  schema as relationSchema,
  validator as relationValidator,
};

export default RelationWidget;
