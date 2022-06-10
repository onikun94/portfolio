import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
