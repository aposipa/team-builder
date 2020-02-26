import React, { useState } from "react";
import Team from "./Team"
import NewMemberForm from './MemberForm';

const MemberForm = (props) => {
    const [member, setMember] = useState([{
        name: 'Andrew',
        email: 'andrewemail',
        role: 'Developer'
    }]);
    const addNewMember = add => {
        const newMember ={
          id: Date.now(),
          name: add.name,
          email: add.email,
          role: add.role
        }
        setMember([...member, newMember])
    }
return (
    <div>
        <Team member={member}/>
        <NewMemberForm addNewMember={addNewMember}/>
    </div>
)

}
export default MemberForm;