import styled from "styled-components";

const Wrapper = styled.section`
  color: var(--text);
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;

  h1 {
    font-size: 2rem;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .accordion {
    margin: 2rem auto;
    width: 100%;
    max-width: 700px;

    li {
      text-transform: capitalize;
      font-weight: bold;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      padding: 1rem;
      width: 100%;
      font-size: 1.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      color: var(--text);
    }

    .content {
      color: gray;
      transition: 0.35s ease-in-out;
      padding: 1rem;
    }
  }
`;

export default Wrapper;
