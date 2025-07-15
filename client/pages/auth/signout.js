import { useEffect } from "react";
import { useRouter } from "next/router";

import useRequest from "../../hooks/use-request";

const Signout = () => {
  const router = useRouter();

  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <div className="spinner-border text-secondary mb-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5 className="text-muted">Signing you out...</h5>
      </div>
    </div>
  );
};

export default Signout;
