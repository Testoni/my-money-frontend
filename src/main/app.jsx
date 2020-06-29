import '../commom/template/dependencies'
import react from 'React'

import Header from '../commom/template/header'
import Sidebar from '../commom/template/siderbar'
import Footer from '../commom/template/footer'
import Routes from './routes'
import Messages from '../commom/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)