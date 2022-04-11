import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { WarningIcon } from '../components/icons'

export default function Auth() {
  const [error, setError] = useState(null)
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function showError(msg, timeInSeconds = 5) {
    setError(msg)
    setTimeout(() => setError(null), timeInSeconds * 1000)
  }

  function submit() {
    if (mode === 'login') {
      console.log('login feito')
      showError('Ocorreu um erro no login')
    } else {
      console.log('cadastro feito')
      showError('Ocorreu um erro no cadastro')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
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
            ? 'Entre com a sua conta'
            : 'Cadastre-se da plataforma'}
        </h1>

        {error ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 rounded-lg">
            {WarningIcon} <span className="ml-1">{error}</span>
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
          onClick={submit}
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3"
        >
          Entrar com Google
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
