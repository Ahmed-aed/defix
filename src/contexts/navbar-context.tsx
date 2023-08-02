import { createContext, ReactNode, useState } from 'react';

export const NavbarContext = createContext(null);

export default function NavbarContextProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [activeLinkItem, setActiveLinkItem] = useState<string>('home');

  return (
    <NavbarContext.Provider value={{ activeLinkItem, setActiveLinkItem }}>
      {children}
    </NavbarContext.Provider>
  );
}
