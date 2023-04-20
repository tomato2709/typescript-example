import React from 'react';
import { Button, Space } from 'antd';

type Props = {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  return (
    <Space wrap>
    <div>
      Hello, {name}!
      <Button type="primary" onClick={() => console.log(name.length)}>Click</Button>
    </div>
    </Space>
  );
};

export default HelloWorld;