import React, { useState } from 'react'
import { createContext } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false) 
    
    const openProductModal = () => setisProductDetailOpen(true)
    const closeProductModal = () => setisProductDetailOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count, setCount, openProductModal, closeProductModal, isProductDetailOpen
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )

}
