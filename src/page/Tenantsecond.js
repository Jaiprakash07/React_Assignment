import React from 'react';
import '../style/pagecss/Tenantsecond.css';
import Property from '../component/Property';
import Photo from '../component/Photo';
import Level from '../component/Level';
import level2 from '../image/Frame 34756 (1).png';

function Tenantsecond() {
    return (
        <>
            <Level level_Src={level2} />
            <div className='second_box'>
                <div className='property'>
                    <Property />
                </div>
                <div className='photo'>
                    <Photo Photo_name={'Edit'} Photo_docu={'Edit'} Photo_upload={'Edit'} />
                </div>
            </div>
        </>
    )
}

export default Tenantsecond;