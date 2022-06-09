import React from "react";
import NavbarButton from "./navbarButton";
import { FaCaretDown } from 'react-icons/fa';


class DropdownMenu extends React.Component {

    constructor(props) {
        const {buttons} = props;
        super(props);
        this.state = {
            isListOpen: false,
            headerTitle: buttons.buttonName,
            list: buttons.childrenButtons

        }

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu(event) {
        event.preventDefault();
        this.setState({isListOpen: true}, () =>
            document.addEventListener('mousedown', this.closeMenu)
        );

    }


    setWrapperRef(element) {
        this.wrapperRef = element;
    }


    closeMenu(event)  {
        if(!this.wrapperRef.contains(event.target)){
            this.setState({isListOpen: false},()=> document.removeEventListener('click',this.closeMenu))
        }

    }


    clickAndClose(id) {
        this.props.handleEvents(id);
        this.setState({isListOpen: false});

    }


    render() {
        const {isListOpen,headerTitle, list} = this.state;
        const {buttons} = this.props


        const dropdownButtons = list.map((button, i) =>{
             return isListOpen ? (
                <div  className='buttonBorder' onClick={() => this.clickAndClose(list[i].id)}>
                <NavbarButton key={list[i]} name={list[i].buttonName}/>
                </div>
            ) : null

        })
        return (
            <div>
                <div ref={(element) => this.setWrapperRef(element)}  className='container'>
                    <div onClick={this.openMenu} className='dropdownWrapper'>
                        <NavbarButton key={buttons.id} name={headerTitle}/>
                        <div className='icon'>
                            <FaCaretDown/>
                        </div>
                    </div>
                    <div  className='dropdown'>
                        {dropdownButtons}
                    </div>
                </div>

            </div>
        );
    }


}
export default DropdownMenu;
