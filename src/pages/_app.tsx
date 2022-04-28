import { ThemeProvider } from '@mui/material/styles'
import { storeWrapper } from '../store'
import { Navbar } from '../components/molecules/navbar'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import VLibras from '@djpfs/react-vlibras';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <Component {...pageProps} />
        <VLibras/>
      </Navbar>
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(MyApp)