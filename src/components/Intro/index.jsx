import React, { useEffect } from 'react';
import { IntroWrapper } from './styles'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import anime from 'animejs/lib/anime.es.js';

const Intro = () => {

    const animatejs = () => {
      const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
      const fragment = document.createDocumentFragment();
      const grid = [15, 15];
      const col = grid[0];
      const row = grid[1];
      const numberOfElements = col * row;

      for (let i = 0; i < numberOfElements; i++) {
        fragment.appendChild(document.createElement('div'));
      }

      staggerVisualizerEl.appendChild(fragment);
      const staggersAnimation = anime.timeline({
        targets: '.stagger-visualizer div',
        easing: 'cubicBezier(.5, .05, .1, .3)',
        delay: anime.stagger(50),
        loop: true,
        autoplay: false
      })
      .add({
        translateX: [
          {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
          {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
        ],
        translateY: [
          {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
          {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
        ],
        duration: 1000,
        scale: .5,
        delay: anime.stagger(100, {grid: grid, from: 'center'})
      })
      .add({
        translateX: () => anime.random(-10, 10),
        translateY: () => anime.random(-10, 10),
        delay: anime.stagger(8, {from: 'last'})
      })
      .add({
        translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
        translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
        rotate: 0,
        scaleX: 2.5,
        scaleY: .25,
        delay: anime.stagger(4, {from: 'center'})
      })
      .add({
        rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
        delay: anime.stagger(50, {grid: grid, from: 'center'})
      })
      .add({
        translateX: 0,
        translateY: 0,
        scale: .5,
        scaleX: 1,
        rotate: 180,
        duration: 1000,
        delay: anime.stagger(100, {grid: grid, from: 'center'})
      })
      .add({
        scaleY: 1,
        scale: 1,
        delay: anime.stagger(20, {grid: grid, from: 'center'})
      })

      staggersAnimation.play();
    }

    useEffect(() => {
        animatejs();
    }, [])

    return (
        <IntroWrapper>
            <div className="stagger-visualizer"></div>
            <div className="Hero">
                <Fade duration={1000} bottom cascade>
                    <div className="Hero-name">
                        Clay Palumbo
                    </div>
                    <div className="Hero-title">
                        Creative Software Developer
                    </div>
                </Fade>
            </div>
            <div className="spacer"></div>
                <div className="down-arrow">
                    <img src="https://cdn1.iconfinder.com/data/icons/material-design-icons-light/24/chevron-down-512.png" alt="scroll down"/>
                </div>
        </IntroWrapper>
    )
}

export default Intro;
