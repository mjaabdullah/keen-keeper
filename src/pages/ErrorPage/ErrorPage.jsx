import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center max-w-lg w-full">
        {/* Animated 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-[8rem] sm:text-[10rem] font-black leading-none select-none">
            <span className="text-primary drop-shadow-lg">4</span>
            <span className="text-base-content opacity-10">0</span>
            <span className="text-primary drop-shadow-lg">4</span>
          </h1>
          {/* Floating badge */}
          <div className="badge badge-error badge-lg absolute top-4 right-1/4 animate-bounce shadow-md">
            Oops!
          </div>
        </div>

        {/* Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl">
          <div className="card-body items-center text-center gap-4 py-8 px-6">
            {/* Icon */}
            <div className="text-5xl mb-2">🔍</div>

            <h2 className="card-title text-2xl font-bold text-base-content">
              পেজটি খুঁজে পাওয়া যায়নি
            </h2>

            <p className="text-base-content/60 text-sm leading-relaxed">
              তুমি যে পেজটি খুঁজছ সেটি হয়তো সরানো হয়েছে, নাম পরিবর্তন হয়েছে,
              অথবা কখনো ছিলই না।
            </p>

            {/* Divider */}
            <div className="divider my-1 w-full opacity-30"></div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button
                className="btn btn-primary rounded-xl flex-1"
                onClick={() => navigate("/")}
              >
                🏠 হোম পেজে যাও
              </button>
              <button
                className="btn btn-outline rounded-xl flex-1"
                onClick={() => navigate(-1)}
              >
                ← আগের পেজ
              </button>
            </div>

            {/* Alert */}
            <div
              role="alert"
              className="alert alert-warning mt-2 rounded-xl text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
              <span>URL টি সঠিক কিনা আরেকবার চেক করো।</span>
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <p className="mt-6 text-xs text-base-content/40">
          Error Code: <span className="font-mono text-primary">404</span> — Page
          Not Found
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
