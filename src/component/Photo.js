import React from 'react';
import '../style/componentcss/Photo.css';
import { AiOutlineUpload } from 'react-icons/ai';

function Photo({Photo_name, Photo_docu, Photo_upload}) {
    return (
        <>
            <div>
                <div>
                    <div className='photo_main'>
                        <h2 className='Upload'>{Photo_name} Photo</h2>
                        <input type='file' id='photoed' />
                        <label for='photoed' className='photoed'></label>
                    </div>
                    <div className='document'>
                        <h2 className='Upload'>{Photo_docu} Document</h2>
                        <div>
                            <input type='file' id='Identity' />
                            <label for='Identity' className='Identity'><i><AiOutlineUpload /></i>Identity Proof</label>
                        </div>
                        <input type='file' id='Certificate' />
                        <label for='Certificate' className='Certificate'><i><AiOutlineUpload /></i>Citizenship Certificate</label>
                    </div>
                </div>
                <div>
                    <button className='submit' type='submit' value='Submit'>{Photo_upload}</button>
                </div>
            </div>
        </>
    )
}

export default Photo;