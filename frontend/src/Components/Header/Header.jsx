import React,{useState} from 'react'
import "./Header.css"
import logo from "../../assets/WITH ART-10 2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faUser,faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faHeart } from '@fortawesome/free-regular-svg-icons';
import Searchbar from "../Header/Searchbar"
const Header = () => {
  const [search,setSearch]= useState(false);

  const ToggleSearch = () =>{
    setSearch(!search)
  }
 
  return (

    <div className='header'>
    <div className='withartlogo'>
    <img src={logo} className='headerlogo' alt="Logo"/>
    </div>
    <ul className='navbars'>
    <li>Home</li>
    <li>Shop</li>
    <li>About</li>
    <li>Contact</li>
    </ul>

    {search && <Searchbar />}

    <div className='headerlink'>
    <FontAwesomeIcon  icon={faMagnifyingGlass} onClick={ToggleSearch}/>
    <FontAwesomeIcon icon={faUser}/>
    <FontAwesomeIcon icon={faHeart}/>
    <FontAwesomeIcon icon={faCartShopping} />

    </div>
   

    </div>
  )
}

export default Header