import * as React from "react";
import { SVGProps } from "react";

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.293 13.657a1 1 0 1 0 1.414 1.414L.293 13.657Zm14.435-12.02a1 1 0 0 0-1-1h-9a1 1 0 0 0 0 2h8v8a1 1 0 1 0 2 0v-9ZM1.708 15.07 14.434 2.343 13.021.93.293 13.657l1.414 1.414Z"
      fill="#E5E5E5"
    />
  </svg>
);

export default SvgArrow;
