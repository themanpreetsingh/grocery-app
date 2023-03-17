

function RemoveItemIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={24} rx={8} fill="#E86F6F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.75 11.25h6a.75.75 0 010 1.5h-12a.75.75 0 010-1.5h6z"
        fill="#fff"
      />
    </svg>
  );
}

export default RemoveItemIcon;
