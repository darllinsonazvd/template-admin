import Head from 'next/head'
import Layout from '../components/template/Layout'

export default function Adjustments() {
  return (
    <div>
      <Layout
        title="Ajustes"
        subtitle="Personalize o sistema e gerencie suas configurações pessoais aqui!"
      >
        <Head>
          <title>Ajustes</title>
          <meta name="adjusments" content="system adjusments" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h3>Em breve...</h3>
      </Layout>
    </div>
  )
}
