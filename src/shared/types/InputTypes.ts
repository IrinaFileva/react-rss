export enum Gender {
  man = 'Man',
  woman = 'Woman',
}

export type InputName = {
  name: string;
  age: number;
  email: string;
  pass: string;
  file: File;
  confirmPass: string;
  gender: Gender;
  country: string;
  tc: boolean;
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
