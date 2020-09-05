import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from '../axios';
import './App.css'


function App() {

    const [messages, setMessages] = useState([]);

    //fetch initial msgs
    useEffect(() => {
        axios.get('/api/v1/messages/sync')
            .then(response => {

                setMessages(response.data);
            })
    }, [])

    useEffect(() => {
        const pusher = new Pusher('c2e77945a521ffbf0f45', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newMessage) => {
            // alert(JSON.stringify(newMessage));

            setMessages([...messages, newMessage])
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    }, [messages]);

    // console.log(messages);

    return <div className="app">
        <div className="app__body">

            <Sidebar />
            <Chat messages={messages} />
        </div>
    </div>


}


export default App;