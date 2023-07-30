import React from "react";
import { PiCaretDownBold } from 'react-icons/pi';
import { AiOutlineBell } from 'react-icons/ai';
import '../style/componentcss/Header.css';
// import refresh from '../image/refresh-circle.png';
import { RiRefreshFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';

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
                    <div className="Header_Maininput">
                        <span className="Header_inputlogo"><CiSearch /></span>
                        <input type='text' className="Header_input" placeholder="Search" />
                    </div>
                    <div className="Header_Sidelogo">
                        <span className="Header_Sidefirst"><BsPeopleFill />
                            {/* <img src={people} alt='people' /> */}
                        </span>
                        <span className="Header_Sidefirst"><RiRefreshFill />
                            {/* <img src={refresh} alt='refresh' /> */}
                        </span>
                    </div>
                </div>
                <div className="Header_Center">
                    <div className="Header_inputmain">
                        <span className="Header_inputlogo"><CiSearch /></span>
                        <input type='text' className="Header_input" placeholder="Search" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;