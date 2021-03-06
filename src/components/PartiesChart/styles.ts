import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 380px;
  padding: 40px 20px;

  margin: 20px auto;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  background: var(--subcontainers-background);

  h3 {
    margin-bottom: 10px;
  }
`;

export const PartyContainer = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 80px;

  display: flex;
  flex-direction: column;

  background: #d4d4d4;

  overflow: hidden;

  transition: all 0.3s;
  &.expand-party {
    max-height: 280px;
  }
`;

export const HeaderPartyContainer = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 80px;
  padding: 2px 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: #c4c4c4;

  overflow: hidden;

  cursor: pointer;

  div {
    width: 240px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background: var(--chart-bar-color);
    color: #fcfcfc;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainPartyContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;

  overflow: hidden;
`;

export const PartyDeputyLine = styled.div`
  width: 100%;
  padding: 4px 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
