import { createContext, useContext } from 'react'

const AppContext = createContext()

export const ContextProvider = () => {
    let sharedState = {}
    
    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}