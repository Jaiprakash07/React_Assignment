import React from 'react';
import Personal from '../component/Personal';
import Photo from '../component/Photo';
import '../style/pagecss/Tenantfirst.css'
import Level from '../component/Level';
import level1 from '../image/Frame 34756.png';

function Tenantfirst() {
    let first_box = {
        width: '85%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: 'auto',
    }

    let personal = {
        width: '60%',
        height: '450px',
        backgroundColor: '#ffff',
        borderRadius: '7px',
        boxShadow: '0 0 10px #71e4de',
    }

    let photo = {
        width: '30%',
        height: '450px',
        backgroundColor: '#ffff',
        borderRadius: '7px',
        boxShadow: '0 0 10px #71e4de',
    }
    return (
        <>
            <Level level_Src={level1} />
            <div className='first_box' style={first_box}>
                <div className='personal' style={personal}>
                    <Personal />
                </div>
                <div className='photo' style={photo}>
                    <Photo Photo_name={'Upload'} Photo_docu={'Upload'} Photo_upload={'Upload'} />
                </div>
            </div>
        </>
    )
}

export default Tenantfirst;