import { RootState } from 'app/providers/storeProvider';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
