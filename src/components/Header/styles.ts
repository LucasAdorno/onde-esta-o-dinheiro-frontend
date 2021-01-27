import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 112px;
  padding: 28px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #00578a;

  h1, a {
    padding-left: 20px;
    font-size: 24px;
    font-weight: 700;

    color: #ffffff;

    @media (min-width: 767px) {
      font-size: 48px;
    }
  }

  div {
    width: 100%;
    height: 20px;

    background: var(--secondary-color);
  }
`;
