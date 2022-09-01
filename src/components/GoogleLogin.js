import React from "react";
import { auth } from '../firebase'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <button onClick={() => signInWithGoogle()}>Sign In</button>
    </div>
  );
};

export default GoogleLogin;