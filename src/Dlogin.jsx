import React from "react";

const CLIENT_ID = "1190573505310367824"; // Replace with your Discord client ID
const REDIRECT_URI = encodeURIComponent("http://localhost:3000/callback"); // Update with your redirect URI

const Dlogin = () => {
  const handleLogin = () => {
    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify%20guilds`;
    window.location.href = discordUrl;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Discord</button>
    </div>
  );
};

export default Dlogin;
