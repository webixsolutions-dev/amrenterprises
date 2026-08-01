import { useEffect, useRef } from "react";

export default function ChartTrading() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: 550,
      rangeSelector: true,
      range: "1Y",
      timeRanges: {
        "1D": { interval: "1", timeframe: "1D" },
        "1M": { interval: "1", timeframe: "1M" },
        "3M": { interval: "1", timeframe: "3M" },
        "1Y": { interval: "1", timeframe: "1Y" },
        "5Y": { interval: "1", timeframe: "5Y" },
        "All": { interval: "1", timeframe: "All" }
      },
      tabs: [
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500 Index" },
            { s: "FOREXCOM:NSXUSD", d: "US 100 Cash CFD" },
            { s: "FOREXCOM:DJI", d: "Dow Jones Industrial Average Index" },
            { s: "INDEX:NKY", d: "Japan 225" },
            { s: "INDEX:DEU40", d: "DAX Index" },
            { s: "FOREXCOM:UKXGBP", d: "FTSE 100 Index" },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Futures",
          symbols: [
            { s: "CME_MINI:ES1!", d: "S&P 500" },
            { s: "CME:6E1!", d: "Euro" },
            { s: "COMEX:GC1!", d: "Gold" },
            { s: "NYMEX:CL1!", d: "WTI Crude Oil" },
          ],
          originalTitle: "Futures",
        },
        {
          title: "Bonds",
          symbols: [
            { s: "CBOT:ZB1!", d: "US 30-Year T-Bond" },
            { s: "CBOT:ZN1!", d: "US 10-Year T-Note" },
            { s: "CBOT:ZF1!", d: "US 5-Year T-Note" },
          ],
          originalTitle: "Bonds",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR to USD" },
            { s: "FX:GBPUSD", d: "GBP to USD" },
            { s: "FX:USDJPY", d: "USD to JPY" },
          ],
          originalTitle: "Forex",
        },
      ],
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="tradingview-widget-container w-full" ref={containerRef} />;
}