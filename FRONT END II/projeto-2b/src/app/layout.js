import "./globals.css";


export const metadata = {
  title: "Create Next A",
  description: "",
  charset: 'UTF-8',
  author: 'Leticia',
  keywords: 'HTML, CSS, JavaScript,React, Next.js'

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
