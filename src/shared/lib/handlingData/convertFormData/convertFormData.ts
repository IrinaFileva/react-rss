import { DataForm, SaveFormData } from 'shared/types/formTypes';
import { convertFileData } from '../convertFileData/convertFileData';

export function convertFormData(data: DataForm): SaveFormData {
  const file = convertFileData(data.file);
  const newData: SaveFormData = { ...data, file };
  return newData;
}
