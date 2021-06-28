import React from 'react'
import '../styles/element.css'
import img1 from '../images/photosnap.svg'
import img2 from '../images/manage.svg'
import img3 from '../images/account.svg'
import img4 from '../images/myhome.svg'
import img5 from '../images/loop-studios.svg'
import img6 from '../images/faceit.svg'
import img7 from '../images/shortly.svg'
import img8 from '../images/insure.svg'
import img9 from '../images/eyecam-co.svg'
import img10 from '../images/the-air-filter-company.svg'


const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
export default function Element({element, filter, setFilter}) {
  

  const addFil = (content) => {
    if(filter.findIndex(item => item == content) > -1) return null
    setFilter([...filter, content])

  }

    return (
      <div className="element">
        {element.featured && <div className="featured"></div>}
        <div className="leftZone">
          <img src= {imgArr[element.id - 1]} alt="" />
          <div className="columnWrappper">
          <div className="companyAndStatus">
            <h4>{element.company}</h4>
            {element.new && <h4 className="status">new!</h4>}
            {element.featured && <h4 className="status">featured</h4>}
         

            </div>

            <h2>{element.position}</h2>

            <ul>
              <li>{element.postedAt}</li>
              <li>{element.contract}</li>
              <li>{element.location} </li>
            </ul>

          </div>
        </div>

        <div className="rightZone">
            <div className="rightWrapper">
              <ul>
                {[...element.tools, ...element.languages, element.level, element.role].map(item => <li onClick = {addFil.bind(this, item)}>{item}</li>)}
              </ul>
            </div>
        </div>
      </div>
     
    )
}
