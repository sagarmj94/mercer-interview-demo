import React from "react";
import "./Header.css";
import logo from "../assets/mercer-logo.svg";

export function Header() {
  return (
    <>
      <header className="main-header" id="global-header">
        <div className="top-bar-left">
          <a href="/" className="logo-img" target="_top">
            <img
              src={logo}
              alt="Mercer Australia logo"
              width="154"
              height="24"
            />
          </a>
        </div>

        {/* add  input here that look in center of side of this 20px space between this button */}
        <div className="top-bar-right">
          <ul className="content-wrapper">
            <li>
              <button
                className="login link ghost"
                aria-controls="loginModal"
                aria-haspopup="true"
                tabIndex="0"
              >
                Login
              </button>
            </li>
            <li>
              <a href="/join-mercer-super/" className="join link default">
                Join
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="dummy-space"></div>
    </>
  );
}
