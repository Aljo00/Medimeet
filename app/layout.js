import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medimeet - Doctors Appointment app",
  description: "Connect with the Doctors at anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-grey-200">
              <p>Made by Aljo Joju</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
