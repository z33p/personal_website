import "../styles/globals.css";
import "../styles/headings.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { MutableRefObject, useEffect } from "react";
import GoogleAnalyticsBusiness from "../lib/business/google_analytics/google_analytics_business";
import React from "react";

interface AppContext {
  refNav?: MutableRefObject<HTMLDivElement | null>;
}

export const initialValue: AppContext = {};

export const AppContext = React.createContext<AppContext>(initialValue);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      GoogleAnalyticsBusiness.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppContext.Provider value={initialValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
export default MyApp;
