import {
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  ReloadOutlined,
  WarningOutlined,
} from '@ant-design/icons'
import {Button, Typography, Space} from 'antd'
import React from 'react'

export interface ErrorPageI {
  title?: string
  message?: string
  refresh?: boolean
  icon?: 'error' | 'notice' | 'caution' | 'info'
}

export default function ErrorPage({
  title = 'Oopsie!',
  message,
  refresh = true,
  icon = 'error',
}: ErrorPageI) {
  return (
    <Space direction="vertical" style={{background: '#fff', padding: 20}}>
      {icon === 'caution' && (
        <WarningOutlined size={100} style={{fontSize: 100}} color="gold-6" />
      )}
      {icon === 'error' && (
        <ExclamationCircleOutlined
          size={100}
          style={{fontSize: 100}}
          color="red-6"
        />
      )}
      {icon === 'notice' && (
        <InfoCircleOutlined size={100} style={{fontSize: 100}} color="grey-9" />
      )}
      {icon === 'info' && (
        <InfoCircleOutlined size={100} style={{fontSize: 100}} color="grey-9" />
      )}
      <Typography.Title
        style={{fontSize: '2.0rem', marginTop: '1rem', padding: '1rem'}}>
        {title}
      </Typography.Title>
      <Typography.Text
        style={{textAlign: 'center', marginTop: '1rem', padding: '1rem'}}>
        {message ||
          `What you are experiencing is something very unpleasant! Please ensure
            you are connected to the internet. If this persists then chances are
            someone does not deserve a slice of the bonus.`}
      </Typography.Text>
      {refresh && (
        <Button
          onClick={() => window.location.reload()}
          icon={<ReloadOutlined />}
          block>
          Refresh
        </Button>
      )}
    </Space>
  )
}
