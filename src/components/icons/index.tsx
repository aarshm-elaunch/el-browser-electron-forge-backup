import { SVGProps } from "react";

export const KeyIcon = ({ width = 32, height = 32, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    {...props}
    viewBox="0 0 48 48"
    id="key"
  >
    <defs>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1="949.87"
        x2="974.39"
        y1="518.014"
        y2="544.657"
        gradientTransform="translate(-1571.72 443.344)scale(1.53785)"
        gradientUnits="userSpaceOnUse"
      ></linearGradient>
      <linearGradient id="a">
        <stop offset="0" stop-color="#24f7bc"></stop>
        <stop offset="1" stop-color="#24c4fc"></stop>
      </linearGradient>
    </defs>
    <g transform="translate(117.368 -1236.363)">
      <rect width="48" height="48" x="-117.368" y="1236.363" fill="url(#b)" rx="10.144" ry="10.144"></rect>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M-84.793 1249.442a3.002 3.002 0 0 0-2.246 1.084 6.002 6.002 0 0 0-6.343 1.371 5.997 5.997 0 0 0-1.547 5.787l-10.291 10.291a.5.5 0 0 0-.145.409l.354 3.181a.5.5 0 0 0 .441.442l3.182.353a.5.5 0 0 0 .41-.142l1.35-1.35.787-.79a.5.5 0 0 0 .146-.36l-.014-.875.875.016a.5.5 0 0 0 .362-.147l1.367-1.367a.5.5 0 0 0 .146-.363l-.015-.875.875.016a.5.5 0 0 0 .363-.147l1.367-1.367a.5.5 0 0 0 .147-.361l-.016-.875.875.016a.5.5 0 0 0 .362-.147l1.314-1.312a5.998 5.998 0 0 0 5.789-1.547 5.996 5.996 0 0 0 1.65-5.348 2.998 2.998 0 0 0 1.498-2.312 3.002 3.002 0 0 0-3.042-3.28zm.016.998c.223 0 .45.03.672.104a1.995 1.995 0 0 1 1.36 2.086 1.99 1.99 0 0 1-.782 1.404 5.953 5.953 0 0 0-1.371-2.137 5.967 5.967 0 0 0-1.195-.918c.36-.335.827-.53 1.316-.539zm-4.363.695c.65 0 1.297.13 1.908.383a.5.5 0 0 0 .254.133c.493.238.963.544 1.373.953a4.969 4.969 0 0 1 1.148 1.815h-.015a1.993 1.993 0 0 1-1.475-.397c.028-.469-.13-.949-.486-1.304a1.71 1.71 0 0 0-2.404 0 1.71 1.71 0 0 0 0 2.404c.66.661 1.744.66 2.404 0 .044-.044.079-.095.117-.143a2.99 2.99 0 0 0 1.977.432c.044-.01.085-.022.129-.03a4.975 4.975 0 0 1-1.395 4.29 4.992 4.992 0 0 1-7.07 0 4.992 4.992 0 0 1 0-7.07 4.985 4.985 0 0 1 3.535-1.47zm1.506 2.088c.018 0 .036.01.054.012a.5.5 0 0 0 .036.26c.114.305.278.58.474.823-.024.034-.04.072-.07.103a.694.694 0 0 1-.99 0 .695.695 0 0 1 0-.992.698.698 0 0 1 .496-.21zm-6.916 5.499c.146.307.321.604.523.888l-10.176 10.176-.14-1.272 9.793-9.792zm1.168 1.66c.496.496 1.06.88 1.66 1.166l-.836.836-1.178-.02a.5.5 0 0 0-.51.508l.02 1.178-1.068 1.069-1.178-.018a.5.5 0 0 0-.508.507l.018 1.18-1.067 1.066-1.18-.018a.5.5 0 0 0-.507.508l.02 1.18-.64.639-1.18 1.18-2.546-.284 10.68-10.678z"
        color="#000"
        font-family="sans-serif"
        font-weight="400"
        overflow="visible"
      ></path>
    </g>
  </svg>
);

export const LockIcon = ({ width = 32, height = 32, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    {...props}
    viewBox="0 0 512 512"
    id="lock"
  >
    <defs>
      <linearGradient id="a" x1="256" x2="256" y1="19.824" y2="487.88" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#00efd1"></stop>
        <stop offset="1" stop-color="#00acea"></stop>
      </linearGradient>
      <linearGradient xlinkHref="#a" id="b" x1="255.999" x2="255.999" y1="19.824" y2="487.88"></linearGradient>
    </defs>
    <g>
      <path
        fill="url(#a)"
        d="M386,206.465V155.083c0-34-13.74-65.812-38.957-89.575A129.427,129.427,0,0,0,257.75,30c-.625,0-1.068,0-1.695.014C184.231,30.038,126,86.134,126,155.081v51.384c-27,1.968-49,23.619-49,49.97V431.873C77,459.515,100.838,482,129.7,482H382.3c28.864,0,52.7-22.485,52.7-50.127V256.433C435,230.081,413,208.43,386,206.465ZM256,46h.117c29.893,0,58.2,10.626,79.954,31.146A106.161,106.161,0,0,1,370,155.083V206H342V155.086a81.823,81.823,0,0,0-26.019-59.741A86.061,86.061,0,0,0,256.837,72h-.655C208.686,72,170,109.345,170,155.079V206H142V155.081C142,94.939,192.972,46,256,46Zm70,160H186V155.079C186,118.167,217.508,88,256.182,88H257.2a69.685,69.685,0,0,1,47.861,19.04A65.8,65.8,0,0,1,326,155.081Zm93,225.873C419,450.691,402.34,466,382.3,466H129.7C109.66,466,93,450.691,93,431.873V256.435C93,237.614,109.66,222,129.7,222H382.3c20.042,0,36.7,15.614,36.7,34.433Z"
      ></path>
      <path
        fill="url(#b)"
        d="M256,317c-19.694,0-35.715,15.4-35.715,34.331A33.313,33.313,0,0,0,238,380.965v33.627a18,18,0,0,0,36,0V380.966a33.314,33.314,0,0,0,17.716-29.635C291.716,332.4,275.692,317,256,317Zm2,97.592a2,2,0,0,1-4,0V385.605c1,.036,1.328.057,2,.057s1-.021,2-.057Zm-2-44.93c-10.872,0-19.717-8.224-19.717-18.331S245.125,333,256,333s19.718,8.224,19.718,18.331S266.869,369.662,256,369.662Z"
      ></path>
    </g>
  </svg>
);

export const ElectronIcon = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props} viewBox="0 0 128 128" id="electron">
    <path
      fill="#47848f"
      d="M49.07,32.66c-14.37-2.62-25.72.12-30.25,8-3.38,5.85-2.41,13.61,2.34,21.9a1.47,1.47,0,0,0,2.56-1.47c-4.28-7.47-5.12-14.17-2.35-19,3.76-6.51,13.89-9,27.17-6.54a1.47,1.47,0,1,0,.53-2.9ZM28.63,72.61a92.2,92.2,0,0,0,22,17.34c20.84,12,43,15.25,54,7.79a1.47,1.47,0,0,0-1.66-2.43C93.11,102,72,98.92,52.07,87.39A89.27,89.27,0,0,1,30.81,70.62a1.47,1.47,0,0,0-2.18,2Z"
    ></path>
    <path
      fill="#47848f"
      d="M101.06,70.81c9.41-11.11,12.69-22.29,8.17-30.11-3.32-5.76-10.35-8.8-19.69-8.92a1.47,1.47,0,0,0,0,2.95c8.4.11,14.45,2.73,17.18,7.45,3.75,6.5.82,16.47-7.87,26.74a1.47,1.47,0,1,0,2.25,1.9ZM76.89,33.15a92,92,0,0,0-26.25,10.4C29.13,56,15.09,74.29,17,87.57A1.47,1.47,0,0,0,20,87.14C18.23,75.35,31.53,58,52.11,46.11A89.07,89.07,0,0,1,77.51,36a1.47,1.47,0,1,0-.62-2.88Z"
    ></path>
    <path
      fill="#47848f"
      d="M42 96.78C47 110.51 55 119 64.05 119c6.6 0 12.7-4.5 17.46-12.42A1.47 1.47 0 1 0 79 105c-4.28 7.12-9.53 11-14.94 11-7.52 0-14.69-7.54-19.24-20.24a1.47 1.47 0 0 0-2.77 1zM87 94.09a92.5 92.5 0 0 0 3.91-27.3c0-24.41-8.54-45.44-20.71-50.85A1.47 1.47 0 0 0 69 18.64c10.85 4.82 19 24.78 19 48.15a89.57 89.57 0 0 1-3.78 26.42 1.47 1.47 0 0 0 2.81.88zM114.71 92.65a7.05 7.05 0 1 0-7.05 7.05 7.05 7.05 0 0 0 7.05-7.05zm-2.95 0a4.1 4.1 0 1 1-4.1-4.1 4.1 4.1 0 0 1 4.1 4.1zM20.34 99.7a7.05 7.05 0 1 0-7.05-7.05 7.05 7.05 0 0 0 7.05 7.05zm0-2.95a4.1 4.1 0 1 1 4.1-4.1 4.1 4.1 0 0 1-4.1 4.1z"
    ></path>
    <path
      fill="#47848f"
      d="M64.05 23.13A7.05 7.05 0 1 0 57 16.08a7.05 7.05 0 0 0 7.05 7.05zm0-2.95a4.1 4.1 0 1 1 4.1-4.1 4.1 4.1 0 0 1-4.1 4.1zM65.13 71.77A5.1 5.1 0 1 1 69 65.71 5.1 5.1 0 0 1 65.13 71.77z"
    ></path>
  </svg>
);

export const LinkIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.616 16.077H7.077C5.949 16.077 4.98767 15.6797 4.193 14.885C3.39833 14.0903 3.00067 13.1287 3 12C2.99933 10.8713 3.397 9.90966 4.193 9.115C4.989 8.32033 5.95033 7.92266 7.077 7.922H10.616V8.922H7.077C6.23033 8.922 5.506 9.22333 4.904 9.826C4.30133 10.4293 4 11.154 4 12C4 12.846 4.30133 13.5703 4.904 14.173C5.50667 14.7757 6.231 15.077 7.077 15.077H10.616V16.077ZM8.5 12.5V11.5H15.5V12.5H8.5ZM13.385 16.077V15.077H16.923C17.7697 15.077 18.494 14.7757 19.096 14.173C19.6987 13.5703 20 12.846 20 12C20 11.154 19.6987 10.4297 19.096 9.827C18.4933 9.22433 17.769 8.923 16.923 8.923H13.385V7.923H16.923C18.051 7.923 19.0127 8.32033 19.808 9.115C20.6033 9.90966 21.0007 10.8713 21 12C20.9993 13.1287 20.6017 14.0903 19.807 14.885C19.0123 15.6797 18.051 16.0773 16.923 16.078L13.385 16.077Z" fill="#1C1C1E" />
  </svg>
);

export const FolderIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 11.1V16.5C22 20.1 21 21 17 21H7C3 21 2 20.1 2 16.5V7.5C2 3.9 3 3 7 3H8.5C10 3 10.33 3.396 10.9 4.08L12.4 5.88C12.78 6.33 13 6.6 14 6.6H17C21 6.6 22 7.5 22 11.1Z" stroke="#1C1C1E" strokeMiterlimit="10" />
    <path d="M8 3H17C19 3 20 3.91324 20 5.73973V7" stroke="#1C1C1E" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CancleCircleIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#1C1C1E" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.16992 14.83L14.8299 9.17004" stroke="#1C1C1E" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.8299 14.83L9.16992 9.17004" stroke="#1C1C1E" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PluseCircleIcon = ({ width = 18, height = 18, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z" stroke="#1C1C1E" strokeOpacity="0.3" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9H12" stroke="#1C1C1E" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12V6" stroke="#1C1C1E" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SearchIcon = ({ width = 26, height = 26, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4583 22.7501C18.1423 22.7501 22.75 18.1423 22.75 12.4584C22.75 6.77448 18.1423 2.16675 12.4583 2.16675C6.7744 2.16675 2.16666 6.77448 2.16666 12.4584C2.16666 18.1423 6.7744 22.7501 12.4583 22.7501Z" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23.8333 23.8334L21.6667 21.6667" stroke="#1C1C1E" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const EyeOffIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M9.47 14.53L2 22" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M22 2L14.53 9.47" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
  </svg>

);
export const EyeIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#1C1C1E" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
  </svg>
);

export const HistoryIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.8901 5.0799C14.0201 4.8199 13.0601 4.6499 12.0001 4.6499C7.21008 4.6499 3.33008 8.5299 3.33008 13.3199C3.33008 18.1199 7.21008 21.9999 12.0001 21.9999C16.7901 21.9999 20.6701 18.1199 20.6701 13.3299C20.6701 11.5499 20.1301 9.8899 19.2101 8.5099" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M16.13 5.32L13.24 2" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M16.13 5.32007L12.76 7.78007" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round" />
  </svg>
);

export const DownloadIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.32007 11.6799L11.8801 14.2399L14.4401 11.6799" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M11.8799 4V14.17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M20 12.1799C20 16.5999 17 20.1799 12 20.1799C7 20.1799 4 16.5999 4 12.1799" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
  </svg>
);

export const NextRoundedIcon = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="white" stroke="currentColor" stroke-opacity="0.3" strokeWidth="0.533333" strokeMiterlimit="10" stroke-linecap="round" strokeLinejoin="round" />
    <path d="M8.05493 11.6475L10.6949 9.00004L8.05493 6.35254" stroke="currentColor" strokeWidth="0.533333" stroke-linecap="round" strokeLinejoin="round" />
  </svg>
);
export const NextIcon = ({ width = 6, height = 14, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...props} viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.05493 5.64754L3.69493 3.00004L1.05493 0.352539" stroke="currentColor" strokeWidth="0.533333" stroke-linecap="round" strokeLinejoin="round" />
  </svg>
);
