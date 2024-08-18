import { DataForm, SaveFormData } from 'shared/types/formTypes';
import { convertFileData } from '../convertFileData/convertFileData';

export async function convertFormData(data: DataForm): Promise<SaveFormData> {
  if (data.file) {
    const file = await convertFileData(data.file[0]);
    const newData: SaveFormData = { ...data, file, age: data.age.toString() };
    return newData;
  } else {
    return { ...data, file: '', age: data.age.toString() };
  }
}
