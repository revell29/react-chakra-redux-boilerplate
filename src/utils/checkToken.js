import React from "react";

function useToken() {
  const [token, setToken] = React.useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return { token, setToken, loading };
}

export default useToken;
