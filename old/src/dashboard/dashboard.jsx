import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import ValueBox from '../commom/widget/valueBox'
import Row from '../commom/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debit } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 1.0' />
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

const mapStateToProps = state => ({
    summary: state.dashboard.summary
})

const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)