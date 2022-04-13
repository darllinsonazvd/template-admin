import { useState } from 'react'
import Head from 'next/head'
import { WarningIcon } from '../components/icons'
import AuthInput from '../components/auth/AuthInput'
import useAuth from '../data/hook/useAuth'

export default function Auth() {
  const { register, login, googleLogin } = useAuth()

  const [error, setError] = useState(null)
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function showError(msg, timeInSeconds = 5) {
    setError(msg)
    setTimeout(() => setError(null), timeInSeconds * 1000)
  }

  async function submit() {
    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await register(email, password)
      }
    } catch (e) {
      if (e?.message === 'Firebase: Error (auth/user-not-found).') {
        showError('Usuário não encontrado, faça seu cadastro na plataforma!')
      } else if (e?.message === 'Firebase: Error (auth/wrong-password).') {
        showError('Credenciais incorretas!')
      } else if (e?.message === 'Firebase: Error (auth/invalid-email).') {
        showError('E-mail inválido!')
      } else if (
        e?.message ===
        'Firebase: Password should be at least 6 characters (auth/weak-password).'
      ) {
        showError('Sua senha precisa ter no mínimo 6 caracteres!')
      } else {
        showError('Ocorreu um erro inesperado')
      }
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Head>
        <title>Entrar no sistema</title>
        <meta name="auth" content="Authentication" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/Nyvq2juw4_o"
          alt="Auth screen image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl md:text-3xl font-bold mb-5 ">
          {mode === 'login'
            ? 'Faça seu login na plataforma'
            : 'Cadastre-se da plataforma'}
        </h1>

        {error ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 rounded-lg">
            {WarningIcon} <span className="ml-2">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          type="email"
          label="Email"
          value={email}
          onChange={setEmail}
          required
        />
        <AuthInput
          type="password"
          label="Senha"
          value={password}
          onChange={setPassword}
          required
        />

        <button
          onClick={submit}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={googleLogin}
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3"
        >
          Entrar com Google (recomendado)
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMode('register')}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {' '}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMode('login')}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {' '}
              Entre com a sua conta
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
