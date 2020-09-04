import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ContactList from '../ContactList';
import './App.css';


function App() {

  const [contact, setContact] = useState("");
  const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
  function contactHandler(name) {
    setContact([...contact, name]);
  }

  return (
    <div className="App">
      <Navbar btnClick={contactHandler} />
      <ContactList data={contact} />
    </div>
  );
}

export default App;
