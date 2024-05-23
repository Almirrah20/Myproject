import React, { useEffect, useState } from 'react';

export default function Chatbot() {
  const [isChatbotLoaded, setIsChatbotLoaded] = useState(false);

  useEffect(() => {
    if (isChatbotLoaded) {
      // Initialize the chatbot
      window._be = window._be || {};
      window._be.id = "664cf4b33172ed000791d0f5";
      window._be.custom = {
        button: {
          // Customizing the button text to "AI Stylist"
          text: "AI Stylist"
        }
      };

      // Load the chatbot script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
      document.body.appendChild(script);

      // Cleanup script when component is unmounted
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isChatbotLoaded]);

  const handleButtonClick = () => {
    setIsChatbotLoaded(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open AI Stylist</button>
      <noscript>
        You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
      </noscript>
    </div>
  );
}
