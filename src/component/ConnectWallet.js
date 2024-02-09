import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Gs from '../theme/globalStyles' 
import Media from './../theme/media-breackpoint' 
import cross from '../assets/images/cross.png'
import Clock from '../assets/images/clock.png'
import ErrorIco from '../assets/images/errorIco.png'
import MetaIcon from '../assets/images/metamask.png'
import walletconnect from '../assets/images/walletconnect.png'


const SelectToken = ({onClose }) => { 
    const [isWalletFail, setWalletFail] = useState(false);
    const toggleWalletFail = () => {
        setWalletFail(!isWalletFail);
    };
    return (
        <Gs.PopupMain>
            <Gs.OverLay onClick={onClose} />
            {!isWalletFail ?
            <Gs.Popup>
                <h3>Connect Wallet 
                    <a onClick={onClose} className='close'><img width={12} src={cross} alt='cross'/></a>
                </h3>
                <WalletList onClick={toggleWalletFail}>
                    <div className='WlImg'>
                        <img src={MetaIcon} width={68} alt='metamask'></img>
                    </div>
                    <div className='WlTxt'>
                        <h4>MetaMask Wallet</h4>
                        <p>To connect to <br/>
                        MetaMask from browser use <br/>
                        Google chrome extension</p>
                        <p>To connect to MetaMask <br/>
                        from mobile use MetaMask app</p>
                    </div>
                </WalletList>
                <WalletList onClick={toggleWalletFail} className='lastChild'>
                    <div className='WlImg'>
                        <img src={walletconnect} width={70} alt='walletconnect'></img>
                    </div>
                    <div className='WlTxt'>
                        <h4>Wallet Connect</h4>
                        <p>Connection to <br/>
                        Wallet Connect <br/>
                        under development</p>
                    </div>
                </WalletList>
                <Terms>
                By connecting, I accept
                <a>Terms of Use</a>
                </Terms>
            </Gs.Popup> :
            <Gs.Popup>
                <h3>Back 
                    <a onClick={onClose} className='close'><img width={12} src={cross} alt='cross'/></a>
                </h3>
                <ErrorConnecting>
                    <img width={60} src={ErrorIco} />
                    <h4>Error Connecting</h4>
                    <Gs.BtnSm onClick={toggleWalletFail} className='lg'>Try Again</Gs.BtnSm>
                </ErrorConnecting>        
                <WalletList className='sm'>
                    <div className='WlImg'>
                        <img src={MetaIcon} width={68} alt='metamask'></img>
                    </div>
                    <div className='WlTxt'>
                        <h4>MetaMask Wallet</h4>
                    </div>
                </WalletList>        
            </Gs.Popup>}
        </Gs.PopupMain>
    )
}

const WalletList = styled.div `
    background: var(--bgLight); display: flex; align-items: center; width: 100%; padding: 18px 20px 15px 0; border-radius: 10px; margin-bottom: 20px; min-height: 148px; position: relative; overflow: hidden; cursor: pointer;
    &:after {content: ""; position: absolute; left: 0; right: 0; height: 2px; background: #ff7e00; bottom: 0;}
    .WlImg {
        flex-grow: 1; text-align: center;
        &:after {content: ""; width: calc(100% - 45px); height: 5px; background: linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,1), rgba(0,0,0,0.1)); display: table; margin: 0 auto; border-radius: 100%; opacity: 0.3; filter: blur(1px); margin-top: 15px; transition: all 0.3s ease-in-out;}
    }
    .WlTxt {text-align: right; width: 190px;
        h4 {color: #f46d00; font-weight: 600; margin: 0 0 10px;}
        p {font-size: 14px; color: var(--txtLight); margin: 0 0 6px; line-height: 1.3;}
    }
    &.lastChild {
        &:after {background: #3b99fb;}
        .WlTxt {
            h4 {color: #3b99fb;}
        }
    }
    &:hover {
        .WlImg {
            &:after {margin-top: 30px; transform: scaleX(0.8);}
        }
    }
    &.sm {
        height: 64px; min-height: 30px;
        &:after {display: none;}
        .WlTxt {flex-grow: 1;
            h4 {margin: 0;}
        }
        .WlImg {
            width: 70px; flex-grow: inherit; margin-left: 12px;
            img {width: 38px;}
            &:after {margin-top: 5px; transform: scaleX(1); width: 60px; height: 3px;}
        }
    }
`
const Terms = styled.div `
    color: var(--txtLight); text-align: center;
    a {display: table; margin: 14px auto 0; font-weight: 600; color: var(--primary);}
`
const ErrorConnecting = styled.div `
    text-align: center; margin-bottom: 30px; padding: 0 52px;
    img {margin-bottom: 12px;}
    h4 {color: var(--txtRed); font-size: 20px; font-weight: 700; margin: 0 0 18px; font-weight: 500;}
    p {color: var(--txtLight); font-size: 20px; font-weight: 400; margin: 16px 0 0;}
    span {color: var(--primary);}
    b {font-weight: 500;}
`

export default SelectToken