import { useRef } from 'react';

export function useRendersCount(): number {
    const count = useRef(0);
    return ++count.current;
}