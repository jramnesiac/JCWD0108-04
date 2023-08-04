import React from "react";
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../css/login.css"; // Import custom CSS for Login component

const Login = (props) => {
  const { user } = useUser();

  return (
    <div className="container mt-5 login-container">
      <div className="text-center">
        {/* Apply styles for the centered text */}
        <h1 style={{ color: "green" }}>Welcome to H-1 Mart</h1>
        <p>This is the official website of H-1 Mart.</p>
      </div>

      <div className="text-center mt-4">
        {/* The children of the SignedOut component are rendered only when the user is signed out from the app. In this case, the app will render a SignInButton */}
        <SignedOut>
          <SignInButton>
            {/* Add Bootstrap classes to style the login button */}
            <button className="btn btn-primary">Log in</button>
          </SignInButton>
        </SignedOut>

        {/* The children of the SignedIn component are rendered only when the user is signed in. In this case, the app will render the SignOutButton */}
        <SignedIn>
          <SignOutButton>
            {/* Add Bootstrap classes to style the logout button */}
            <button className="btn btn-danger">Log out</button>
          </SignOutButton>
        </SignedIn>
      </div>

      {/* You can also check if a user is logged in or not using the 'user' object from the useUser hook. In this case, a non-undefined user object will render the user's email on the page */}
      {user && (
        <div className="mt-4 text-center">
          Your email address is {user.primaryEmailAddress.emailAddress}
        </div>
      )}
    </div>
  );
};

export default Login;
