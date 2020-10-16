import Link from 'next/link';

function Logo({ textColor }) {
  const className = `text-xl font-logo uppercase text-${textColor || 'black'}`;
  return (
    <Link href="/">
      <div className="flex flex-18 cursor-pointer m-4 space-x-2">
        <span className={className}>Sweet Dreams</span>
      </div>
    </Link>
  );
}

export default Logo;
