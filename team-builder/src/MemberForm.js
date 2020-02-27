import React, { useState } from 'react';

const NewMemberForm = (props) => {
    console.log(props)
    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handlechange = event => {
        setNewMember({ ...newMember, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(newMember)
        setNewMember({name: '', email: '', role: ''})

    }
return (
        <form onSubmit = {submitForm}>
            <label htmlFor="name">Name</label>
            <input   onChange={handlechange} id="name"name='name' input="text"/>
            <label htmlFor="email">Email</label>
            <input  onChange={handlechange} name="email" id='email' type="text"/>
            <label htmlFor="role">Role</label>
            <input onChange={handlechange} name="role" id="role" type="text"/>
            <button type="submit"> Add New Member</button>
        </form>
    )
}
export default NewMemberForm;