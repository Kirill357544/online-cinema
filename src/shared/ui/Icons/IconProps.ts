import { SVGAttributes } from 'react';

export type IconProps = Omit<SVGAttributes<SVGSVGElement>, 'style' | 'width' | 'height' | 'color' | 'fill'> & {
    className?: string;
};
