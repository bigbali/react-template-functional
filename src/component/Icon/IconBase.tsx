import { PropsWithChildren } from 'react';

export interface IconProps {
    color?: string,
    colorOverride?: string
}

export const IconBase = ({ children }: PropsWithChildren) => {
    return (
        <div block="Icon">
            {children}
        </div>
    );
};

export default IconBase;