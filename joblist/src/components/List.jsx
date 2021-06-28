import React, { useEffect, useState } from 'react'
import Element from './Element'
import data from '../info/data.json'
import '../styles/element.css'
export default function List({filter, setFilter}) {

    const [list, setList] = useState(data)
 
    useEffect(() => {
        const elementFilter =  [...data].filter(item => [...item.languages.flat(Infinity), ...item.tools.flat(Infinity), item.level, item.role].some(v => filter.includes(v))) 
        if(filter.length === 0) return setList(data)
     
   
        setList(elementFilter)
    
    }, [filter])
    return (
        <div className = 'list'>
            {list && list.map(item => <Element filter = {filter} setFilter = {setFilter}  element = {item}/>)}

        </div>
    )
}
