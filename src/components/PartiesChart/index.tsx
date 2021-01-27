import React, { MouseEvent } from "react";

import {
  Container,
  PartyContainer,
  HeaderPartyContainer,
  MainPartyContainer,
  PartyDeputyLine,
} from "./styles";

import { IData } from "../../pages/Homepage";

interface Props {
  fullData: IData;
}

const PartiesChart: React.FC<Props> = ({ fullData }) => {
  const expandContainer = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    event.currentTarget.parentElement?.classList.toggle("expand-party");
  };

  return (
    <Container>
      <h3>Top 5 Partidos com mais gastos (Média)</h3>
      {fullData.topFiveParties.map((item) => (
        <PartyContainer>
          <HeaderPartyContainer onClick={expandContainer}>
            <a href={`/search?query=${item.name}`}>{item.name}</a>
            <div>{item.formatedMidValue}</div>
          </HeaderPartyContainer>
          <MainPartyContainer>
            {item.partDeputies.map((deputy) => (
              <PartyDeputyLine>
                <a className="deputy-name" href={`/search?query=${deputy.name}`}>{deputy.name}</a>
                <h5>{deputy.formatedFinalValue}</h5>
              </PartyDeputyLine>
            ))}
          </MainPartyContainer>
        </PartyContainer>
      ))}
    </Container>
  );
};

export default PartiesChart;
