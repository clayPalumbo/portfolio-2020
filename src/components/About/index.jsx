import React from 'react';
import { AboutWrapper } from './styles'
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';

const About = () => {
    // TODO: Create AWS Lambda GET service to provide this data
    const brands = [
        {name: "Wells Fargo", image: "https://www.pasadenaplayhouse.org/wp-content/uploads/2017/05/Wells-Fargo-Logo-300x300.png"}, 
        {name: "Spectrum", image: "https://www.spectrum.net/shared-assets/spectrum-logo.svg"}, 
        {name: "Nascar", image: "https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/nascar.svg"},
        {name: "Volvo", image: "https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/volvo.svg"}, 
        {name: "Pepsi", image: "https://logodix.com/logo/1300481.png"}, 
        {name: "Hendrick", image: "https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/hendrick.svg"}, 
        {name: "Discovery Place", image: "https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/discoveryplace.svg"}, 
        {name: "Auto Bell", image: "https://s3.amazonaws.com/static.union-7.co/uploads/client-logos/autobell.svg"},
    ];

    return (
        <AboutWrapper>
            <div className="Container">
                <div className="Divider"></div>
                <Parallax
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
                <div className="Profile">
                    <img className="Profile-picture" src="https://media-exp1.licdn.com/dms/image/C4E03AQE3cOK6a2uBIA/profile-displayphoto-shrink_800_800/0/1639110572031?e=1658361600&v=beta&t=97_V25RYQVVmyldB_4BUP9TLSZYvSf0sTslrWxlgIuU" alt="Top tier candidate"/>
                    <a href="https://www.linkedin.com/in/clay-palumbo/" target="_blank" rel="noopener noreferrer"><div className="Button">Connect</div></a>
                    <div className="Profile-description">
                        <Fade left cascade>
                            <div className="Profile-left">
                                <div className="Profile-name">Clay Palumbo</div>
                                <div className="Profile-position">Senior Software Engineer | Slalom Build</div>
                                <div className="Profile-location">Charlotte, North Carolina</div>
                            </div>
                        </Fade>
                        <Fade right cascade>
                        <div className="Profile-right">
                            <div className="Profile-experience">
                                <img className="image" src="https://media-exp1.licdn.com/dms/image/C560BAQFL2IGZEbNQtA/company-logo_200_200/0/1625695365684?e=1660780800&v=beta&t=Q70a1sNppZOgxbX57rGPMlnzlmp8FFfp9AicFDkVdjg" alt="Slalom Build"/>
                                <div>Slalom Build</div>
                            </div>
                            <div className="Profile-experience">
                                <img className="image" src="https://media-exp1.licdn.com/dms/image/C510BAQFcpROqmle4GA/company-logo_100_100/0/1519856679400?e=1660780800&v=beta&t=d06-fNjJQXw98wi7jylqGSkljw0NmktKGgiM_zf_f3Y" alt="ASU"/>
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
                                <div>React | Angular | Typescript | GraphQL | AWS | Serverless Architecture | Java | Node.js | SCSS</div>
                                <p>Innovative software engineer offering experience in the full software development lifecycle – from concept to production in developing modern applications and customizable solutions.
                                Searching for a team with a passion for building products that help millions.</p>
                            </div>
                        </div>
                        <div className="About">
                            <div className="title">Brands I've worked with</div>
                                <div className="Grid">
                                    {brands.map(brand => {
                                        return (
                                            <div className="Grid-cell">
                                                <img className="logo" src={brand.image} alt={brand.name}/>
                                            </div>  
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fade>
            </div>
        </AboutWrapper>
    )
}

export default About;
