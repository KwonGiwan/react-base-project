import React from 'react';
import { Input, Form } from 'rsuite';

interface FieldProps {
  field: any;
  error?: string;
  placeholder?: string;
  type?: string;
  as?: React.ElementType;
}

const Field: React.FC<FieldProps> = ({
  as: Component = Input,
  field,
  error,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <Form.Group>
      <Component
        {...field}
        placeholder={placeholder}
        type={type}
        {...rest}
        onChange={(value: any) => field.onChange(value)}
      />
      {error && (
        <Form.ErrorMessage show={!!error} placement="bottomStart">
          {error}
        </Form.ErrorMessage>
      )}
    </Form.Group>
  );
};

export default Field;
