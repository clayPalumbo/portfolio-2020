import React from 'react';
import { AboutWrapper } from './styles'
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';

const About = () => {
    return (
        <AboutWrapper>
            <div className="Container">
                <div className="Divider"></div>
                <Parallax
                    // blur={{ min: -15, max: 15 }}
                    bgImage="https://i.imgur.com/L8grRfa.jpg"
                    bgImageAlt="Charlotte"
                    className="Background"
                    strength={-200}
                    renderLayer={percentage => (
                        <div
                            style={{
                                position: 'absolute',
                                background: `rgba(161, 196, 253, ${(1 - (1.5 * percentage)) })`,
                                left: '0%',
                                top: '0%',
                                width: '100%',
                                height: 500,
                            }}
                        />
                    )}
                >
                    <div style={{ height: '200px' }} />
                </Parallax>
                        {/* <img src="https://ihg.scene7.com/is/image/ihg/kimpton-charlotte-header" alt="charlotte"/> */}

                <div className="Profile">
                    <img className="Profile-picture" src="https://media-exp1.licdn.com/dms/image/C4E03AQE3cOK6a2uBIA/profile-displayphoto-shrink_400_400/0/1639110572031?e=1649894400&v=beta&t=7HFATaS8rqcRli525W46xACvHFgOLYhShNviP3sjJsk" alt="Top tier candidate"/>
                    <a href="https://www.linkedin.com/in/clay-palumbo/" target="_blank" rel="noopener noreferrer"><div className="Button">Connect</div></a>
                    <div className="Profile-description">
                        {/* Add connect button */}
                        <Fade left cascade>
                            <div className="Profile-left">
                                <div className="Profile-name">Clay Palumbo</div>
                                <div className="Profile-position">Senior Software Engineer at Slalom Build</div>
                                <div className="Profile-location">Charlotte, North Carolina</div>
                            </div>
                        </Fade>
                        <Fade right cascade>
                        <div className="Profile-right">
                            <div className="Profile-experience">
                                <img className="image" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHo_njBHzD-bQ/company-logo_100_100/0/1625149136034?e=1652313600&v=beta&t=hHwlhOCkhK2CruMvCRfiduikDObr76mJJdqd4pzVuQs" alt="Slalom"/>
                                <div>Slalom</div>
                            </div>
                            <div className="Profile-experience">
                                <img className="image" src="https://media-exp1.licdn.com/dms/image/C510BAQFcpROqmle4GA/company-logo_100_100/0/1519856679400?e=1652313600&v=beta&t=o1vlWBCEfpL48yHoV_xVmBwasDxi1oPbRwilg05mh0M" alt="ASU"/>
                                <div>Appalachian State University</div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
                <Fade duration={1500 }bottom cascade>
                    <div>
                        <div className="About">
                            <div className="title">About</div>
                            <div className="overview">
                            <div>React | Angular | Typescript | GraphQL | MongoDB | AWS | Java | NodeJs | SCSS</div>
                            Innovative software engineer offering experience in the full software development lifecycle – from concept to production in developing modern applications and customizable solutions.
                            Searching for a team with a passion for building products that help millions.

                            </div>
                        </div>

                        <div className="About">
                            <div className="title">Brands I've worked with</div>
                                <div className="Grid">
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://www.pasadenaplayhouse.org/wp-content/uploads/2017/05/Wells-Fargo-Logo-300x300.png" alt="Wells Fargo"/>
                                    </div>
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://www.spectrum.net/shared-assets/spectrum-logo.svg" alt="Spectrum"/>
                                    </div>
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/nascar.svg" alt="Nascar"/>
                                    </div>
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/volvo.svg" alt="Volvo"/>
                                    </div>
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://logodix.com/logo/1300481.png" alt="Pepsi"/>
                                    </div>
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/hendrick.svg" alt="Hendrick"/>
                                    </div>
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/discoveryplace.svg" alt="Discovery Place"/>
                                    </div>
                                    <div className="Grid-cell">
                                        <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/autobell.svg" alt="Auto Bell"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Fade>
            </div>
        </AboutWrapper>
    )
}

export default About;
