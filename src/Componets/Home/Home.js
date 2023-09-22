import React from 'react';
import Chat from '../Chat/Chat';

function Home({ userName }) {
  return (
    userName ? <Chat userName={userName} /> : null
  );
}

export default Home;
