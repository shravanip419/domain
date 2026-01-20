import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./AdminVerify.css"
function AdminVerify() {

const navigate = useNavigate()

     const Admins = [{ title: "Adithya" ,password :"1333"}];
      const [admin, setAdmin] = useState(false);
  const [adminName, setAdminName] = useState("");
  const[adpass,setadpass] = useState("")
  const [authMessage, setAuthMessage] = useState("");
  const [view,setview] = useState(false);

  const verifyAdmin = () => {
    const trimmedName = adminName.trim().toLowerCase();
    const trimmedpass = adpass.trim().toLowerCase();
    const isAdmin = Admins.some(
      (a) => a.title.toLowerCase() === trimmedName & a.password.toLowerCase() === trimmedpass
    );

    if (isAdmin) {
      setAdmin(true);
      setAuthMessage("");
      setview(true)
    
    } else {
      setAdmin(false);
      setAuthMessage(" You are not authorized to view this page.");
    }
  };
  function dbhandler(){
    navigate("/admin/add-puzzle")
  }
  function fetcher(){
     navigate("/admin/responses")
  }
  return (
     <div className="response-card">
       
        { !view && (
            <div> 
            <h2 className="responses-title">Admin Login</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
            <input type="password" 
            placeholder="Password"
            value={adpass}
            onChange={(e)=>setadpass(e.target.value)} />
            <button onClick={verifyAdmin}>Enter</button>

            {authMessage && (
              <p className="status-message">{authMessage}</p>
            )}
      </div> ) }

          {admin &&  (
            <div>
<p>Welcome {adminName}</p>
<button onClick={dbhandler}>Update DB</button>
<button onClick={fetcher}>Fetch Winners</button>
            </div>
          )}  </div>
  )
}

export default AdminVerify