import Link from 'next/link'

interface MenuItemProps {
  url?: string
  text: string
  icon: any
  className?: string
  onCLick?: (e: any) => void
}

export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-200 ${props.className}`}
      >
        {props.icon}
        <span className="text-xs font-normal">{props.text}</span>
      </a>
    )
  }

  return (
    <li
      onClick={props.onCLick}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
    >
      {props.url ? (
        <Link href={props.url} passHref>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  )
}