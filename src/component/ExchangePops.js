import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Gs from '../theme/globalStyles' 
import Media from './../theme/media-breackpoint' 
import cross from '../assets/images/cross.png'
import InfoIco from '../assets/images/info.png'
import Clock from '../assets/images/clock.png'
import Tick from '../assets/images/tick.png'
import Copy from '../assets/images/copy.png'
import confirmIco from '../assets/images/confirm.png'


const ExchangePops = ({onClose }) => { 
    return (
        <Gs.PopupMain>
            <Gs.OverLay onClick={onClose} />
            <Gs.Popup>
                <h3>Setting 
                    <a onClick={onClose} className='close'><img width={12} src={cross} alt='cross'/></a>
                </h3>

                <SecTitle>Exchange & Liquidity</SecTitle>
                <SecLabel>Slippage Tolerance <i><img width={20} src={InfoIco} /></i></SecLabel>
                <Gs.Percent>
                    <a className='active'>25%</a>
                    <a>50%</a>
                    <a>75%</a>
                    <div className='inputBx'>
                        <input type='text' className=''/>
                        <span>%</span>
                    </div>
                </Gs.Percent>
                <ErrorMessage>Your transaction may fail</ErrorMessage>
                <BtnCont>
                    <Gs.BtnSm className='secondary'>Cancel</Gs.BtnSm>
                    <Gs.BtnSm>Save</Gs.BtnSm>
                </BtnCont>
            </Gs.Popup>

            {/* <Gs.Popup>
                <Wating>
                    <img width={55} src={Clock} />
                    <h4>Waiting For Confirmation</h4>
                    <p><b>Swapping <span>0.0000354835 ETH</span> for <span>0.01 aUSDC</span></b></p>
                    <p>Confirm this transaction in your wallet</p>
                </Wating>                
                <Gs.BtnSm className='lg'>Close</Gs.BtnSm>
            </Gs.Popup> */}

            {/* <Gs.Popup>
                <SuccessTxt>
                    <img width={55} src={Tick} />
                    <h4>Transaction Success</h4>
                    <p>Transaction hash</p>
                    <TextBox>
                        <input type='text' name='address' value="0×abf5s6f2a3sdaasda5g321651a..." placeholder=''></input>
                        <a className='copy'><img width={20} src={Copy} alt="Copy" /></a>
                    </TextBox>
                    <p>View your transaction in <a className='color-blue'>Explorer</a></p>
                </SuccessTxt>                
                <Gs.BtnSm className='lg'>Ok</Gs.BtnSm>
            </Gs.Popup> */}

            {/* <Gs.Popup>
                <ConformTxt>
                    <img width={45} src={confirmIco} />
                    <h4>Confirmed</h4>
                    <p><a className='color-blue'>View in Explorer</a></p>
                </ConformTxt>                
            </Gs.Popup> */}

            
        </Gs.PopupMain>
    )
}


const SecTitle = styled.h4 `
    font-size: 20px; color: #000; font-weight: 500; margin: 0 0 14px;
`
const ErrorMessage = styled.label `
    color: var(--txtRed); font-weight: 400; margin: 14px 0 14px; display: flex; align-items: center;
    i {margin-left: 4px;}
`
const SecLabel = styled.label `
    color: var(--txtLight); font-weight: 400; margin: 0 0 14px; display: flex; align-items: center;
    i {margin-left: 4px;}
`
const BtnCont = styled.div `
    display: flex; gap: 10px; margin-bottom: 5px;
    ${Gs.BtnSm} {width: 50%;}
`
const Wating = styled.div `
    text-align: center; margin-bottom: 30px;
    img {margin-bottom: 12px;}
    h4 {color: var(--txtYellow); font-size: 24px; font-weight: 700; margin: 0;}
    p {color: var(--txtLight); font-size: 20px; font-weight: 400; margin: 16px 0 0;}
    span {color: var(--primary);}
    b {font-weight: 500;}
    ${Media.xs} {
        margin-bottom: 20px;
        p {margin-top: 10px;}
    }
`
const SuccessTxt = styled.div `
    text-align: center; margin-bottom: 30px;
    img {margin-bottom: 12px;}
    h4 {color: var(--primary); font-size: 24px; font-weight: 700; margin: 0;}
    p {color: var(--txtLight); font-size: 20px; font-weight: 400; margin: 16px 0 0;}
    span {color: var(--primary);}
    b {font-weight: 500;}
    .color-blue {color: var(--txtBlue);}
    ${Media.xs} {
        margin-bottom: 20px;
        p {margin-top: 10px;}
    }
`
const ConformTxt = styled.div `
    text-align: center; margin: 15px 0;
    img {margin-bottom: 12px;}
    h4 {color: var(--primary); font-size: 24px; font-weight: 500; margin: 0;}
    p {color: var(--txtLight); font-size: 18px; font-weight: 400; margin: 10px 0 0;}
    span {color: var(--primary);}
    b {font-weight: 500;}
    .color-blue {color: var(--txtBlue);}
`
const TextBox = styled.div `
    display: flex; flex-flow: column; position: relative; margin-top: 14px;
    label {color: var(--txtLight); font-size: 14px; margin-bottom: 8px;}
    input {color: var(--txtBlue); background: var(--bgLight); border: 0; border-radius: 5px; height: 65px; font-weight: 500; padding: 8px 12px; font-weight: 500;}
    .copy {position: absolute; right: 20px; top: 50%; margin-top: -10px;}
    ${Media.xs} {
        input {height: 50px;}
    }
`


export default ExchangePops