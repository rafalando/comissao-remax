import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon_remax.png" />
        <title>Calculadora de Comissão RE/MAX</title>
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
