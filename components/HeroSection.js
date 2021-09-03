const HeroSection = () => {
  return (
    <section className='px-4 mt-24 text-center md:mt-32 md:px-0 '>
      <div className='mx-auto space-y-10 md:p-24 md:max-w-6xl'>
        <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-green-200 text-8xl'>
          Focus on the work that matters
        </h1>
        <p className='text-lg font-light text-white'>
          Mauris dignissim mauris dolor, non ultrices ex tempor non. Integer sed
          pulvinar dolor, vitae consectetur leo. Ut quis ipsum nulla. Mauris id
          aliquam sapien. Mauris dignissim tincidunt pellentesque. Suspendisse
          ullamcorper, risus nec elementum aliquam.
        </p>
        <form>
          <input
            placeholder='Your email address...'
            className='px-3 py-3 rounded-l-lg'
          />
          <button className='px-4 py-3 font-semibold text-white transition-colors duration-300 bg-purple-500 rounded-r-lg shadow-lg hover:bg-purple-600 hover:text-purple-50'>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default HeroSection
