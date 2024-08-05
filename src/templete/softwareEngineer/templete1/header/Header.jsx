// import React from 'react';
import Logo from './Logo';
import NavigationItem from './NavigationItem';

const navigationItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects', isActive: true },
  { label: 'Contact me', href: '#contact' }
];

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center px-24 py-6 w-full text-lg text-black shadow-sm bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <Logo />
      <nav className="flex gap-5 justify-between items-center self-stretch my-auto min-w-[240px] w-[350px]">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} {...item} />
        ))}
      </nav>
    </header>
  );
}

export default Header;