import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  background-color: #e5e5e5;
  width: 100%;

  .menu-icon {
    display: none;
  }

  .logo {
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 1.3rem;
    color: var(--text);
    margin-left: 1rem;
  }
  img {
    width: 35px;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: var(--text);
    margin-right: 1rem;

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
    .logo {
      margin: 0;
      font-size: 0.9rem;
    }
    .nav-list {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      right: -400px;
      height: max-content;
      gap: 1rem;
      background-color: var(--blue);
      margin: 0;
      width: 250px;
      color: #fff;
      align-items: flex-start;
      transition: all 0.3s ease-in-out;
    }

    .mobile-menu {
      right: 0;
      transition: all 0.4s ease-in-out;
    }

    li {
      padding: 1rem;
      font-weight: 600;
      border: none;
      background-color: var(--blue-200);
      width: 100%;
      transition: background-color 0.4s ease-in;

      &:hover {
        border: none;
        background-color: var(--blue-900);
        transition: background-color 0.3s ease-in;
      }
    }
    .menu-icon {
      display: block;
      color: #000;
      font-size: 1.4rem;
      cursor: pointer;
      background-color: transparent;
      padding: 0;
      border: none;
    }

    .diff {
      background-color: transparent;
      border-radius: 0;
      color: #fff;
      padding: 0;

      &:hover {
        background-color: transparent;
      }
    }
  }
`;

export default Wrapper;
