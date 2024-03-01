
import { jwtDecode } from 'jwt-decode';
import { Helmet } from 'react-helmet';

export default function Profile() {
   let encodedToken=localStorage.getItem('userToken')
  let decodedToken = jwtDecode(encodedToken)

  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Profile</title>
    </Helmet>
    <h1 className='text-center text-main mt-5'>My Info</h1>
    <div className='bg-light text-center p-5 my-5 brdr'>
      <h2 >Name : <span className='text-main'>{decodedToken.name}</span> </h2>
      <h3>Email : <span className='text-main'>{localStorage.getItem('userEmail')}</span> </h3>
    </div>

  </>
}