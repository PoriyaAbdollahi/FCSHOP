import './index.css'
import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import {Provider} from 'react-redux'
import store from './store'
reactDom.render( <Provider store = {store}><App/></Provider>>, document.getElementById('root') )