import React from 'React'
import { HashRouter } from 'react-router-dom'

import Header from '../commom/template/header'
import Sidebar from '../commom/template/siderbar'
import Footer from '../commom/template/footer'
import Messages from '../commom/msg/messages'

import Routes from './routes'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <Sidebar />
                <Routes />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
)