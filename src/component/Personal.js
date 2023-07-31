import React, { useRef, useState } from 'react';
import '../style/componentcss/Personal.css';
import { Link, useNavigate } from 'react-router-dom';


function Personal() {

    const next = useNavigate();
    const show = useRef();
    const [value, setValue] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        joining: '',
        qualification: '',
        currentemployer: '',
        designation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({ ...prev, [name]: value }))
    }

    const Next_Page = (e) => {
        e.preventDefault();
        if (value.name === '' || value.email === '' || value.mobile === '' || value.joining === '' || value.dob === '' || value.joining === '' || value.qualification === '' || value.currentemployer === '' || value.designation === '') {
            console.log('empty')
            show.current.style.display = 'block';
        }
        else if (value.name !== '' || value.email !== '' || value.mobile !== '' || value.joining !== '' || value.dob !== '' || value.joining !== '' || value.qualification !== '' || value.currentemployer !== '' || value.designation !== '') {
            show.current.style.display = 'none';
            console.log(value)
            next('/Tenantsecond' ,{state: value})
        }
    }

    return (
        <>
            <div className='Personal'>
                <div>
                    <div>
                        <h2 className='details'>Personal Details</h2>
                    </div>
                    <div className='personal_data'>
                        <form onSubmit={Next_Page} >
                            <div>
                                <input type='text' name='name' onChange={handleChange} className='input' value={value.name} placeholder='Enter Full Name' />
                            </div>
                            <div>
                                <input type='email' className='input' name='email' onChange={handleChange} value={value.email} placeholder='Email Id' />
                            </div>
                            <div>
                                <div>
                                    <input type='text' className='inputed' name='mobile' onChange={handleChange} value={value.mobile} placeholder='Mobile Number' />
                                    <input type='date' id='DOB' name='dob' onChange={handleChange} value={value.dob} className='inputeds input_width' placeholder='DOB' />
                                </div>
                                <div style={{ display: 'inline' }}>
                                    <input type='date' className='inputed' name='joining' onChange={handleChange} value={value.joining} placeholder='Joining Date' />
                                    <input type='text' className='inputeds input_width' name='qualification' onChange={handleChange} value={value.qualification} placeholder='Qualification' />
                                </div>
                                <div>
                                    <input type='number' className='inputed' name='currentemployer' onChange={handleChange} value={value.currentemployer} placeholder='Current Employer' />
                                    <input type='text' className='inputeds input_width' name='designation' onChange={handleChange} value={value.designation} placeholder='Designation' />
                                </div>
                            </div>
                            <div>
                                <h3 className='show' ref={show}>  **Fill the given input fields</h3>
                            </div>
                            {/* <Link to='/Tenantsecond' className='Tenantfirst_but'> */}
                            <button className='input_submit' type='submit' value='Submit'>Next</button>
                            {/* </Link> */}
                            {/* <input type='submit' value='Next' className='input_submit' /> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal;