'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import fLogoDark from '../public/logo/full_black.png';
import fLogoLight from '../public/logo/full_white.png';
import LogoDark from '../public/logo/emblem_black.png';
import LogoLight from '../public/logo/emblem_white.png';

const Logo = () => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <Image
      src={currentTheme === 'dark' ? fLogoLight : fLogoDark}
      alt="logo"
      width={150}
      // height={50}
    />
  );
};

export default Logo;
