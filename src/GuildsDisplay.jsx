import React, { useState, useEffect } from "react";
import axios from "axios";

const GuildsDisplay = ({ accessToken }) => {
  const [guilds, setGuilds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/guilds?accessToken=${accessToken}`
        );
        setGuilds(response.data);
      } catch (error) {
        console.error("Error fetching guilds:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (accessToken) {
      fetchGuilds();
    }
  }, [accessToken]);

  if (!accessToken) {
    return <div>Please log in to see your Discord guilds.</div>;
  }

  if (isLoading) {
    return <div>Loading guilds...</div>;
  }

  return (
    <div>
      <h2>My Discord Guilds</h2>
      {guilds.length > 0 ? (
        <ul>
          {guilds.map((guild) => (
            <li key={guild.id}>{guild.name}</li>
          ))}
        </ul>
      ) : (
        <div>You are not a member of any guilds.</div>
      )}
    </div>
  );
};

export default GuildsDisplay;
