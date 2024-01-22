import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { TextAreaInput } from "../../components/TextAreaInput";
import { LicensePlateInput } from "../../components/LicensePlateInput";

export function Departure() {
  return (
    <Container>
      <Header title="Saída" />

      <Content>
        <LicensePlateInput label="Placa do veículo" placeholder="BRA1234" />
      </Content>

      <TextAreaInput
        label="Finalizade"
        placeholder="Vou utilizar o veículo para..."
      />
    </Container>
  );
}
