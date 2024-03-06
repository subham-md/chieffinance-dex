import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Media from './../theme/media-breackpoint' 
import Gs from '../theme/globalStyles' 
import cross from '../assets/images/cross.png'
import searchIco from '../assets/images/search.png'
import Eth from '../assets/images/eth.png'


const SelectToken = ({onClose, ClickChange }) => { 
    return (
        <Gs.PopupMain>
            <Gs.OverLay onClick={onClose} />
            <Gs.Popup className='hasBorderBtm'>
                <h3>Select a token 
                    <a onClick={onClose} className='close'><img width={12} src={cross} alt='cross'/></a>
                </h3>
                <Search>
                    <img src={searchIco} alt='searchIco' width={15} />
                    <input type='text' name='' placeholder='Search' />
                </Search>
                <ScrollList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                    <TokenList>
                        <div className='tlLeft'>
                            <img src={Eth} alt='someting' />
                            <p>
                                ETH
                                <span>Ether</span>
                            </p>
                        </div>
                        <div className='val'>0</div>
                    </TokenList>
                </ScrollList>
                <ManageBtn onClick={ClickChange} className='manageBtn'>Manage Tokens</ManageBtn>
            </Gs.Popup>
        </Gs.PopupMain>
    )
}

const ManageBtn = styled.a`
    font-weight: 600; color: var(--primary); display: table; margin: 19px auto; font-size: 18px;
    &:hover {color: var(--txtColor);}
`
const Search = styled.div`
    width: 100%; position: relative; margin: 30px 0 0 0;
    img {position: absolute; right: 20px; top: 12px;}
    input {height: 40px; width: 100%; border: 0px; background: var(--bgLight2); border-radius: 5px; color: var(--txtColor); font-family: var(--font); padding: 0 40px 2px 20px; border: 1px solid var(--bgLight2); transition: all 0.3s ease-in-out; line-height: 1;
        &:focus {border: 1px solid var(--primary);}
        ::-ms-input-placeholder { /* Edge 12-18 */
            color: var(--txtLight2);
        }
        ::placeholder {
            color: var(--txtLight2);
        }
    }
`
const ScrollList = styled.ul `
    padding: 0; margin: 20px 0 0; max-height: 384px; overflow-y: scroll; overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 7px;
    }
    ::-webkit-scrollbar-track {
        background: var(--bgLight2);
        border-radius: 10px;
        box-shadow: inset 0 0 0 1px #fff;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--primary); 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--txtColor); 
    }
`
const TokenList = styled.li `
    display: flex; align-items: center; border: 1px solid transparent; border-radius: 5px; padding: 8px 11px; background: none; width: calc(100% - 10px); cursor: pointer; transition: all 0.3s ease-in-out;
    .tlLeft {display: flex; align-items: center; 
        img {width: 30px; height: 30px; object-fit: contain; flex-shrink: 0; margin-right: 8px;}
        p {margin: 0; font-size: 18px; font-weight: 600; color: #000; line-height: 1;
            span {display: block; font-size: 12px; font-weight: 400; color: var(--txtLight2);}
        }
    }
    .val {color: #000; font-size:  18px; margin-left: auto; font-weight: 500;}
    &:hover {background: var(--bgLight2); border: 1px solid var(--primary);}
`

export default SelectToken