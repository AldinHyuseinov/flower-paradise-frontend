import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/Index"))
const RegisterPage = lazy(() => import("./pages/Register"))
const LoginPage = lazy(() => import("./pages/Login"))
const ErrorPage = lazy(() => import("./pages/Error"))

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
