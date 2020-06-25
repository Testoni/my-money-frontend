import '../commom/template/dependencies'
import react from 'React'

import Header from '../commom/template/header'
import Sidebar from '../commom/template/siderbar'
import Footer from '../commom/template/footer'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            <h1>Conteudo</h1>
        </div>
        <Footer />
    </div>
)