import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 2s;
  }
  a:hover {
    transform: scale(1.1);
  }
`;
