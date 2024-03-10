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
        d="M24 0a24 24 0 1 0 0 48 24 24 0 0 0 0-48Zm6.827 15.619c0 .451-.19.631-.631.631-.85 0-1.7 0-2.546.035-.846.035-1.307.42-1.307 1.305-.019.947 0 1.875 0 2.842h3.635c.518 0 .695.176.695.698v3.808c0 .515-.165.676-.686.679h-3.675v10.276c0 .55-.17.723-.714.723h-3.954c-.477 0-.663-.187-.663-.663v-10.32h-3.139c-.492 0-.67-.18-.67-.676v-3.83c0-.493.187-.68.673-.68h3.136v-2.763a6.911 6.911 0 0 1 .862-3.556 5.213 5.213 0 0 1 2.82-2.343 6.919 6.919 0 0 1 2.416-.417h3.104c.445 0 .632.196.632.632.015 1.216.015 2.419.012 3.619Z"
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
