import Image from 'next/image'
import learnMoreOne from '../public/learn-more-1.webp'
import learnMoreTwo from '../public/learn-more-2.webp'

const LearnMoreSection = () => {
  return (
    <section className='px-4 md:px-0'>
      <div className='py-24 md:mx-auto md:container'>
        <div className='flex items-center justify-between space-x-12'>
          <div className='max-w-3xl space-y-7'>
            <h1 className='text-4xl font-bold text-gray-800'>
              Full control of your expenses
            </h1>
            <p className='text-lg text-gray-500'>
              Accurate, real-time reporting at your fingertips. Getting data has
              never been easier. Cras pulvinar, tellus sit amet lobortis mollis,
              nulla massa condimentum orci, sit amet sodales purus nibh in
              libero. Duis sed lacus est. Donec ligula mauris, eleifend eu
              tellus non, pellentesque sollicitudin lectus.
            </p>
            <button className='px-4 py-3 font-semibold text-white transition-colors bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600'>
              Learn more
            </button>
          </div>
          <div>
            <Image width={600} height={600} src={learnMoreTwo} alt='Hand' />
          </div>
        </div>

        <div className='flex items-center justify-between space-x-12'>
          <div>
            <Image width={600} height={600} src={learnMoreOne} alt='Hand' />
          </div>
          <div className='max-w-3xl space-y-7'>
            <h1 className='text-4xl font-bold text-gray-800'>
              In-depth metrics
            </h1>
            <p className='text-lg text-gray-500'>
              Accurate, real-time reporting at your fingertips. Getting data has
              never been easier. Duis nulla ex, tincidunt pulvinar enim et,
              rhoncus viverra tortor. Etiam nibh lectus, molestie ut mollis non,
              aliquam in orci. Suspendisse nec sodales ante, dignissim iaculis
              lacus. In a ligula lobortis, dictum ante in, pretium nisl. Donec
              vitae vehicula felis, quis cursus urna.
            </p>
            <button className='px-4 py-3 font-semibold text-white transition-colors bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnMoreSection
