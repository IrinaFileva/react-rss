'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '_app/providers/storeProvider';

interface StoreProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProps) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
