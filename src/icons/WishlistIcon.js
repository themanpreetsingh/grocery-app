

function WishlistIcon(props) {
  return (
    <svg
      width={83}
      height={82}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.009 38C7.904 38 1 44.166 1 52.175c0 5.524 2.542 10.175 5.912 14.028 3.357 3.84 7.69 7.063 11.606 9.76l6.757 4.655c.74.51 1.71.51 2.45 0l6.757-4.654c3.917-2.698 8.249-5.921 11.606-9.76C49.458 62.35 52 57.698 52 52.173 52 44.167 45.096 38 36.991 38c-4.177 0-7.853 1.993-10.491 4.572C23.862 39.993 20.186 38 16.009 38z"
        fill="#E86F6F"
        stroke="#FF5E5E"
        strokeOpacity={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g filter="url(#prefix__filter0_d_103_15)" shapeRendering="crispEdges">
        <rect x={46} y={9} width={24} height={24} rx={12} fill="#FF7979" />
        <rect
          x={46}
          y={9}
          width={24}
          height={24}
          rx={12}
          stroke="#FF7979"
          strokeOpacity={0.5}
        />
      </g>
      <path
        d="M56.87 20.89c-1.204-.803-1.806-1.731-1.806-2.786 0-.803.29-1.405.868-1.806.457-.327 1.045-.49 1.764-.49.85 0 1.512.22 1.988.658.457.41.686.975.686 1.694 0 .55-.126 1.013-.378 1.386-.243.373-.71.807-1.4 1.302 1.503.71 2.254 1.652 2.254 2.828 0 .859-.373 1.517-1.12 1.974-.57.355-1.246.532-2.03.532-.933 0-1.69-.229-2.268-.686-.57-.448-.854-1.064-.854-1.848 0-1.167.765-2.086 2.296-2.758zm.882-.476c.952-.597 1.428-1.367 1.428-2.31 0-.448-.13-.803-.392-1.064-.261-.27-.616-.406-1.064-.406-.495 0-.868.15-1.12.448-.233.261-.35.607-.35 1.036 0 .439.112.84.336 1.204.243.41.63.775 1.162 1.092zm-.014.826c-.7.336-1.195.677-1.484 1.022-.28.336-.42.76-.42 1.274 0 .523.168.933.504 1.232.336.29.798.434 1.386.434.588 0 1.05-.15 1.386-.448.345-.299.518-.7.518-1.204 0-.485-.145-.905-.434-1.26-.29-.355-.775-.705-1.456-1.05z"
        fill="#fff"
      />
      <defs>
        <filter
          id="prefix__filter0_d_103_15"
          x={37.5}
          y={0.5}
          width={45}
          height={45}
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
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.563095 0 0 0 0 0.563095 0 0 0 0.2 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_15"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_103_15"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default WishlistIcon;
