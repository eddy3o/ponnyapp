"use client";
import React from "react";
import { DefaultContainer } from "../container/DefaultContainer";
import { useEffect, useRef } from "react";
import {
  createChart,
  ColorType,
  ISeriesApi,
  IChartApi,
} from "lightweight-charts";

import { initialData } from "@/mocks/GraficaFinanzas";

const GraficaFinanzas = () => {
  return (
    <DefaultContainer>
      <div className="h-full">
        <h2 className="text-lg font-semibold">Gastos vs Ingresos</h2>
        <div className="h-80 p-5">
          <ChartComponent data={initialData} />
        </div>
      </div>
    </DefaultContainer>
  );
};

interface ChartComponentProps {
  data: { time: string; value: number }[];
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  colors: {
    backgroundColor = "#0f0f0f",
    lineColor = "#ec4899",
    textColor = "white",
    areaTopColor = "#ec4899",
    areaBottomColor = "#0f0f0f",
  } = {},
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor,
        },
        width: chartContainerRef.current.clientWidth,
        height: 300,
      });

      chartRef.current = chart;

      const series = chart.addAreaSeries({
        lineColor,
        topColor: areaTopColor,
        bottomColor: areaBottomColor,
      });
      seriesRef.current = series;
      series.setData(data);

      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      chartRef.current?.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};

export default GraficaFinanzas;
