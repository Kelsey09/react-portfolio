import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import babygirl from "../../../static/assets/images/samples/babygirl.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + babygirl + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                    }}/>
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>
                        <div className="text">555-555-5555</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className="text">KelseyDurmeier09@gmail.com</div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className="text">West Memphis, AR</div>
                    </div>
                </div>
            </div>
        </div>
    );
}