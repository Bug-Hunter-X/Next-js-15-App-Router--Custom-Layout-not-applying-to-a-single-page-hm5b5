```javascript
// app/layout.js
import './globals.css'

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export default RootLayout;

// app/page.js
export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```