import Head from 'next/head'
import Layout from '../components/template/Layout'

export default function Notifications() {
  return (
    <div>
      <Layout
        title="Notificações"
        subtitle="Aqui você irá gerenciar as suas notificações!"
      >
        <Head>
          <title>Notificações (0)</title>
          <meta name="notifications" content="user notifications" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Ainda não há nada por aqui! 🤔</p>
      </Layout>
    </div>
  )
}
