import Lottie from "lottie-react";
import { useAuth0 } from "@auth0/auth0-react";

import signInAnimation from "../../json/signInAnimation.json";
const SignIn = () => {
    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
    return (
        <div className="signIn">
            <div className="signIn_animation">
                <Lottie
                    style={{ width: "100%" }}
                    animationData={signInAnimation}
                    loop={false}
                />
            </div>
            {isAuthenticated && (
                <p className="signIn_info">
                    Welcome to Hiking Heaven {user?.name}
                </p>
            )}
            <div className="signIn_buttons">
                {isAuthenticated ? (
                    <button
                        className="sign"
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin,
                                },
                            })
                        }
                    >
                        LOG OUT
                    </button>
                ) : (
                    <button
                        className="sign"
                        onClick={() => loginWithRedirect()}
                    >
                        LOG IN
                    </button>
                )}
            </div>
        </div>
    );
};

export default SignIn;
