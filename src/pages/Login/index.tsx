import React from 'react'
import {Layout, Card, Input, Button} from 'antd'

const {Header, Footer, Content} = Layout

export default function index() {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img
            src="your-logo-url"
            alt="logo"
            style={{height: '50px', marginRight: '16px'}}
          />
        </div>
      </Header>
      <Content style={{padding: '50px'}}>
        <Card title="Login" style={{width: 400, margin: '0 auto'}}>
          <Input
            type="number"
            placeholder="Enter your Account Number"
            style={{marginBottom: 16}}
          />
          <Input placeholder="Enter Your NRC" style={{marginBottom: 16}} />
          <Button type="primary" block>
            Generate OTP
          </Button>
        </Card>
      </Content>
      <Footer style={{textAlign: 'center', padding: '24px 0'}}>
        © Zambia National Commercial Bank Plc
      </Footer>
    </Layout>
  )
}
