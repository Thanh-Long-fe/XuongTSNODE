// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/Data.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <DataProvider>
    <App />
    </DataProvider>
    </BrowserRouter>

)
