import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import useUser from "./hooks/useUser";

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const ErrorPage = lazy(() => import("./pages/Error"));

function App() {
  const user = useUser();

  return (
    <>
      <Navigation user={user} />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/auth/register" element={!user ? <RegisterPage /> : <Navigate to="/" />} />
            <Route path="/auth/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
