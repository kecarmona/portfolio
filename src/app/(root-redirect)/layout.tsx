// Minimal root layout for the `/` client redirect page. Kept separate from
// `(portfolio)/[lang]/layout.tsx` so the localized subtree can own its own
// `<html lang={lang}>` root layout (Next 16 i18n pattern).
export default function RootRedirectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="und">
      <body>{children}</body>
    </html>
  );
}
