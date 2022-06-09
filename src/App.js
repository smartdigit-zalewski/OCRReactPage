import './App.css';
import React, {Component} from "react";
import TopBar from "./Containers/topbar";
import {navButtonsElements} from "./Components/navButtonsElements";
import Navbar from "./Components/navbar";
import {FiFacebook, FiInstagram, FiYoutube} from "react-icons/fi";
import img from "./img/2600035.jpg";
import UserBar from "./Containers/RegistryBar";
import 'tachyons'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nav:false,
            button: 0,
            logStatus: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.pageYOffset >= 85){
            if(!this.state.nav){
                this.setState({ nav: true });

            }
        }else{
            if(this.state.nav){
                this.setState({ nav: false });
            }
        }
    }

    setLoginStatus = (isLogged) => {
        this.setState({logStatus: isLogged})
    }

    handleNavBarEvents = (buttonId) => {
        this.setState({button: buttonId});
        console.log(buttonId, "Logins Status: ", this.state.logStatus)
    }

    render() {
        let scroll = (this.state.nav || this.state.button !==0) ? 'scroll' : 'header';
    return (

        <div className='App'>
            <div>
                {(this.state.nav === true || this.state.button === 0) ? (
                    <SocialMediaIconsBar/>
                ) : null}
            </div>
            <div className={scroll}>
                <Navbar  buttons={navButtonsElements} handleEvent={this.handleNavBarEvents}/>
            </div>
            <div className='topbar'>
                {this.state.button === 0 && <TopBar/>}
                {this.state.button === 8 && <UserBar currentStatus={this.state.logStatus} logStatus={this.setLoginStatus}/>}
            </div>

            {this.state.button === 0 && <Middlebar/>}
            {this.state.button === 0 && <BottomBar/>}
            {this.state.button === 0 && <Footer/>}





        </div>
    );
  }
}
export default App;

const Middlebar = () => {
    return (

            <div className='middlebar'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <img src={img} alt='middlebarimg'/>


            </div>

    )
}

const BottomBar = () => {
    return (
        <div className='bottombar'>

        </div>

    )

}

const SocialMediaIconsBar = () => {

    return (
        <div className='socialMediaIconsBar'>
            <a href={'https://www.instagram.com/ocr_polska/'} target="_blank" rel='noreferrer'><FiInstagram/></a>
            <a href={'https://www.facebook.com/OCR.Polska/'} target="_blank" rel='noreferrer'><FiFacebook/></a>
            <a href={'https://www.youtube.com/channel/UCNlBTpW5KxAnkq4tesaXG7A/f'} target="_blank" rel='noreferrer'><FiYoutube/></a>


        </div>
    )
}
const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright (c) 2021 SmartDigit Michał Zalewski</p>
        </div>
    )

}

