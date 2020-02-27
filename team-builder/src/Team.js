import React, { useState } from 'react'
import MemberForm from './MemberList';

const Team = (props) => {
   console.log(props)
    return (
        <div>
            {props.member.map(item =>(
                <div>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Role: {item.role}</p>
                </div>
            ))}
        </div>
    )
}
export default Team;