export const metadata = {
  title: "Tephra Studios | Social Recruiting für Handwerksbetriebe",
  description:
    "Tephra Studios hilft Elektriker- und Handwerksbetrieben in Österreich, passende Mitarbeiter über Social Recruiting zu gewinnen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
