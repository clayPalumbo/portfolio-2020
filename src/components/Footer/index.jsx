import React from 'react';
import { FooterWrapper } from './styles'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="Footer">
                <div className="Footer-left">
                    <div className="Footer-name">Clay <span>Palumbo</span></div>
                    <div className="Footer-title">Creative Software Developer</div>
                </div>
                <div className="Footer-contact">
                    {/* <div className="Contact">
                        Contact
                    </div> */}
                    <div>
                        <a className="Footer-link" href="https://www.linkedin.com/in/clay-palumbo/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        <a className="Footer-link" href="mailto:clayptv@gmail.com?Subject=Hello%20there" target="_blank" rel="noopener noreferrer">Email</a>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer;
