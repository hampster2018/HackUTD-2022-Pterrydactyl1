import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";

export default function OauthLogin() {

    const clientID = process.env.REACT_APP_CLIENT_ID;
    const [oauthToken, setOauthToken] = useState(null);

    // Hook to update the users info once the google login is completed
    useEffect(() => {
        async function handleLogin() {
            console.login("Success")
        }
        handleLogin() 
    }, [oauthToken])    
    return (
        <div>
        <GoogleOAuthProvider clientId={clientID}>
            <GoogleLogin
              onSuccess={(data) => setOauthToken(data.credential)}
              onError={() => {}}
        />
        </GoogleOAuthProvider>
        </div>
    )
}