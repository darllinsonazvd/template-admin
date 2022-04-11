import {
  AdjustmentsIcon,
  HomeIcon,
  LogoutIcon,
  NotificationsIcon
} from '../icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

export default function SideMenu() {
  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/adjustments" text="Ajustes" icon={AdjustmentsIcon} />
        <MenuItem
          url="/notifications"
          text="Notificações"
          icon={NotificationsIcon}
        />
      </ul>
      <ul>
        <MenuItem
          text="Sair"
          icon={LogoutIcon}
          onCLick={() => console.log('Saiu!')}
          className="text-red-600 dark:text-red-500 hover:bg-red-600 hover:text-white dark:hover:bg-red-500 dark:hover:text-white"
        />
      </ul>
    </aside>
  )
}
