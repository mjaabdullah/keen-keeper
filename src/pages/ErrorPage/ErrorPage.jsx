import { useNavigate } from "react-router";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-black text-[#244D3F]">404</h1>

          <h2 className="text-2xl font-semibold text-base-content mt-4 mb-2">
            Page Not Found
          </h2>

          <p className="text-base-content/50 mb-8">
            The page you are looking for does not exist.
          </p>

          <div className="flex gap-3 justify-center">
            <button
              className="btn bg-[#244D3F] text-white"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
            <button className="btn btn-ghost" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
