import React, { useState, useEffect } from "react";
import axios from "axios";
import GuildsDisplay from "./GuildsDisplay"; // Import the GuildsDisplay component

const Callback = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const fetchAccessToken = async () => {
      if (code) {
        try {
          const response = await axios.get(
            `http://localhost:3001/oauth/callback?code=${code}`
          );
          setAccessToken(response.data.access_token);
        } catch (error) {
          console.error("Error fetching access token:", error);
          // Handle error, e.g., redirect to an error page
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchAccessToken();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {accessToken ? (
        <GuildsDisplay accessToken={accessToken} />
      ) : (
        <div>Error: No access token found</div>
      )}
    </div>
  );
};

export default Callback;
