import React, {useState} from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Swap from './components/Swap';
import Header from './components/Header'
import Tokens from './components/Tokens'
import './App.css';

function App() {

  const [chainId, setChainId] = useState(42161)
  const [wallet, setWallet] = useState("0x0000000000000000000000000000000000000000")

  return (
    <div className="App">
      <Header chainIdState={[chainId, setChainId]} walletState={[wallet, setWallet]}/>
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;