import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div>404 | Page Not Found</div>
      <Link  to='/'>Click here to return to main page</Link>
    </div>
  )
}

export default Page