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
import errInfo from '../assets/images/errInfo.png'




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
                        <PageTitle>Cross Chain Exchange</PageTitle>
                        <AmountBox className='normal'>
                            <div className='DropDowns'>
                                <DropDown className='ExBox-right'>
                                    <a onClick={toggleSelectToken} className='selectBtn'><img className='token' src={Thr} alt='' />         
                                        <span>Token <b>Eth</b></span>
                                        <img className='arrow' src={Dwn} alt='' />
                                    </a>
                                </DropDown>
                                <DropDown className='ExBox-right'>
                                    <a onClick={toggleSelectToken} className='selectBtn'><img className='token' src={Thr} alt='' />         
                                        <span>Chain <b>GOERLI</b></span>
                                        <img className='arrow' src={Dwn} alt='' />
                                    </a>
                                </DropDown>
                            </div>
                            <ExBox>
                                <div className='input-container w-100'>
                                    <label for="yousend">Availability: 3.466170735217050926</label>
                                    <input type="type" id="yousend" class="" placeholder="0.000" name=""></input>
                                </div>
                            </ExBox>
                        </AmountBox>
                        <Switch className='normal'><a className='switch'><img src={Swap} alt='Swap'/></a></Switch>
                        <AmountBox className='normal'>
                            <div className='DropDowns'>
                                <DropDown className='ExBox-right'>
                                    <a onClick={toggleSelectToken} className='selectBtn'><img className='token' src={Thr} alt='' />         
                                        <span>Token <b>MATIC</b></span>
                                        <img className='arrow' src={Dwn} alt='' />
                                    </a>
                                </DropDown>
                                <DropDown className='ExBox-right'>
                                    <a onClick={toggleSelectToken} className='selectBtn'><img className='token' src={Thr} alt='' />         
                                        <span>Chain <b>Mumbai</b></span>
                                        <img className='arrow' src={Dwn} alt='' />
                                    </a>
                                </DropDown>
                            </div>
                            <ExBox className='v2'>
                                <div className='input-container w-100'>
                                    <label for="yousend">Availability: 3.466170735217050926</label>
                                    <input type="type" id="yousend" class="" placeholder="0.000" name=""></input>
                                </div>
                            </ExBox>
                        </AmountBox>
                        <InfoSec className='mt0'>
                            <p>Price <span>0.00000000</span></p>
                            <p>Slippage Tolerance <i><img width={20} src={InfoIco} /></i> <a><img width={16} src={SettingIco} /></a> 
                            <span className='color-primary'>1%</span></p>
                        </InfoSec>
                        <ErrorMessage><i><img width={16} src={errInfo}/></i> Please Enter Valid Amount</ErrorMessage>
                        <Gs.BtnSm className='lg'>Exchange</Gs.BtnSm>
                        <Gs.BtnSm className='lg'>Enter Valid Amount</Gs.BtnSm>
                        <Gs.BtnSm className='lg secondary'>Exchange</Gs.BtnSm>
                        <Gs.BtnSm className='lg error'>Error button</Gs.BtnSm>
                        <Gs.BtnSm className='lg disabled'>disabled</Gs.BtnSm>
                    </ExchangeBx>
                </Gs.Container>
            </ExchangeBg>

            {isSelectTokenVisible && <SelectToken ClickChange={toggleMngToken} onClose={toggleSelectToken} />}
            
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
const PageTitle = styled.h3 `
    font-size: 24px; font-weight: 500; color: #000; margin: 0 0 21px; text-align: center;
`
const AmountBox = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 20px 19px 32px; margin: 0 0 28px 0;
    .DropDowns {display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;}
    &.normal {padding-bottom: 20px; margin-bottom: 10px;}
`
const ExBox = styled.div `
    display: flex; border-radius: 5px;  overflow: hidden; transition: all 0.3s ease-in-out; margin-bottom: 10px; background: var(--bgLight); padding: 12px 12px; 
    &:focus-within {box-shadow: 0 0 7px 2px rgba(0,0,0,0.16);}
    &:last-child {margin-bottom: 0;}
    .input-container {position: relative; border-right: 1px solid #abd0d9; width: 214px; 
        &.w-100 {border-right: 0; width: 100%;}
        input {border: 0px; font-size: 24px; background: none; color: var(--txtLight); font-family: var(--font); padding: 0 55px 20px 0; height: 40px; width: 100%; font-weight: 600;
            ::-ms-input-placeholder { /* Edge 12-18 */
                color: var(--txtLight2);
            }
            ::placeholder {
                color: var(--txtLight2);
            }
        }
        label {font-size: 12px; color: var(--txtLight); position: absolute; padding: 0 0; top: 25px; left: 0;}
        b {font-size: 14px; font-weight: 600; color: var(--primary); position: absolute; top: 0; right: 17px; cursor: pointer;}
    }
    &.v2 {background: var(--offWhite); height: 64px;}
    ${Media.xs} {
        .input-container { width: calc(100% - 100px);
            input {font-size: 20px; padding: 0 45px 20px 0;}
            b {right: 8px;}
        }
    }
`
const DropDown = styled.div ` 
    width: 100%; flex-shrink: 0; align-self: center; margin-right: 0; margin-left: auto; border: 1px solid #dbdbdb; border-radius: 5px; padding: 0 14px;
    &:hover {border: 1px solid var(--primary);}
    .selectBtn {display: flex; align-items: center; font-size: 16px; margin-bottom: 2px; width: 100%; border-radius: 30px; padding: 0 0 0 0; height: 19px; width: 100%; height: 50px;
        .token {margin-right: 6px; width: 18px; height: 18px; }
        span {margin: 0 0 0 0;
            b {font-weight: 500;}
        }
        .arrow {margin-left: auto; width: 11px; flex-shrink: 0; position: relative;}
    }
`
const Switch = styled.div `display: block; text-align: center; height: 0;
    a {width: 60px; height: 60px; background: var(--primary); border-radius: 100%; display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s ease-in-out 0s; cursor: pointer; z-index: 1; position: relative; top: -48px; 
        img {filter: brightness(100);}
        &:hover {transform: rotate(180deg); box-shadow: 0 0 0 5px rgba(27,193,154,0.2); }
    }
    &.normal { height: auto; margin-bottom: 10px;
        a {top: 0;}
    }
`
const InfoSec = styled.div `
    background: #fff; border-radius: 10px;  width: 100%; padding: 15px 19px 5px; margin: -10px 0 21px 0;
    p {display: flex; align-items: center; color: var(--txtLight); margin: 0 0 11px 0;
        a {vertical-align: top; display: inline-block; margin: 5px 0 0 8px;}
        span {margin-left: auto;}
    }
    .color-primary {color: var(--primary);}
    &.mt0 {margin-top: 0;}
`
const ErrorMessage = styled.label `
    color: var(--txtRed); font-weight: 400; margin: 14px 0 8px; display: flex; align-items: center; justify-content: center; 
    i {margin-right: 4px; margin-top: 4px;}
`

export default ExchangePage;