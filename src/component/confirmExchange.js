import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Media from './../theme/media-breackpoint' 
import Gs from '../theme/globalStyles' 
import cross from '../assets/images/cross.png'
import Eth from '../assets/images/eth.png'
import Thr from '../assets/images/tather.png'
import Dwn from '../assets/images/arrow2.png'
import Swap from '../assets/images/swap.png'
import InfoIco from '../assets/images/info.png'
import SettingIco from '../assets/images/setting.png'


const ConfirmExcng = ({onClose }) => { 
    return (
        <Gs.PopupMain>
            <Gs.OverLay onClick={onClose} />
            <Gs.Popup>
                <h3>Select a token 
                    <a onClick={onClose} className='close'><img width={12} src={cross} alt='cross'/></a>
                </h3>
                <ExBox>
                    <div className='input-container'>
                        <label htmlFor='yousend'>Availability: 0 USDT</label>
                        <input type='type' id='yousend' className='' placeholder='0.000' name=''  />
                        <b>MAX</b>
                    </div>
                    <DropSelect className='ExBox-right'>
                        <a className='selectBtn'><img className='token' src={Thr} alt='' />
                            <span>Tether</span>
                            <img className='arrow' src={Dwn} alt='' />
                        </a>
                    </DropSelect>
                </ExBox>
                <Switch><a className='switch'><img src={Swap} alt='Swap'/></a></Switch>
                <ExBox>
                    <div className='input-container'>
                        <label htmlFor='yousend'>Availability: 0 USDT</label>
                        <input type='type' id='yousend' className='' placeholder='0.000' name=''  />
                        <b>MAX</b>
                    </div>
                    <DropSelect className='ExBox-right'>
                        <a className='selectBtn'><img className='token' src={Thr} alt='' />
                            <span>Tether</span>
                            <img className='arrow' src={Dwn} alt='' />
                        </a>
                    </DropSelect>
                </ExBox>
                <Msg>Input is estimated. You will sell at most <br/>
                    <span>0.0000358383</span> ETH or the transaction will revert.</Msg>
                <InfoSec>
                    <p>Price <span>281.821 aUSDC per ETH</span></p>
                    <p>Maximum Sold <i><img width={20} src={InfoIco} /></i> <span>0.00003583 ETH</span></p>
                    <p>Price Impact <i><img width={20} src={InfoIco} /></i> <span>&lt;0.01%</span></p>
                    <p>Liquidity Provider Fee <i><img width={20} src={InfoIco} /></i> 
                    <span>0.00000010645 ETH</span></p>
                </InfoSec>
                <Gs.BtnSm className='lg'>Confirm Exchange</Gs.BtnSm>
            </Gs.Popup>
        </Gs.PopupMain>
    )
}

const ExBox = styled.div `
    display: flex; border-radius: 5px;  overflow: hidden; transition: all 0.3s ease-in-out; margin-bottom: 10px; background: var(--bgLight); padding: 12px 12px; 
    &:focus-within {box-shadow: 0 0 7px 2px rgba(0,0,0,0.16);}
    .input-container {position: relative; border-right: 1px solid #abd0d9; width: 214px; 
        input {border: 0px; font-size: 24px; background: none; color: var(--txtLight); font-family: var(--font); padding: 0 55px 20px 0; height: 40px; width: 100%; font-weight: 600;
            ::-ms-input-placeholder { /* Edge 12-18 */
                color: var(--txtLight2);
            }
            ::placeholder {
                color: var(--txtLight2);
            }
        }
        label {font-size: 12px; color: var(--txtLight2); position: absolute; padding: 0 0; top: 25px; left: 0;}
        b {font-size: 14px; font-weight: 600; color: var(--primary); position: absolute; top: 0; right: 17px; cursor: pointer;}
    }
    ${Media.xs} {
        .input-container { width: calc(100% - 100px);
            input {font-size: 20px; padding: 0 45px 20px 0;}
            b {right: 8px;}
        }
    }
`
const DropSelect = styled.div ` 
    width: 83px; flex-shrink: 0; align-self: center; margin-right: 0; margin-left: auto;
    .selectBtn {display: flex; align-items: center; font-size: 12px; margin-bottom: 2px; width: 100%; border-radius: 30px; padding: 0 12px 0 0; height: 19px; background: #fff; width: 84px; 
        .token {margin-right: 9px; width: 28px; height: 28px; width: 12px; height: 12px; transform: scale(2);}
        span {margin: 0 5px 0 auto;}
        .arrow {margin-left: auto; width: 7px; flex-shrink: 0; position: relative;}
    }
`
const Switch = styled.div `display: block; text-align: center; margin: 0 0 10px 0;
    a {width: 60px; height: 60px; background: var(--primary); border-radius: 100%; display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease-in-out 0s; cursor: pointer; z-index: 1; position: relative; top: 0; box-shadow: 0 0 13px rgba(27,202,161,0.6);
        img {filter: brightness(100);}
        &:hover {transform: rotate(180deg); box-shadow: 0 0 0 5px rgba(27,193,154,0.2); }
    }
`
const Msg = styled.div `
    color: var(--txtColor); font-weight: 500; text-align: center; font-size: 15px; line-height: 1.6; margin: 22px 0 0 0;
    span {color: var(--primary);}
`
const InfoSec = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 15px 0 5px; margin: 0 0 17px 0;
    p {display: flex; align-items: center; color: var(--txtColor); margin: 0 0 8px 0;
        i {margin-left: 4px;}
        a {vertical-align: top; display: inline-block; margin: 5px 0 0 8px;}
        span {margin-left: auto;}
    }
    ${Media.xs} {
        font-size: 14px;
    }
`

export default ConfirmExcng