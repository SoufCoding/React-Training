import { createContext, useReducer } from "react";

export const ThemeContext = createContext

const INITIAL-STATE = {DarkMode: false};

const themeReducer = (state, action) =>{
    switch(action, type){
        case "Toggle":
            return{DarkMode: !state.DarkMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return(
        <ThemeProvider  value={(state, dispatch)}>
        {props.children}
        </ThemeProvider>
    )
    
}


