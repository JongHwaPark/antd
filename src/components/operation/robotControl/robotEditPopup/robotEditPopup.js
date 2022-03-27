import React from 'react';
import { Row, Col, Card, Button, Space, Modal, Select, Divider, Typography } from 'antd';
import { EnvironmentOutlined, PlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

function PositionData(){
  return (
    <Space size="large">
      <EnvironmentOutlined />
      <Space>
        <span>321.2</span>/<span>321.2</span>/<span>321.2</span>
      </Space>
      <Space>
        <span>321.2</span>/<span>321.2</span>/<span>321.2</span>
      </Space>
    </Space>
  );
}

function RobotEditPopup({
  visible,
  onOk,
  onCancel,
}){
  return (
    <Modal
      title="시공 로봇 관리"
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
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Card title="Target Name" type="inner" size='small' 
            actions={[<PositionData />]}
          >
              <Row>
                <Col span={8}>
                  <Row justify='space-between' align='middle'>
                    <Col><strong>Point1</strong></Col>
                    <Col><Button type="text"><CloseCircleOutlined style={{color:'#df4949'}} /></Button></Col>
                  </Row>
                  <Space direction='vertical'>
                    <span>x : 305.51</span>
                    <span>y : 305.51</span>
                    <span>z : 305.51</span>
                  </Space>                
                </Col>
                <Col span={8}>
                  <Button type="dashed" style={{height:'100%', width:'100%'}}>
                    <PlusOutlined style={{ fontSize: '1.5em', color: '#08c' }}/>
                  </Button>
                </Col>
              </Row> 
              <Space style={{marginTop:'1em'}}>
                <span>출력좌표 : </span>
                <Select defaultValue="Coordiate" style={{ width: 120 }}>
                  <Option value="Coordiate">Coordiate</Option>
                </Select>
              </Space>
          </Card>        
        </Col>
        <Col span={8}>
          <Card title="Target Name" type="inner" size='small' 
            actions={[<PositionData />]}
          >
              <Row>
                <Col span={8}>
                  <Row justify='space-between' align='middle'>
                    <Col><strong>Point1</strong></Col>
                    <Col><Button type="text"><CloseCircleOutlined style={{color:'#df4949'}} /></Button></Col>
                  </Row>
                  <Space direction='vertical'>
                    <span>x : 305.51</span>
                    <span>y : 305.51</span>
                    <span>z : 305.51</span>
                  </Space>                
                </Col>
                <Col span={8}>
                  <Button type="dashed" style={{height:'100%', width:'100%'}}>
                    <PlusOutlined style={{ fontSize: '1.5em', color: '#08c' }}/>
                  </Button>
                </Col>
              </Row> 
              <Space style={{marginTop:'1em'}}>
                <span>출력좌표 : </span>
                <Select defaultValue="Coordiate" style={{ width: 120 }}>
                  <Option value="Coordiate">Coordiate</Option>
                </Select>
              </Space>
          </Card>        
        </Col>
        <Col span={8}>
          <Card title="Target Name" type="inner" size='small' 
            actions={[<PositionData />]}
          >
              <Row>
                <Col span={8}>
                  <Row justify='space-between' align='middle'>
                    <Col><strong>Point1</strong></Col>
                    <Col><Button type="text"><CloseCircleOutlined style={{color:'#df4949'}} /></Button></Col>
                  </Row>
                  <Space direction='vertical'>
                    <span>x : 305.51</span>
                    <span>y : 305.51</span>
                    <span>z : 305.51</span>
                  </Space>                
                </Col>
                <Col span={8}>
                  <Button type="dashed" style={{height:'100%', width:'100%'}}>
                    <PlusOutlined style={{ fontSize: '1.5em', color: '#08c' }}/>
                  </Button>
                </Col>
              </Row> 
              <Space style={{marginTop:'1em'}}>
                <span>출력좌표 : </span>
                <Select defaultValue="Coordiate" style={{ width: 120 }}>
                  <Option value="Coordiate">Coordiate</Option>
                </Select>
              </Space>
          </Card>        
        </Col>
        <Col span={8}>
          <Card title="Target Name" type="inner" size='small' 
            actions={[<PositionData />]}
          >
              <Row>
                <Col span={8}>
                  <Row justify='space-between' align='middle'>
                    <Col><strong>Point1</strong></Col>
                    <Col><Button type="text"><CloseCircleOutlined style={{color:'#df4949'}} /></Button></Col>
                  </Row>
                  <Space direction='vertical'>
                    <span>x : 305.51</span>
                    <span>y : 305.51</span>
                    <span>z : 305.51</span>
                  </Space>                
                </Col>
                <Col span={8}>
                  <Button type="dashed" style={{height:'100%', width:'100%'}}>
                    <PlusOutlined style={{ fontSize: '1.5em', color: '#08c' }}/>
                  </Button>
                </Col>
              </Row> 
              <Space style={{marginTop:'1em'}}>
                <span>출력좌표 : </span>
                <Select defaultValue="Coordiate" style={{ width: 120 }}>
                  <Option value="Coordiate">Coordiate</Option>
                </Select>
              </Space>
          </Card>        
        </Col>
        <Col span={8}>
          <Card title="Target Name" type="inner" size='small' 
            actions={[<PositionData />]}
          >
              <Row>
                <Col span={8}>
                  <Row justify='space-between' align='middle'>
                    <Col><strong>Point1</strong></Col>
                    <Col><Button type="text"><CloseCircleOutlined style={{color:'#df4949'}} /></Button></Col>
                  </Row>
                  <Space direction='vertical'>
                    <span>x : 305.51</span>
                    <span>y : 305.51</span>
                    <span>z : 305.51</span>
                  </Space>                
                </Col>
                <Col span={8}>
                  <Button type="dashed" style={{height:'100%', width:'100%'}}>
                    <PlusOutlined style={{ fontSize: '1.5em', color: '#08c' }}/>
                  </Button>
                </Col>
              </Row> 
              <Space style={{marginTop:'1em'}}>
                <span>출력좌표 : </span>
                <Select defaultValue="Coordiate" style={{ width: 120 }}>
                  <Option value="Coordiate">Coordiate</Option>
                </Select>
              </Space>
          </Card>        
        </Col>
        <Col span={8}>
          <Button type="dashed" style={{height:'100%', width:'100%'}}>
            <PlusOutlined style={{ fontSize: '1.5em', color: '#08c' }}/>
          </Button>
        </Col>
      </Row>
    </Modal>    
  )
}


export default RobotEditPopup;