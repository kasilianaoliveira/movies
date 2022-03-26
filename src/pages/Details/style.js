import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 0;
  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  button {
    cursor: pointer;
    border: none;
    background: #6654da;
    border-radius: 0.25rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    transition: all 0.2s;
    font-size: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .release-date {
    opacity: 0.5;
  }
`;
