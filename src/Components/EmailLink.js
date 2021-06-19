import React from "react";
import {Link} from "react-router-dom";

const EmailLink = ({ mailto, label }) => {
    return (
        <Link
            to='javascript:location="mailto:\u006b\u0061\u0079\u006c\u0061\u0063\u0072\u006f\u0061\u006c\u0039\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d";void 0'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default EmailLink;