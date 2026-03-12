export const metadata = {
  title: 'Klover Capital Group',
  description: 'Singapore-based multi-family office platform connecting global opportunities with Asian family capital.'
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
