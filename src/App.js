import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Gs from './theme/globalStyles';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import Header from './component/header'
import Footer from './component/footer'; 
import Home from './pages/home' 
import Exchange from './pages/exchange' 

import { Web3Modal } from '@web3modal/react';

import { configureChains, createClient, WagmiConfig } from 'wagmi';

import { arbitrum, mainnet, polygon } from 'wagmi/chains';

const chains = [arbitrum, mainnet, polygon];




function App() {   

  const [isDark,setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark);

  function setTheme(flag){
    setDarkTheme(flag);    
  }

  return (
    <Router  > 
        <ThemeProvider theme={selectedTheme}>
          <section className='MainBox clearfix'>
            <Gs.GlobalStyle /> 
              <Header />  
              <Switch>
                <Route path="/" exact> <Home isDarkTheme={isDark}  />  </Route>   
                <Route path="/exchange" exact> <Exchange isDarkTheme={isDark}  />  </Route>   
              </Switch>   
              <Footer></Footer>
            </section>
        </ThemeProvider>
    
    </Router>

  );
}


export default App;