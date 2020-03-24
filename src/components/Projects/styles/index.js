import styled from'styled-components';

export const ProjectsWrapper = styled.div`
  align-items: center;
  background: linear-gradient(to right, #fdfbfb, #ebedee);
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 30;
  width: 100%;
  padding-bottom: 3em;
  overflow: hidden;

  .header {
    font-size: 48px;
    margin: 1em;
    font-family: Product Sans, sans-serif;
  }

  .subHeader {
    font-size: 24px;
    padding: 0 2em 4em;
    max-width: 1280px;
  }

  .Card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 800px)  {
    .header {
      font-size: 36px;
    }
  }
`;
