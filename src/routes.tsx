import { Navigate, RouteObject } from "react-router-dom"

import ContactsPage from '@/pages/contacts-page/ContactsPage';
import ErrorPage from '@/pages/error-page/ErrorPage';
import NotFoundPage from '@/pages/not-found-page/NotFoundPage';
import { RootLayout } from "@/layouts/RootLayout"

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
            element: <Navigate to="/contacts" replace />,
          },
          {
            path: "contacts",
            children: [
              { index: true, element: <ContactsPage /> },
            ],
          },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
]
