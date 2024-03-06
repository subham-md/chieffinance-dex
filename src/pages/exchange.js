import React, { Component,  useEffect, useState } from 'react'
import styled from 'styled-components'
import Gs from '../theme/globalStyles'
import Media from './../theme/media-breackpoint'; 
import SelectToken from './../component/selecttoken'; 
import ConfirmExchange from './../component/confirmExchange'; 
import ManageToken from './../component/ManageToken'; 
import PoolTab from './../component/PoolTab'; 
import ExchangePops from './../component/ExchangePops'; 
import { Link, NavLink } from 'react-router-dom' 
import OwlCarousel from 'react-owl-carousel-rtl'
import 'owl.carousel/dist/assets/owl.carousel.css';


import WalletIco from '../assets/images/wallet.png'
import resetIco from '../assets/images/reset.png'
import chartIco from '../assets/images/chartIco.png'
import Thr from '../assets/images/tather.png'
import Dwn from '../assets/images/arrow2.png'
import Swap from '../assets/images/swap.png'
import InfoIco from '../assets/images/info.png'
import SettingIco from '../assets/images/setting.png'
import ChartImg from '../assets/images/chart.png'




const ExchangePage = (props) => {
    const [isSelectTokenVisible, setSelectTokenVisible] = useState(false);
    const toggleSelectToken = () => {
        setSelectTokenVisible(!isSelectTokenVisible);
    };
    const [isConfirmPopVisible, setConfirmPopVisible] = useState(false);
    const toggleConfirmPop = () => {
        setConfirmPopVisible(!isConfirmPopVisible);
    };
    const [isMngTokenVisible, setMngTokenVisible] = useState(false);
    const toggleMngToken = () => {
        setMngTokenVisible(!isMngTokenVisible);
        setSelectTokenVisible(false);
    };

    // Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <>   
            <ExchangeBg>
                <Gs.Container>
                    <h2>Exchange (DeFi)</h2>
                    {/* <ChartSec>
                        <img src={ChartImg} alt='Chart Img' />
                    </ChartSec> */}
                    <ExchangeBx>
                        <ExchangeTop>
                            <TabMain>
                                <a className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Pool</a>
                                <a className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)} >Exchange</a>
                            </TabMain>
                            
                            <a className='rightBtns'><img src={resetIco} alt='reset' /></a>
                            <a className='rightBtns'><img src={chartIco} alt='chart' /></a>
                        </ExchangeTop>
                        {activeTab === 0 &&
                        <TabContainer>
                            <AmountBox>
                                <ExBox>
                                    <div className='input-container'>
                                        <label htmlFor='yousend'>Availability: 0 USDT</label>
                                        <input type='type' id='yousend' className='' placeholder='0.000' name=''  />
                                        <b>MAX</b>
                                    </div>
                                    <DropSelect className='ExBox-right'>
                                        <a onClick={toggleSelectToken} className='selectBtn'><img className='token' src={Thr} alt='' />
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
                                        <a onClick={toggleSelectToken} className='selectBtn'><img className='token' src={Thr} alt='' />
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
                                <p>Price <span>10 WBTC per ETH</span></p>
                                <p>Slippage Tolerance <i><img width={20} src={InfoIco} /></i> <a><img width={16} src={SettingIco} /></a> 
                                <span>0.5%</span></p>
                            </InfoSec>
                            <Gs.BtnSm onClick={toggleConfirmPop} className='lg'><img src={WalletIco} alt='Wallet'/> Connect Wallet</Gs.BtnSm>
                        </TabContainer>}
                        {activeTab === 1 && <TabContainer>
                            <PoolTab />
                        </TabContainer>}
                    </ExchangeBx>
                    {activeTab === 1 && <SeeAllBtn><a>See all available pools</a></SeeAllBtn>}
                </Gs.Container>
            </ExchangeBg>


            {isSelectTokenVisible && <SelectToken ClickChange={toggleMngToken} onClose={toggleSelectToken} />}
            {isConfirmPopVisible && <ConfirmExchange onClose={toggleConfirmPop} />}
            {isMngTokenVisible && <ManageToken ClickChange={toggleMngToken} />}
            <ExchangePops />
        </>
    )
}

const ExchangeBg = styled.section `
    min-height: 100vh; background: #d0e6ea; position: relative; z-index: 2;
    h2 {color: var(--txtBlue); width: 100%; text-align: center; font-size: 24px; margin: 25px 0;}
    &:after { content:""; position: absolute; top: 80px; left: 50%; transform: translate(-50%, 0%); background: var(--primary);  width: 440px; height: 600px; z-index: -1; opacity: 0.1; filter: blur(80px)}
`
const ExchangeBx = styled.section `
    border: 1px solid #fff; border-radius: 30px; box-shadow: 4px 0px 6px 2px rgba(0, 0, 0, 0.04); width: 440px; /* min-height: 634px; */ background: rgba(255, 255, 255, 0.40); margin: 0px auto; padding: 26px 30px; max-width: 100%;
    ${Media.xs} {padding: 18px 18px; border-radius: 20px; height: auto;}
`

// Top most part for the box
const ExchangeTop = styled.div `
    display: flex; align-items: center; margin-bottom: 19px;
    .rightBtns {width: 30px; height: 30px; background: #fff; border-radius: 3px; margin-left: 9px; display: flex; align-items: center; justify-content: center;
        img {width: 15px; height: 15px; object-fit: contain; transition: all 0.3s ease-in-out;}
        &:hover {background: var(--txtColor);
            img {filter: brightness(100);}
        }
    }
`
const TabMain = styled.div `
    border-radius: 10px; background: var(--bgLight2); width: 221px; height: 50px; display: flex; padding: 5px; margin-right: auto;
    a {width: 50%; font-weight: 500; border-radius: 10px; text-align: center; padding: 9px 0;
        &.active {background: #fff; box-shadow: 0px 0px 6px rgba(27,193,154,0.07);}
    }
`
// Top most part for the box

const AmountBox = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 20px 19px 32px; margin: 0 0 28px 0;
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
`
const InfoSec = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 15px 19px 5px; margin: -10px 0 21px 0;
    p {display: flex; align-items: center; color: var(--txtLight); margin: 0 0 11px 0;
        a {vertical-align: top; display: inline-block; margin: 5px 0 0 8px;}
        span {margin-left: auto;}
    }
`
const ChartSec = styled.div `
    background: #fff; border-radius: 20px; overflow: hidden; padding: 10px 10px 0; width: 865px;
`
const TabContainer = styled.div `
`
const SeeAllBtn = styled.a ` width: 100%; text-align: center; font-weight: 600; font-size: 18px; margin-top: 36px;
    a {
        color: var(--primary); 
    }
`

export default ExchangePage;