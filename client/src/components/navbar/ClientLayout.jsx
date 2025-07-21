'use client';

import { usePathname } from 'next/navigation'
import NavBarCom from './NavBarCom'

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <NavBarCom />}
      {children}
    </>
  );
}
