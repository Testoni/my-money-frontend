import React, { Component } from 'react'

import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Version 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard