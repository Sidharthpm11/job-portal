import React, { Component, useContext, useState } from "react";

const testContext = React.createContext(true);

export const useAppcontext = ()=> ( useContext(testContext))

export default function AppContext(props) {
    const initialState ={
        title: '',
        setTitle: (title)=>{
            setstate({...state, title: title})
        }
    }
    const [state, setstate] = useState(initialState)
    return (
        <testContext.Provider value={state}>
            {props.children}
        </testContext.Provider>
    )
}

export const withContext = (OrgComponent) => {
    class newComponent extends Component {
        render() {
            return (
                <testContext.Consumer>
                    {
                        (isLoggedin)=>(
                            <OrgComponent {...this.props} context={isLoggedin} />
                        )
                    }
                </testContext.Consumer>
            )
        }
    }
    return newComponent
}


