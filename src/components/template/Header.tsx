import Title from './Title'
import SwitchThemeButton from './SwitchThemeButton'
import useAppData from '../../data/hook/useAppData'
import UserPhoto from './UserPhoto'

interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header(props: HeaderProps) {
  const { theme, switchTheme } = useAppData()

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <SwitchThemeButton theme={theme} switchTheme={switchTheme} />
        <UserPhoto className="h-10 w-10 ml-3" />
      </div>
    </div>
  )
}
