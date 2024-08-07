import { AppDispatch } from '_app/providers/storeProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
