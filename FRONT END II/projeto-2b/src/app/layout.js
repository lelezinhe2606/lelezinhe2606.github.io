import './globals.css';
import Header from '../components/header';

export const metadata = {
  title: 'Favs',
  description: 'Olivia',
  charset: 'UTF-8',
  author: 'Marianny Gonçalves',
  keywords: 'HTML, CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}


