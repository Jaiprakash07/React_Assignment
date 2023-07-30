import React from "react";
import { PiCaretDownBold } from 'react-icons/pi';
import { AiOutlineBell } from 'react-icons/ai';
import '../style/componentcss/Header.css';
import people from '../image/Frame 34780.png';
// import refresh from '../image/refresh-circle.png';
import { RiRefreshFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';

function Header() {
    return (
        <>
            <div className="Header_Main">
                <div className="Header_Parent d-flex flex-row">
                    <div className="Header_Head ">
                        <span className="Header_Bell"><AiOutlineBell /></span>
                        <div className="Header_Circle">
                            <span className="Header_circle"></span>
                        </div>
                        <span className="Header_Hari">Hari</span>
                        <span className="Header_Caret"><PiCaretDownBold /></span>
                    </div>
                </div>
                <div className="Header_Second">
                    <div>
                        <span className="Header_Add">Add Tenants</span>
                    </div>
                    <div>
                        <input />
                    </div>
                    <div className="Header_Sidelogo">
                        <span><BsPeopleFill />
                            {/* <img src={people} alt='people' /> */}
                        </span> 
                        <span><RiRefreshFill />
                            {/* <img src={refresh} alt='refresh' /> */}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;