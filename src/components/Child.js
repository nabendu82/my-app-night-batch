import React, { Component } from 'react'
import { RoleConsumer, UserConsumer } from './userContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <RoleConsumer>
                            {role => {
                                return (
                                    <div>
                                        <h1>User - {user}</h1>
                                        <h1>Role - {role}</h1>
                                    </div>
                                )
                            }}
                        </RoleConsumer>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child
