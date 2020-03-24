import styled from'styled-components';

export const AboutWrapper = styled.div`
  align-items: center;
  background: linear-gradient(to right, #fdfbfb, #ebedee);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 10;

  .Container {
    max-width: 1280px;
    width: 100%;
    margin-bottom: 4em;
  }

  .Divider {
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0;
    background: linear-gradient(180deg, rgba(161, 196, 253, 1), rgba(161, 196, 253, 0));
    z-index: 100;
  }
  .Background {
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    height: 400px;
    position: absolute !important;
    left: 0;
    width: 100vw;
    z-index: 5;
  }

  .Profile {
    margin-top: 200px;
    padding: 2em;
    background: #fff;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    margin-bottom: 1em;
    overflow: hidden;
    position: relative;

    &-picture {
      border: 5px solid #fff;
      border-radius: 50%;
      box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
      max-width: 250px;
      margin-bottom: 1em;
      position: relative;
      z-index: 10;
      transition: 0.8s ease-out;

      &::before {
        content: '';
        height: 39px;
        width: 10px;
        background: white;
        z-index: 39;
        position: absolute;
        transform: translate(-100px, -10px) skewX(10deg);
        transition: 0.3s ease-out;
      }

      &:hover {
        transform: scale(1.2);

        &::before {
          transform: translate(100px, -10px) skewX(10deg);
        }
      }
    }

    &-description {
      display: flex;
      justify-content: space-between;
    }

    &-name {
      /* font-family: Product Sans, sans-serif; */
      font-size: 32px;
      line-height: 45px;
    }

    &-position {
      font-size: 26px;
      line-height: 45px;
    }

    &-location {
      font-size: 22px;
      line-height: 45px;
    }

    &-experience {
      font-size: 22px;
      font-weight: bold;
      line-height: 45px;
      display: flex;

      .image {
        width: 35px;
        height: 35px;
        margin-right: 30px;
      }
    }

    &-right {

    }
    &-left {

    }
  }

  .Button {
    color: white;
    background: #0073b1;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 3px;
    position: absolute;
    display: inline;
    right: 2em;
    transition: 500ms ease-out;
    overflow: hidden;

    &::after {
      content: '';
      height: 39px;
      width: 10px;
      background: white;
      z-index: 39;
      position: absolute;
      transform: translate(-100px, -10px) skewX(10deg);
      transition: 0.5s ease;
    }

    &:hover {
      transform: scale(1.1);

      &::after {
        transform: translate(100px, -10px) skewX(10deg);
      }
    }
  }

  .About {
    padding: 2em;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    margin-bottom: 1em;

    .overview {
        width: 100%;
        font-size: 18px;
      }

      .title {
        font-size: 24px;
        margin-bottom: 1em;
        font-family: Product Sans, sans-serif;
      }

      .Logos {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        .logo {
          width: 200px;
          height: 100%;
          max-height: 120px;
          margin: 1em;
        }
      }
  }

  @media only screen and (max-width: 800px)  {
    .Profile {
      text-align: center;

      &-description {
        flex-direction: column;
        align-items: center;
      }

      &-experience {
        font-size: 16px;
      }
    }

    .Button {
      display: none;
    }
  }
`;
