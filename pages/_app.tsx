import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { tippy } from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css'
import React, { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'

function bootstrap() {
  tippy.setDefaultProps({
    animation: 'perspective-subtle',
    theme: 'lal',
    inertia: true,
    interactive: true,
    hideOnClick: false,
  })
}

bootstrap()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />

      <Toaster position="bottom-right" reverseOrder toastOptions={{ className: 'toaster' }} />
    </Fragment>
  )
}

export default MyApp
