import React from 'react';

import "./css/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <h3> Site created by {" "}
                <a href="https://emilyslazyk.dev"
                    target="_blank"
                    rel="noreferrer"
                    title="Emily's Portfolio Site"
                    className="footer__portfolioLink">
                    Emily Slazyk
                </a>
            </h3>
            <p>
                Jokes provided by {" "}
                <a href="https://english.api.rakuten.net/KegenGuyll/api/dad-jokes/endpoints"
                    title="API Source Link"
                    target="_blank"
                    rel="noreferrer"
                >"Dad Jokes API"</a>
            </p>
            <a href="/"
                title="Github Code"
                target="_blank"
                rel="noreferrer"
                className="footer__course">
                Open sourced code available here
            </a>
        </div>
    )
}

export default Footer
