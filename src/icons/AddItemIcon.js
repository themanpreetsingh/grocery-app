

function AddItemIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={24} rx={8} fill="#7FD287" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
        fill="#fff"
      />
    </svg>
  );
}

export default AddItemIcon;
