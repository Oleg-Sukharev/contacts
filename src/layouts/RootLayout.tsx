import { Outlet, ScrollRestoration } from "react-router-dom"

import Footer from '@/components/Footer/Footer'
import Header from "@/components/Header/Header"
import classes from "./RootLayout.module.scss"

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className={classes.main} role='main'>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default RootLayout;
