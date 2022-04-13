import Head from 'next/head'
import Layout from '../components/template/Layout'
import useAuth from '../data/hook/useAuth'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div>
      <Layout title="Meu perfil" subtitle="Gerencie as suas informações!">
        <Head>
          <title>Meu perfil</title>
          <meta name="profile" content="user profile" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className=" relative flex flex-col justify-center items-center mt-3">
          <img
            src={
              user?.photoURL.replaceAll('s96-c', 's240-c') ??
              '/images/avatar.png'
            }
            alt="Foto do usuário"
            className="h-48 w-48 rounded-full"
          />
          <h1 className="text-2xl font-semibold mt-3">{user?.name}</h1>
          <h4 className="text-sm font-light mt-1">{user?.email}</h4>
        </div>
      </Layout>
    </div>
  )
}
