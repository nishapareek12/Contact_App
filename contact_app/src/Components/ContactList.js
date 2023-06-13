import React ,{useRef} from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom'

const ContactList = (props) => {
   // console.log(props);
      const inputE1 = useRef("");
      const deleteContactHandler = (id) => {
         props.getContactId(id);
      };

      
     const renderContactList = props.contacts.map((contact) => {
        return(
           <ContactCard  key = {contact.id} contact={contact} clickHandler={deleteContactHandler} />
        );
     });

     const getSearchTerm = () => {
         props.searchKeyword(inputE1.current.value);
     };
    return( 
         
         
         <div className="main" style={{marginTop:50}}>
         <h2>Contact List <Link to='/add'><button className="ui button blue right" style={{marginLeft:1000,marginTop:0}}>Add Contact</button></Link> </h2>
         <div className="ui search">
         <div className="ui icon input">
         <input ref={inputE1} type="text" placeholder="search contacts" className="prompt" value={props.term} onChange={getSearchTerm } />
         <i className="search icon"></i>
         </div>

         </div>
        
         <div className="ui celled list">{renderContactList}</div>
       </div>
       

    );
            
};

export default ContactList;

