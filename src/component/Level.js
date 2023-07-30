import React from "react";
import '../style/componentcss/Level.css';
import level from '../image/Frame 34756.png';

function Level() {
    return (
        <>
            <div className="Level">
                <div className="Level_Body">
                    <img className='Level_img' src={level} alt='level' />
                </div>
            </div>
        </>
    )
}

export default Level;