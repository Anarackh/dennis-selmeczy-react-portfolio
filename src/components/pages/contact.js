import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactFeaturedImage from "../../../static/assets/images/auth/login.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
            className="left-column" 
            style={{
                background: "url(" + contactFeaturedImage + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "calc(100vh - 83px)"
            }}
            />

            <div className="right-column">
                <div className="contact-wrapper">
                    <div className="contact-icon"><FontAwesomeIcon icon="phone-volume" /></div>
                    <div>555-555-5555</div> 
                </div>

                <div className="contact-wrapper">
                    <div className="contact-icon"><FontAwesomeIcon icon="envelope-open-text" /></div>
                    <div>asdfg@gmail.com</div>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-icon"><FontAwesomeIcon icon={[ "fab", "linkedin" ]} /></div>
                    <div>linkedin.com/in/asdfg/</div>
                </div>
            </div>
            
        </div>
    );
}