import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <h2>HELLO AM ROOT LAYOUT</h2>
        <div>{children}</div>
      </body>
    </html>
  )
}
