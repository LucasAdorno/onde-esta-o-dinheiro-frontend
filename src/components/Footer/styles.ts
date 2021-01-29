import styled from "styled-components";

interface Props {
  expandAbout: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 10px;

  margin: 40px auto 0;

  display: flex;
  flex-direction: column;
`;

export const TextsDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextFooter = styled.a`
  display: flex;
  align-items: center;

  color: var(--footer-text-color);
`;

export const TextAbout = styled.p<Props>`
  height: ${(props) => (props.expandAbout ? "120px" : 0)};

  margin-top: 10px;

  overflow: hidden;

  font-size: 14px;

  text-align: justify;

  transition: height 0.4s;
`;
