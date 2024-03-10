import {SVGProps} from 'react';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const SvgComponent = ({width, height, fill}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? 144}
    height={height ?? 144}
    fill="none"
  >
    <circle
      cx={width ? width / 2 : 71.995}
      cy={height ? height / 2 : 71.715}
      r={width ? width / 2 : 71.715}
      fill={fill ?? '#4C46DC'}
    />
  </svg>
);

export default SvgComponent;
