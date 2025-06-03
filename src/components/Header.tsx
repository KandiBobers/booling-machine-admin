import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const router = useRouter();

  const handleLogout = () => {
    onLogout();
    router.push('/login');
  };

  return (
    <header className="header">
      <nav>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === '/' ? 'active' : ''}>Главная</a>
        </Link>
        <button onClick={handleLogout}>Выйти</button>
      </nav>
    </header>
  );
};

export default Header;