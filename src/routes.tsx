import { Navigate, RouteObject } from "react-router-dom"

import ContactPage from '@/pages/contact-page/ContactPage';
import ErrorPage from '@/pages/error-page/ErrorPage';
import NotFoundPage from '@/pages/not-found-page/NotFoundPage';
import RootLayout from "@/layouts/RootLayout"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/contact" replace />,
          },
          {
            path: "contact",
            children: [
              { index: true, element: <ContactPage /> },
            ],
          },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]
