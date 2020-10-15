import React from 'react'

const UserContext = React.createContext("welcome sateesh using context")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export{UserProvider,UserConsumer}