import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useStore } from "@/store/store";

const GoogleOAuth = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { setAccessToken } = useStore();

  const accessToken = params.get("access_token");
  const currentWorkspace = params.get("current_workspace");

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
      if (currentWorkspace) {
        navigate(`/workspace/${currentWorkspace}`);
      }
    }
  }, [accessToken, currentWorkspace, navigate, setAccessToken]);

  // If an access token is present in the URL, show a transient signing-in state
  // while the effect sets the token and redirects. This prevents briefly
  // rendering the login UI when coming back from Google OAuth.
  if (accessToken) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <div className="flex items-center gap-2 self-center font-medium">
            <Logo disableLink />
            Team Sync.
          </div>
        </div>

        <Card>
          <CardContent>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>Signing you in...</h1>
              <p>Please wait while we complete sign in.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Logo disableLink />
          Team Sync.
        </Link>
        <div className="flex flex-col gap-6"></div>
      </div>

      <Card>
        <CardContent>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Authentication Failed</h1>
            <p>We couldn't sign you in with Google. Please try again.</p>

            <Button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
              Back to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleOAuth;
