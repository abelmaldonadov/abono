import {createContext, useReducer} from "react";

const CartContext = createContext()

function CartContextComponent({ children }) {
    function reducer(state, action) {
        switch (action.type) {
            case 'add':
                console.log(action)
                return [...state, action.payload]
                break
            default:
                throw new Error('Type is not defined')
        }
    }
    const initialValue = []
    const [products, dispatchProducts] = useReducer(reducer, initialValue)

    return <CartContext.Provider value={{products, dispatchProducts}}>
        { children }
    </CartContext.Provider>
}

export { CartContext, CartContextComponent }