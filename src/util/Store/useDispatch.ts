import { useDispatch as originalUseDispatch } from 'react-redux';
import type { AppDispatch } from 'Store/index';

export const useDispatch = () => originalUseDispatch<AppDispatch>();
