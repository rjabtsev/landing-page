const FeaturesSection = () => {
  return (
    <section className='container flex flex-col justify-center py-24 mx-auto text-center space-y-14'>
      <div className='max-w-2xl mx-auto space-y-7'>
        <h1 className='text-4xl font-bold text-gray-800'>
          Our solution for your business
        </h1>
        <p className='text-lg text-gray-500'>
          Extensive reporting functionalty gives your team critical insight into
          their agile process. Backed by data, retrospectives are more
          data-driven.
        </p>
      </div>

      <div className='flex px-4 space-x-10 '>
        <div className='flex flex-col items-center p-8 space-y-4 text-white bg-purple-500 shadow-lg rounded-xl'>
          <div>
            <svg
              className='w-24 h-24 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
            </svg>
          </div>
          <h1 className='text-xl font-semibold'>Support</h1>
          <p className='font-light'>
            Integrated customer support and other successful things
          </p>
        </div>
        <div className='flex flex-col items-center p-8 space-y-4 text-white bg-purple-500 shadow-lg rounded-xl'>
          <div>
            <svg
              className='w-24 h-24 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <h1 className='text-xl font-semibold'>Chat</h1>
          <p className='font-light'>
            Live chat and messages with your teammates, control workflow
          </p>
        </div>
        <div className='flex flex-col items-center p-8 space-y-4 text-white bg-purple-500 shadow-lg rounded-xl'>
          <div>
            <svg
              className='w-24 h-24 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <h1 className='text-xl font-semibold'>Security</h1>
          <p className='font-light'>
            Take a full control of your expenses and whole budget
          </p>
        </div>
        <div className='flex flex-col items-center p-8 space-y-4 text-white bg-purple-500 shadow-lg rounded-xl'>
          <div>
            <svg
              className='w-24 h-24 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <h1 className='text-xl font-semibold'>Reports</h1>
          <p className='font-light'>
            Create reports with an easy to use drag-and-drop designer
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
