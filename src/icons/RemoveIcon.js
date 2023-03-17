

function RemoveIcon(props) {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.5} width={24} height={24} rx={8} fill="#7FD287" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.273 7.227a.75.75 0 010 1.06L13.561 12l3.712 3.712a.75.75 0 11-1.06 1.061L12.5 13.061l-3.712 3.712a.75.75 0 01-1.061-1.06L11.439 12 7.727 8.288a.75.75 0 011.06-1.06l3.713 3.711 3.712-3.712a.75.75 0 011.061 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default RemoveIcon;
