import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='max-h-full bg-bgHeader px-5'>
      <div className='px-4 '>
        <nav className='mx-auto flex max-w-7xl items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Link to='/'>Seller Centre</Link>
            <Link to='/'>Start Selling</Link>
            <Link to='/'>Download</Link>
            <Link to='/'>Follow us on</Link>
          </div>
          <div className='flex items-center gap-2'>
            <Link to='/'>Notifications</Link>
            <Link to='/'>Help</Link>
            <Link to='/'>Language</Link>
            <div>
              <Link to='/'>Sign up</Link>
              <Link to='/'>Login</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
