import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  background-color: #e5e5e5;
  width: 100%;

  .logo {
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 1.3rem;
    color: var(--text);
  }
  img {
    width: 35px;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: var(--text);

    li {
      font-weight: bold;
      font-size: 0.9rem;
      border-bottom: 1px solid transparent;
      cursor: pointer;
    }

    li:hover {
      border-bottom: 1px solid var(--text);
    }

    li:last-child {
      border-bottom: 0;
    }
  }
  .diff {
    background-color: var(--blue);
    border-radius: 2rem;
    color: #fff;
    padding: 0.5rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .diff:hover {
    background-color: var(--orange);
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  @media (max-width: 900px) {
    padding: 1rem;

    .logo {
      font-size: 1rem;
    }
    h1 {
      font-size: 2rem;
      line-height: 1.5;
    }

    .diff {
      padding: 0.3rem 1rem;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
    gap: 1rem;

    .logo {
      width: 100%;
    }

    img {
      height: 35px;
      width: auto;
    }

    .nav-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 0.65rem;
      li {
        font-size: 0.85rem;
      }
    }
  }
`;

export default Wrapper;
