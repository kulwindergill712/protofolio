import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Gill Solution</h4>
                        <h1 className="list-unstyled">
                            <li>950-136-0632</li>
                            <li>Mohali, Punjab</li>
                            <li>123 Streeet Mohali South</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Services</h4>
                        <ui className="list-unstyled">
                            <li>Adroid Development</li>
                            <li>Ios Devloplment</li>
                            <li>Web development</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>WELL ANOTHER COLUMN</h4>
                        <ui className="list-unstyled">
                            <li>DANK MEMES</li>
                            <li>OTHER STUFF</li>
                            <li>GUD STUFF</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;