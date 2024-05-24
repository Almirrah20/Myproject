import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Chatbot.css'; 
import logo1 from './logo.png'

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleButtonClick = () => {
        if (window.__be && window.__be.open) {
            window.__be.open();
        }
    };

    return (
        <>
            <Helmet>
                <script type="text/javascript">
                    {`
                    window.__be = window.__be || {};
                    window.__be.id = "664cf4b33172ed000791d0f5";
                    `}
                </script>
                <noscript>{`
                    You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
                `}</noscript>
            </Helmet>
            <button className="chatbot-button" onClick={handleButtonClick}>
            </button>
        </>
    );
};

export default Chatbot;
