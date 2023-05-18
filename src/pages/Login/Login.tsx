import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Login</div>
              <div className='mt-8'>
                <input
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
              </div>
              <div className='mt-8'>
                <input
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </div>
              <div className='mb-7 mt-5'>
                <button className='h-10 w-full min-w-[8.5rem] cursor-pointer rounded-sm bg-orange text-center uppercase text-white shadow-sm hover:opacity-90'>
                  Login
                </button>
              </div>
              <div className='mt-3'>
                <div className='flex items-center justify-center'>
                  <span className='mr-1 text-whiteSlate'>New to Shopee</span>
                  <Link to='/register' className='font-medium text-orange'>
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
