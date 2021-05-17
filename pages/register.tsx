import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { siteTitle } from '~/lib/helper'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { ThunkDispatchResults } from '~/types/redux'
import { authThunks } from '~/features/users/auth/auth.thunks'

const RegisterPage: NextPage = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [remembers, setRemembers] = useState(true)
  const [formError, setFormError] = useState<string>()

  const register = async () => {
    setFormError(undefined)

    const results: ThunkDispatchResults = await dispatch(
      authThunks.register({
        email,
        password,
        fullName,
        remembers,
      })
    )
    if (results.type === authThunks.register.rejected.type) {
      setFormError(results.payload.message)
    }
  }

  return (
    <>
      <Head>
        <title>{siteTitle('注册')}</title>
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            <a>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">注册账号</h2>
            </a>
          </Link>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault()
                return register()
              }}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  邮箱
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                  姓名
                </label>
                <div className="mt-1">
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(event) => setFullName(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  密码
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>

              {formError && (
                <p className="mt-2 text-sm font-medium text-red-600" id="form-error">
                  {formError}
                </p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    defaultChecked={remembers}
                    onChange={(event) => setRemembers(event.target.checked)}
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    保持登录状态
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  注册
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">已经有账号了？</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-center text-sm">
                <Link href="/login">
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">立即登录</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
