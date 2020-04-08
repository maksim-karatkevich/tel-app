import React from 'react';

import { Input, Button } from 'antd';

const AddChannelForm = () => {
  return (
    <div className="mt-5 mb-5">
      <Input className="w-25" maxLength={25} placeholder="Channel name" />
      <Button type="primary">Add Channel</Button>
    </div>
  );
};

export default AddChannelForm;
