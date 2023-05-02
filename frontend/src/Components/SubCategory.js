import React, { Fragment, useState } from 'react'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { ServicesContext } from '../Context/ServiceContext';


const SubCategory = () => {

    const navigate = useNavigate()
   // const {data} = useContext(ServicesContext)
   const [data,setData] = useState([1,2,3,4])

    const handleClick = (service) => {
    }

    const backClick = () => {
        localStorage.removeItem('data')
        navigate('/', {replace: true})
    }
 
    return (
        <Fragment>
            <div className="container">
            <div style={ {textAlign: "center" } } >
                <div className='sub'>
                    {data.map((sub,index) => {
                        return (
                            <>
                                <div key={index}  className='sub_card' >
                                   <h2 style={{ textTransform: "capitalize" }} >{sub}</h2>
                                </div>
                            </>
                        )
                    })}
                </div>
                <button className='sub_btn' onClick={backClick}>GO BACK</button>
            </div>
            </div>
        </Fragment>
      )
}

export default SubCategory
