import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: { email, password },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await doRequest();
    setLoading(false);
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-body p-4 p-sm-5">
            <h1 className="card-title text-center mb-4 fs-3 fw-bold">
              Sign In
            </h1>
            <form onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              {errors && (
                <div className="alert alert-danger py-2 small">{errors}</div>
              )}

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <small className="text-muted">
                Don't have an account?{" "}
                <a href="/auth/signup" className="text-decoration-none">
                  Sign up
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
