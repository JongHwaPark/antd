import React from 'react';
import { Card, Form, Input, Button, Select } from 'antd';
const { Option } = Select;

function MobileRobot() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Mobile Robot"
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="mir100">Mir 100</Option>
              <Option value="mir250">Mir 250</Option>
              <Option value="tarsM1">TARS M1</Option>
              <Option value="tarsM2">TARS M2</Option>
              <Option value="tarsA">TARS A</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="IP"
            name="ip"
            rules={[{ required: true }]}
          >
            <Input.Group compact>
              <Form.Item
                name={['ip', 'ip1']}
                noStyle
                rules={[{ required: true, message: 'IP1 address is required' }]}
              >
                <Input type="number" style={{ width: '33.3%' }} />
              </Form.Item>
              <Form.Item
                name={['ip', 'ip2']}
                noStyle
                rules={[{ required: true, message: 'IP2 address is required' }]}
              >
                <Input type="number" style={{ width: '33.3%' }} />
              </Form.Item>
              <Form.Item
                name={['ip', 'ip3']}
                noStyle
                rules={[{ required: true, message: 'IP3 address is required' }]}
              >
                <Input type="number" style={{ width: '33.3%' }} />
              </Form.Item>

            </Input.Group>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              장치 연결 검사
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

function MeasuringDevice() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Measuring Device"
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="ats600">ATS 600</Option>
              <Option value="nt150">NT 150</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="IP"
            name="ip"
            rules={[{ required: true }]}
          >
            <Input.Group compact>
              <Form.Item
                name={['ip', 'ip1']}
                noStyle
                rules={[{ required: true, message: 'IP1 address is required' }]}
              >
                <Input type="number" style={{ width: '33.3%' }} />
              </Form.Item>
              <Form.Item
                name={['ip', 'ip2']}
                noStyle
                rules={[{ required: true, message: 'IP2 address is required' }]}
              >
                <Input type="number" style={{ width: '33.3%' }} />
              </Form.Item>
              <Form.Item
                name={['ip', 'ip3']}
                noStyle
                rules={[{ required: true, message: 'IP3 address is required' }]}
              >
                <Input type="number" style={{ width: '33.3%' }} />
              </Form.Item>

            </Input.Group>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              장치 연결 검사
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

function Device() {
  return (
    <>
      <MobileRobot />
      <MeasuringDevice />
    </>
  );
}

export default Device;