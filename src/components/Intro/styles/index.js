import styled from'styled-components';

export const IntroWrapper = styled.div`
  align-items: center;
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .Hero {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-name {
      color: #fff;
      font-size: 80px;
      line-height: 150%;

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
  .spacer {
      height: 40%;
  }
  @media only screen and (max-width: 600px)  {
    .Hero {
      &-name {
        font-size: 50px;
      }
    }
  }

`;
