import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface UserPhotoProps {
  className?: string
}

export default function UserPhoto(props: UserPhotoProps) {
  const { user } = useAuth()

  return (
    <Link href="/profile" passHref>
      <img
        src={user?.photoURL ?? '/images/avatar.png'}
        alt="Avatar do usuário"
        className={`rounded-full cursor-pointer ${props.className}`}
      />
    </Link>
  )
}
