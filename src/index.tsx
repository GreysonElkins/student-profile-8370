import React from 'react'
import ReactDOM from 'react-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'index.scss'

toast.configure({
  position: 'bottom-center',
  autoClose: 4000,
})

import App from 'components/App'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
