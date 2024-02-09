import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Gs from './theme/globalStyles';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import Header from './component/header'
import Footer from './component/footer'; 
import Home from './pages/home' 
import Exchange from './pages/exchange' 
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';

import { Web3Modal } from '@web3modal/react';

import { configureChains, createClient, WagmiConfig } from 'wagmi';

import { arbitrum, mainnet, polygon } from 'wagmi/chains';

const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: process.env.REACT_APP_WEB3_MODAL_PROJECT_ID }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'Hepton', chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {   

  const [isDark,setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark);

  function setTheme(flag){
    setDarkTheme(flag);    
  }

  return (
    <Router  > 
      <WagmiConfig client={wagmiClient}>
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
    </WagmiConfig>
    <Web3Modal
      projectId={process.env.REACT_APP_WEB3_MODAL_PROJECT_ID}
      ethereumClient={ethereumClient}
    />
    </Router>

  );
}


export default App;