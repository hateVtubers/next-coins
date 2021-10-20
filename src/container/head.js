import Head from 'next/head';

const HeadContainer = ({children}) => {
  return (
    <>
      <Head>
        <title>coins</title>
      </Head>
      {children}
    </>
  )
}

export default HeadContainer