import React, { HTMLAttributes } from 'react';

import classnames from 'classnames';


interface NavbarProps extends HTMLAttributes<HTMLElement> {
  noBg?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ noBg, children, className, ...rest }) => (
  <>
  <header className={classnames(noBg ? 'bg-gray-50': 'bg-white shadow-lg', 'flex items-center sticky top-0 left-0 h-16  z-30 px-16 mb-8 -mx-16 ', className)} {...rest}>{children}</header>
  </>
);

export default Navbar;
