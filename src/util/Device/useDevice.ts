import { useSelector } from "react-redux";

export const useDevice = () => {
    const isMobile = useSelector((state) => state.device);

    return isMobile;
}