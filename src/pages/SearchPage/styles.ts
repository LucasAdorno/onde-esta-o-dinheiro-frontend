import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 20px auto 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
`;

export const ResultsBox = styled.div`
  width: 70%;
  height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`;

export const ResultItem = styled.div`
  width: 90%;
  min-height: 80px;

  background: #e0e0e0;

  overflow: hidden;

  transition: all 500ms;

  &.result-expand {
    min-height: 340px;
  }

  .item-header {
    width: 100%;
    height: 80px;

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    div {
      width: 120px;
      height: 40px;

      padding: 4px;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #cc3333;
      color: #e0e0e0;
    }
  }
`;
