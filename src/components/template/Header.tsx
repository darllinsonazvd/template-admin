import Title from './Title'
import SwitchThemeButton from './SwitchThemeButton'
import useAppData from '../../data/hook/useAppData'

interface HeaderProps {
  title: string
  subtitle: string
}

export default function Header(props: HeaderProps) {
  const { theme, switchTheme } = useAppData()

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end">
        <SwitchThemeButton theme={theme} switchTheme={switchTheme} />
      </div>
    </div>
  )
}
