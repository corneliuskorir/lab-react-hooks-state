import React, { useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState("toggle");

  function handleDarkToggle() {
    setDark((isDark) => (isDark === "light" ? "dark" : "light"));
  }

  return <button onClick={handleDarkToggle}>{dark}</button>;
};

export default DarkModeToggle;
