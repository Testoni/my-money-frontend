import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import ValueBox from '../commom/widget/valueBox'
import Row from '../commom/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debit: 0}
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debit } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Todal de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debit}`} text='Todal de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debit}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

