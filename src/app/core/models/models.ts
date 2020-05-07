export interface ErrorMessages {
  messages: ErrorMessage[];
}

export interface ErrorMessage {
  id: string;
  message: string;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dob: Date;
  designation: string;
}
