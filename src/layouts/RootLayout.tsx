import { Outlet, ScrollRestoration } from "react-router-dom"

export function RootLayout() {
  return (<>
    <header>Header</header>
    <main role='main'>
      <Outlet />
    </main>
    <footer>Footer</footer>
    <ScrollRestoration />
  </>
  )
}
