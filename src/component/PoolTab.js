import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Media from './../theme/media-breackpoint' 
import Gs from '../theme/globalStyles' 
import ApproveTokens from '../component/ApproveTokens';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import searchIco from '../assets/images/search.png'
import Eth from '../assets/images/eth.png'
import chartIco2 from '../assets/images/chartIco2.png'
import Question from '../assets/images/question.png'
import arrowLeft from '../assets/images/arrowLeft.png'
import arrowRight from '../assets/images/arrowRight.png'
import Thr from '../assets/images/tather.png'
import Dwn from '../assets/images/arrow2.png'
import Swap from '../assets/images/swap.png'
import InfoCon from '../assets/images/info.png'


const PoolSec = ({onClose, ClickChange }) => { 
    const [value, setValue] = useState([30, 60]);

    // State variable to track the visibility of each .LLContent
    const [contentVisibility, setContentVisibility] = useState({});

    // Function to toggle the visibility of a specific .LLContent based on its index
    const toggleContentVisibility = (index) => {
        setContentVisibility((prevVisibility) => ({
        ...prevVisibility,
        [index]: !prevVisibility[index],
        }));
    };

    return (
        <>
            {/* *********** Connect/Disconnect Wallet *********** */}
            {/* <ConnectSec>
                <Gs.BtnSm className='lg'>+ Add Liquidity</Gs.BtnSm>
                <ConnectBx>
                    <img src={chartIco2} width={40} alt='icon' />
                    <h4>Your active V2 liquidity positions <br/>
will appear here.</h4>
                    <Gs.BtnSm className='lg secondary'>Disconnect</Gs.BtnSm>
                </ConnectBx>
            </ConnectSec> */}
            {/* *********** Connect/Disconnect Wallet *********** */}

            {/* *********** Search Liquidity *********** */}
            {/* <Search>
                <img src={searchIco} alt='searchIco' width={15} />
                <input type='text' name='' placeholder='Search by Token' />
            </Search>
            <PoolTable>
                <h4>
                    <span>Pool</span>
                    <span>Volume 24H</span>
                </h4>
                <div className='listUl'>
                    <ListRow>
                        <span><img src={Question} alt='Question'/> WETH-USDC</span>
                        <span>-</span>
                    </ListRow>
                    <ListRow>
                        <span><img src={Question} alt='Question'/> WETH-USDC</span>
                        <span>-</span>
                    </ListRow>
                    <ListRow>
                        <span><img src={Question} alt='Question'/> WETH-USDC</span>
                        <span>-</span>
                    </ListRow>
                    <ListRow>
                        <span><img src={Question} alt='Question'/> WETH-USDC</span>
                        <span>-</span>
                    </ListRow>
                    <ListRow>
                        <span><img src={Question} alt='Question'/> WETH-USDC</span>
                        <span>-</span>
                    </ListRow>
                    <ListRow>
                        <span><img src={Question} alt='Question'/> WETH-USDC</span>
                        <span>-</span>
                    </ListRow>
                </div>
            </PoolTable>
            <PageNav>
                <a><img src={arrowLeft} /></a>
                <span>Page 1 of 16</span>
                <a><img src={arrowRight} /></a>
            </PageNav> */}
            {/* *********** Search Liquidity *********** */}

            {/* *********** Add Liquidity *********** */}
            {/* <AddLiquidity>
                <ALTop>
                    <h3>Add Liquidity</h3>
                    <p>Add Liquidity to receive LP Tokens</p>
                </ALTop>
                <AmountBox>
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
                    <Gs.Percent>
                        <a className='active'>25%</a>
                        <a>50%</a>
                        <a>75%</a>
                        <a>100%</a>
                    </Gs.Percent>
                </AmountBox>
                <Switch><a className='switch'><img src={Swap} alt='Swap'/></a></Switch>
                <AmountBox>
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
                    <Gs.Percent>
                        <a className='active'>25%</a>
                        <a>50%</a>
                        <a>75%</a>
                        <a>100%</a>
                    </Gs.Percent>
                </AmountBox>
                <InfoSec>
                    <h4>Prices and pool share:</h4>
                    <p>ETH per USDT <span>1</span></p>
                    <p>USDT per ETH <span>1</span></p>
                    <p>Share of pool <span>100%</span></p> 
                </InfoSec>
                <Gs.BtnSm className='lg'>Approve UNI</Gs.BtnSm>
                <Gs.BtnSm className='lg secondary'>Supply</Gs.BtnSm>
            </AddLiquidity> */}
            {/* *********** Add Liquidity *********** */}

            {/* *********** Remove Liquidity *********** */}
            {/* <AddLiquidity>
                <ALTop>
                    <h3>Remove TKN1/USDC Liquidity</h3>
                    <p>To Receive TKN1 and USDC</p>
                </ALTop>
                <SliderBx>
                    <label>Amount</label>
                    <h4 className='SliderVal'>50.000</h4>
                    <RangeSlider
                        className="single-thumb"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                    <Gs.Percent>
                        <a className='active'>25%</a>
                        <a>50%</a>
                        <a>75%</a>
                        <a>100%</a>
                    </Gs.Percent>
                </SliderBx>
                <Switch><a className='switch'><img src={Swap} alt='Swap'/></a></Switch>
                
                <InfoSec className='mt0'>
                    <h4>You will receive</h4>
                    <p><div className='img'><img alt='inco' width={17} src={InfoCon}/></div>TKN1 <span>-</span></p>
                    <p><div className='img'><img alt='inco' width={17} src={Eth}/></div> USDC <span>-</span></p>
                </InfoSec>
                <InfoSec className='mt0'>
                    <h4>Prices and pool share:</h4>
                    <p>1 TKN1 = <span>0.001 USDC</span></p>
                    <p>1 USDC = <span>1000 TKN1</span></p>
                </InfoSec>
                <InfoSec className='mt0'>
                    <h4>LP Tokens in your wallet</h4>
                    <p className='bold'>
                        <div className='img'><img alt='inco' width={17} src={Eth}/><img alt='inco' width={17} src={Eth}/></div>
                        TKN1 - USDC <span>0.003004</span></p>
                    <p>Share of pool: <span>95.000000%</span></p>
                    <p>Pool TKN1: <span>94999.9</span></p>
                    <p>Pool USDC: <span>94.9999</span></p>
                </InfoSec>
                <Gs.BtnSm className='lg secondary'>Enable</Gs.BtnSm>
                <Gs.BtnSm className='lg secondary'>Enter an amount</Gs.BtnSm>
            </AddLiquidity> */}
            {/* *********** Remove Liquidity *********** */}


            {/* *********** Your Liquidity *********** */}
            <AddLiquidity>
                <ALTop>
                    <h3>Your Liquidity</h3>
                    <p>Remove Liquidity to receive tokens back</p>
                </ALTop>
                
                <LiquidityList>
                    <li>
                        <div className={`LLTitle ${contentVisibility[1] ? 'show' : ''}`}>
                            <i><img alt='inco' width={17} src={InfoCon}/><img alt='inco' width={17} src={Eth}/></i> TKN1 - USDC
                            <p>0.00300416</p>
                            <div onClick={() => toggleContentVisibility(1)} className='arrowDown'><img src={Dwn} alt='Down' /></div>
                            <Gs.BtnSm className="sm secondary">Remove Liquidity</Gs.BtnSm>
                        </div>
                        {contentVisibility[1] && (
                        <div className='LLContent'>
                            <p><i><img alt='inco' width={17} src={Eth}/></i>TKN1 <span>94999.9</span></p>
                            <p><i><img alt='inco' width={17} src={Eth}/></i>USDC <span>94.9999</span></p>
                            <p>Reward <span>-</span></p> 
                            <p>Share of pool <span>95.00%</span></p> 
                            <Gs.BtnSm className='lg'>Add SWAP-LP toekn of MetaMask</Gs.BtnSm>
                        </div>
                        )}
                    </li>
                    <li>
                        <div className={`LLTitle ${contentVisibility[2] ? 'show' : ''}`}>
                            <i><img alt='inco' width={17} src={InfoCon}/><img alt='inco' width={17} src={Eth}/></i> TKN1 - USDC
                            <p>0.00300416</p>
                            <div onClick={() => toggleContentVisibility(2)} className='arrowDown'><img src={Dwn} alt='Down' /></div>
                            <Gs.BtnSm className="sm secondary">Remove Liquidity</Gs.BtnSm>
                        </div>
                        {contentVisibility[2] && (
                        <div className='LLContent'>
                            <p><i><img alt='inco' width={17} src={Eth}/></i>TKN1 <span>94999.9</span></p>
                            <p><i><img alt='inco' width={17} src={Eth}/></i>USDC <span>94.9999</span></p>
                            <p>Reward <span>-</span></p> 
                            <p>Share of pool <span>95.00%</span></p> 
                            <Gs.BtnSm className='lg'>Add SWAP-LP toekn of MetaMask</Gs.BtnSm>
                        </div>
                        )}
                    </li>
                </LiquidityList>
                <Gs.BtnSm className='lg'>+ Add Liquidity</Gs.BtnSm>
            </AddLiquidity>
            {/* *********** Your Liquidity *********** */}

            {/* *********** Waiting Popup *********** */}
            {/* <ApproveTokens/> */}
            {/* *********** Waiting Popup *********** */}
        </>
    )
}

const LiquidityList = styled.ul `
    margin: 0; padding: 0;
`
const AddLiquidity = styled.div `
    li {list-style: none; background: #fff; border-radius: 5px; padding: 0 20px; margin-bottom: 12px;}
    .LLTitle {font-size: 18px; font-weight: 600; color: var(--txtLight); padding: 6px 0px; height: 63px; position: relative;
        p {margin: 0; font-size: 18px;}
        i {
            img {margin-right: 3px; vertical-align: top; margin-top: 3px;}
        }
        .arrowDown {position: absolute; right: -5px; top: 50%; margin-top: -13px; width: 26px; height: 26px; display: flex; align-self: center; justify-content: center; cursor: pointer; transition: all 0.5s ease-in-out;
            img {width: 13px; object-fit: contain;}
            &:hover {background-color: var(--bgLight);}
        }
        ${Gs.BtnSm} {position: absolute; top: 50%; margin-top: -20px; right: 28px; opacity: 0; visibility: hidden;}
        &.show {
            ${Gs.BtnSm} {opacity: 1; visibility: visible;}
        }
    }
    .LLContent {
        width: 100%; padding: 8px 0 14px; 
        &.mt0 {margin-top: 0;}
        p {display: flex; align-items: center; color: var(--txtLight); margin: 0 0 11px 0; font-weight: 500;
            a {vertical-align: top; display: inline-block; margin: 5px 0 0 8px;}
            span {margin-left: auto;}
            &.bold {font-weight: 600;}
        }
        i {margin-right: 7px;}
        ${Gs.BtnSm} { margin-top: 10px;}
    }
    ${Media.xs} {
        .LLTitle {font-size: 16px;
            ${Gs.BtnSm} {padding: 5px 5px; font-size: 13px; width: 76px;}
            p {font-size: 16px;}
        }
    }
`
const ALTop = styled.div `margin-bottom: 20px; width: 100%;
    h3 {margin: 0 0 8px; font-weight: 600; font-size: 24px;}
    p {margin: 0; font-size: 15px; font-weight: 500;}
`
const Search = styled.div`
    width: 100%; position: relative; margin: 30px 0 0 0;
    img {position: absolute; right: 20px; top: 16px; filter: brightness(0);}
    input {height: 45px; width: 100%; border: 0px; background: #fff; border-radius: 10px; color: var(--txtColor); font-family: var(--font); padding: 0 40px 2px 20px; border: 1px solid var(--bgLight2); transition: all 0.3s ease-in-out; line-height: 1;
        &:focus {border: 1px solid var(--primary);}
        ::-ms-input-placeholder { /* Edge 12-18 */
            color: var(--txtLight2);
        }
        ::placeholder {
            color: var(--txtLight2);
        }
    }
`
const PoolTable = styled.div `
    background: #fff; border-radius: 10px; overflow: hidden; margin-top: 20px;
    h4 {display: flex; justify-content: space-between; color: #80888a; padding: 11px 15px; margin: 0;
        span {font-weight: normal; font-size: 16px;}
    }
    .listUl {display: flex; flex-flow: column; width: 100%; }
`
const ConnectSec = styled.div `
`
const ConnectBx = styled.div `
    background: #fff; text-align: center; padding: 30px 20px; margin-top: 30px; border-radius: 5px;
    h4 {color: var(--txtLight); line-height: 1.5; font-size: 18px; margin-top: 20px; margin-bottom: 17px;} 
`
const ListRow = styled.div ` 
    display: flex; align-items: center; width: 100%; justify-content: space-between; padding: 15px 15px; background: #fff;
    span {color: var(--txtLight); line-height: 1.5; font-size: 18px; display: flex; align-items: center; font-weight: 500;
        img {width: 21px; font-size: 16px; margin-right: 10px;}
    } 
    &:nth-child(odd) {background: #e8f9f5;}
`
const PageNav = styled.div ` 
    display: flex; align-items: center; width: 100%; justify-content: center; margin-top: 15px; margin-bottom: -10px;
    span {margin: 0 20px; font-weight: 500;}
    a {display: inline-block; height: 10px;}
    img {height: 10px;}
    ${Media.sm} {margin-bottom: 0;}
`
const AmountBox = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 20px 19px 32px; margin: 0 0 28px 0;
`
const SliderBx = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 12px 19px 20px; margin: 42px 0 80px 0; position: relative;
    label {position: absolute; top: -37px; left: -2px;}
    .SliderVal {margin: 0 0 30px 0; font-weight: 600; color: var(--txtColor); font-size: 24px;}
`
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
const Switch = styled.div `display: block; text-align: center; height: 0;
    a {width: 60px; height: 60px; background: var(--primary); border-radius: 100%; display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease-in-out 0s; cursor: pointer; z-index: 1; position: relative; top: -48px; 
        img {filter: brightness(100);}
        &:hover {transform: rotate(180deg); box-shadow: 0 0 0 5px rgba(27,193,154,0.2); }
    }
    ${SliderBx} + & a {top: -69px;}
`
const InfoSec = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 15px 19px 5px; margin: -10px 0 21px 0;
    &.mt0 {margin-top: 0;}
    p {display: flex; align-items: center; color: var(--txtLight); margin: 0 0 11px 0;
        a {vertical-align: top; display: inline-block; margin: 5px 0 0 8px;}
        span {margin-left: auto;}
        &.bold {font-weight: 600;}
    }
    .img {margin-right: 7px;
        img {margin-right: 3px;}
    }
    h4 {font-size: 16px; font-weight: 600; color: var(--txtLight); margin: 0 0 16px;}
`


export default PoolSec