import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="card shadow-sm border-0 p-4">
          <h2 className="mb-3">
            {currentUser ? "Welcome back!" : "Welcome to GitTix"}
          </h2>
          <p className="text-muted mb-4">
            {currentUser
              ? "You're signed in and ready to go."
              : "Please sign in or create an account to continue."}
          </p>

          {!currentUser && (
            <div className="d-flex justify-content-center gap-3">
              <a href="/auth/signin" className="btn btn-primary">
                Sign In
              </a>
              <a href="/auth/signup" className="btn btn-outline-primary">
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
