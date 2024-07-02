import React, { useState } from 'react'

function Form() {
    //Using Multiple States

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    //Multiple States into one state 

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    // const nameHandler = (e) => {
    //     // console.log(e.target.value)
    //     setName(e.target.value)
    // }
    // const emailHandler = (e) => {
    //     // console.log(e.target.value)
    //     setEmail(e.target.value)
    // }
    // const passwordHandler = (e) => {
    //     // console.log(e.target.value)
    //     setPassword(e.target.value)
    // }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <form onSubmit={submitHandler}>
            <label>
                Name:
                <input type='text' value={formData.name} name='name' onChange={handleInput} />
            </label>
            <br />
            <label>
                Email:
                <input type='email' value={formData.email} name='email' onChange={handleInput} />
            </label>
            <br />
            <label>
                Password:
                <input type='password' value={formData.password} name='password' onChange={handleInput} />
            </label>
            <br />
            <input type='submit' />
        </form>
    )
}

export default Form
