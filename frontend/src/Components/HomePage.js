import React,{Fragment, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {ServicesContext} from '../Context/ServiceContext'

const url = 'http://localhost:7152/'

const HomePage = () => {

  const [catList,setCatList] = useState([1,2,3,4])
  const { addSubCat } = useContext(ServicesContext)

  useEffect(()=>{
    axios.get(url)
    .then((response)=>{
        addSubCat(response.data)
    }).catch((err)=>{
        console.log(err)
    })
  })
    
  return (
    <Fragment>
      <h1>Prescriptive Analysis</h1>
      <div>
        <h2 style={{marginBottom:'0px'}} >Product Category</h2>
        {catList.length!==0 ? (
            <section id="homepage">
            {catList.map((cat) => {
              return (
                <div className="service-images">
                  <button name="AC" className="imgBtn">
                    <p>{cat}</p>
                  </button>
                </div>
              );
            })}
        </section>
        ): <div />}
      </div>
    </Fragment>
  );
}

export default HomePage