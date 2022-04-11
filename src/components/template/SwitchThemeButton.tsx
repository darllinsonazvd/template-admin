import { MoonIcon, SunIcon } from '../icons'

interface SwitchThemeButtonProps {
  theme: string
  switchTheme: () => void
}

export default function SwitchThemeButton(props: SwitchThemeButtonProps) {
  return props.theme === 'dark' ? (
    <div
      onClick={props.switchTheme}
      className="hidden sm:flex items-center cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full"
    >
      <div className="flex justify-center items-center bg-white text-yellow-600 h-6 w-6 rounded-full">
        {SunIcon}
      </div>
      <div className="hidden lg:flex items-center ml-3 text-white">
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.switchTheme}
      className="hidden sm:flex items-center justify-end cursor-pointer bg-gradient-to-r from-gray-600 to-gray-900 w-14 lg:w-24 h-8 p-1 rounded-full"
    >
      <div className="hidden lg:flex items-center mr-2 text-gray-300">
        <span className="text-sm">Escuro</span>
      </div>
      <div className="flex justify-center items-center bg-black text-yellow-300 h-6 w-6 rounded-full">
        {MoonIcon}
      </div>
    </div>
  )
}
