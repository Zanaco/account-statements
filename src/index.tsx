import React from 'react'
import ReactDOM from 'react-dom/client'
import {PublicClientApplication} from '@azure/msal-browser'
import {MsalProvider} from '@azure/msal-react'
import {Provider} from 'react-redux'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {msalConfig} from './components/constants/auth-config'
import {store} from './redux/store'

const msalInstance = new PublicClientApplication(msalConfig)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <MsalProvider instance={msalInstance}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </MsalProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
