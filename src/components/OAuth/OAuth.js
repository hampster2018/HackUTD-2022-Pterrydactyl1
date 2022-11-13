import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OauthLogin() {

    const navigate = useNavigate()

    const clientID = process.env.REACT_APP_CLIENT_ID;
    const [oauthToken, setOauthToken] = useState(null);

    // Hook to update the users info once the google login is completed
    useEffect(() => {
        async function handleLogin() {
            console.log("Success")
            navigate('/info')
        }
        handleLogin() 
    }, [oauthToken, navigate])    
    return (
        <div id="AuthContainer">
            <GoogleOAuthProvider clientId={clientID}>
                <GoogleLogin
                  onSuccess={(data) => setOauthToken(data.credential)}
                  onError={() => {}}
            />
            </GoogleOAuthProvider>
        </div>
    )
}