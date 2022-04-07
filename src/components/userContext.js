import React from 'react'

const UserContext = React.createContext()
const RoleContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const RoleProvider = RoleContext.Provider
const RoleConsumer = RoleContext.Consumer

export { UserProvider, UserConsumer, RoleProvider, RoleConsumer }
export default UserContext