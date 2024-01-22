import { LicensePlateInput } from "../../components/LicensePlateInput";
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";

export function Departure() {
  return (
    <Container>
      <Header title="Saída" />

      <Content>
        <LicensePlateInput label="Placa do veículo" placeholder="BRA1234" />
      </Content>
    </Container>
  );
}
