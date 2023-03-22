import ConfigProvider from 'antd/es/config-provider'
import React from 'react'
import './App.scss'
import {gold} from './components/constants/colors'
import AuthLoading from './pages/AuthLoading'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: gold.deep,
          // colorFillSecondary: black.bg,
          // colorTextSecondary: black.text,
          // colorBorderSecondary: black.deep,
        },
      }}>
      <AuthLoading />
    </ConfigProvider>
  )
}

export default App
