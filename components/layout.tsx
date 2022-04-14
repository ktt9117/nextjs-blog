import Head from "next/head"
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = 'Kim SungJoong'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home = false, useHeader = true }: { children: React.ReactNode, home?: boolean, useHeader?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      { useHeader && (
        <header className={styles.header}>
          {home ? (
            <>
              <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt={name} />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image priority src="/image/profile.jpg" className={utilStyles.borderCircle} height={108} width={108} alt={name} />
                </a>
              </Link>
              <h2 className={utilStyles.headlingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInhret}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
      )}
      
      <main>{children}</main>
      {!home && (
        <div className="styles.backToHome">
          <Link href="/">
              <a>{"< Back to home"}</a>
          </Link>
        </div>
      )}
    </div>
  )
}