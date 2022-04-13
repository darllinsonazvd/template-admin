import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Router from 'next/router'
import loadingGIF from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForceAuth(props) {
  const { user, loading } = useAuth()

  function renderContent() {
    return (
      <>
        <Script
          dangerouslySetInnerHTML={{
            __html: `if (!document.cookie?.includes('template-admin-auth')) {
              window.location.href = '/auth'
              }`
          }}
        ></Script>
        {props.children}
      </>
    )
  }

  function renderLoading() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loadingGIF} />
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    Router.push('/auth')
    return null
  }
}
