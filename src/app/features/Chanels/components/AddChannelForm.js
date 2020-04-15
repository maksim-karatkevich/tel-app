import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

const AddChannelForm = ({ onSubmitForm }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form form={form} layout="inline" onFinish={onSubmitForm}>
      <Form.Item
        name="channelName"
        rules={[
          {
            required: true,
            message: 'Channel name is required!',
          },
        ]}
      >
        <Input maxLength={25} placeholder="Channel name" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
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

AddChannelForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default AddChannelForm;
