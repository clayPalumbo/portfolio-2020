import React from 'react';
import { FooterWrapper } from './styles'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="Footer">
                <Slide cascade bottom>
                    <div className="Footer-left">
                        <div className="Footer-name">Clay <span>Palumbo</span></div>
                        <div className="Footer-title">Creative Software Engineer</div>
                    </div>
                </Slide>
                <div className="Footer-contact">
                    {/* <div className="Contact">
                        Contact
                    </div> */}
                    <Slide cascade bottom>
                        <div className="Contact">
                            <div>
                                <a className="Footer-link" href="https://www.linkedin.com/in/clay-palumbo/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                            </div>
                            <div>
                                <a className="Footer-link" href="mailto:clayptv@gmail.com?Subject=Hello%20there" target="_blank" rel="noopener noreferrer">Email</a>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer;
