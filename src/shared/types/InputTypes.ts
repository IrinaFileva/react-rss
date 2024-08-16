export enum Gender {
  man = 'Man',
  woman = 'Woman',
}

export type InputName = {
  name: string;
  age: number;
  email: string;
  pass: string;
  file: FileList;
  confirmPass: string;
  gender: Gender;
  country: string;
  tc: string;
};

export enum LabelTitle {
  name = 'Name',
  age = 'Age',
  email = 'Email',
  pass = 'Password',
  confirmPass = 'Confirm Password',
  gender = 'Gender',
  image = 'Image',
  country = 'Country',
  tc = 'Accept Terms and Conditions',
}

export type RefFormInput = {
  name: string;
  age: string;
  email: string;
  pass: string;
  confirmPass: string;
  gender: string;
  ts: boolean;
  file: FileList | null;
  country: string;
};
