import React, {useState} from 'react'
import {Card, Form, Input, Button, message} from 'antd'
import Countdown from 'react-countdown'

function ValidateOTP() {
  const [showResendOTP, setShowResendOTP] = useState(false)

  const onFinish = values => {
    // Here you can send the OTP to the server and validate it
    message.success('OTP validated successfully')
  }

  const handleResendOTP = () => {
    // Here you can send a new OTP to the user
    message.success('OTP resent successfully')
    setShowResendOTP(false)
  }

  const handleTimerFinished = () => {
    setShowResendOTP(true)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{width: 400, marginTop: 100}}>
        <Form
          onFinish={onFinish}
          onFieldsChange={() => setShowResendOTP(false)}
          initialValues={{otp: ''}}>
          <Form.Item
            name="otp"
            label="One-time password"
            rules={[
              {
                required: true,
                message: 'Please input your one-time password',
              },
              {
                len: 6,
                message: 'The one-time password must be 6 digits',
              },
            ]}>
            <Input maxLength={6} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Validate OTP
            </Button>
          </Form.Item>
        </Form>
        {showResendOTP ? (
          <p>
            Didn't receive the OTP?{' '}
            <a href="#" onClick={handleResendOTP}>
              Resend OTP
            </a>
          </p>
        ) : (
          <Countdown
            date={Date.now() + 60000}
            onComplete={handleTimerFinished}
          />
        )}
      </Card>
    </div>
  )
}

export default ValidateOTP
