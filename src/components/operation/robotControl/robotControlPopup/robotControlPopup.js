import React from 'react';
import { Row, Col, Button, Divider, Typography, Space, Modal } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import RobotPositionJoyStick from '../../../common/robotPositionJoyStick';

function RobotControlPopUp({
  visible,
  onOk,
  onCancel,
}){
  return (
    <Modal
      title="로봇 제어"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      style={{ top: 20 }}
      width={1200}
      height={700}
      footer={[
        <Button type="primary" onClick={onOk}>OK</Button>
      ]}
    >
      <Row>
        <Col span={15}>
          <div style={{width:'100%', height:'100%', backgroundColor:'black'}}>
            some contents...
          </div>
        </Col>
        <Col span={1}>
        </Col>
        <Col span={8}>
          <Row>
            <Space direction={"vertical"} size={"small"}>
              <Typography.Title level={4} style={{ margin: 0 }}>로봇 상태</Typography.Title>
              <Typography.Title level={4} type="success" style={{ margin: 0 }}>MOVING</Typography.Title>
            </Space>      
          </Row>
          <Divider />
          <Row>
            <Space direction={"vertical"} size={"small"}>
              <Typography.Title level={4} style={{ margin: 0 }}>Control</Typography.Title>
              <Space direction={"horizontal"} size={"small"}>
                <Button type="primary" size="large" danger>정지</Button>
                <Button type="primary" size="large">위치 보정</Button>
              </Space>
            </Space>
          </Row>
          <Divider />
          <Row>
            <Space direction={"vertical"} size={"small"}>
              <Typography.Title level={4} style={{ margin: 0 }}>리프트</Typography.Title>
              <Space direction={"horizontal"} size={"small"}>
                <Button type="primary" size="large" >UP<ArrowUpOutlined /></Button>
                <Button size="large" >DOWN<ArrowDownOutlined /></Button>
              </Space>
            </Space>      
          </Row>
          <Divider />
          <Row>
            <div style={{width: '100%', height:'300px'}}>
              <RobotPositionJoyStick />
            </div>
          </Row>
        </Col>
      </Row>
    </Modal>    
  )
}


export default RobotControlPopUp;