import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';


const Layout = (props) => (
  <div>
    <Head>
        <title>BitPrice</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div className='container'>    
      {props.children}
    </div>  
  </div>
);

export default Layout;