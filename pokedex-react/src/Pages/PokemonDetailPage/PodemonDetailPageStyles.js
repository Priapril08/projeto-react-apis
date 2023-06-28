import styled from "styled-components";

export const DetailContainer = styled.div`
  background-color: ${({ type, theme }) => theme.colors.backgroundCard[type]};
  .grid {
    display: grid;

    width: 50%;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .stats {
      grid-row-start: 1;
      grid-row-end: 3;
      background: blue;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
`;
