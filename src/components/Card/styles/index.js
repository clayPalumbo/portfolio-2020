import styled from'styled-components';

export const CardWrapper = styled.div`
  height: 400px;
  width: 500px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEXt7e3V1dXW1tbm5ubs7Ozg4ODc3NzS0tLw8PDo6OjZ2dnj4+Pe3t5T9WAhAAAEmklEQVR4nO2ciXKsIBBFsQUB9f+/9+EuKjPEpe2X3FOVSTJlAmdaWRpUKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Pbnh9mr4Uza+nnSpbChTTy0M/hNfKeNeXyIshW/BReaVZ4+h8zSY3lESG008rz+a30LIqFpbYDa1huxC1qovQDHAbUuG5DF3Tl8cmORdTs/Ua9VxuzUHXaA+WnsnQD90EUa1ZPlRtChoMuRobs5w0PLiGphJ5YlgNxVnGHrgeTlOuIkdD4imtx/B+qKNhzThOLF8xJE5D+4ohT2k9MLwZGD4ADG8Ghg8Aw5uB4QPINRxqdH14J9awmyG7summ5tfqJthQO1NY21wtUrKh7zJW9mqWTLLhcPDV9INYQ6XHqhXGXaqcXEM1L2/4S2k5qYbaNfP61LXEnFRDpWhJize/MIbrEAau1E6qoV75FfZKwlqmoVYmWiWmUp1ex5VpqKIQdhdkOG9/l2EcwuDYnu4UZRrq7frihSVOgYahKm2xUzw9eBNoqJy3O8Pi9CRDoqGqhv0+UQzpbKco0bAs9iEMVOeKlGeoVWpH0bnBmzxD5VMbbuhUJQUapkJI9tR5Ks+w+bBnqnRxXqr7razMx30d8gzTu4nI1nE1O8HWfkl0SDN0TXq7lKUwyYgqqrvDw9uftq1JM9RftoP57eF09PYaYYbOpNRG6vUIXLtqrH6bPk+FGX4LYdcpLripVSJbupSjMMNvISyiwZsu5sFdOlsly1Afa8Xn6Xzw9N96geTAXJShazMMi3I4WOsmejtlIMowbws4jRmbOOA2tV1dkGFoGbMMu9O0q24VZzpSSziCDKfttV8iSGOSv9wODRKjVkGGrs7Z/G0b1w/XdDy6Cz/b8rBIQYal3U7sj6j70WhoR+12AEt02CVKMdTpWVNk0TeZ4as5SgM0R8NTIYZDnTMYL7bjjpOO8uJCDFVeCKebX1Kt7tEcQ4xhXgjH/dPJgw96DCmGuyz3MdQ1pc4nj632QRRi+HXWNNJNghvz4cPwO0Uhht9nTeMfhqp+PGCf0BBimBnC8a8/fRzNdpFKhmFuCDOoZcYwa9aUyXZFXIThrTfO0qbHeN1QL+/exKbHeN1QZc6a8tnMMV431GHWdPM9s3W07/Z1Q+XKgxXfS8RZqfcN84bcP4LW6zfvG2YOuX9EGwavk9HrhvqBEEYbNt82/LTWdIFVVuptwweuwp6l23/bUD/zHJfVbsa3Df3nmcJpltP0bcPwziNR9GJaGqUbU91LG1g9BeN9w2v3GiSR0x8+9AAQSWOap4Hhzfx6Q1eNzxdiKU1F6yFshn0ILdPjcPoUCU2GLGVOeVG2p4u5aZWK68Lw/Vkavswdt/jmFDiN7A9WNB5hSf3WhoPpFKXrd9tmCi63irA8sI3mb+f2F58xvDF/n6VIwytXCFW/2Y7zyZ6TJVv3pPpnxPGzW655Ere9a+tpqLAVp2D/BNOa1TG54+1JfMXW4JDhDeCM9r5kwL+k92d4/vNFBAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Y/wDpoY2HBKwqLIAAAAASUVORK5CYII=');
  background-size: cover;
  background-position: center;
  display: flex;
  position: relative;
  margin: 0.5em;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
  border-radius: 5px;
  overflow: hidden;

  .background {
    object-fit: cover;
    position: absolute;
    height: 110%;
    width: 110%;
    transition: 1000ms cubic-bezier(0.19, 1, 0.22, 1);;
  }

  .cover {
      background:
        linear-gradient(
          to bottom,
          hsla(0, 0%, 0%, 0) 0%,
          hsla(0, 0%, 0%, 0.009) 11.7%,
          hsla(0, 0%, 0%, 0.034) 22.1%,
          hsla(0, 0%, 0%, 0.072) 31.2%,
          hsla(0, 0%, 0%, 0.123) 39.4%,
          hsla(0, 0%, 0%, 0.182) 46.6%,
          hsla(0, 0%, 0%, 0.249) 53.1%,
          hsla(0, 0%, 0%, 0.320) 58.9%,
          hsla(0, 0%, 0%, 0.394) 64.3%,
          hsla(0, 0%, 0%, 0.468) 69.3%,
          hsla(0, 0%, 0%, 0.540) 74.1%,
          hsla(0, 0%, 0%, 0.607) 78.8%,
          hsla(0, 0%, 0%, 0.668) 83.6%,
          hsla(0, 0%, 0%, 0.721) 88.7%,
          hsla(0, 0%, 0%, 0.762) 94.1%,
          hsla(0, 0%, 0%, 0.790) 100%
      );
      height: 100%;
      position: absolute;
      width: 100%;
      border-radius: 5px;
      transition: 1000ms cubic-bezier(0.19, 1, 0.22, 1);;
  }
  .cover-2 {
      background:
        linear-gradient(
          to bottom,
          hsla(0, 0%, 0%, 0.20) 0%,
          hsla(0, 0%, 0%, 0.21) 11.7%,
          hsla(0, 0%, 0%, 0.23) 22.1%,
          hsla(0, 0%, 0%, 0.26) 31.2%,
          hsla(0, 0%, 0%, 0.3) 39.4%,
          hsla(0, 0%, 0%, 0.34) 46.6%,
          hsla(0, 0%, 0%, 0.249) 53.1%,
          hsla(0, 0%, 0%, 0.320) 58.9%,
          hsla(0, 0%, 0%, 0.394) 64.3%,
          hsla(0, 0%, 0%, 0.468) 69.3%,
          hsla(0, 0%, 0%, 0.540) 74.1%,
          hsla(0, 0%, 0%, 0.607) 78.8%,
          hsla(0, 0%, 0%, 0.668) 83.6%,
          hsla(0, 0%, 0%, 0.721) 88.7%,
          hsla(0, 0%, 0%, 0.762) 94.1%,
          hsla(0, 0%, 0%, 0.790) 100%
      );
      height: 100%;
      position: absolute;
      width: 100%;
      border-radius: 5px;
      transition: 1500ms cubic-bezier(0.19, 1, 0.22, 1);;
      opacity: 0;
    }

  &:hover, &:focus {
    .Card {
      transform: translateY(0);

      .copy {
        opacity: 1;
        transform: translateY(0);
      }

      .button {
        background: #04f799;
        color: #000;
        opacity: 1;
        transform: translateY(0);
      }
    }

    .background {
      transform: translateY(-5%)
    }

    .cover-2 {
      opacity: 1;
    }
  }

  .Card {
    padding: 2em;
    color: #fff;
    z-index: 20;
    transform: translateY(80%);
    transition: 1000ms cubic-bezier(0.19, 1, 0.22, 1);
    text-align: left;
    width: 100%;

    .title {
      font-size: 30px;
      font-weight: bolder;
      line-height: 1.2;
      font-family: Product Sans, sans-serif;
      /* text-transform: uppercase; */
    }

    .copy {
      font-style: italic;
      opacity: 0;
      font-size: 18px;
      transition: 1000ms cubic-bezier(0.19, 1, 0.22, 1);;
      transform: translateY(50px);
      padding: 1em 0;

    }

    .button {
      /* background: black; */
      color: white;
      border: none;
      border-radius: 3px;
      width: max-content;
      font-size: 12px;
      margin: 1em 0 1em;
      padding: 1em;
      text-transform: uppercase;
      font-weight: bold;
      opacity: 0;
      transition: 1000ms cubic-bezier(0.19, 1, 0.22, 1);;
      transform: translateY(50px);
    }
  }

  @media only screen and (max-width: 800px)  {
    width: 90%;
    margin: 0.5em auto;

    .Card {
      transform: translateY(0);

      .copy {
        opacity: 1;
        transform: translateY(0);
      }

      .button {
        background: #04f799;
        color: #000;
        opacity: 1;
        transform: translateY(0);
      }
    }

    .background {
      transform: translateY(-5%)
    }

    .cover-2 {
      opacity: 1;
    }
  }

`;
