import "./globals.css";
import { Mulish } from "next/font/google";
import Script from "next/script";
import {
  IubendaProvider,
  IubendaCookieSolutionBannerConfigInterface,
  i18nDictionaries,
} from "@mep-agency/next-iubenda";

const mulish_init = Mulish({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "1000"],
  variable: "--font-mulish",
});

const iubendaBannerConfig: IubendaCookieSolutionBannerConfigInterface = {
  siteId: 3411238,
  cookiePolicyId: 87039527,
  lang: "it",
  banner: {
    acceptButtonDisplay: true,
    closeButtonRejects: true,
    customizeButtonDisplay: true,
    explicitWithdrawal: true,
    listPurposes: true,
    position: "float-bottom-right",
  },
  askConsentAtCookiePolicyUpdate: true,
  floatingPreferencesButtonDisplay: "bottom-right",
  perPurposeConsent: true,
  whitelabel: false,
  cookiePolicyUrl: "https://www.iubenda.com/privacy-policy/87039527",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={mulish_init.variable}>
        {/* <IubendaProvider bannerConfig={iubendaBannerConfig}> */}
        {children}
        {/* </IubendaProvider> */}
      </body>
      <Script
        async
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></Script>
    </html>
  );
}
