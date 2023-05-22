import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

import cliente from "./assets/cliente.png";
import freela from "./assets/freela.png";

const SelecaoCliente = () => {
  return (
    <>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro.
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Como podemos te ajudar?
      </Tipografia>
      <Row>
        <Col md={6} sm={12}>
          <img src={cliente} alt=""></img>
        </Col>
        <Col md={6} sm={12}>
          <img src={freela} alt=""></img>
        </Col>
      </Row>
    </>
  );
};

export default SelecaoCliente;
