import "./globals.css";
import Header from "../components/Header/Header";




export const metadata = {
  title: "cantora",
  description: "Olivia",
  charset:'UTF-8',
  author:'Leticia Gonçalves',
  keywords:'HTML, CSS, ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}

