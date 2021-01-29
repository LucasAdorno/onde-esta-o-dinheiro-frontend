import React, { useEffect, useState } from "react";
import FilterInBox from "../../components/FilterInBox";
import SearchDiv from "../../components/SearchDiv";
import api from "../../services/api";
import { Container, Content, ResultsBox, ResultItem } from "./styles";

interface Props {
  match: {
    params: {
      query: string;
      startdate: string;
      enddate: string;
    };
  };
}

export interface ITotalData {
  partido: string;
  deputados: {
    deputado: string;
    gasto_total: number;
    gastos: {
      nota: string;
      categoria: string;
      cpf_cnpj: string;
      recebedor: string;
      date: string;
      valor: string;
    }[];
  }[];
}

const SearchPage: React.FC<Props> = ({ match }) => {
  const [totalData, setTotalData] = useState<ITotalData[]>();

  useEffect(() => {
    const { query, startdate, enddate } = match.params;
    api.post("fulldata", { query, startdate, enddate }).then((response) => {
      setTotalData(response.data);
      return console.log(response.data);
    });
  }, [match]);

  return (
    <Container>
      <SearchDiv />

      {totalData ? (
        <Content>
          <FilterInBox totalData={totalData} />
          <ResultsBox>
            {totalData.map(({ deputados }) =>
              deputados.map(({ deputado, gastos, gasto_total }) => (
                <ResultItem
                  onClick={(e) =>
                    e.currentTarget.classList.toggle("result-expand")
                  }
                >
                  <div className="item-header">
                    <h4>{deputado}</h4>
                    <div>R${gasto_total.toLocaleString("pt-BR")},00</div>
                  </div>
                  <div className="gastos-box">
                    {gastos.map(({ recebedor, categoria, valor }) => (
                      <div>
                        <h5>{recebedor}</h5>
                        <h5>{categoria}</h5>
                        <h5>{valor}</h5>
                      </div>
                    ))}
                  </div>
                </ResultItem>
              ))
            )}
          </ResultsBox>
        </Content>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default SearchPage;
