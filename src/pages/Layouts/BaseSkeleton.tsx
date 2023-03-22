import React from 'react'
import {Skeleton, Card, Layout, Space, Typography} from 'antd'
import {red} from '../../components/constants/colors'

// import 'antd/dist/antd.css';
const {Text} = Typography
const {Header, Content, Footer} = Layout

export default function BaseSkeleton() {
  return (
    <Layout>
      <Header
        style={{background: red.deep, display: 'flex', alignItems: 'center'}}>
        <Skeleton.Input style={{width: '100%', height: '40px'}} active />
      </Header>
      <Content style={{display: 'flex', alignSelf: 'center'}}>
        <Card title="Self Service Portal" style={{marginTop: 16}}>
          <Space
            direction="vertical"
            style={{
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Skeleton.Input style={{width: '250px', marginBottom: 16}} active />
            <Skeleton.Input style={{width: '250px', marginBottom: 16}} active />
            <Skeleton.Button style={{width: '150px'}} active />
          </Space>
        </Card>
      </Content>
      <Footer style={{textAlign: 'center', background: '#000'}}>
        <Text style={{color: '#fff'}}>
          © Zambia National Commercial Bank Plc
        </Text>
      </Footer>
    </Layout>
  )
}
