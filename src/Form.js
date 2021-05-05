import { JsonForms } from '@jsonforms/react';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';

function Form(props) {
  const { schema, uischema, data, onChange } = props;

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={onChange}
    />
  );
};

export default Form;
