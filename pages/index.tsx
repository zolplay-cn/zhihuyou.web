import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { classNames, siteTitle } from '~/lib/helper'
import Logo from '~/components/Logo'
import { FireIcon, HomeIcon, BellIcon, UserGroupIcon, ShareIcon } from '@heroicons/react/outline'
import {
  DotsVerticalIcon,
  ThumbUpIcon,
  SearchIcon,
  ChatAltIcon,
  EyeIcon,
  PlusIcon,
} from '@heroicons/react/solid'

const Home: NextPage = () => {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{siteTitle('主页')}</title>
        <meta name="description" content="知忽悠官网" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
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
                        <SearchIcon className="fill-current h-5 w-5 text-gray-400" />
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
                  <BellIcon className="stroke-current h-6 w-6" />
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
                      <HomeIcon className="stroke-current text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                      <span className="truncate"> 主页 </span>
                    </a>

                    <a
                      href="#"
                      className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-xl"
                      aria-current="false"
                    >
                      <FireIcon className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                      <span className="truncate"> 最热文章 </span>
                    </a>

                    <a
                      href="#"
                      className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-xl"
                      aria-current="false"
                    >
                      <UserGroupIcon className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
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
                        />
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
                        />
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
                        />
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
                                    <DotsVerticalIcon className="h-5 w-5" />
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
                                <ThumbUpIcon className="h-5 w-5" />
                                <span className="font-medium text-gray-900">29</span>
                                <span className="sr-only">点赞</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatAltIcon className="h-5 w-5" />
                                <span className="font-medium text-gray-900">11</span>
                                <span className="sr-only">回复</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <EyeIcon className="h-5 w-5" />
                                <span className="font-medium text-gray-900">2.7万</span>
                                <span className="sr-only">浏览</span>
                              </button>
                            </span>
                          </div>
                          <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ShareIcon className="h-5 w-5" />
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
                                  <PlusIcon className="-ml-1 mr-0.5 h-5 w-5 text-indigo-400" />
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
                                      <ChatAltIcon className="w-5 h-5" />
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
    </>
  )
}

export default Home
