import React from 'react'
import x from '../images/icon-remove.svg'
import '../styles/fil.css'
export default function Filter({filter, setFilter}) {

    const removeCat = (content) => {
        const newFil = [...filter].filter(v => v !== content)
        setFilter(newFil)
    }
    return (
      

        filter.length !== 0 &&    
        <div className = 'filter'>
            <div className="catHolder">
            {filter.map(item =>  <label>{item}<button onClick = {removeCat.bind(this, item)}><img src={x} alt="" /></button></label>)}
            </div>
         
           <a href="#" onClick = {() => setFilter([])}>Clear</a>
        </div>
    
    )
}
