import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 8px;

  margin: 20px 0;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 32px;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

export const CategoryLine = styled.div<{ percent: number }>`
  width: 100%;
  gap: 8px;

  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-size: 14px;
  }

  a, h4 {
    color: #00578a;
    font-weight: bold;

    background: lightgrey;
    padding: 10px 20px 10px 20px;
    margin-right: 0px;
    white-space: nowrap;
    font-size: 14px;
    width: 250px;

    @media (min-width: 767px) {
      width: 350px;
      font-size: 20px;
    }
  }

  div {
    width: ${(props) => props.percent}%;
    height: 46px;
    border-radius: 0px;
    background-color: #00578a;
  }
`;
