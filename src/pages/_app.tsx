import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UIProvider } from "@/context/ui";
import { EntriesProvider } from "@/context/entries";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </EntriesProvider>
  );
}
