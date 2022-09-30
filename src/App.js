import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js'; 
import * as S from "./styles/Styled.js"
import './App.css';

function App() {
  return (
    <body>
      <S.GlobalStyles/>
      <Header/> 
      <Main/>
      <Footer/>
    </body>
  );
}

export default App;
