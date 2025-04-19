'use client';

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [netGoal, setNetGoal] = useState(0);
  const [avgProperty, setAvgProperty] = useState(150000);
  const [commissionRate, setCommissionRate] = useState(5);

  const estimateGross = (net) => {
    if (net <= 8059) return net / 0.87;
    if (net <= 12160) return net / 0.835;
    if (net <= 17233) return net / 0.78;
    if (net <= 22306) return net / 0.75;
    if (net <= 28400) return net / 0.68;
    if (net <= 41629) return net / 0.645;
    if (net <= 44987) return net / 0.565;
    if (net <= 83696) return net / 0.55;
    return net / 0.52;
  };

  const grossIncome = estimateGross(netGoal);

  const commissionPuroEmpresa = grossIncome / 0.728;
  const commissionPuroSemEmpresa = grossIncome / 0.7;
  const commissionRapp = grossIncome / 0.6;

  const dealsPuroEmpresa =
    commissionPuroEmpresa / (avgProperty * (commissionRate / 100));
  const dealsPuroSemEmpresa =
    commissionPuroSemEmpresa / (avgProperty * (commissionRate / 100));
  const dealsRapp = commissionRapp / (avgProperty * (commissionRate / 100));

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-8 text-center">
      <div className="flex justify-center">
        <Image
          src="/remax_grupo_smart_logo.png"
          alt="RE/MAX Grupo Smart Logo"
          width={200}
          height={80}
          className="mb-2"
        />
      </div>
      <h1 className="text-2xl font-bold text-blue-900">
        Calculadora de Comissão – Rafael Tymniak
      </h1>

      <div className="grid gap-6 text-left">
        <label className="block">
          <span className="font-medium">
            META de rendimento LÍQUIDO ANUAL (€)
          </span>
          <input
            type="number"
            value={netGoal}
            onChange={(e) => setNetGoal(Number(e.target.value))}
            className="w-full p-2 border rounded mt-1"
          />
        </label>

        <label className="block">
          <span className="font-medium">
            Valor MÉDIO dos imóveis vendidos (€)
          </span>
          <input
            type="number"
            value={avgProperty}
            onChange={(e) => setAvgProperty(Number(e.target.value))}
            className="w-full p-2 border rounded mt-1"
          />
        </label>

        <label className="block">
          <span className="font-medium">Comissão média por venda (%)</span>
          <input
            type="number"
            value={commissionRate}
            onChange={(e) => setCommissionRate(Number(e.target.value))}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
      </div>

      <div className="bg-gray-100 p-4 rounded space-y-2 text-left">
        <h2 className="text-lg font-semibold">Resultados</h2>
        <p>
          <strong>Rendimento BRUTO estimado:</strong> €{grossIncome.toFixed(2)}
        </p>
        <p>
          <strong>Comissão necessária (Puro c/ empresa - 72,8%):</strong> €
          {commissionPuroEmpresa.toFixed(2)}
        </p>
        <p>
          <strong>Comissão necessária (Puro s/ empresa - 70%):</strong> €
          {commissionPuroSemEmpresa.toFixed(2)}
        </p>
        <p>
          <strong>Comissão necessária (RAPP estimado - 60%):</strong> €
          {commissionRapp.toFixed(2)}
        </p>
        <p>
          <strong>Nº imóveis a vender (Puro c/ empresa):</strong>{" "}
          {dealsPuroEmpresa.toFixed(1)}
        </p>
        <p>
          <strong>Nº imóveis a vender (Puro s/ empresa):</strong>{" "}
          {dealsPuroSemEmpresa.toFixed(1)}
        </p>
        <p>
          <strong>Nº imóveis a vender (RAPP):</strong> {dealsRapp.toFixed(1)}
        </p>
      </div>
    </main>
  );
}
