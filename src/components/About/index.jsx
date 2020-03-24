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
                    <img className="Profile-picture" src="https://i.imgur.com/0Ub4sif.png" alt="Top tier candidate"/>
                    <a href="https://www.linkedin.com/in/clay-palumbo/" target="_blank" rel="noopener noreferrer"><div className="Button">Connect</div></a>
                    <div className="Profile-description">
                        {/* Add connect button */}
                        <Fade left cascade>
                            <div className="Profile-left">
                                <div className="Profile-name">Clay Palumbo</div>
                                <div className="Profile-position">Frontend Developer at Union</div>
                                <div className="Profile-location">Charlotte, North Carolina</div>
                            </div>
                        </Fade>
                        <Fade right cascade>
                        <div className="Profile-right">
                            <div className="Profile-experience">
                                <img className="image" src="https://media-exp1.licdn.com/dms/image/C4E0BAQFV1ryXFgIO2w/company-logo_100_100/0?e=1593043200&v=beta&t=lg_eQs5GMcz6Fc1XtiqG7RqcQXMxNUoEoXRZY8nSZRI" alt="union"/>
                                <div>Union</div>
                            </div>
                            <div className="Profile-experience">
                                <img className="image" src="https://media-exp1.licdn.com/dms/image/C510BAQFcpROqmle4GA/company-logo_100_100/0?e=1593043200&v=beta&t=1VPutivn8YWdKJPlogfOcEuy77ks396wZHixTYhA-dQ" alt="union"/>
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
                            Innovative software engineer offering experience in the full software development lifecycle – from concept to production in developing modern applications and customizable solutions.
                            Known for excellent design skills, able to set standards for design patterns through well-researched, cost-effective solutions.

                            </div>
                        </div>

                        <div className="About">
                            <div className="title">Brands I've worked with</div>
                                <div className="Logos">
                                    <img className="logo" src="https://www.pasadenaplayhouse.org/wp-content/uploads/2017/05/Wells-Fargo-Logo-300x300.png" alt="Wells Fargo"/>
                                    <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/nascar.svg" alt="Nascar"/>
                                    <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/volvo.svg" alt="Volvo"/>
                                    <img className="logo" src="https://logodix.com/logo/1300481.png" alt="Pepsi"/>
                                    <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/hendrick.svg" alt="Hendrick"/>
                                    <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/crva.svg" alt="CRVA"/>
                                    <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/discoveryplace.svg" alt="Discovery Place"/>
                                    <img className="logo" src="https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/autobell.svg" alt="Auto Bell"/>

                                </div>
                            </div>
                        </div>
                    </Fade>
            </div>
        </AboutWrapper>
    )
}

export default About;
