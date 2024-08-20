import "./globals.css";
import MainHeader from "@/components/MainHeader/MainHeader";

export const metadata = {
  title: "Bono - Yael Haskin",
  description: "The Bono Nonprofit Portfolio Builder Built by Yael Haskin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
