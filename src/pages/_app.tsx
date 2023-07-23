import { Provider } from "react-redux"
import Layout from "../components/Layout/Layout"
import "../styles/globals.css"
import type { AppProps } from 'next/app'
import { setupStore } from "@/redux/store"

const store = setupStore()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  
  ) 
}
