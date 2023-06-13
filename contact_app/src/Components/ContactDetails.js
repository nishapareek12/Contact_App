// import React from "react";
// import male from "../images/male.png";
// import { useParams } from "react-router-dom";

// const ContactDetails = () => {
//   const { id } = useParams();
//   const { name, email } = location.state.contact;

//   return (
//     <div className="main">
//       <div className="ui card centered">
//         <div className="image">
//           <img src={male} alt="user" />
//         </div>
//         <div className="content">
//           <div className="header">{name}</div>
//           <div className="description">{email}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetails;

import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactDetails = () => {

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Nisha</div>
          <div className="description">nisha@gmail.com</div>
        </div>
      </div>
      <div className="center-div">
      <Link to="/">
      <button className="ui button blue center">
        Back to Contact List
      </button>
      </Link>
      </div>
    </div>
  );
};

export default ContactDetails;

