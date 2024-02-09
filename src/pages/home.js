import React, { Component,  useEffect, useState } from 'react'
import styled from 'styled-components'
import Gs from '../theme/globalStyles'
import Media from './../theme/media-breackpoint'; 
import { Link, NavLink } from 'react-router-dom' 
import OwlCarousel from 'react-owl-carousel-rtl'
import 'owl.carousel/dist/assets/owl.carousel.css';

import WalletIco from '../assets/images/wallet.png'
import Thr from '../assets/images/tather.png'
import Dwn from '../assets/images/down.png'
import Eth from '../assets/images/eth.png'
import Swap from '../assets/images/swap.png'
import bannerEl from '../assets/images/bannerEl.png'
import Timg from '../assets/images/Timg.png'
import ArrowR from '../assets/images/arrow-right.png'
import ChartSm from '../assets/images/chartSm.png'
import trustimg from '../assets/images/trustimg.png'
import startimg from '../assets/images/startimg.png'
import checkIco from '../assets/images/check.png'
import bannerBg from '../assets/images/bannerBg.jpg'



const Home = (props) => {

/*  useEffect(() => { 
    window.scrollTo(0, 10) 
  }, []) */
  const logoSlider =  {
		0: {
			margin: 16,
		},
		768: {
			margin: 16
		},
		991: {
			margin: 16,
		},
		1400: {
			margin: 16
		}
	}
  
  return (
    <>   
      <Banner>
        <Gs.Container>
          <div className='banner-left'>
            <h1><span>Token</span> swap
  with efficiency</h1>
            <p>At our cryptocurrency token exchange platform, we offer an easy-to-use token swap service that allows you to seamlessly exchange one type of token for another with maximum efficiency.</p>
          </div>
          <Exchange>
            <div className='ExTop'>
              <a className='switch'><img src={Swap} alt='Swap'/></a>
              <div className='ExBox'>
                <div className='input-container'>
                  <label for='yousend'>You Send</label>
                  <input type='type' id='yousend' className='' placeholder='' name='' value='0.00' />
                </div>
                <div className='ExBox-right'>
                  <a className='selectBtn'><img className='token' src={Thr} alt='' />Tether <img className='arrow' src={Dwn} alt='' /></a>
                  <h4>USDT</h4>
                </div>
              </div>
              <div className='ExBox'>
                <div className='input-container'>
                  <label for='youGet'>You Get</label>
                  <input type='type' id='youGet' className='' placeholder='' name='' value='0.00' />
                </div>
                <div className='ExBox-right'>
                  <a className='selectBtn'><img className='token' src={Eth} alt='' />ETH <img className='arrow' src={Dwn} alt='' /></a>
                  <h4>USDT</h4>
                </div>
              </div>
            </div>
            <Gs.BtnSm className='lg'><img src={WalletIco} alt='Wallet'/> Connect Wallet</Gs.BtnSm>
          </Exchange>
        </Gs.Container>
      </Banner>

      <SliderContainer>
        <MovingLogos>
          <OwlCarousel className='owl-theme' smartSpeed={5500} autoplayTimeout={5000} loop margin={16} autoWidth={true} autoplay={true} responsive={logoSlider}>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
          </OwlCarousel>
        </MovingLogos>
        <MovingLogos className='cambioR'>
          <OwlCarousel className='owl-theme' smartSpeed={5500} autoplayTimeout={5000} rtlClass="owl-rtl" rtl={true} loop margin={16} autoWidth={true} autoplay={true} responsive={logoSlider}>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
            <div className='tag'><img src={Eth} alt='eth'/> ETH <span>$2223.18</span></div>
          </OwlCarousel>
        </MovingLogos>
      </SliderContainer>

      <TableContainer>
        <TbTop>
          <h3>Popular exchange pairs</h3>
          <div className='TbTop-right'>
            <div className=''><img src={Timg} alt='' /></div>
            <div className=''>
              <h4>Explore multiple other assets</h4>
              <p>New assets are specially selected and added regularly.</p>
            </div>
            <a><img src={ArrowR} alt='Arrow' /></a>
          </div>
        </TbTop>
        <table>
          <thead>
            <tr>
              <th align='left'>Exchange</th>
              <th align='left'>24-Hours Statics</th>
              <th align='center'>Market State</th>
              <th align='left'>Volume</th>
            </tr>

          </thead>
          <tr>
            <td data-title="Exchange"><b className='coins'><img src={Thr}/><img src={Eth}/></b>USDC - ETH</td>
            <td data-title="24-Hours Statics"><span>-1.33%</span></td>
            <td data-title="Market State"><div className='chart'><img src={ChartSm}/></div></td>
            <td data-title="Volume">1 USDC <br />
            0.0004476 ETH</td>
          </tr>
          <tr>
            <td data-title="Exchange"><b className='coins'><img src={Thr}/><img src={Eth}/></b>USDC - ETH</td>
            <td data-title="24-Hours Statics"><span>-1.33%</span></td>
            <td data-title="Market State"><div className='chart'><img src={ChartSm}/></div></td>
            <td data-title="Volume">1 USDC <br />
            0.0004476 ETH</td>
          </tr>
          <tr>
            <td data-title="Exchange"><b className='coins'><img src={Thr}/><img src={Eth}/></b>USDC - ETH</td>
            <td data-title="24-Hours Statics"><span>-1.33%</span></td>
            <td data-title="Market State"><div className='chart'><img src={ChartSm}/></div></td>
            <td data-title="Volume">1 USDC <br />
            0.0004476 ETH</td>
          </tr>
          <tr>
            <td data-title="Exchange"><b className='coins'><img src={Thr}/><img src={Eth}/></b>USDC - ETH</td>
            <td data-title="24-Hours Statics"><span>-1.33%</span></td>
            <td data-title="Market State"><div className='chart'><img src={ChartSm}/></div></td>
            <td data-title="Volume">1 USDC <br />
            0.0004476 ETH</td>
          </tr>
          <tr>
            <td data-title="Exchange"><b className='coins'><img src={Thr}/><img src={Eth}/></b>USDC - ETH</td>
            <td data-title="24-Hours Statics"><span>-1.33%</span></td>
            <td data-title="Market State"><div className='chart'><img src={ChartSm}/></div></td>
            <td data-title="Volume">1 USDC <br />
            0.0004476 ETH</td>
          </tr>
        </table>
      </TableContainer>

      <Trust>
        <Gs.Container>
          <div className='TrustLeft'>
            <h2>Trust in <br/> Chief Finance</h2>
            <p>With its innovative features and unparalleled security measures, Chief Finance is the ultimate choice for anyone seeking a reliable and efficient cryptocurrency.</p>
            <Gs.BtnSm>Buy CFNC</Gs.BtnSm>
            <a className='btn02'>Learn</a>
          </div>
          <div className='TrustRight'>
            <img src={trustimg} alt='trust img' />
          </div>
        </Gs.Container>
      </Trust>

      <Start>
        <Gs.Container>
          <div className='s-left'>
            <img src={startimg} alt='startimg'/>
          </div>
          <div className='s-right'>
            <h2>Start <br/>
            in seconds</h2>
            <ul>
              <li><img src={checkIco} alt='check' /> Connect your crypto wallet to start using in seconds.</li>
              <li><img src={checkIco} alt='check' /> No registration needed.</li>
              <Gs.BtnSm>Buy CFNC</Gs.BtnSm>
            </ul>
          </div>
        </Gs.Container>
      </Start>
      
      <EarnIncome>
        <Gs.Container>
          <h3>Earn passive income <br/>with crypto</h3>
          <p>Chief Finance make it easy to make your crypto work for you.</p>
          <div className='card-main'>
            <figure>
              <span>CNFC - USDT</span>
              <strong>4.552383%</strong>
              <p>APR</p>
            </figure>
            <figure>
              <span>CFNC-ETH</span>
              <strong>2.956383%</strong>
              <p>APR</p>
            </figure>
            <figure>
              <span>CFNC-BTC</span>
              <strong>0.022383%</strong>
              <p>APR</p>
            </figure>
            <figure>
              <span>DAI-USDT</span>
              <strong>4.552383%</strong>
              <p>APR</p>
            </figure>
            <figure>
              <span>DIVI-USDT</span>
              <strong>4.552383%</strong>
              <p>APR</p>
            </figure>
          </div>
          <Gs.BtnSm>Explore</Gs.BtnSm>
        </Gs.Container>
      </EarnIncome>
    </>
  )
}

const Banner = styled.div `
  width: 100%; padding: 156px 0 173px 0; position: relative; z-index: 2;
  &:after {content: ''; position: absolute; left: 0; right: 0; top: 0; height: 1032px; background: url(${bannerBg}) no-repeat; z-index: -1;}
  h1 {font-size: 100px; margin: 0 0 31px 0; line-height: 1; letter-spacing: -1.5px;
    span {color: var(--primary); border: 1px dashed currentColor; display: inline-block; padding: 0 15px; line-height: 1; margin-left: -15px; margin-right: -10px;}
  }
  p {color: var(--txtLight); font-size: 24px; padding-right: 50px;}
  .banner-left {width: 685px; align-self: center;
  }
  ${Media.lg} {
    &:after {background-size: cover;}
    .banner-left {width: 48%;}
    h1 {font-size: 80px;}
    p {padding-right: 0;}
  }
  ${Media.lg2} {
    padding: 100px 0 130px 0;
    h1 {font-size: 66px;}
    p {font-size: 20px; line-height: 1.4;}
  }
  ${Media.md} {
    .banner-left {width: 100%; margin-bottom: 30px; text-align: center;}
    h1 {
      span {margin: 0;}
    }
  }
  ${Media.sm} {
    h1 {font-size: 56px;}
  }
  ${Media.xs} {
    padding: 70px 0 80px 0;
    h1 {font-size: 40px; margin: 0 0 22px 0;
      span {padding: 2px 8px;}
    }
  }
`
const Exchange = styled.div `
  width: 602px; box-shadow: 0 0 8px #08514030; display: flex; border-radius: 30px; margin-left: auto; padding: 50px; flex-flow: column; align-self: center; position: relative; background: rgba(255,255,255,0.5);
  &:after {content:""; position: absolute; right: 100%; top: 32px; background: url(${bannerEl}) no-repeat; width: 225px; height: 221px;}
  .ExTop {position: relative; margin: 0 0 26px 0;
    .switch {width: 60px; height: 60px; position: absolute; top: 50%; left: 50%; margin-top: -8px; background: var(--primary); border-radius: 100%; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%); box-shadow: 0 0 0 5px rgba(27,193,154,0.2); transition: all 0.3s ease-in-out 0s; cursor: pointer; z-index: 1;
      &:hover {transform: translate(-50%,-50%) rotate(180deg);}
    }
  }
  .ExBox {display: flex; box-shadow: 1px -2px 7px rgba(0,0,0,0.16); border-radius: 10px; height: 128px; overflow: hidden; transition: all 0.3s ease-in-out; margin-bottom: 16px; background: rgba(255,255,255,0.6);
    &:focus-within {box-shadow: 0 0 7px 2px rgba(0,0,0,0.16);}
    .input-container {position: relative;
      input {border: 0px; font-size: 35px; background: none; color: #9ba4a6; font-family: var(--font); padding: 12px 30px 0; height: 128px; width: 100%;}
      label {font-size: 20px; color: var(--txtColor); position: absolute; padding: 0 30px; top: 25px; left: 0;}
    }
    .ExBox-right { width: 160px; flex-shrink: 0; align-self: center; padding: 0 20px 0 0;
      .selectBtn {display: flex; align-items: center; font-size: 20px; margin-bottom: 2px; width: 100%; border-radius: 4px; padding: 4px 8px;
        &:hover {background: rgba(0,0,0,0.16); } 
        .token {margin-right: 9px; width: 28px; height: 28px;}
        .arrow {margin-left: auto; margin-right: 5px; flex-shrink: 0; position: relative; right: -5px;}
      }
      h4 {font-size: 24px; color: var(--txtColor); font-weight: 500; margin: 0; padding: 0 8px 4px;}
    }
  }
  ${Media.lg} {
    max-width: 48%;
    &:after {width: 160px; height: 210px; background-size: contain;}
  }
  ${Media.lg2} {
    padding: 35px;
    &:after {display: none;}
    .ExTop {margin-bottom: 5px;}
  }
  ${Media.md} {
    width: 100%; max-width: 100%;
  }
  ${Media.xs} {
    padding: 25px;
    .ExBox {flex-flow: column; height: auto;
      .input-container { border-bottom: 1px solid #e5e5e5;
        padding-top: 15px;
        input {height: 50px; font-size: 25px; padding: 0 30px 0;}
        label {font-size: 18px; top: 5px; position: static;}
      }
      .ExBox-right {width: 100%; padding: 15px 10px;
        h4 {font-size: 20px;}
      }
    }
  }
`
const SliderContainer = styled.div `
  position: relative; z-index: 4; 
  &:before {content: ''; background: #fff; position: absolute; top: -40px; bottom: -40px; right: -80px;  width: 240px; z-index: 4; filter: blur(25px);}
  &:after {content: ''; background: #fff; position: absolute; top: -40px; bottom: -40px; left: -80px;  width: 240px; z-index: 4; filter: blur(25px);}
  ${Media.sm} {
    &:before {right: -180px;}
    &:after {left: -180px;}
  }
`
const MovingLogos = styled.div `
  display: flex; align-items: center; margin: 8px 0; position: relative; z-index: 2;
  .tag {height: 60px; width: 177px; background: #fff; box-shadow: 0 0 8px #08514030; border-radius: 50px; margin: 4px 0; display: flex; align-items: center; justify-content: center; font-weight: 600; text-transform: uppercase; 
    span {color: var(--txtRed); margin-left: 8px;}
  }
  .owl-carousel .owl-item img {width: 28px; height: 28px; object-fit: contain; margin-right: 8px;}
  .owl-carousel.owl-rtl { 
    .tag {direction: ltr;}
  }
  .owl-dots {display: none;}
  /* @keyframes cambio {
    from {margin-left: 0%}
    to {margin-left: -100%}
  }
  @keyframes cambioR {
    from {margin-left: 0%}
    to {margin-left: 100%}
  } */
  ${Media.xs} {
    .tag {height: 50px; width: 165px;}
  }
`
const TableContainer = styled.div `
  background: #fff; border-radius: 10px; width: 1214px; margin: 116px auto 0; max-width: calc(100% - 40px);
  box-shadow: 0px 9px 55.9px 9.1px rgba(27,193,154,0.15); position: relative; z-index: 2;
  &:after {content: ''; background: #bae1d8; position: absolute; top: 0; left: 50vw; margin-left: 250px; height: 500px; width: 500px; border-radius: 100%; z-index: -1; filter: blur(50px); opacity: 0.4;}
  table {width: 100%;
    th {text-align: left; padding: 0 30px; font-size: 20px; background: #e8f9f5; height: 60px; font-weight: 600;
      &[align='center'] {text-align: center;}
    }
    td {padding: 0 30px; font-size: 20px; height: 60px; height: 100px; border-bottom: 1px solid #e5e5e5;
      span {color: #e13046;}
      .chart {display: table; margin: 0px auto;}
      .coins { margin-right: 16px;
        img {margin-right: -8px; width: 25px; height: 25px; object-fit: contain;}
      }
    }
  }
  ${Media.sm} {
    table {display: block;
      thead {display: none;}
      tr { border-bottom: 1px solid #e5e5e5; padding: 10px 0;
        display: flex; flex-flow: wrap; 
        td {display: block; width: 50%; height: auto; border-bottom: 0; font-size: 18px; padding: 10px 30px;
          &:before {content: attr(data-title); font-weight: 600; display: block; margin-bottom: 5px;}
          .chart {margin: 0;}
        }
      }
    }
  }
  ${Media.xs} {
    margin-top: 80px;
    table {
      tr {
        td {
          width: 100%; padding: 12px 20px;
          .chart {width: 100%;
          }
        }
      }
    }
  }
`
const TbTop = styled.div `
  display: flex; width: 100%; padding: 22px 35px;
  h3 {font-size: 35px; margin: 0; font-weight: 600;}
  .TbTop-right {margin-left: auto; display: flex; align-items: center; 
    div > img {margin-top: 5px;}
    h4 {margin: 0; font-size: 20px; color: var(--primary); font-weight: 600;}
    p {margin: 0; color: var(--txtLight); font-size: 16px;}
    a {width: 30px; height: 30px; background: var(--primary); border-radius: 100%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 4px rgba(27,193,154,0.2); margin-left: 14px; flex-shrink: 0;}
  }
  ${Media.md} {
    h3 {font-size: 28px;}
  }
  ${Media.sm} {
    border-bottom: 1px solid #e5e5e5;
    flex-flow: column;
  }
  ${Media.xs} {
    padding: 22px 20px;
    h3 {font-size: 25px; margin-bottom: 20px;}
    .TbTop-right {flex-flow: column; align-items: flex-start;
      div > img {margin: 0 0 0 -10px;}
      a {margin: 10px 0 0;}
    }
  }
`
const Trust = styled.div `
position: relative; z-index: 2; padding: 130px 0; 
&:after {content: ''; background: #158c72; position: absolute; top: 20%; left: -75px; height: 150px; width: 150px; border-radius: 100%; z-index: -1; filter: blur(50px); opacity: 0.4;}
.TrustLeft {width: 34%; align-self: center; margin-left: 90px; 
    h2 {font-size: 60px; margin: 0; line-height: 1;}
    p {font-size: 24px; color: var(--txtLight);}
    .btn02 {padding: 0 20px; color: var(--txtLight); height: 45px; text-align: center; font-size: 18px; display: inline-flex; align-items: center; justify-content: center; border-radius: 5px; border: 1px solid rgba(99,100,106,0.10); margin-left: 20px; font-weight: 600;
      &:hover {background: var(--txtColor); border-color: var(--txtColor); color: #fff;}
    }
  }
  .TrustRight {width: 58.33%; align-self: center; margin-left: auto;
    img {max-width: inherit;}
  }
  ${Media.lg} {
    .TrustLeft {margin-left: 0;}
  }
  ${Media.lg2} {
    .TrustLeft {width: 44%;}
    .TrustRight {width: 56%; display: flex; justify-content: center;
      img {margin-right: -10%;}
    }
  }
  ${Media.md} {
    .TrustLeft {width: 100%; text-align: center; order: 2;
      h2 {font-size: 45px;}
    }
    .TrustRight {width: 100%; order: 1; margin-bottom: 30px;
      img {max-width: 700px;}
    }
  }
  ${Media.xs} {
    padding: 100px 0;
    &:after {display: none;}
    .TrustLeft {
      h2 {font-size: 35px;}
      p {font-size: 18px; line-height: 1.5;}
    }
    .TrustRight {
      img {max-width: 130%;}
    }
  }
`
const Start = styled.div `
  background: #e6f9f4; padding: 96px 0;
  .s-left {
    align-self: center;
  }
  .s-right {
    align-self: center; margin: 0 auto; width: 33.33%;
    h2 {font-size: 60px; margin: 0 0 35px; line-height: 1;}
    ul {padding: 0; margin: 0;}
    li {font-size: 24px; color: var(--txtLight); list-style: none; margin-bottom: 30px; display: flex;
      img {width: 16px; height: 16px; margin: 8px 10px 0 0;}
    }
  }
  ${Media.lg2} {
    .s-left {width: 50%;
      img {max-width: 100%;}
    }
    .s-right {width: 40%; margin: 0 0 0 auto;}
  }
  ${Media.md} {
    .s-left {width: 100%;  margin-bottom: 30px; text-align: center;
      img {max-width: 450px;}
    }
    .s-right {width: 100%; text-align: center;
      h2 {font-size: 45px; margin: 0 0 20px}
      li {justify-content: center; margin: 0 0 20px}
    }
  }
  ${Media.xs} {
    padding: 80px 0;
    &:after {display: none;}
    .s-right {
      h2 {font-size: 35px;}
      li {font-size: 18px; line-height: 1.5; margin-bottom: 15px;
        img { margin: 6px 5px 0 0;}
      }
    }
    .s-left {
      img {max-width: 100%;}
    }
  }
`
const EarnIncome = styled.div ` padding: 107px 0; position: relative; z-index: 2;
&:before {content: ''; background: #158c72; position: absolute; top: 20%; left: -100px; height: 300px; width: 150px; border-radius: 100%; z-index: -1; filter: blur(50px); opacity: 0.2;}
&:after {content: ''; background: #158c72; position: absolute; top: 20%; right: -100px; height: 300px; width: 150px; border-radius: 100%; z-index: -1; filter: blur(50px); opacity: 0.2;}
  h3 {width: 100%; margin: 0 0 25px; line-height: 1; text-align: center; font-size: 60px; font-weight: 700; }
  p {width: 410px; text-align: center; color: var(--txtLight); font-size: 24px; margin: 0 auto 60px; }
  .card-main {width: 100%; margin-bottom: 50px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 48px;
    figure {
      box-shadow: 0 0 8px #08514030; border-radius: 10px; display: flex; flex-flow: column;  justify-content: center; text-align: center; padding: 24px 0; position: relative;
      span {font-size: 24px; color: var(--txtColor); margin: 0 0 4px 0;}
      strong {color: var(--primary); font-size: 35px; font-weight: 700; margin: 0 0 7px 0;}
      p {margin: 0; color: var(--txtLight); font-size: 20px; width: 100%;}
      &:before { content: ""; position: absolute; left: 50%; top: 0; width: 50px; border-left: 9px solid transparent; border-right: 9px solid transparent; border-top: 5px solid #cff2ea; margin-left: -25px;}
      &:before { content: ""; position: absolute; left: 50%; bottom: 0; width: 50px; border-left: 9px solid transparent; border-right: 9px solid transparent; border-bottom: 5px solid #cff2ea; margin-left: -25px;}
    }
  }
  ${Media.lg} {
    .card-main {
      gap: 30px;
    }
  }
  ${Media.lg2} {
    .card-main {
      gap: 15px;
      figure {padding: 20px 0;
        span {font-size: 20px; margin: 0;}
        strong {font-size: 26px; margin: 5px 0;}
        p {font-size: 20px;}
      }
    }
  }
  ${Media.md} {
    h3 {font-size: 45px; margin: 0 0 20px}
    p {font-size: 20px;}
    .card-main {
      display: flex; justify-content: center; flex-flow: wrap; gap: 20px;
      figure {
        width: 30%;
      }
    }
  }
  ${Media.xs} {
    padding: 80px 0;
    h3 {font-size: 35px;}
    p {font-size: 18px; line-height: 1.5;}
    .card-main {
      display: flex; justify-content: center; flex-flow: wrap; gap: 20px;
      figure {
        width: 200px; max-width: calc(50% - 20px);
        strong {font-size: 24px;}
      }
    }
  }
`


export default Home;