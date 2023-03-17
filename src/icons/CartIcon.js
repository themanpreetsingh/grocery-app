import { Link } from "react-router-dom";

function CartIcon(props) {
  return (
    <Link to="/checkout">
        <svg
        width={84}
        height={83}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M47.45 39.533H11.603L8.54 34.005A1.944 1.944 0 006.84 33H2.947A1.953 1.953 0 001 34.96c0 1.082.871 1.96 1.946 1.96h2.75l3.023 5.456 6.972 15.531.007.016.614 1.368-7 7.518a1.97 1.97 0 00-.407 2.016 1.95 1.95 0 001.607 1.272l6.38.734c7.979.918 16.037.918 24.017 0l6.38-.734A1.957 1.957 0 0049 67.927a1.95 1.95 0 00-2.155-1.725l-6.38.734a101.17 101.17 0 01-23.133 0l-2.531-.291 5.137-5.518c.05-.053.096-.109.138-.166l1.954.256c2.738.359 5.505.43 8.258.21a24.055 24.055 0 0016.523-8.542l1.5-1.79c.05-.06.097-.123.14-.189l2.796-4.29c1.982-3.042-.185-7.083-3.797-7.083zM14.626 74.16c-2.15 0-3.893 1.755-3.893 3.92S12.474 82 14.625 82c2.15 0 3.893-1.755 3.893-3.92s-1.743-3.92-3.893-3.92zM39.281 78.08c0-2.165 1.743-3.92 3.893-3.92 2.15 0 3.893 1.755 3.893 3.92S45.324 82 43.174 82c-2.15 0-3.893-1.755-3.893-3.92z"
          fill="#585858"
        />
        <path
          d="M47.45 39.533H11.603L8.54 34.005A1.944 1.944 0 006.84 33H2.947A1.953 1.953 0 001 34.96c0 1.082.871 1.96 1.946 1.96h2.75l3.023 5.456 6.972 15.531.007.016.614 1.368-7 7.518a1.97 1.97 0 00-.407 2.016 1.95 1.95 0 001.607 1.272l6.38.734c7.979.918 16.037.918 24.017 0l6.38-.734A1.957 1.957 0 0049 67.927a1.95 1.95 0 00-2.155-1.725l-6.38.734a101.17 101.17 0 01-23.133 0l-2.531-.291 5.137-5.518c.05-.053.096-.109.138-.166l1.954.256c2.738.359 5.505.43 8.258.21a24.055 24.055 0 0016.523-8.542l1.5-1.79c.05-.06.097-.123.14-.189l2.796-4.29c1.982-3.042-.185-7.083-3.797-7.083zM14.626 74.16c-2.15 0-3.893 1.755-3.893 3.92S12.474 82 14.625 82c2.15 0 3.893-1.755 3.893-3.92s-1.743-3.92-3.893-3.92zM39.281 78.08c0-2.165 1.743-3.92 3.893-3.92 2.15 0 3.893 1.755 3.893 3.92S45.324 82 43.174 82c-2.15 0-3.893-1.755-3.893-3.92z"
          stroke="#8F8F8F"
          strokeOpacity={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#prefix__filter0_d_103_16)" shapeRendering="crispEdges">
          <rect
            x={47}
            y={9}
            width={24}
            height={24}
            rx={12}
            fill="#0085FF"
            fillOpacity={0.7}
          />
          <rect
            x={47}
            y={9}
            width={24}
            height={24}
            rx={12}
            stroke="#0098ED"
            strokeOpacity={0.5}
          />
        </g>
        <path
          d="M60.004 16.976v9.492l-.602.532h-.588v-8.596l-1.736 1.456-.63-.784 2.492-2.1h1.064z"
          fill="#fff"
        />
        <defs>
          <filter
            id="prefix__filter0_d_103_16"
            x={38.5}
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
            <feColorMatrix values="0 0 0 0 0.3875 0 0 0 0 0.7795 0 0 0 0 1 0 0 0 0.2 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_103_16"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_103_16"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

    </Link>
      );
}

export default CartIcon;
