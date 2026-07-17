import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {
  constructor(private servizioCalculaSalario: CalculaSalario) { }

  pagar(colaborador: Colaborador) {
    const salarioColaborador = this.servizioCalculaSalario.calcular(colaborador.cargo);
    colaborador.saldo = salarioColaborador;
  }
}