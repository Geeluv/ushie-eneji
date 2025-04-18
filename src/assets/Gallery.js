import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  .container {
    display: flex;
    width: 95%;
    height: 300px;
    overflow-x: scroll;
    overflow-y: hidden;
    border-radius: 1rem;
    gap: 1rem;
    padding: 1rem;
    scrollbar-width: none;

    .image {
      width: 100%;
      overflow: hidden;
      transition: 0.5s ease-in-out;

      img {
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }

    .image:active {
      overflow: unset;
      transition: 0.5s ease-in-out;

      img {
        object-fit: contain;
        transition: 0.5s ease-in-out !important;
      }
    }
  }

  @media (max-width: 996px) {
    .container {
      padding: 0.5rem;
      gap: 0.5rem;
      scrollbar-color: red;
    }
  }
  @media (max-width: 800px) {
    .container {
      .image {
        overflow: hidden;
        min-width: 300px;
        border-radius: 1rem;

        img {
          object-fit: cover;
        }
      }
    }
  }
`;
export default Wrapper;
