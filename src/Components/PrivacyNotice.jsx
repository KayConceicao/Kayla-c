import React from "react";


// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const PrivacyNotice = () => {

  return (
    <div className="privacy-notice">
        <FontAwesomeIcon className="warn-icon" icon={faExclamationCircle} />
        <p>No cookies are stored on this site.</p>
    </div>
  );
};

export default PrivacyNotice;