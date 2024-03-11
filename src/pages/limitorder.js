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
import arrowLeft from '../assets/images/arrowLeft.png'
import arrowRight from '../assets/images/arrowRight.png'




const LimitOrder = (props) => {
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
            <ExchangeBg className='limit-order'>
                <Gs.Container>
                    <RightSide>
                        <ChartSec>
                            <img src={ChartImg} alt='Chart Img' />
                        </ChartSec>

                        <OrderTabs>
                            <div className='tabLink'>
                                <a className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}><i>Open Orders</i></a>
                                <a className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}><i>Order History</i></a>
                            </div>
                            {activeTab === 0 &&
                            <OrderTabsContent>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Limit Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='noOrder' colSpan={4}>No Open Orders</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <PageNav>
                                    <a className='disabled'><img src={arrowLeft} /></a>
                                    <span>Page 1 of 1</span>
                                    <a className='disabled'><img src={arrowRight} /></a>
                                </PageNav>
                            </OrderTabsContent>
                            }
                            {activeTab === 1 &&
                            <OrderTabsContent>

                            </OrderTabsContent>
                            }
                        </OrderTabs>
                    </RightSide>
                    <ExchangeBx>        
                        <PageTitle>Limit Order</PageTitle>               
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
                            
                            <PriceRow>
                                <div className=''>
                                    <span>Price:</span>
                                    <a className=''>Market Price</a>
                                </div>
                                <a className=''>At Market Price</a>
                            </PriceRow>
                            <PriceRow>
                                <div className=''>
                                    <span>Price:</span>
                                    <a className='active'>Market Price</a>
                                </div>
                                <a className='yellow'>At Market Price</a>
                            </PriceRow>
                            <InfoSec className='mt0 mb20'>
                                <h5>9.82540000</h5>
                            </InfoSec>
                            <InfoSec className='mt0'>
                                <p><b>ETH - UNI</b> <span>Expiration Date: 2.01.2024 <i><img width={20} src={InfoIco} /></i></span></p>
                                <p>Slippage Tolerance <i><img width={20} src={InfoIco} /></i> <a><img width={16} src={SettingIco} /></a> 
                                <span>0.5%</span></p>
                            </InfoSec>
                            <Gs.BtnSm onClick={toggleConfirmPop} className='lg'>Only possible to place sell orders
above market rate</Gs.BtnSm>
                            <Gs.BtnSm onClick={toggleConfirmPop} className='lg'>Place an Order</Gs.BtnSm>
                        </TabContainer>
                    </ExchangeBx>
                </Gs.Container>
            </ExchangeBg>

        </>
    )
}

const ExchangeBg = styled.section `
    min-height: 100vh; background: #d0e6ea; position: relative; z-index: 2;
    h2 {color: var(--txtBlue); width: 100%; text-align: center; font-size: 24px; margin: 25px 0;}
    &:after { content:""; position: absolute; top: 80px; left: 50%; transform: translate(-50%, 0%); background: var(--primary);  width: 440px; height: 600px; z-index: -1; opacity: 0.1; filter: blur(80px)}
    &.limit-order {padding: 70px 0;}
`
const ExchangeBx = styled.section `
    border: 1px solid #fff; border-radius: 30px; box-shadow: 4px 0px 6px 2px rgba(0, 0, 0, 0.04); width: 440px; /* min-height: 634px; */ background: rgba(255, 255, 255, 0.40); margin: 0px auto; padding: 26px 30px; max-width: 100%; align-self: flex-start;
    ${Media.lg} {margin-right: 0;}
    ${Media.xs} {padding: 18px 18px; border-radius: 20px; height: auto;}
    ${Media.md} {margin: 0 auto;}
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
        &.bold {font-weight: 600;}
    }
    h5 {font-size: 16px; font-weight: 500; margin: 0 0 10px 0;}
    &.mt0 {margin-top: 0;}
    &.mb20 {margin-bottom: 20px;}
`
const ChartSec = styled.div `
    background: #fff; border-radius: 20px; overflow: hidden; padding: 40px 56px 0; width: 865px; max-width:  100%;
    img {max-width:  100%;}
    ${Media.lg} {
        padding: 40px 20px 0;
    }
`
const TabContainer = styled.div `
`
const SeeAllBtn = styled.a ` width: 100%; text-align: center; font-weight: 600; font-size: 18px; margin-top: 36px;
    a {
        color: var(--primary); 
    }
`
const RightSide = styled.div `
    max-width: calc(100% - 440px); margin-right: auto;
    ${Media.lg} {
        max-width: calc(100% - 465px); margin-right: auto;
    }
    ${Media.md} {
        width: 100%; max-width: 100%; margin-bottom: 30px;
    }
`
const OrderTabs = styled.div `
    margin-top: 20px; display: flex; flex-flow: column; 
    .tabLink {
        width: 100%; display: grid; align-items: flex-end; grid-template-columns: 1fr 1fr; height: 50px;
        a {font-size: 18px; flex-grow: 1; width: 100%; text-align: center; border-radius: 20px; background: var(--bgLight); height: 40px; color: var(--txtLight2); font-weight: 700; display: flex; justify-content: center; align-items: center;
            i {font-style: normal; display: inline-block;}
            &:nth-child(1) {border-radius: 20px 0 0 0;}
            &:nth-child(2) {border-radius: 0 20px 0 0; justify-self: flex-end;}
            &.active {background: #fff; border-radius: 20px 20px 0 0; /* transform: scale(1.2); transform-origin: center bottom; */ height: 50px; width: calc(100% + 10px); z-index: 1; color: #000;
                i {}
            }
        }
    }
    ${Media.md} {
        .tabLink { 
            a {font-size: 16px;}
        }
    }
`
const OrderTabsContent = styled.div `
    background: #fff; min-height: 200px; border-radius: 0 0 20px 20px;
    table {width: 100%; 
        th {color: var(--txtLight2); font-weight: 500; height: 50px; border-bottom: 1px solid var(--txtLight2);}
        .noOrder {height: 200px; text-align: center; color: var(--txtLight2); font-weight: 500; font-size: 16px;}
    }
`
const PageNav = styled.div ` 
    display: flex; align-items: center; width: 100%; justify-content: center; margin-top: 15px; margin-bottom: 20px;
    span {margin: 0 20px; font-weight: 500;}
    a {display: inline-block; height: 10px;
        &.disabled {filter: grayscale(100) brightness(0.4);}
    }
    img {height: 10px;}
`
const PriceRow = styled.div `
    display: flex; align-items: center; margin-bottom: 10px; justify-content: space-between; margin-top: -10px;
    div {
        display: flex; align-items: center;
        a {border: 1px solid var(--txtLight); padding: 5px 13px; border-radius: 5px; margin-left: 10px;
            &.active, &:hover {background: var(--primary); color: #fff; border: 1px solid var(--primary);}
        }
    }
    & > a {color: var(--primary);
        &.yellow {color: var(--txtYellow);}
    }
    & + & {margin-top: 0;}
`
const PageTitle = styled.h3 `
    font-size: 22px; font-weight: 600; color: #000; margin: 0 0 21px; text-align: left;
    ${Media.xs} {
        font-size: 20px; margin-bottom: 15px;
    }
`

export default LimitOrder;