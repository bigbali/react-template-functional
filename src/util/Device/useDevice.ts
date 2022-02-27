import { useSelector } from 'Util/Store';

export const useDevice = () => {
    const isMobile = useSelector(state => state.device);

    return isMobile;
};