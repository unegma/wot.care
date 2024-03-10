import * as React from 'react';
import {SVGProps} from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      />
      <path
        fill="#fff"
        d="M16.303 27.5a2.8 2.8 0 1 1-2.8-2.8h2.8v2.8ZM17.703 27.5a2.8 2.8 0 0 1 5.6 0v7a2.8 2.8 0 0 1-5.6 0v-7ZM20.503 16.3a2.8 2.8 0 1 1 2.8-2.8v2.8h-2.8ZM20.503 17.7a2.8 2.8 0 0 1 0 5.6h-7a2.8 2.8 0 0 1 0-5.6h7ZM31.703 20.5a2.8 2.8 0 1 1 2.8 2.8h-2.8v-2.8ZM30.303 20.5a2.8 2.8 0 0 1-5.6 0v-7a2.8 2.8 0 0 1 5.6 0v7ZM27.503 31.7a2.8 2.8 0 1 1-2.8 2.8v-2.8h2.8ZM27.503 30.3a2.8 2.8 0 0 1 0-5.6h7a2.8 2.8 0 0 1 0 5.6h-7Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
