import { PlayerCard } from "../Components/Playercard";
import { Trophy } from "lucide-react";
import "./LeaderBoard.css";
import Navbar from "../components/Navbar";
import { useState,useEffect } from "react";
function Leaderboard() {
   const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("https://domain-gdr1.onrender.com/api/puzzles"); 
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="leaderboard-container">
          <h2>Loading leaderboard...</h2>
        </div>
      </>
    );
  }
 
  const topThree = leaderboardData.slice(0, 3);
  const restOfPlayers = leaderboardData.slice(3);

  return (<>
    <Navbar />
    <div className="leaderboard-container">
      
      <div className="leaderboard-page">
        {/* Header */}
        <div className="leaderboard-header">
          <div className="header-container">
            <div className="header-content">
              <Trophy className="header-icon" />
              <h1 className="header-title">Leaderboard</h1>
            </div>
            <p className="header-subtitle">
              Current Quiz rankings
            </p>
          </div>
        </div>

        <div className="main-container">
          {/* Podium Section */}
          <div className="podium-section">
            <h2 className="podium-title">Top Performers</h2>
            <div className="podium-grid">
              {/* Reorder for podium effect: 2nd, 1st, 3rd */}
              <div className="podium-second">
                <PlayerCard {...topThree[1]} isPodium />
              </div>
              <div className="podium-first">
                <PlayerCard {...topThree[0]} isPodium />
              </div>
              <div className="podium-third">
                <PlayerCard {...topThree[2]} isPodium />
              </div>
            </div>
          </div>

          {/* Rest of Rankings */}
          <div className="rankings-section">
            <h2 className="rankings-title">All Rankings</h2>
            <div className="rankings-list">
              {restOfPlayers.map((player) => (
                <PlayerCard key={player._id} {...player} />
              ))}
            </div>
          </div>

          {/* Stats Footer */}
          <div className="stats-footer">
            <div className="stats-container">
              <div className="stats-item">
                <p className="stats-value">{leaderboardData.length}</p>
                <p className="stats-label">Total Players</p>
              </div>
              <div className="stats-divider"></div>
              <div className="stats-item">
               {/*  <p className="stats-value">{topThree[0].score.toLocaleString()}</p> */}
                <p className="stats-label">Highest Score</p>
              </div>
              <div className="stats-divider"></div>
              <div className="stats-item">
                <p className="stats-value">Random</p>
                <p className="stats-label">Current Season</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Leaderboard