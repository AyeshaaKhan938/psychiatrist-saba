import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Saba Asad | Clinical Psychologist",
  description: "Clinical Psychologist in Lahore, Gujranwala, Pakistan offering in-person and online therapy sessions.",
};

import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-right" toastOptions={{ duration: 4000, style: { background: '#2c2c2a', color: '#fff', fontSize: '14px' } }} />
      </body>
    </html>
  );
}
