import React, { Component } from 'react'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'

class BillinbCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    Ciclos de Pagamentos
                </Content>
            </div>
        )
    }
}

export default BillinbCycle