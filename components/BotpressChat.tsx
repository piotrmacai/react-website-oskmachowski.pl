import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const inject = document.createElement("script");
    inject.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    inject.defer = true;
    document.body.appendChild(inject);

    const config = document.createElement("script");
    config.src = "https://files.bpcontent.cloud/2024/12/06/00/20241206002356-4PG8IRB9.js";
    config.defer = true;
    document.body.appendChild(config);

    return () => {
      document.body.removeChild(inject);
      document.body.removeChild(config);
    };
  }, []);

  return null;
}
