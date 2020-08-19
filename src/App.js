import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/index';
import { ApolloProvider } from '@apollo/client';
import client from './config/Apollo';

function App() {
  return (
    <ApolloProvider client={client}>
     <Index/>
     </ApolloProvider>
  );
}

export default App;
