import React from 'react';
import '../style/pagecss/Tenantthird.css';
import Bank from '../component/Bank';
import Photo from '../component/Photo';
import Level from '../component/Level';
import level3 from '../image/Frame 34756 (2).png';

function Tenantthird() {
    return (
        <>
            <Level level_Src={level3} />
        <div className='third_box'>
                <div className='bank'>
                    <Bank />
                </div>
                <div className='photo'>
                    <Photo Photo_name={'Edit'} Photo_docu={'Edit'} Photo_upload={'Edit'} />
                </div>
            </div>
        </>
    )
}

export default Tenantthird;