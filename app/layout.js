import "./globals.css";

export const metadata = {
  title: "Arunima V K | AI / ML Engineer",
  description: "Computer Science undergraduate building machine learning and computer vision applications.",
};

const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
