import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = ()=>{
        setCurrentUser(
            {
                id: 1,
                name: 'Doraemon',
                profilePic: 'data:image/webp;base64,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'
            });
    }


    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(currentUser))
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}