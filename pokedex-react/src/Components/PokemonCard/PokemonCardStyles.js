import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ type, theme }) => theme.colors.backgroundCard[type]};

  height: 13.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 22px 13px;
  border-radius: 12px;
  position: relative;

  .info-group {
    display: flex;
    width: 100%;
    flex-direction: column;
    color: rgba(255, 255, 255, 1);
  }

  .id-poke {
    width: 30px;
    height: 19px;
    font-size: 16px;
  }

  .name-poke {
    width: 159px;
    height: 39px;
    font-size: 32px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .btn-group {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    text-decoration: underline;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    width: 74px;
    height: 24px;
  }

  .btn {
    z-index: 10;
    cursor: pointer;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border: 0;
    font-weight: 500;
    &.danger {
      color: #fff;
      background-color: #ff6262;
    }
  }

  .pokemon-img {
    position: absolute;
    top: -56px;
    right: 0;
    width: 193px;
    height: auto;
  }

  .pokeball {
    position: absolute;
    top: 0;
    right: 0;
  }
  .tags {
    margin-top: 10px;
    display: flex;
    gap: 7px;
  }
`;
