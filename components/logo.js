import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <img src='/logo.png' className='logo'></img>
      </a>
    </Link>
  );
};

export default Logo;
