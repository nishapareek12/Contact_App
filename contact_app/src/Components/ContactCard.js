import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";


const ContactCard = (props)  => {
    const {id,name,email} = props.contact;
    console.log(props);

    return(
        <div className="item">
        <img className="ui avatar image" src={user} alt="user"/>
        <div className="content">
        <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>

        <div className="header">
               {name}
        </div>
        <div style = {{display: "inline"}}>
            {email}
        </div>
        </Link>
            <i className="trash alternate outline icon" style = {{color:"red",marginLeft:"50px"}} onClick={() => props.clickHandler(id)}> </i>
            <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
            <i className="edit alternate outline icon" style = {{color:"blue",marginLeft:"50px",marginTop:"10px"}} > </i></Link>
        </div>
        </div>
    );

};

export default ContactCard;