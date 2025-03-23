/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  console.log("ProtectedRoute: User Data:", user);
  console.log("ProtectedRoute: User Role:", user?.unsafeMetadata?.role);
  console.log("ProtectedRoute: Current Pathname:", pathname);

  if (!isLoaded) {
    return <div>Loading...</div>; // Avoid redirecting before Clerk loads
  }

  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  if (!user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" />;
  }
  return children;
};

export default ProtectedRoute;
