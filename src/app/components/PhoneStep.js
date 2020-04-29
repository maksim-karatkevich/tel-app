import React from 'react';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import phoneNumberValid from '../utils/validators';

const PhoneStep = ({ onSubmitForm }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} onFinish={onSubmitForm}>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || phoneNumberValid(getFieldValue('phoneNumber'))) {
                return Promise.resolve();
              }
              // eslint-disable-next-line prefer-promise-reject-errors
              return Promise.reject('Invalid phone number. (+375XXXXXXXXX)');
            },
          }),
        ]}
      >
        <Input maxLength={13} placeholder="Phone number" size="large" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Next
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

PhoneStep.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default PhoneStep;
