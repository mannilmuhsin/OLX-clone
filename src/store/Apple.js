import { createContext, useState } from "react";


export const Apple = createContext(10)
export const MyContext = createContext('Default Value');

export const CarContext = createContext(null)

export default function Car({children}){

 const [model, setModel] = useState('maruthi')
 const [price, setPrice] = useState(75000)

 return (
    <>
        <CarContext.Provider value={{md:model, pr:price, smd:setModel, sp: setPrice}}>
            {children}
        </CarContext.Provider>
    </>
 )



}

