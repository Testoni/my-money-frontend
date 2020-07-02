import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../commom/layout/grid'
import Input from '../commom/form/input'
import If from '../commom/operator/if'

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input} placeholder='Informe o nome' /></td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input} placeholder='Informe o valor' /></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${this.props.field}[${index}].status`} component={Input} placeholder='Informe o Status' /></td>
                </If>
                <td>
                    <button type='buton' className='btn btn-success' onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus' />
                    </button>
                    <button type='buton' className='btn btn-warning' onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone' />
                    </button>
                    <button type='buton' className='btn btn-danger' onClick={() => this.remove(index)}>
                        <i className='fa fa-trash-o' />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid col={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
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

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(ItemList)