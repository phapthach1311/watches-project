import React, {useEffect, useReducer, useContext} from 'react'
import items from './Data/data';

const AppContext = React.createContext();
const initialState =  {
    loading: false,
    items: [],
    total: 0,
    amount: 0
}

const reducer = (state, action)=>{
    if(action.type === "ADD"){
        let flag = false;
        let cartItems = state.items.map(item => {
            if(item.id === action.payload){
                flag = true;
                return {...item, amount: item.amount + action.quantity}
            }
            return item;
        })

        if(flag === true){
            return {...state, items: cartItems}
        } else{
            let newCartItems = items.filter(item => item.id === action.payload);
            newCartItems[0].amount = action.quantity;
            return {...state, items: [...state.items, ...newCartItems]}
        }
        
    }

    if(action.type === "increase"){
        let cartItems = state.items.map(item => {
            if(item.id === action.payload){
                return {...item, amount: item.amount + 1}
            }
            return item;
        })
        return {...state, items: cartItems}
    }

    if(action.type === "decrease"){
        let newCartItems = state.items.map(item => {
            if(item.id === action.payload){
                return {...item, amount: item.amount - 1}
            }
            return item
        }).filter(item => item.amount !== 0);
        return {...state, items: newCartItems}
    }

    if(action.type === "REMOVE"){
        let newCartItems = state.items.filter(item => item.id !== action.payload)
        return {...state, items: newCartItems}
    }

    if(action.type === "GET_TOTAL"){
        let {amount, total} = state.items.reduce((a, c) => {
            a.amount += c.amount;
            a.total += c.amount * c.price;
            return a
        },{amount: 0, total: 0})
        return {...state, amount, total}
    }
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const add = (id, amount) => {
        dispatch({type: 'ADD', payload: id, quantity: amount})
    }

    const remove = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }

    const increase = (id) => {
        dispatch({type: "increase", payload:id})
    }

    const decrease = (id) => {
        dispatch({type: "decrease", payload:id})
    }

    const getTotal = () => {
        dispatch({type: "GET_TOTAL"})
    }

    useEffect(() => {
        getTotal();
    }, [state.items])
    
    return (
        <AppContext.Provider value={{...state, add, remove, increase, decrease}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider,AppContext}
