import React from 'react'
import {Button} from 'antd'
import {BackwardOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router-dom'
import Stack from '../../components/common/Stack'
import lost from '../../assets/404.svg'
import {RegularText, SectionHeader} from '../../components/common/Text'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Stack className="base-container" variant="row">
      <div className="f-1">
        <img src={lost} alt="lost" />
      </div>
      <div className="f-2">
        <Stack variant="column">
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
        </Stack>
      </div>
    </Stack>
  )
}
