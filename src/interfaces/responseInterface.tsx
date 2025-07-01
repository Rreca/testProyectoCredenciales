export interface Response {
  isSuccess: boolean;
  message: string;
  errorCode: string;
}

export interface Names extends Response {
  data: string[];
}

export interface Credenciales extends Response {
  data: Contratos[];
}

export interface Contratos {
  numContrato: string;
  beneficiarios: Beneficiario[];
}

export interface Beneficiario {
  numBeneficiario: string;
  nombreBeneficiario: string;
  numDocumento: null | string;
  productos: string[];
  numCliente: string[];
}
