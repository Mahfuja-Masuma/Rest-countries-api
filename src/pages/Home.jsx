

function Home() {
  return (
  <>
    <div className='relative'>
      <img className='object-cover h-screen w-full' src="./images/hero.png" alt="bg images" />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white items-center'> 
        <div className='left-[10%] container mx-auto absolute p-4'>
          <p className='text-xl mb-4'>All Inclusive</p>
          <h1 className='font-bold text-3xl'>Private Beaches & Getways</h1>
          <p className='text-xl drop-shadow-2xl mb-6 max-w-[600px] py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod nisi dolor voluptatem et numquam, dolorem aliquam consequatur quae qui. Molestiae.</p>

            <button className='btn'>Resurve Now</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home