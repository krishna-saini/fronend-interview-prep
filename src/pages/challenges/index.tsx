import Link from 'next/link';

const challenges = () => {
  return (
    <>
      <div>
        <Link href='/challenges/grid-game'>Play Grid Game</Link>
      </div>
      <div>
        <Link href='/challenges/nav-bar'>Nav Bar challenge</Link>
      </div>
    </>
  );
};

export default challenges;
