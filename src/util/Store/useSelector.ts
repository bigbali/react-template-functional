import { TypedUseSelectorHook, useSelector as originalUseSelector } from 'react-redux';
import type { RootState } from 'Store/index';

export const useSelector: TypedUseSelectorHook<RootState> = originalUseSelector;
