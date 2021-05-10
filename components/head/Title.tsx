import { FC } from 'react'
import Head from 'next/head'
import { appConfig } from '~/config/app'

const Title: FC = ({ children }) => {
  return (
    <Head>
      <title>{[children, appConfig.name].join(' | ')}</title>
    </Head>
  )
}

export default Title
