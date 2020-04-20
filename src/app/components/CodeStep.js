import React from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

const CodeStep = ({ onSubmitForm }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} onFinish={onSubmitForm}>
      <Form.Item
        name="code"
        rules={[
          {
            required: true,
            message: 'Please input code!',
          },
        ]}
      >
        <Input maxLength={25} placeholder="Code" size="large" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Submit
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

CodeStep.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default CodeStep;
