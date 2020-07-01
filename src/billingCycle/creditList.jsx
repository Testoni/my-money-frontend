import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert } from 'redux-form'
import Grid from '../commom/layout/grid'
import Input from '../commom/form/input'

class CreditList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', 'credits', index, item)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input} placeholder='Informe o nome' /></td>
                <td><Field name={`credits[${index}].value`} component={Input} placeholder='Informe o valor' /></td>
                <td>
                    <button type='buton' className='btn btn-success' onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus' />
                    </button>
                    <button type='buton' className='btn btn-warning' onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone' />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid col={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert }, dispatch)

export default connect(null, mapDispatchToProps)(CreditList)