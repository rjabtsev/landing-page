import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='md:container md:mx-auto'>
      <Head>
        <title>Next Landing / About</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  )
}
