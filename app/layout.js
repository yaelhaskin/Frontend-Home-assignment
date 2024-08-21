import "./globals.css";
import MainHeader from "@/components/MainHeader/MainHeader";

export const metadata = {
  title: "Bono - Yael Haskin",
  description: "The Bono Nonprofit Portfolio Builder Built by Yael Haskin",
  image: "/logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="nonprofit, portfolio, causes, giving, Bono, Yael Haskin" />
        <meta name="author" content="Yael Haskin" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:site_name" content="Bono" />
      </head>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}