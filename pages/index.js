import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import SobreMi from './sobre-mi';
import { getAllFilesMetadata } from '@/lib/mdx';

import Link from 'next/link';


export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Blog de Alex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>El blog de Alex</h1>
        </div>
        <div className={styles.grid}>
          {posts.map( (post) => (
            <Link
            key={post.slug}
              href={`/${post.slug}`}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer">
              <SobreMi val={post.slug} />
              <p >
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {

  const posts = await getAllFilesMetadata();
	return {
		props: {posts},
	};
}
