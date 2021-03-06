import styled from'styled-components';

export const IntroWrapper = styled.div`
  align-items: center;
  background: linear-gradient(0, #a1c4fd, #c2e9fb);
  display: flex;
  height: 90vh;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @keyframes mymove {
  0% {bottom: 100px;}
  50% {bottom: 80px;}
  100% {bottom: 100px;}

}

  .down-arrow {
    position: absolute;
    bottom: 5em;
    animation: mymove 2s infinite;
    z-index:100;

    img {
      width: 50px;
    }

  }

  .Hero {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-name {
      font-size: 80px;
      line-height: 150%;
      font-family: Product Sans, sans-serif;
    }

    &-title {
      font-size: 30px;
      font-weight: lighter;
    }

    &-image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }
  .stagger-visualizer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 16.9rem;
    height: 16.9rem;
    transform: scale(2);
    position: absolute;

    div {
      /*position: absolute;*/
      width: 1rem;
      height: 1rem;
      border: 1px solid #FFF;
      background-color: #FFF;
    }
  }
  .spacer {
      /* height: 40%; */
  }
  @media only screen and (max-width: 600px)  {
    .Hero {
      &-name {
        font-size: 50px;
      }
      &-title {
        font-size: 24px;
      }
    }

    .stagger-visualizer {
      transform: scale(1);
    }
  }

`;
