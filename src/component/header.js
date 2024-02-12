import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom' 
import { withRouter } from 'react-router' 
import Gs from '../theme/globalStyles' 
import ConnectWallet from '../component/ConnectWallet' 

import Media from '../theme/media-breackpoint' 

import LogoImg from '../assets/images/logo.png'
import WalletIco from '../assets/images/wallet.png'
import globe from '../assets/images/globe.png'
import down from '../assets/images/down.png'


function Header(props) { 
  const [menuShow, setOpen] = React.useState(true);
  const [isSelectTokenVisible, setSelectTokenVisible] = useState(false);
  const toggleSelectToken = () => {
      setSelectTokenVisible(!isSelectTokenVisible);
  };

  const [isShowMenu, setIsShowMenu] = useState(false);
  const openMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  
  useEffect(() => { 
  }, []); 
  
  return (
    <>
      <HeaderBx>
        <Link to="/" className='logo'><img src={LogoImg}/></Link>
        <Menu className={`${isShowMenu ? 'ShowMenu' : ''}`}>
          <Link>Pool</Link>
          <Link to='/exchange'>Exchange</Link>
          <Link>Bridge</Link>
          <Gs.BtnSm onClick={toggleSelectToken}><img src={WalletIco} alt='Wallet'/>Connect Wallet</Gs.BtnSm>
        </Menu>
        <div className='HeaderRight'>
          <Gs.BtnSm onClick={toggleSelectToken}><img src={WalletIco} alt='Wallet'/>Connect Wallet</Gs.BtnSm>
          <Button2>
            <img src={globe} alt='globe'/>
            <span>Eng</span>
            <img className='arrow' src={down} alt='down'/></Button2>

          <Hamburger id="nav-icon2" onClick={openMenu}>
            <span/><span/><span/>
          </Hamburger>
        </div>
      </HeaderBx>
      
      {isSelectTokenVisible && <ConnectWallet onClose={toggleSelectToken} />}
    </>
  )

}
const FlexDiv = styled.div`
  display: flex; align-items: center; flex-wrap:wrap; position: sticky; top: 0; left: 0; width: 100%; z-index: 500;
`;
const HeaderBx = styled(FlexDiv)`
  justify-content: space-between; padding: 17px 70px; background: #fafbff;
  .logo {}
  .HeaderRight {display: flex;}
  ${Media.lg2} {
    padding: 17px 20px;
  }
  ${Media.sm} {
    .logo {width: 200px}
    ${Gs.BtnSm} { font-size: 18px; height: 40px; padding: 0 15px; display: none;
      img {display: none;}
    }
  }
  ${Media.xs} {
    /* .logo {width: 50px; overflow: hidden;
      img {width: 200px; max-width: inherit;}
    } */
    /* ${Gs.BtnSm} { font-size: 16px; height: 35px; font-weight: 400;} */
  }
`
const Menu = styled.div `
  a {color: #fff; font-size: 20px; color: var(--txtColor); border-right: 1px solid var(--txtColor); padding: 0 35px; font-weight: 500;
    &:last-child {border-right: 0px;}
    &:hover {color: var(--primary)}
  }
  ${Gs.BtnSm} {display: none;}
  ${Media.lg2} {
    a {
      font-size: 18px; padding: 0 20px;
    }
  }
  ${Media.md} {
    display: none; position: absolute; left: 0; right: 0; top: 100%; background: var(--txtColor); flex-flow: column; padding: 15px;
    &.ShowMenu {display: flex;}
    a {color: #fff; padding: 10px 15px; border-bottom: 1px solid #fff;
      &:first-child {border-top: 1px solid #fff;}
    }
    ${Gs.BtnSm} {display: flex; width: 100%; margin-top: 15px; border-bottom: 0; font-size: 18px;
      img {display: inline-block;}
    }
  }
`
const Button2 = styled.div `
  padding: 0 11px; color: var(--txtColor); height: 45px; text-align: center; font-size: 18px; display: flex; align-items: center; justify-content: center; border-radius: 5px; border: 1px solid var(--txtColor); margin-left: 20px; font-weight: 600; cursor: pointer;
  img:not(.arrow) {margin: 0 7px 0 0;}
  .arrow {width: 12px; margin: 0 0 0 13px;}
  &:hover {border-color: var(--primary);}
  ${Media.sm} {
    font-size: 18px; height: 40px;
    span {display: none;}
    .arrow {margin: 0;}
  }
  ${Media.xs} {
    font-size: 16px; height: 35px; margin-left: 10px; font-weight: 400;
    /* display: none; */
  }
`
const Hamburger = styled.div `
  width: 32px; height: 22px; margin-left: 15px; display: flex; flex-flow: column; justify-content: space-between; display: none; cursor: pointer; align-self: center;
  span {
    display: block; height: 3px; background: var(--primary); border-radius: 5px;
    &:first-child {margin-left: 6px;}
    &:last-child {margin-left: 6px;}
  }
  ${Media.md2} {display: flex;}
`

export default Header;
