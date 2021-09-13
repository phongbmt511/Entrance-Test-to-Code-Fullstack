import React, { Component } from 'react'
import "./box.css";
import Search from '../../Container/Search';

export default class Box extends Component {
    render() {
        return (
            <div className="Container_body">
                <div className="border border-primary">
                    <div className="full_body">
                    <h1>Link Shorrtener</h1>
                    <span className="url_id">
                        <p>Enter a link : </p>
                        <Search/>
                    </span>
                    <span className="domain_id">
                        <p className="text_short">Short domain : </p>
                        <button className="btn btn-outline-success m-2">shrtco.de</button>
                        <button className="btn btn-outline-success  m-2">9qr.de</button>
                        <button className="btn btn-outline-success  m-2">shiny.link</button>
                    </span>
                    <p className="lh-lg">With this free Link Shortener you can makes Links shorter and easier to remember . Just enter a Link into the from and click on the above Button to generate a short Link . When visiting the short-Link , the short-Link will immediately redirect you to the long Link.</p>
                    </div>

            
                </div>
            </div>
        )
    }
}
