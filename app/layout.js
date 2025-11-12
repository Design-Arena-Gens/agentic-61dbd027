import "./globals.css";

export const metadata = {
  title: "Willowbrook Morning",
  description:
    "A gentle village tale about neighbors, kindness, and the rhythm of a new day."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
