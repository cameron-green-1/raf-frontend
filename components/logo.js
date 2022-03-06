import Link from 'next/link';

const Logo = () => {
  return (
    <div style={{ pointerEvents: 'all' }}>
      <Link href='/operations'>
        <a>
          <img src='/logo.png' className='logo'></img>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
