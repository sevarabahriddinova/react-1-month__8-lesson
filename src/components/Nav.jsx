import { CgSearch } from "react-icons/cg"; 
import { AiFillBell } from "react-icons/ai"; 
import { AiTwotoneSetting } from "react-icons/ai"; 
import { AiFillHeart } from "react-icons/ai"; 
import React from 'react'
import Container from "./container/Container";
import avatar from "../images/avatar (2).png"

const Nav = () => {
  return (
    <div className="bg-white shadow-lg fixed top-0 z-30 w-full p-4">
        <Container>
        <div className="nav__wrapper flex justify-between">
            <div className="nav flex gap-[64px] items-center">
                    <h2 className="text-blue-600/100 font-bold text-3xl">MORENT</h2>
                    <div className="border flex gap-[20px] items-center p-2  w-96  rounded-[70px]" >
                        <CgSearch className="w-[]492px" />
                        <input className="outline-none" type="text" placeholder="Search something here"/>
                    </div>
                </div>   

                <div className="nav__list flex gap-[20px] items-center">
                        <AiFillHeart className="text-gray-600 w-11 h-11 border rounded-[90px] p-2" />
                        <AiFillBell className="text-gray-600 w-11 h-11 border rounded-[90px] p-2" />
                        <AiTwotoneSetting  className="text-gray-600 w-11 h-11 border rounded-[90px] p-2"/>
                        <img className="w-11 h-11 object-cover" src={avatar} alt="" />            
                </div>
        </div>
        </Container>
    </div>
  )
}
export default Nav

