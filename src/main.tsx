import "./styles/styles.scss";

import { ContactsPage } from './pages/Contacts/ContactsPage';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <ContactsPage />
  </StrictMode>,
);
