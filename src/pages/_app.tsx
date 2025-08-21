// src/pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store/store'   // CHÚ Ý: import đúng đường dẫn
import Layout from '@/components/Layout'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  TextField,
  Pagination,
} from "@mui/material";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
