import { Link } from 'react-router';

export const Logo = () => {
  return (
    <Link to="/" aria-label="Металлобаза Волхонка — на главную" className={'shrink-0'}>
      <img
        src="/icons/logo.svg"
        alt="Металлобаза Волхонка"
        className={'h-[60px] w-auto 2xl:h-[82px] 2xl:w-[100px] object-contain'}
      />
    </Link>
  );
};
