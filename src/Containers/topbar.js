import React, {Component} from "react";
import './topbar.css';
import logopic from '../OCRheader.png'



class TopBar extends Component{

    render() {
        return (
            <div className='topbarz'>
                <div className='left'>

                </div>
                <div className='right'>
                    <img className='logopic' src={logopic} alt='logo'/>
                    <p className='text'>witaj</p>
                    <p className='textWithBorder'>w świecie</p>
                    <p className='text'>OCR</p>
                </div>
            </div>

        )

    }


}
export default TopBar;

