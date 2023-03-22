import React from 'react'
import {Button, Space} from 'antd'
import {BackwardOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
import lost from '../../assets/404.svg'
import {RegularText, SectionHeader} from '../../components/common/Text'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Space className="base-container" direction="horizontal">
      <div className="f-1">
        <img src={lost} alt="lost" />
      </div>
      <div className="f-2">
        <Space orientation="vertical">
          <SectionHeader style={{marginBottom: '2.0em'}}>
            Page Not Found
          </SectionHeader>
          <RegularText>
            You are obviously lost. It is usually a good idea to use the
            navigation link.
          </RegularText>
          <Button
            onClick={() => navigate(-1)}
            style={{marginTop: 30, fontSize: '1.2rem'}}
            type="link"
            icon={<BackwardOutlined style={{fontSize: '1.2rem'}} />}>
            GO BACK
          </Button>
        </Space>
      </div>
    </Space>
  )
}
