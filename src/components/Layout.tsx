import Head from 'next/head';
import { ReactNode, useEffect, VFC } from 'react';
import { useRecoilState } from 'recoil';

import Data from '../data/Data.json';
import Header from './Header';

import { responsiveState } from '@/atoms/responsive';
type LayoutTypeProps = {
  children: ReactNode;
  title?: string;
};

const Layout: VFC<LayoutTypeProps> = ({ children, title = "onikun's blog" }) => {
  const [width, setRecoilWidth] = useRecoilState(responsiveState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setRecoilWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return;
    }
  }, [setRecoilWidth]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="onikun's blog" />
        <meta name="apple-mobile-web-app-title" content="onikun's blog" />
        <meta name="description" content="onikunのポートフォリオサイト" />
        <meta property="og:url" content="https://onikun.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="onikunのブログ" />
        <meta
          property="og:description"
          content="onikunのポートフォリオサイトです.作品や経歴を掲載しています.作品に関しては順次公開します."
        />
        <meta property="og:site_name" content="onikunのブログ" />
        <meta property="og:image" content="https://onikun.com/onikun.png" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon-180x180.png" />
      </Head>
      <Header
        title="onikun's blog"
        snsData={Data.aboutData}
        headLink={Data.headerData}
        width={width}
      />
      {children}
    </div>
  );
};

export default Layout;
