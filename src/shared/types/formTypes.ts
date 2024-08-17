export type FormRefs = {
  name: React.MutableRefObject<HTMLInputElement>;
  age: React.MutableRefObject<HTMLInputElement>;
  email: React.MutableRefObject<HTMLInputElement>;
  gender: React.MutableRefObject<HTMLSelectElement>;
  pass: React.MutableRefObject<HTMLInputElement>;
  confirmPass: React.MutableRefObject<HTMLInputElement>;
  country: React.MutableRefObject<HTMLInputElement>;
  tc: React.MutableRefObject<HTMLInputElement>;
  file: React.MutableRefObject<HTMLInputElement>;
};

export type DataForm = {
  name: string;
  age: string;
  email: string;
  pass: string;
  confirmPass: string;
  gender: string;
  tc: boolean;
  file: File | null;
  country: string;
};

export interface SaveFormData {
  name: string;
  age: string;
  email: string;
  pass: string;
  confirmPass: string;
  gender: string;
  tc: boolean;
  file: string;
  country: string;
}
