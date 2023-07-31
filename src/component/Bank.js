import React from 'react'
import '../style/componentcss/Bank.css';
import { useNavigate } from 'react-router-dom';

function Bank() {

    const again = useNavigate()
    const move = () => {
        again('/');
    }

    return (
        <>
            <div className='Bank'>
                <div>
                    <h2 className='Bank_Detail'>Bank Details</h2>
                </div>
                <div className='Bank_Data Datas'>
                    <div className='Bank_Box'>
                        <input type='text' className='Bank_Accname' placeholder='Account Holder Name' />
                    </div>
                    <div className='Bank_Box'>
                        <input type='text' className='Bank_Acctype' placeholder='Account Type' />
                    </div>
                </div>
                <div className='Bank_Data'>
                    <div className='Bank_Box'>
                        <input type='text' className='Bank_Name' placeholder='Bank Name' />
                    </div>
                    <div className='Bank_Box'>
                        <input type='text' className='Bank_Number' placeholder='Bank Number' />
                    </div>
                </div>
                <div className='Bank_Data'>
                    <div className='Bank_Box'>
                        <input type='text' className='Bank_Transit' placeholder='Transit Number' />
                    </div>
                    <div className='Bank_Box'>
                        <input type='text' className='Bank_Accnum' placeholder='Account Number' />
                    </div>
                </div>
                <div className='Bank_radio' >
                    <div>
                        <input type='radio' id='Cash' name='pay' value='Cash' />
                        <label for='Cash'>Cash</label>
                    </div>
                    <div>
                        <input type='radio' id='Card' name='pay' value='Card' />
                        <label for='Cash'>Card</label>
                    </div>
                    <div>
                        <input type='radio' id='Online' name='pay' value='Online' />
                        <label for='Online'>Online</label>
                    </div>
                </div>
                <div className='Bank_Final'>
                    <div className='Bank_Box'>
                        <button className='Bank_Skip'>Skip</button>
                    </div>
                    <div className='Bank_Box'>
                        <button onClick={move} className='Bank_Save'>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bank;