import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  min-height: 380px;
  padding: 30px 20px;

  margin: 60px;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;

  background: var(--subcontainers-background);

  h3 {
    margin-bottom: 10px;
  }

  a {
    color: #00578a;
    font-weight: bold;
  }

  .deputy-name {
    font-size: 13px;
  }
`;

export const PartyContainer = styled.div`
  width: 100%;
  min-height: 60px;
  max-height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  justify-content: space-between;

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

    background: #00578A;
    color: #fcfcfc;
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
