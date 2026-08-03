import { useEffect, useRef } from "react";

export default function ChartTrading() {
  const containerRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // prevent double-injection from StrictMode/fast refresh
    if (loadedRef.current) return;
    loadedRef.current = true;

    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    container.appendChild(widgetDiv);

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
            { s: "TVC:GOLD", d: "Gold" },
            { s: "TVC:SILVER", d: "Silver" },
            { s: "TVC:USOIL", d: "WTI Crude Oil" },
            { s: "TVC:UKOIL", d: "Brent Crude Oil" },
            { s: "OANDA:NATGASUSD", d: "Natural Gas" },
            { s: "TVC:DXY", d: "US Dollar Index" },
          ],
          originalTitle: "Futures",
        },
        {
          title: "Bonds",
          symbols: [
            { s: "TVC:US10Y", d: "US 10Y Yield" },
            { s: "TVC:US30Y", d: "US 30Y Yield" },
            { s: "TVC:US02Y", d: "US 2Y Yield" },
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

    widgetDiv.appendChild(script);

    return () => {
      loadedRef.current = false;
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}