import React, { useState } from 'react';

function Navbar(props) {

    const [person, setPerson] = useState("");

    function contactHandler(e) {

        setPerson(e.target.value);
    }

    function handleSubmit(e) {

        props.btnClick(person);
        setPerson('');
        e.preventDefault();
    }

    return (
        <div className="nav">
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add new contact" onChange={contactHandler} value={person} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Navbar;