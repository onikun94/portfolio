import hljs from 'highlight.js';
import { marked } from 'marked';
import 'highlight.js/styles/github-dark-dimmed.css';
import { GetServerSideProps } from 'next';
import React, { VFC } from 'react';

import { getBlogData } from '@/api/getBlogData';
import Layout from '@/components/Layout';
import { BlogType } from '@/types/BlogType';

type ContentsPageProps = {
  results: BlogType;
};

const Contents: VFC<ContentsPageProps> = ({ results }) => {
  marked.setOptions({
    langPrefix: 'rounded-xl my-2 text-sm hljs language-',
    highlight: (code, lang) => {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });
  return (
    <Layout>
      <div className="mx-auto w-3/5">
        <p>{results.updated_at}</p>
        <h1 className="text-center">{results.title}</h1>
        <br />
        {results.contents ? (
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html: marked(results.contents),
            }}
          ></div>
        ) : (
          <></>
        )}
        <br />
        <br />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (contextId) => {
  const title = contextId.query.title;
  let requestUrl;
  if (typeof title === 'string') {
    requestUrl = `http://onikunblog.herokuapp.com/blog/${title}`;
  }
  if (requestUrl) {
    const response = await getBlogData(requestUrl);
    return {
      props: { results: response },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

// export const getStaticPath = async () => {
//   let requestUrl;
//   requestUrl = `http://onikunblog.herokuapp.com/blog/`;
//   const response = await getBlogData(requestUrl);
//   // const res = await fetch(requestUrl);
//   // const posts = await res.json();
//   // console.log('posts = ', posts);
//   const paths = response.results.map((post) => ({
//     params: { title: post.title },
//   }));
//   return { paths, fallback: 'blocking' };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   // const res = await fetch('http://onikunblog.herokuapp.com/blog');
//   const requestUrl = `http://onikunblog.herokuapp.com/blog/`;
//   const response = await getBlogData(requestUrl);
//   console.log('response = ', response);
//   // const json = await res.json();
//   const paths = response.map((post: TitleBlogType) => ({
//     params: {
//       title: post.title,
//     },
//   }));
//   return { paths, fallback: 'blocking' };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // const title = contextId.query.title;
//   // const title = params.title;
//   // // console.log('title = ', title);
//   // console.log('test =', title);
//   console.log(params);
//   let requestUrl;
//   if (params !== undefined) {
//     requestUrl = `http://onikunblog.herokuapp.com/blog/${params.title}`;
//   }
//   // let requestUrl;
//   // if (typeof title === 'string') {
//   //   requestUrl = `http://onikunblog.herokuapp.com/blog/${title}`;
//   // }
//   if (requestUrl) {
//     const response = await getBlogData(requestUrl);
//     return {
//       props: { results: response },
//     };
//   } else {
//     return {
//       notFound: true,
//     };
//   }
// };

export default Contents;
