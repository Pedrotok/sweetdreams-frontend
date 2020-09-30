import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-18 cursor-pointer m-4">
        <span className="text-xl font-logo uppercase">Sweet Dreams</span>
      </div>
    </Link>
  );
}

export default Logo;
