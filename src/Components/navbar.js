import React from "react";
import './navbar.css';
import NavbarButton from "./navbarButton";
import logo from './logo.png';
import DropdownMenu from "./dropdownMenu";


const Navbar = ({buttons, handleEvent}) => {


    function handleClick(id) {
        handleEvent(id);

    }

    const navButtons = buttons.map((button, i) => {

        if (buttons[i].hasChildren) {
            const buttonWithChildren = buttons[i];
            return(
                <div className='buttonBorder'>
                    <DropdownMenu handleEvents={handleEvent} buttons={buttonWithChildren}/>
                </div>
            )
        } else {

            return (
                <div onClick={() => handleClick(buttons[i].id)} className='buttonBorder'>
                    <NavbarButton key={i}
                                  name={buttons[i].buttonName}/>

                </div>
            )
        }
    });


    return (
        <div className='navbar'>
            <img onClick={()=> handleClick(0)} className='logo' src={logo} alt={'OCR LOGO'}/>
            {navButtons}
        </div>
    );

};
export default Navbar;