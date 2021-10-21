import React from "react";
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
                Lorem ipsum dolor sit, amet consecting elit. Face!
                Vel nostrum cupiditate sunt, dolorerrupti quasi!
                Repellendus quis sequi odit nemo, aemo sunt fugit?
                Nemo numquam amet dolorum atque ipsaecati qui, el!
                Commodi, non blanditiis similique fodi, natus!
                Delectus nisi dolor blanditiis dolohil possimus.
                Quis consequuntur perspiciatis volum molestia?
                Dolor itaque accusamus alias consecuntur, fug.
                Amet veniam aliquid ullam voluptas  magni beatae?.
                Cum aperiam eius odio animi voluptaes vitae totam!
                Error ut aliquid numquam illum auteidem explicabo!
                Voluptatem quaerat similique fugit pernatur velit!
                Maiores iure, recusandae dolore reps hic eveniet?
                Amet sunt adipisci ipsam ea cum vennecessitatibus.
            </div>
        </div>
    );
}