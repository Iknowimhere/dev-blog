import "./index.css";
import App from "./Layouts/App.jsx";
import HomePage from "./routes/Homepage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import PostListpage from "./routes/PostListpage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostpage from "./routes/SinglePostpage.jsx";
import Write from "./routes/Write.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="posts" element={<PostListpage />} />
          <Route path="posts/:id" element={<SinglePostpage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="write" element={<Write />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
    
  </StrictMode>
);
