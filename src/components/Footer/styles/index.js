import styled from'styled-components';

export const FooterWrapper = styled.div`
  align-items: center;
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
  display: flex;
  height: 300px;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .Footer {
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-name {
      font-size: 32px;
      font-weight: bold;

      span {
        color: #FFF;
      }
    }

    &-left {
      padding: 0 2em;
    }

    &-contact {
      display: flex;
      flex-direction: column;

      .Contact {
        margin: 2em 16px;
        font-size: 24px;
      }
    }

    &-link {
      text-decoration: none;
      /* background: #000; */
      color: #000;
      padding: 1em 0;
      margin: 1em;
      border-bottom: 3px solid;
    }
  }
`;
