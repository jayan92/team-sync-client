import { Link } from "react-router-dom";
import { AudioWaveform } from "lucide-react";

type LogoProps = {
  url?: string;
  disableLink?: boolean;
};

const Logo = (props: LogoProps) => {
  const { url = "/", disableLink = false } = props;

  const inner = (
    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
      <AudioWaveform className="size-4" />
    </div>
  );

  return (
    <div className="flex items-center justify-center sm:justify-start">
      {disableLink ? inner : <Link to={url}>{inner}</Link>}
    </div>
  );
};

export default Logo;
