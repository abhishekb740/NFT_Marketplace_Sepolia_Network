import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import Marketplace from './components/MarketPlace';
import NFTPage from './components/NFTpage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Marketplace />}></Route>
        <Route path="/nftPage/:tokenId" element={<NFTPage />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/sellnft' element={<SellNFT />}></Route>

      </Routes>
    </>
  )
}

export default App
