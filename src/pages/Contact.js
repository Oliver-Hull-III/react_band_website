import React from 'react';
import './Contact.css';

const Contact = () => (

    	<form>
    		<h2> Contact </h2>
    		<div className="form-group email">
    			<label htmlFor="email">Email address</label>
    			<input type="email" className="form-control" id="email" placeholder="name@example.com" />
    		</div>

    		<div className="form-group message">
    			<textarea className="form-control" id="message" rows="10" placeholder="Enter your message here" />
    		</div>
    	</form>
)
    



export default Contact;

