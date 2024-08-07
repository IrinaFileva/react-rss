import { RootState } from '_app/providers/storeProvider';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
