import React from 'react';
import '../style/componentcss/Sidebar.css';
import logoimg from '../image/Vector.png';
import logo15 from '../image/Group 15.png';
import logo16 from '../image/Frame 33.png';
import logo17 from '../image/Frame 17.png';
import logo18 from '../image/Frame 17 (1).png';
import logo19 from '../image/Frame 33 (1).png';
import logo20 from '../image/Frame 29.png';
import logo21 from '../image/Frame 31.png';
import logo22 from '../image/Frame 17 (2).png';
import logo23 from '../image/Group 32.png';
import logo24 from '../image/Group 33.png';
import logo25 from '../image/Frame 34.png';


function Sidebar() {
    return (
        <>
            <div className='Sidebar'>
                <div className='Side_Parentimg'>
                    <span className='Side_Image'>
                        <img className='Side_img' src={logoimg} alt='img' />
                    </span>
                    <span className='Side_logoname'>Can<span className='Side_block'>estate</span></span>
                </div>
                <div className='Side_Icon'>
                    <span className='Side_Span'>
                        <img className='Side_widthed' src={logo15} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_width' src={logo16} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_width' src={logo17} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_width' src={logo18} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_width' src={logo19} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_width' src={logo20} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_width' src={logo21} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_width' src={logo22} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_widthed' src={logo23} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_widthed' src={logo24} alt='box' />
                    </span>
                    <span className='Side_Span'>
                        <img className='Side_widtheds' src={logo25} alt='box' />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Sidebar;