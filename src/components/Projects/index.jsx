import React from 'react';
import { ProjectsWrapper } from './styles'
import { Card } from '../'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const cards = [
    {
        title: "Charlotte",
        copy: "Built features for Charlotte's online destination to discover all that's happening in the QC.",
        button: "Go to site",
        image: "https://d2j8c2rj2f9b78.cloudfront.net/uploads/banner-images/Romare-Skyline-2200x1500.jpg",
        link: "https://www.charlottesgotalot.com/"
    },
    {
        title: "NASCAR",
        copy: "Designed and developed animations to bring Nascar Hall of Fame's website to life.",
        button: "Go to site",
        image: "https://s3.us-east-1.amazonaws.com/nascarhall.com/uploads/images/CRVA-1410-day_2-nascar_museum-0036.jpg?mtime=20200130120535",
        link: "https://www.nascarhall.com/"
    },
    {
        title: "Cafe Rio",
        copy: "Built feautres that are used site wide for a highly interactive ecommerce web application.",
        button: "Go to site",
        image: "https://unionco.imgix.net/uploads/images/cr_slantyscreens.png?w=1800&fm=jpg&lossless=1",
        link: "https://www.caferio.com/"
    },
    {
        title: "Chevrolet",
        copy: "Led the development of this microsite for #88 Alex Bowman and Chevy with a two week deadline.",
        button: "Go to site",
        image: "https://www.motortrend.com/uploads/sites/5/2019/05/2020-Chevrolet-Camaro-LT1-e1557351884715.jpg?fit=around%7C875:492",
        link: "https://www.chevygoods.com",
    },
    {
        title: "Discovery Place",
        copy: "Refreshed their homepage and built new features for group of muesums that explors the wonders of science, technology and nature.",
        button: "Go to site",
        image: "https://unionco.imgix.net/uploads/images/dp_slantyscreens3.png?w=1800&fm=jpg&lossless=1",
        link: "https://www.discoveryplace.org/",
    },
    {
        title: "Pepsi",
        copy: "Working with their initiative Pepsi Cares, developed components for this award winning site.",
        button: "Go to site",
        image: "https://revenuesandprofits.com/wp-content/uploads/2019/10/pepsi-681x379.jpg",
        link: "https://www.pepsicares.com"
    }
]

const Projects = () => {

    return (
        <ProjectsWrapper>
            <Fade duration={1000} bottom cascade>
                <div className="header">Selected Works</div>
            </Fade>
            <Bounce duration={1500} bottom cascade>
                <div className="Card-container">
                    {cards.map((card, i) => {
                        return (
                            <div key={i}>
                                <Card
                                    title={card.title}
                                    copy={card.copy}
                                    button={card.button}
                                    image={card.image}
                                    link={card.link}
                                />
                            </div>
                        )
                    })}
                </div>
            </Bounce>
        </ProjectsWrapper>
    )
}

export default Projects;
