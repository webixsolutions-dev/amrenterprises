import React, { useState } from "react";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OurVission = () => {
  const [activeTab, setActiveTab] = useState("Forex");
  const [period, setPeriod] = useState("1Y");

  const tabs = ["Indices", "Futures", "Bonds", "Forex"];
  const periods = ["1D", "1M", "3M", "1Y", "5Y", "All"];

  const marketData = [
    { month: "Aug", value: 42 },
    { month: "Sep", value: 52 },
    { month: "Oct", value: 57 },
    { month: "Nov", value: 45 },
    { month: "Dec", value: 50 },
    { month: "2026", value: 62 },
    { month: "Feb", value: 82 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 70 },
    { month: "May", value: 67 },
    { month: "Jun", value: 53 },
    { month: "Jul", value: 38 },
  ];

  const currencies = [
    {
      flag: "🇺🇸🇪🇺",
      name: "EURUSD",
      desc: "EUR to USD",
      price: "1.15220",
      change: "-0.04%",
      value: "-0.00",
      negative: true,
    },
    {
      flag: "🇺🇸🇬🇧",
      name: "GBPUSD",
      desc: "GBP to USD",
      price: "1.34715",
      change: "+0.05%",
      value: "+0.00",
      negative: false,
    },
    {
      flag: "🇺🇸🇯🇵",
      name: "USDJPY",
      desc: "USD to JPY",
      price: "159.446",
      change: "-0.03%",
      value: "-0.05",
      negative: true,
    },
    {
      flag: "🇺🇸🇨🇭",
      name: "USDCHF",
      desc: "USD to CHF",
      price: "0.79838",
      change: "+0.43%",
      value: "+0.00",
      negative: false,
    },
  ];

  return (
    <>
      {/* OUR VISION */}
     
      {/* MARKET ANALYSIS */}
      <section className="px-4 md:px-12 py-16 bg-black">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="px-6 pt-8">
            <p className="uppercase tracking-widest text-brand text-sm font-semibold mb-2">
              Market Insights
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">
              Market Analysis
            </h2>

            <p className="text-gray-500 mt-2">
              Monitor market trends and financial movements in real time.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 px-6 pt-7 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                  activeTab === tab
                    ? "bg-gray-100 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="h-[300px] md:h-[390px] px-3 md:px-6 pt-5">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <defs>
                  <linearGradient
                    id="marketGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2563eb"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="100%"
                      stopColor="#2563eb"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#777", fontSize: 13 }}
                />

                <YAxis hide />

                <Tooltip
                  cursor={{ stroke: "#2563eb", strokeWidth: 1 }}
                  contentStyle={{
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="none"
                  fill="url(#marketGradient)"
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Periods */}
          <div className="flex gap-2 px-6 py-5 overflow-x-auto">
            {periods.map((item) => (
              <button
                key={item}
                onClick={() => setPeriod(item)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  period === item
                    ? "bg-gray-100 text-black font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Currency List */}
          <div className="px-4 md:px-6 pb-7">
            {currencies.map((currency, index) => (
              <div
                key={currency.name}
                className={`flex items-center justify-between gap-4 px-3 py-4 ${
                  index === 0
                    ? "bg-blue-100 rounded-xl"
                    : "border-b border-gray-200"
                }`}
              >
                {/* Name */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="text-2xl">
                    {currency.flag}
                  </div>

                  <div>
                    <h3 className="font-semibold text-brand-navy">
                      {currency.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {currency.desc}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="hidden sm:block text-right">
                  <p className="text-lg font-medium text-brand-navy">
                    {currency.price}
                  </p>
                </div>

                {/* Change */}
                <div
                  className={`text-right ${
                    currency.negative
                      ? "text-red-500"
                      : "text-emerald-500"
                  }`}
                >
                  <p>{currency.change}</p>
                  <p>{currency.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVission;