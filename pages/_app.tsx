import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { tippy } from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css'
import { Toaster } from 'react-hot-toast'
import { store } from '~/lib/store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <Component {...pageProps} />

      <Toaster position="bottom-right" reverseOrder toastOptions={{ className: 'toaster' }} />
    </Provider>
  )
}

export default MyApp
