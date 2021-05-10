import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { classNames } from '~/lib/helper'
import Logo from '~/components/Logo'

const Home: NextPage = () => {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>知忽悠</title>
        <meta name="description" content="知忽悠官网" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className={classNames('bg-white', 'shadow-xl-sm', 'lg:static', 'lg:overflow-y-visible')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div id="logo" className="flex-shrink-0 flex items-center">
                <Link href="/about">
                  <a className="flex items-center space-x-2 text-indigo-700">
                    <Logo className="block h-8 w-auto" />
                    <span className="font-medium text-xl">知忽悠</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    搜索
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-gray-300 rounded-xl py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="搜索"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              <a
                href="#"
                className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">查看通知</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>

              <div className="flex-shrink-0 relative ml-5">
                <div>
                  <button
                    id="user-menu"
                    type="button"
                    className="bg-white relative h-8 w-8 rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setNavOpen(!isNavOpen)}
                  >
                    <span className="sr-only">打开用户菜单</span>
                    <Image
                      layout="fill"
                      className="rounded-full"
                      quality="100"
                      src="/assets/avatars/cali.png"
                    />
                  </button>
                  {isNavOpen && <span>Open</span>}
                </div>
              </div>

              <a
                href="#"
                className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-xl-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                发表新文章
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-gray-100">
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                <div className="pb-8 space-y-1">
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-xl"
                    aria-current="page"
                  >
                    <svg
                      className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="truncate"> 主页 </span>
                  </a>

                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-xl"
                    aria-current="false"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <span className="truncate"> 最热文章 </span>
                  </a>

                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-xl"
                    aria-current="false"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="truncate"> 社区 </span>
                  </a>
                </div>
                <div className="pt-10">
                  <p
                    id="communities-headline"
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    我的兴趣
                  </p>
                  <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                    <a
                      href="#"
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span className="truncate"> 电影 </span>
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span className="truncate"> 美食 </span>
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span className="truncate"> 游戏 </span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <main className="lg:col-span-9 xl:col-span-6">
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    选择一个选项
                  </label>
                  <select
                    id="question-tabs"
                    className="block w-full rounded-xl border-gray-300 text-base font-medium text-gray-900 shadow-xl-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="#/recent">最新</option>
                    <option value="#/most-liked">最多点赞</option>
                    <option value="#/most-answers">最多回复</option>
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="relative z-0 rounded-xl shadow-xl flex divide-x divide-gray-200"
                    aria-label="Tabs"
                  >
                    <a
                      href="#"
                      aria-current="page"
                      className="text-gray-900 rounded-l-xl group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                    >
                      <span>最新</span>
                      <span
                        aria-hidden="true"
                        className="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
                      ></span>
                    </a>

                    <a
                      href="#"
                      aria-current="false"
                      className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                    >
                      <span>最多点赞</span>
                      <span
                        aria-hidden="true"
                        className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
                      ></span>
                    </a>

                    <a
                      href="#"
                      aria-current="false"
                      className="text-gray-500 hover:text-gray-700 rounded-r-xl group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                    >
                      <span>最多回复</span>
                      <span
                        aria-hidden="true"
                        className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
                      ></span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="sr-only">最新的提问</h1>
                <ul className="space-y-4">
                  <li className="bg-white px-4 py-6 shadow-xl sm:p-6 sm:rounded-xl">
                    <article aria-labelledby="question-title-81614">
                      <div>
                        <div className="flex space-x-3">
                          <div className="relative h-10 w-10 flex-shrink-0">
                            <Image
                              layout="fill"
                              className="rounded-full"
                              src="/assets/avatars/cali.png"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              <a href="#" className="hover:underline">
                                郭晓楠
                              </a>
                            </p>
                            <p className="text-sm text-gray-500">
                              <a href="#" className="hover:underline">
                                12月9号 早上11:43
                              </a>
                            </p>
                          </div>
                          <div className="flex-shrink-0 self-center flex">
                            <div className="relative inline-block text-left">
                              <div>
                                <button
                                  id="options-menu-0"
                                  type="button"
                                  className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                >
                                  <span className="sr-only">更多选项</span>
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h2
                          id="question-title-81614"
                          className="mt-4 text-base font-medium text-gray-900"
                        >
                          React好用还是Vue好用？那还用问，当然Vue.js YYDS。
                        </h2>
                      </div>
                      <div className="mt-2 text-sm text-gray-700 space-y-4">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam,
                          corporis ea esse est iste modi molestias odio similique sunt!
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iste
                          laudantium minus nobis quaerat quas quisquam &hellip;
                        </p>
                      </div>
                      <div className="mt-6 flex justify-between space-x-8">
                        <div className="flex space-x-6">
                          <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                              </svg>
                              <span className="font-medium text-gray-900">29</span>
                              <span className="sr-only">点赞</span>
                            </button>
                          </span>
                          <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-medium text-gray-900">11</span>
                              <span className="sr-only">回复</span>
                            </button>
                          </span>
                          <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                  fillRule="evenodd"
                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-medium text-gray-900">2.7万</span>
                              <span className="sr-only">浏览</span>
                            </button>
                          </span>
                        </div>
                        <div className="flex text-sm">
                          <span className="inline-flex items-center text-sm">
                            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                              </svg>
                              <span className="font-medium text-gray-900">分享</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </main>
            <aside className="hidden xl:block xl:col-span-4">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="bg-white rounded-xl shadow-xl">
                    <div className="p-6">
                      <h2
                        id="who-to-follow-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        相同兴趣的人
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul className="-my-4 divide-y divide-gray-200">
                          <li className="flex items-center py-4 space-x-3">
                            <div className="relative h-8 w-8 flex-shrink-0">
                              <Image
                                layout="fill"
                                className="rounded-full"
                                src="/assets/avatars/timx.jpg"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a href="#">王海鑫</a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a href="#">@timx</a>
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-xs font-medium text-indigo-700 hover:bg-indigo-100"
                              >
                                <svg
                                  className="-ml-1 mr-0.5 h-5 w-5 text-indigo-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span> 关注 </span>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="w-full block text-center px-4 py-2 border border-gray-300 shadow-xl-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50"
                        >
                          查看更多
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="trending-heading">
                  <div className="bg-white rounded-xl shadow-xl">
                    <div className="p-6">
                      <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                        回复榜
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul className="-my-4 divide-y divide-gray-200">
                          <li className="flex py-4 space-x-3">
                            <div className="relative h-8 w-8 flex-shrink-0">
                              <Image
                                layout="fill"
                                className="rounded-full"
                                src="/assets/avatars/timx.jpg"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm text-gray-800">
                                你看了这本书吗查理？小辣鸡！噢不不不 我的意思是书名叫《小辣鸡》
                              </p>
                              <div className="mt-2 flex">
                                <span className="inline-flex items-center text-sm">
                                  <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                    <svg
                                      className="h-5 w-5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span className="font-medium text-gray-900">291</span>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="w-full block text-center px-4 py-2 border border-gray-300 shadow-xl-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50"
                        >
                          查看更多
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
