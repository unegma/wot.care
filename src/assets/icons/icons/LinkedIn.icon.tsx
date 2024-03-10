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
        d="M24 0C10.747 0 0 10.747 0 24s10.747 24 24 24 24-10.747 24-24S37.253 0 24 0Zm-6.974 36.281H11.18V18.696h5.845v17.585Zm-2.922-19.986h-.039c-1.961 0-3.23-1.35-3.23-3.038 0-1.725 1.308-3.038 3.307-3.038 2 0 3.23 1.313 3.268 3.038 0 1.688-1.268 3.038-3.306 3.038ZM38.102 36.28h-5.844v-9.407c0-2.365-.847-3.977-2.962-3.977-1.614 0-2.576 1.088-2.998 2.138-.155.375-.193.9-.193 1.426v9.82h-5.844s.076-15.935 0-17.585h5.844v2.49c.777-1.198 2.167-2.903 5.268-2.903 3.845 0 6.73 2.514 6.73 7.915v10.083Z"
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
