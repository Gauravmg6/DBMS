import React, { createContext, useState } from 'react';

export const ServicesContext = createContext();

const ServicesContextProvider = ({children}) => {

    const [subcat,setSubCat] = useState([])
    const [services,setServices] = useState([])
    const [data,setData] = useState('')

    const addSubCat = (subcat) => {
        setSubCat(subcat)
    }
  
    const addServices = (service) => {
      console.log(service)
      setServices(service)
    }
  
    const addData = (data1) => {
      setData(data1)
    }
  
    const delData = () =>{
      setData('')
    }
  
    const values = {data,services,subcat,addServices,delData,addData,addSubCat}
  
    return (
      <ServicesContext.Provider value={values}>
        { children }
      </ServicesContext.Provider>
    );
  }
  
  export default ServicesContextProvider;