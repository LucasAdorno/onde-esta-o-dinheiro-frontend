import React from "react";

import { Container, DeputyLine } from "./styles";

import { IData } from "../../pages/Homepage";

interface Props {
  fullData: IData;
}

const DeputyChart: React.FC<Props> = ({ fullData }) => {
  return (
    <Container>
      <h3>DEPUTADOS COM MAIS GASTOS</h3>
      {fullData.topFiveDeputies.map((deputy, index) => (
        <DeputyLine
          percent={
            (deputy.finalValue / fullData.topFiveDeputies[0].finalValue) * 70
          }
        >
          <a href={`/search?query=${deputy.name}`} >{index + 1 + "º " + deputy.name}</a>
          <div>{deputy.formatedFinalValue}</div>
        </DeputyLine>
      ))}
    </Container>
  );
};

export default DeputyChart;
