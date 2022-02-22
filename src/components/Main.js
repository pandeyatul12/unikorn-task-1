import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

export default function Main(){
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

    function handleNext(){
        history.push("/OtherDetails");
    }

    function button3(){
        history.push("/Preview")
    }

    React.useEffect(()=> {
        localStorage.setItem('details',JSON.stringify(state))
    },[state]);

    return (
        <div className="main--container">
            <div className="main--nav">
                <button className="button-1" style={{backgroundColor:"Blue", color:'white'}}>1</button>
                <span className="nav-button-gap">-</span>
                <button className="button-2" onClick={handleNext}>2</button>
                <span className="nav-button-gap">-</span>
                <button className="button-3" onClick={button3}>3</button>
                <div className="details">Details</div>
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
                        </form>
                    <button 
                        className="main-next-btn btn"
                        onClick={handleNext}
                        >Next</button>
            </div>
        </div>
    )
}