import styled from "styled-components";

export const ListPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  flex-direction: column;

  .grid {
    display: grid;
    margin: 80px;
    grid-template-columns: repeat(3, 27.5rem);
    column-gap: 20px;
    row-gap: 56px;
  }

  .todos-pokemons {
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    margin: 80px;
    width: 100%;
  }
  @media (max-width: 1480px) {
    .grid {
      grid-template-columns: repeat(2, 27.5rem);
    }
  }

  @media (max-width: 1000px) {
    .grid {
      grid-template-columns: repeat(1, 27.5rem);
    }
  }

  @media (max-width: 768px) {
    font-size: 60%;
  }
`;
