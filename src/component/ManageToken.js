import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Gs from '../theme/globalStyles'
import Media from './../theme/media-breackpoint' 
import cross from '../assets/images/cross.png'
import Eth from '../assets/images/eth.png'
import MetaIcon from '../assets/images/metamask.png'
import walletconnect from '../assets/images/walletconnect.png'
import leftArrow from '../assets/images/leftArrow.png'


const ManageToken = ({ClickChange }) => { 
    const [isAddToken, setAddToken] = useState(false);
    const toggleAddToken = () => {
        setAddToken(!isAddToken);
    };
    return (
        <Gs.PopupMain>
            <Gs.OverLay onClick={ClickChange} />
            <Gs.Popup>
                <h3>
                    <a className='arrow'><img width={20} src={leftArrow} alt='cross'/></a>
                    Manage
                    <a onClick={ClickChange} className='close'><img width={12} src={cross} alt='cross'/></a>
                </h3>
                {!isAddToken ?
                <Gs.BtnSm onClick={toggleAddToken} className='lg'>+ &nbsp; Add Your Token</Gs.BtnSm> :
                <TextBox>
                    <label>Add your token address</label>
                    <input type='text' name='address' placeholder=''></input>
                </TextBox>}
            </Gs.Popup>
        </Gs.PopupMain>
    )
}

const TextBox = styled.div `
    display: flex; flex-flow: column;
    label {color: var(--txtLight); font-size: 14px; margin-bottom: 8px;}
    input {color: var(--txtBlue); background: var(--bgLight); border: 0; border-radius: 5px; height: 65px; font-weight: 500; padding: 8px 12px;}
`

export default ManageToken