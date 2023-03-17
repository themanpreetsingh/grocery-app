

function RemoveFromWishListIcon(props) {
  return (
    <svg
      width={54}
      height={49}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_17_126)" shapeRendering="crispEdges">
        <path
          d="M18.417 9C13.332 9 9 12.872 9 17.9c0 3.47 1.595 6.39 3.71 8.81 2.106 2.41 4.824 4.434 7.281 6.127l4.24 2.923c.465.32 1.073.32 1.538 0l4.24-2.922c2.457-1.694 5.175-3.718 7.282-6.129C39.405 24.29 41 21.37 41 17.9c0-5.028-4.332-8.9-9.417-8.9-2.621 0-4.928 1.252-6.583 2.871C23.345 10.251 21.038 9 18.417 9z"
          fill="#E86F6F"
        />
        <path
          d="M18.417 9C13.332 9 9 12.872 9 17.9c0 3.47 1.595 6.39 3.71 8.81 2.106 2.41 4.824 4.434 7.281 6.127l4.24 2.923c.465.32 1.073.32 1.538 0l4.24-2.922c2.457-1.694 5.175-3.718 7.282-6.129C39.405 24.29 41 21.37 41 17.9c0-5.028-4.332-8.9-9.417-8.9-2.621 0-4.928 1.252-6.583 2.871C23.345 10.251 21.038 9 18.417 9z"
          stroke="#FF8181"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_17_126"
          x={0.5}
          y={0.5}
          width={53}
          height={48}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.542262 0 0 0 0 0.542262 0 0 0 0.2 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_126"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_17_126"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default RemoveFromWishListIcon;
