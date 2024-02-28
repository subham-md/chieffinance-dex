import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Gs from '../theme/globalStyles' 
import Media from './../theme/media-breackpoint' 
import cross from '../assets/images/cross.png'
import Waiting from '../assets/images/waiting.png'
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
            <Gs.Popup>
                <h3>Approve Tokens
                    <a onClick={onClose} className='close'><img width={12} src={cross} alt='cross'/></a>
                </h3>
                <Wating>
                    <img src={Waiting} />
                    <h4>Waiting For Confirmation</h4>
                    <p className='color-dark'>Supplying 0.1 ETH and 0.1 UNI</p>
                    <p>Confirm this transaction in your wallet</p>
                </Wating>                
            </Gs.Popup>
        </Gs.PopupMain>
    )
}

const Wating = styled.div `
    text-align: center; margin-bottom: 30px;
    img {margin: 19px 0 62px 0;}
    h4 {color: var(--txtYellow); font-size: 24px; font-weight: 700; margin: 0;}
    p {color: var(--txtLight); font-size: 20px; font-weight: 400; margin: 10px 0 0;
        &.color-dark {color: var(--txtColor); font-weight: 500;}
    }
    span {color: var(--primary);}
    b {font-weight: 500;}
    ${Media.xs} {
        margin-bottom: 20px;
        p {margin-top: 10px;}
    }
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