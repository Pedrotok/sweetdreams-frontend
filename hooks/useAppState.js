import { useContext } from 'react';
import { AppStateContext } from 'contexts/appStateContext';

export const useAppState = () => {
  return useContext(AppStateContext);
};