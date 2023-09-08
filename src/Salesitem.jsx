import React from 'react';
import { sales } from './data';
import './Salesitem.css';
import parse from 'html-react-parser';


const Salesitem = () => {
  return (
    <>
    
    {sales.map(({id , name , price , fee , desc} , {index}) =>{
        
        return (
        <div key = {index} className='box'>
              <div className={id === 1 ? 'color' : ''}></div>
            
                <h3 className="title">{parse(name)}</h3>

                <div className="price-container">
                    <p className='start'>Starting</p>
                    <h1 className="price"><span>₹</span>{price}</h1>
                    <p className={id ===3 ? 'fee1' : 'fee'}>{fee}</p>
                </div>

                  <p className="description">{desc}</p>

                  <div className='link'><a href='#'>Know More</a></div>
                
              
        </div>
        );

    })}
    </>
  )
}

export default Salesitem