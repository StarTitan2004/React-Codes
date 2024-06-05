import React from 'react' //core library that is used to take references
import ReactDOM from 'react-dom/client' //implementation of React on web, just like react-native is an implementation of react on mobile apps

import App from './App.jsx'
import A from './A.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  
    <A/>
    {/* here app is a function that returns a html */}
  </React.StrictMode>,
)
