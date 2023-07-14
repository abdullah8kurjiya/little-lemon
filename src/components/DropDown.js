import { useState } from "react"
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import {LiaGlassCheersSolid} from 'react-icons/lia'
export function DropDown({selected,setSelected,options,grid=false,defaultstate="Choose One",lefticon}){
    const [isActive,setActive]=useState(false);
    
    return <div className="dropdown">
        <div 
        className={options.includes(selected) ? "dropdown-btn-sel" : "dropdown-btn"}
         onClick={e=>setActive(!isActive)}>
        {lefticon}  
        {options.includes(selected) ? selected : defaultstate}
        <IoIosArrowDropdownCircle className="aftericon"/></div>
        { isActive && (
        <div className={grid ? "dropdown-content-grid" : "dropdown-content"}>
            {options.map(option=>(
            <div key={option} className="dropdown-item" onClick={e=>{setSelected(option);
                setActive(false)}}>
                {option}
            </div>
            ))}
        </div>)}
    </div>
}