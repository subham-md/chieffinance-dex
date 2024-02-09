import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Media from './../theme/media-breackpoint' 
import Gs from '../theme/globalStyles' 
import logo2 from '../assets/images/logo2.png'
import twitter from '../assets/images/twitter.png'
import discord from '../assets/images/discord.png'
import telegram from '../assets/images/telegram.png'


const Footer = () => { 

    return (
        <FooterMain>
            <Gs.Container>
            <div className='fooLeft'>
                <img src={logo2} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. aliqua. </p>
                <p>© Copyright 2023 | All Rights Reserved.</p>
            </div>
            <div className='fooLink'>
                <h4>Links</h4>
                <a>Terms of Services</a>
                <a>Support</a>
                <a>FAQ</a>
            </div>
            <div className='fooLink'>
                <h4>Contact us</h4>
                <a><img src={twitter} /> Twitter</a>
                <a><img src={discord} /> Discord</a>
                <a><img src={telegram} /> Telegram</a>
            </div>
            </Gs.Container>
        </FooterMain>
    )
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;
const FooterMain = styled.div`
    background: #1c202c; color: #fff; padding: 40px 0;
    ${Gs.Container} {justify-content: space-between;}
    .fooLeft {width: 347px;
        img {width: 230px;}
        p {font-size: 18px; line-height: 1.4; margin: 20px 0 0;}
    }
    .fooLink {
        h4 {font-size: 24px; margin: 0 0 24px 0; font-weight: 600;
            &:after {content: ''; width: 30px; height: 2px; background: var(--primary); display: table; margin: 6px 0 0 3px;}
        }
        a {display: table; font-size: 18px; margin: 0 0 20px 0;
            &:hover {color: var(--primary);}
            img {margin: 4px 4px 0 0;}
        }
    }
    ${Media.md} {
        ${Gs.Container} {max-width: 100%;}
    }
    ${Media.sm} {
        .fooLeft {width: 100%; order: 3; margin-top: 30px;}
        .fooLink {order: 1;}
    }
`



export default Footer