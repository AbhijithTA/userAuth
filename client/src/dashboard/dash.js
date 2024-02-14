import React from "react";

const DashPage = () => {
  return (
    <div>
      <h1>Welcome to My Simple Page</h1>
      <nav>
        <ul>
          <li>
            <a href="/login" style={{ fontSize: "24px" }}>Login</a>
          </li>
          <li>
            <a href="/signup" style={{ fontSize: "24px" }}>Signup</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashPage;
