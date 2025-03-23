import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple, // Apply default purple theme
        variables: {
          colorPrimary: "#8e44ad", // Clerk Buttons & Accents (Darker Purple)
          colorBackground: "#6a0dad", // Background
          colorText: "#ffffff", // White Text
          colorInputBackground: "#8e44ad", // Purple Input Fields
          colorInputText: "#ffffff", // Input Text White
        },
        elements: {
          userButtonPopoverCard: {
            backgroundColor: "#6a0dad", // User dropdown menu background
            color: "#ffffff", // Text inside dropdown
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          },
          userButtonPopoverActionButton: {
            color: "#ffffff",
            backgroundColor: "#8e44ad",
            borderRadius: "8px",
            padding: "8px 15px",
            transition: "background 0.3s ease",
          },
          userButtonPopoverActionButtonHover: {
            backgroundColor: "#9b59b6", // Lighter Purple on Hover
          },
        },
      }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
