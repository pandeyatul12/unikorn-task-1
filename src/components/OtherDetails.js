import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

function OtherDetails(){
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

    function handleNext(){
        history.push("/Preview");
    }

    React.useEffect(()=> {
        localStorage.setItem('details',JSON.stringify(state))
    },[state]);

    return (
        <div className="main--container">
            <div className="main--nav">
                <button className="button-1" onClick={handleBack}>1</button>
                <span className="nav-button-gap">-</span>
                <button className="button-2" style={{backgroundColor:"Blue", color:'white'}}>2</button>
                <span className="nav-button-gap">-</span>
                <button className="button-3" onClick={handleNext}>3</button>
                <div className="other-details">More Details</div>
                <form className="other-details-form">
                    <label for="gender">Gender</label>
                    <input 
                        type='gender'
                        name="gender" 
                        placeholder='xyz'
                        className="other-details-gender" 
                        value={state.gender}
                        onChange={onChange}
                        ></input>
                    <label for="address">Address</label>
                        <textarea 
                        className="address"
                        type='address' 
                        placeholder='i.e. xyz'
                        name="address"
                        onChange={onChange}
                        value={state.address}
                        />
                        </form>
                    <button 
                        className="other-details-back-btn btn"
                        onClick={handleBack}
                        >Back</button>
                    <button 
                        className="other-details-next-btn btn"
                       onClick={handleNext}
                        >Next</button>    
            </div>
        </div>
    )
}
export default OtherDetails