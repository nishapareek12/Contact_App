

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


class EditContact extends React.Component{
    constructor(props){
        super(props);
        const {id, name, email} = props.location.state.contact;
        this.state = {
            id,
            name,
            email
        };
        this.navigate = useNavigate();
    };


  update = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.UpdateContactHandler(this.state);
    this.setState({name:"",email:""});
    this.props.history.push("/");
  };

render() {
  return (
      <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};
}
export default EditContact;

// import React, {useState} from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// // import { useContactsCrud } from "../context/ContactsCrudContext";

// const EditContact = () =>  {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { id, name, email } = location.state.contact;
//   const [newEmail, setNewEmail] = useState(email);
//   const [newName, setNewName] = useState(name);
//   const {updateContactHandler} = useContactsCrud();
  

//   const update = (e) => {
//     e.preventDefault();
//     if (newName === "" || newEmail === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     updateContactHandler({id, name: newName, email : newEmail});
//     setNewName("");
//     setNewEmail("")
//     navigate("/");
//   };

//     return (
//       <div className="ui main">
//         <h2>Edit Contact</h2>
//         <form className="ui form" onSubmit={update}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={newEmail}
//               onChange={(e) => setNewEmail(e.target.value)}
//             />
//           </div>
//           <button className="ui button blue">Update</button>
//         </form>
//       </div>
//     );
// }

// export default EditContact;