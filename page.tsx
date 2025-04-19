
'use client';

import { useState } from 'react';

export default function CommissionCalculator() {
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

  const dealsPuroEmpresa = commissionPuroEmpresa / (avgProperty * (commissionRate / 100));
  const dealsPuroSemEmpresa = commissionPuroSemEmpresa / (avgProperty * (commissionRate / 100));
  const dealsRapp = commissionRapp / (avgProperty * (commissionRate / 100));

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Calculadora de Comissão RE/MAX</h1>

      <div className="space-y-4">
        <label className="block">
          <span className="font-medium">META de rendimento LÍQUIDO ANUAL (€)</span>
          <input type="number" value={netGoal} onChange={(e) => setNetGoal(Number(e.target.value))} className="w-full p-2 border rounded" />
        </label>

        <label className="block">
          <span className="font-medium">Valor MÉDIO dos imóveis vendidos (€)</span>
          <input type="number" value={avgProperty} onChange={(e) => setAvgProperty(Number(e.target.value))} className="w-full p-2 border rounded" />
        </label>

        <label className="block">
          <span className="font-medium">Comissão média por venda (%)</span>
          <input type="number" value={commissionRate} onChange={(e) => setCommissionRate(Number(e.target.value))} className="w-full p-2 border rounded" />
        </label>
      </div>

      <div className="bg-gray-100 p-4 rounded space-y-2">
        <p><strong>Rendimento BRUTO estimado:</strong> €{grossIncome.toFixed(2)}</p>
        <p><strong>Comissão necessária (Puro c/ empresa - 72,8%):</strong> €{commissionPuroEmpresa.toFixed(2)}</p>
        <p><strong>Comissão necessária (Puro s/ empresa - 70%):</strong> €{commissionPuroSemEmpresa.toFixed(2)}</p>
        <p><strong>Comissão necessária (RAPP estimado - 60%):</strong> €{commissionRapp.toFixed(2)}</p>
        <p><strong>Nº imóveis a vender (Puro c/ empresa):</strong> {dealsPuroEmpresa.toFixed(1)}</p>
        <p><strong>Nº imóveis a vender (Puro s/ empresa):</strong> {dealsPuroSemEmpresa.toFixed(1)}</p>
        <p><strong>Nº imóveis a vender (RAPP):</strong> {dealsRapp.toFixed(1)}</p>
      </div>
    </main>
  );
}
