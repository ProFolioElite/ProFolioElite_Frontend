// import React from 'react';
import Logo from "./Logo";
import NavigationItem from "./NavigationItem";

// const navigationItems = [
//   { label: 'Skills', href: '#skills' },
//   { label: 'Projects', href: '#projects', isActive: true },
//   { label: 'Contact me', href: '#contact' }
// ];

function Header({ navigationItems, logo }) {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center px-24 py-6 w-full text-lg text-black shadow-sm bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <Logo logo={logo} />
      <nav className="flex gap-5 justify-between items-center self-stretch my-auto min-w-[240px] w-[350px]">
        {navigationItems
          ? navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))
          : null}
      </nav>
    </header>
  );
}

export default Header;
