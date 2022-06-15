import {createContext, useState} from "react";

export const AllContext = createContext()




const AllProvider = ({ children }) => {
    const [steps, setSteps] = useState(1)
    const [direction, setDirection] = useState({
        add: 'column',
        team: 'column-reverse',
        avatar: 'column-reverse'
      })

    return (
        <AllContext.Provider value={{ steps, setSteps, direction,  setDirection}}>
            {children}
        </AllContext.Provider>
    )
}

export default AllProvider;