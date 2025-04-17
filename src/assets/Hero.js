import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    background-color: var(--orange);
    color: #fff;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 2rem;
    width: fit-content;
    font-weight: 900;
    text-align: center;
    margin: 0 auto;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--overlay);
    top: 0;
    left: 0;
    display: grid;
    place-content: center;
  }
  h1 {
    margin-top: 1rem;
    font-size: 3rem;
    text-align: center;
    max-width: 900px;
    line-height: 1.2;
  }

  .accent {
    color: yellow;
  }

  @media (max-width: 600px) {
    .title {
      font-size: 1.2rem;
      padding: 0.6rem 1.2rem;
    }
    h1 {
      font-size: 2rem;
      line-height: 1.5;
    }
  }
`;

export default Wrapper;
