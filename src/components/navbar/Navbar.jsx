import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart } from "lucide-react";
import logo from "../../assets/dd.png";
import ProtectedRoute from "../../protectedRoute/protected-route";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useUser();

  const isRecruiter = user?.unsafeMetadata?.role === "recruiter";

  return (
    <nav className="gpt3__navbar">
      {/* Left Side: Logo & Navigation Links */}
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">Features</a>
          </p>
          <p>
            <a href="#possibility">What is Futurefolio</a>
          </p>
          <p>
            <a href="#features">Open Ai</a>
          </p>
          <p>
            <a href="#blog">About us</a>
          </p>

          {/* ✅ Protected Routes */}
          <ProtectedRoute>
            <p>
              <Link to="/job">Find a Job</Link>
            </p>
            <p>
              <Link to="/portfolio">Portfolio</Link>
            </p>
          </ProtectedRoute>
        </div>
      </div>

      {/* Right Side: Authentication & User Menu */}
      <div className="gpt3__navbar-sign flex items-center space-x-4">
        <SignedOut>
          <div className="auth-buttons flex space-x-4">
            <SignInButton />
            <SignUpButton />
          </div>
        </SignedOut>

        <SignedIn>
          <div className="signed-in-container flex items-center space-x-4">
            {isRecruiter && (
              <Link to="/post-job">
                <button className="post-job-btn">Post a Job</button>
              </Link>
            )}

            {/* ✅ Restored My Jobs & Saved Jobs Inside UserButton */}
            <UserButton afterSignOutUrl="/">
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-job"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-job"
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        </SignedIn>
      </div>

      {/* Mobile Menu */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">Features</a>
              </p>
              <p>
                <a href="#possibility">What is FutureFolio</a>
              </p>
              <p>
                <a href="#features">Open Ai</a>
              </p>
              <p>
                <a href="#blog">About us</a>
              </p>

              {/* ✅ Protected Links in Mobile Menu */}
              <ProtectedRoute>
                <p>
                  <Link to="/job">Find a Job</Link>
                </p>
                <p>
                  <Link to="/portfolio">Portfolio</Link>
                </p>
              </ProtectedRoute>
            </div>

            <div className="gpt3__navbar-menu_container-links-sign flex flex-col space-y-4">
              <SignedOut>
                <div className="auth-buttons flex space-x-4">
                  <SignInButton />
                  <SignUpButton />
                </div>
              </SignedOut>

              <SignedIn>
                <div className="signed-in-container flex flex-col space-y-2">
                  {isRecruiter && (
                    <Link to="/post-job">
                      <button className="post-job-btn w-full">
                        Post a Job
                      </button>
                    </Link>
                  )}

                  {/* ✅ Restored My Jobs & Saved Jobs Inside Mobile User Menu */}
                  <UserButton afterSignOutUrl="/">
                    <UserButton.MenuItems>
                      <UserButton.Link
                        label="My Jobs"
                        labelIcon={<BriefcaseBusiness size={15} />}
                        href="/my-job"
                      />
                      <UserButton.Link
                        label="Saved Jobs"
                        labelIcon={<Heart size={15} />}
                        href="/saved-job"
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
