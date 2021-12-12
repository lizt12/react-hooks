import React, { createContext, useReducer } from "react";

export const CountContext = createContext({});

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

const reduce = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}

export const Count = (props) => {

    const [count, dispatch] = useReducer(reduce, 0);

    return (
        <CountContext.Provider value={{ count, dispatch: dispatch }}>
            {props.children}
        </CountContext.Provider>
    )
}