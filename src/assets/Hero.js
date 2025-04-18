import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* margin-top: 80px; */
  }

  .title {
    background-color: var(--orange);
    color: #fff;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1.8rem;
    width: fit-content;
    text-align: center;
    margin: 0 auto;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: calc(100% - 80px);
    background-color: var(--overlay);
    top: 80px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    margin-top: 1rem;
    font-size: 2.7rem;
    text-align: center;
    max-width: 900px;
    line-height: 1.2;
    font-weight: 600;
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
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }

  /* @media (max-width: 900px) {
    .title {
      font-size: 1.2rem;
      padding: 0.6rem 1.2rem;
    }
    h1 {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  } */
`;

export default Wrapper;
