import React from "react";
import '../style/componentcss/Level.css';

function Level({level_Src}) {
    return (
        <>
            <div className="Level">
                <div className="Level_Body">
                    <img className='Level_img' src={level_Src} alt='level' />
                </div>
            </div>
        </>
    )
}

export default Level;