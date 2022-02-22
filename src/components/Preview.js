import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

export default function Preview(){
    const[state, setState] = useState(storedState)

    function onChange(event){
        setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        })
        )
    }

    function storedState(){
        const storedValues = localStorage.getItem('details')
        if(!storedValues) return{
            email:'',
            name:'',
            phone:''
        }

        return JSON.parse(storedValues)
    } 

    let history = useHistory();
          
    function handleBack(){
        history.goBack()
    }

    function handleSubmit(){
        localStorage.clear('details');
        history.push("/");
    }

    function button1(){
        history.push("/")
    }

    React.useEffect(()=> {
        localStorage.setItem('details',JSON.stringify(state))
    },[state]);

    return (
        <div className="main--container">
            <div className="main--nav">
                <button className="button-1" onClick={button1}>1</button>
                <span className="nav-button-gap">-</span>
                <button className="button-2" onClick={handleBack}>2</button>
                <span className="nav-button-gap">-</span>
                <button className="button-3" style={{backgroundColor:"Blue", color:'white'}}>3</button>
                <div className="details">Preview</div>
                <form className="details-form">
                    <label for="email">Email</label>
                    <input 
                        type='email'
                        name="email" 
                        placeholder='i.e. xyz@gmail.com' 
                        value={state.email}
                        onChange={onChange}
                        ></input>
                    <label for="name">Name</label>
                    <input 
                        type='text' 
                        placeholder='i.e. xyz'
                        name="name"
                        onChange={onChange}
                        value={state.name} 
                        ></input>
                    <label for="telNo">Phone</label>
                    <input 
                        type='tel' 
                        placeholder='i.e. xyz'
                        name="phone"
                        className="phone-no"
                        onChange={onChange}
                        value={state.phone} 
                        ></input>
                        <label for="gender">Gender</label>
                    <input 
                        type='gender'
                        name="gender" 
                        placeholder='xyz' 
                        className="gender"
                        value={state.gender}
                        onChange={onChange}
                        ></input>
                    <label for="address">Address</label>
                        <textarea 
                        className="preview-address"
                        type='address' 
                        placeholder='i.e. xyz'
                        name="address"
                        onChange={onChange}
                        value={state.address}
                        />
                        </form>
                    <button 
                        className="preview-back-btn btn"
                        onClick={handleBack}
                        >Back</button>
                    <button 
                        className="preview-submit-btn btn"
                        onClick={handleSubmit}
                        >Submit</button>
            </div>
        </div>
    )
}