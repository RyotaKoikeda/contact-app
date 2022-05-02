import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ background: "#fff", color: "#444" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <h1>
            <Link href="/">
              <a>contact app</a>
            </Link>
          </h1>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
