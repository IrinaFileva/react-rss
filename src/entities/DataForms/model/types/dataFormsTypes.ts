import { SaveFormData } from 'shared/types/formTypes';

export interface DataFormSchema {
  hookForm: SaveFormData[];
  uncontrolledForm: SaveFormData[];
  newForm: string | null;
}
