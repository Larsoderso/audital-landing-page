import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

        <ul style={{ display: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const [showUC, setShowUc] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "4vw",
          paddingRight: "4vw",
          height: "60px",
          paddingTop: 8
        }}
      >
        <svg
          width={124}
          height={38}
          viewBox="0 0 94 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: 8 }}
        >
          <path
            d="M39.4043 14.6895H33.8965L32.7441 18H30.1758L35.5469 3.78125H37.7637L43.1445 18H40.5664L39.4043 14.6895ZM34.5898 12.6973H38.7109L36.6504 6.79883L34.5898 12.6973ZM50.8203 16.9648C50.1237 17.7852 49.1341 18.1953 47.8516 18.1953C46.7057 18.1953 45.8366 17.86 45.2441 17.1895C44.6582 16.5189 44.3652 15.5488 44.3652 14.2793V7.43359H46.7383V14.25C46.7383 15.5911 47.2949 16.2617 48.4082 16.2617C49.5605 16.2617 50.3385 15.8483 50.7422 15.0215V7.43359H53.1152V18H50.8789L50.8203 16.9648ZM55.0879 12.6387C55.0879 11.0111 55.4655 9.70573 56.2207 8.72266C56.9759 7.73307 57.9883 7.23828 59.2578 7.23828C60.3776 7.23828 61.2826 7.62891 61.9727 8.41016V3H64.3457V18H62.1973L62.0801 16.9062C61.3704 17.7656 60.4232 18.1953 59.2383 18.1953C58.0013 18.1953 56.9987 17.6973 56.2305 16.7012C55.4688 15.7051 55.0879 14.3509 55.0879 12.6387ZM57.4609 12.8438C57.4609 13.918 57.666 14.7578 58.0762 15.3633C58.4928 15.9622 59.082 16.2617 59.8438 16.2617C60.8138 16.2617 61.5234 15.8288 61.9727 14.9629V10.4512C61.5365 9.60482 60.8333 9.18164 59.8633 9.18164C59.0951 9.18164 58.5026 9.48763 58.0859 10.0996C57.6693 10.7051 57.4609 11.6198 57.4609 12.8438ZM69.3457 18H66.9727V7.43359H69.3457V18ZM66.8262 4.68945C66.8262 4.32487 66.9401 4.02214 67.168 3.78125C67.4023 3.54036 67.7344 3.41992 68.1641 3.41992C68.5938 3.41992 68.9258 3.54036 69.1602 3.78125C69.3945 4.02214 69.5117 4.32487 69.5117 4.68945C69.5117 5.04753 69.3945 5.34701 69.1602 5.58789C68.9258 5.82227 68.5938 5.93945 68.1641 5.93945C67.7344 5.93945 67.4023 5.82227 67.168 5.58789C66.9401 5.34701 66.8262 5.04753 66.8262 4.68945ZM74.9121 4.86523V7.43359H76.7773V9.19141H74.9121V15.0898C74.9121 15.4935 74.9902 15.7865 75.1465 15.9688C75.3092 16.1445 75.5957 16.2324 76.0059 16.2324C76.2793 16.2324 76.556 16.1999 76.8359 16.1348V17.9707C76.2956 18.1204 75.7747 18.1953 75.2734 18.1953C73.4505 18.1953 72.5391 17.1895 72.5391 15.1777V9.19141H70.8008V7.43359H72.5391V4.86523H74.9121ZM84.9121 18C84.8079 17.7982 84.7168 17.4694 84.6387 17.0137C83.8835 17.8014 82.959 18.1953 81.8652 18.1953C80.804 18.1953 79.9382 17.8926 79.2676 17.2871C78.597 16.6816 78.2617 15.9329 78.2617 15.041C78.2617 13.9147 78.6784 13.0521 79.5117 12.4531C80.3516 11.8477 81.5495 11.5449 83.1055 11.5449H84.5605V10.8516C84.5605 10.3047 84.4076 9.86849 84.1016 9.54297C83.7956 9.21094 83.3301 9.04492 82.7051 9.04492C82.1647 9.04492 81.722 9.18164 81.377 9.45508C81.0319 9.72201 80.8594 10.0638 80.8594 10.4805H78.4863C78.4863 9.90104 78.6784 9.36068 79.0625 8.85938C79.4466 8.35156 79.9674 7.95443 80.625 7.66797C81.2891 7.38151 82.028 7.23828 82.8418 7.23828C84.0788 7.23828 85.0651 7.55078 85.8008 8.17578C86.5365 8.79427 86.9141 9.66667 86.9336 10.793V15.5586C86.9336 16.5091 87.0671 17.2676 87.334 17.834V18H84.9121ZM82.3047 16.291C82.7734 16.291 83.2129 16.1771 83.623 15.9492C84.0397 15.7214 84.3522 15.4154 84.5605 15.0312V13.0391H83.2812C82.4023 13.0391 81.7415 13.1921 81.2988 13.498C80.8561 13.804 80.6348 14.237 80.6348 14.7969C80.6348 15.2526 80.7845 15.6172 81.084 15.8906C81.39 16.1576 81.7969 16.291 82.3047 16.291ZM91.9434 18H89.5703V3H91.9434V18Z"
            fill="#1E2A35"
          />
          <path d="M0 7C0 3.13401 3.13401 0 7 0V19H0V7Z" fill="#2297B5" />
          <path d="M0 7C0 3.13401 3.13401 0 7 0V19H0V7Z" fill="#7377E9" />
          <path d="M20 7C20 3.13401 16.866 0 13 0V19H20V7Z" fill="#2297B5" />
          <path d="M20 7C20 3.13401 16.866 0 13 0V19H20V7Z" fill="#262AA2" />
          <rect x={7} width={6} height={19} fill="#2C33D7" />
        </svg>
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: 100
          }}
        >
          Roadmap
        </p>{" "}
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: 14
          }}
        >
          Platform
        </p>{" "}
        <p
          onMouseEnter={() => setShowUc(true)}
          onMouseLeave={() => setShowUc(false)}
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: 14
          }}
        >
          Use Cases
        </p>{" "}
        <svg
          style={{ marginTop: 22, marginLeft: 4 }}
          width={14}
          height={9}
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#1E2A35" strokeWidth={2} />
        </svg>
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "1.10px",
            lineHeight: "100%",
            color: "rgba(30, 42, 53, 1)",
            marginLeft: "auto"
          }}
        >
          Contact{" "}
        </p>{" "}
        <svg
          style={{ marginTop: 22, marginLeft: 8 }}
          width="17"
          height="8"
          viewBox="0 0 17 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM0 4.5H16V3.5H0V4.5Z"
            fill="#0E3944"
          />
        </svg>
      </div>

      {showUC && (
        <div
          onMouseEnter={() => setShowUc(true)}
          style={{
            width: "100%",
            height: "220px",
            background: "white" /* position: 'absolute', */,
            /* left: 0, */
            /* top: '40px', */
            zIndex: 22,
            flexShrink: 0,
            paddingLeft: "4vw",
            paddingRight: "4vw",
            position: "absolute",
            top: 60
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "15px",
                  letterSpacing: "1.1px" /* lineHeight: '100%', */,
                  color: "rgb(30, 42, 53)"
                }}
              >
                Industries
              </div>
              <ul
                style={{
                  listStyle: "none",
                  paddingInlineStart: "0px",
                  color: "rgb(30, 42, 53)"
                }}
              >
                <li>Financial Services</li>
                <li>E-commerce</li>
                <li>Public</li>
                <li>KRITIS</li>
              </ul>
            </div>
            <div>
              <div
                style={{
                  fontSize: "15px",
                  letterSpacing: "1.1px" /* lineHeight: '100%', */,
                  color: "rgb(30, 42, 53)"
                }}
              >
                Functions
              </div>
              <ul
                style={{
                  listStyle: "none",
                  paddingInlineStart: "0px",
                  color: "rgb(30, 42, 53)"
                }}
              >
                <li>Risk Management</li>
                <li>Compliance</li>
                <li>IT Security</li>
                <li>Data privacy</li>
                <li>Internal Auditing</li>
                <li>Supply Chain Management</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div></div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#09253F",
          backdropFilter: "blur(7px)"
        }}
      ></div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
