import * as yup from 'yup';
import { Gender } from './InputTypes';
import {
  COUNTRIES,
  RegExpLowercase,
  RegExpNumber,
  RegExpSpecialSymbols,
  RegExpUppercase,
} from 'shared/const';

const allowedImageFormat = ['image/jpeg', 'image/png'];

const allowedImageSize = 1024 * 1024 * 2;

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, 'first letter must be uppercased')
    .required(),
  age: yup
    .number()
    .positive()
    .integer()
    .max(100)
    .required()
    .typeError('field age is required'),
  email: yup.string().email().required(),
  pass: yup
    .string()
    .matches(RegExpNumber, 'must contain number')
    .matches(RegExpLowercase, 'must contain down cased letter')
    .matches(RegExpUppercase, 'must contain upper cased letter')
    .matches(RegExpSpecialSymbols, 'must contain special character')
    .required(),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('pass')], 'Passwords does not match')
    .required(),
  gender: yup
    .string()
    .oneOf([Gender.man, Gender.woman], 'select gender')
    .required(),
  country: yup
    .string()
    .oneOf(COUNTRIES, 'select country from the list')
    .required(),
  file: yup
    .mixed<FileList>()
    .test('required', 'select a image', (value) => value && value.length > 0)
    .test(
      'imageType',
      'select .png or .jpg file',
      (value) =>
        value &&
        Array.from(value).every((file) =>
          allowedImageFormat.includes(file.type)
        )
    )
    .test(
      'imageSize',
      'select file less than 2Mb',
      (value) =>
        value &&
        Array.from(value).every((item) => item.size <= allowedImageSize)
    )
    .required(),
  tc: yup.boolean().isTrue('accept the terms and conditions').required(),
});
