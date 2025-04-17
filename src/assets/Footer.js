import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--darkblue);
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: gray;
  padding-top: 3rem;

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .address {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
  }

  .address-col {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  .footer-container img {
    width: 80px;
  }
`;
export default Wrapper;
