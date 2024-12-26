import { BuilderProvider } from '@/providers/BuilderProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BuilderProvider>{children}</BuilderProvider>
      </body>
    </html>
  );
}
