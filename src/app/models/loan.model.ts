export interface Loan {
  id: any;
  codeUser: any;
  loanDate: any; // O ajusta según el tipo de fecha que estés utilizando
  devolutionDate: any; // Igualmente, ajusta según tu necesidad
  carLoan: boolean;
  car: Car; // Asumiendo que también tienes una interfaz para el modelo Car
  ownerUid: any;
}

export interface Car {
  id: any;
  brand: any;
  model: any;
  photo: any;
  maxspeed: any;
  fuelconsumption: any;
  dimension: any;
  weight: any;
  year: any;
  engine: any;
  timeloan: any;
  price: any;
  ubication: any;
  ownerUid: string;
  available: boolean;
}
