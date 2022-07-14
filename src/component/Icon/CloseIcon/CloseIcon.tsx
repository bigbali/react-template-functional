// @ts-nocheck

import IconBase from '../IconBase';
import type { IconProps } from '../IconBase';
import './CloseIcon.style';

export const CloseIcon = ({ color, colorOverride, ...props }: IconProps) => {
    return (
        <IconBase>
            <svg
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                block="Icon"
                elem="Close"
            >
                <path
                    d="M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z"
                />
            </svg>
        </IconBase>

    );
};

export default CloseIcon;