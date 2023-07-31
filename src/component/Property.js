import React, {useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/componentcss/Property.css'

function Property(state) {

    const change = useNavigate();
    const show = useRef();
    const [num, setNum] = useState({
        // states: state,
        no: '',
        street: '',
        city: '',
        province: '',
        country: '',
        postalcode: '',
    });

    const changehandle = (e) => {
        const { name, value } = e.target;
        setNum((prev) => ({ ...prev, [name]: value }))
    }

    const Next = (e) => {
        e.preventDefault();
        if (num.no === '' || num.street === '' || num.city === '' || num.province === '' || num.country === '' || num.postalcode === '') {
            console.log('empty')
            show.current.style.display = 'block';
        }
        else if (num.no !== '' || num.street !== '' || num.city !== '' || num.province !== '' || num.country !== '' || num.postalcode !== '') {
            show.current.style.display = 'none';
            console.log(num)
            console.log(state);
            change('/Tenantthird');
        }
    }

    return (
        <>
            <div className='Property'>
                <div>
                    <h2 className='Property_Assign'>Assign Property</h2>
                </div>
                <div className='Property_Data'>
                    <form>
                        <div>
                            {/* <label for='property'>Property Name</label> */}
                            <select className='Property_Option' id='property' name='property'>
                                <option value='property1'>Property1</option>
                                <option value='property2'>Property2</option>
                                <option value='property3'>Property3</option>
                                <option value='property4'>Property4</option>
                            </select>
                        </div>
                        <div>
                            <div className='Property_num'>
                                <div className='Property_box'>
                                    <input type='text' className='Property_No' name='no' value={num.no} onChange={changehandle} placeholder='No.' />
                                </div>
                                <div className='Property_box'>
                                    <input type='text' className='Property_Street' name='street' value={num.street} onChange={changehandle} placeholder='Street Name' />
                                </div>
                            </div>
                            <div className='Property_cities'>
                                <div className='Property_box'>
                                    <input type='text' className='Property_City' name='city' value={num.city} onChange={changehandle} placeholder='City' />
                                </div>
                                <div className='Property_box'>
                                    <input type='text' className='Property_Province' name='province' value={num.province} onChange={changehandle} placeholder='Province' />
                                </div>
                            </div>
                            <div className='Property_count'>
                                <div className='Property_box'>
                                    <input type='text' className='Property_Country' name='country' value={num.country} onChange={changehandle} placeholder='Country' />
                                </div>
                                <div className='Property_box'>
                                    <input type='text' className='Property_Code' name='postalcode' value={num.postalcode} onChange={changehandle} placeholder='Postal code' />
                                </div>
                            </div>
                            <div>
                                <h3 className='show' ref={show}>  **Fill the given input fields</h3>
                            </div>
                            <div>
                                {/* <Link to='/Tenantthird'> */}
                                <button onClick={Next} className='Property_Button'>Next</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Property;