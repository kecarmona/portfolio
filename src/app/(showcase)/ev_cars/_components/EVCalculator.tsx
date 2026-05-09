"use client";

import { useState, useMemo } from "react";

// Fuel prices by country (USD per liter/gallon)
const countryData: Record<string, { fuelPrice: number; currency: string; label: string }> = {
  mexico: { fuelPrice: 1.2, currency: "USD", label: "México" },
  colombia: { fuelPrice: 1.0, currency: "USD", label: "Colombia" },
  chile: { fuelPrice: 1.3, currency: "USD", label: "Chile" },
  argentina: { fuelPrice: 0.9, currency: "USD", label: "Argentina" },
  peru: { fuelPrice: 1.1, currency: "USD", label: "Perú" },
  ecuador: { fuelPrice: 0.7, currency: "USD", label: "Ecuador" },
  uruguay: { fuelPrice: 1.5, currency: "USD", label: "Uruguay" },
  costa_rica: { fuelPrice: 1.4, currency: "USD", label: "Costa Rica" },
  panama: { fuelPrice: 1.1, currency: "USD", label: "Panamá" },
  brasil: { fuelPrice: 1.0, currency: "USD", label: "Brasil" },
};

export default function EVCalculator() {
  const [country, setCountry] = useState("mexico");
  const [kmPerMonth, setKmPerMonth] = useState(1500);
  const [fuelConsumption, setFuelConsumption] = useState(10); // L/100km
  const [electricityRate, setElectricityRate] = useState(0.15); // USD/kWh
  const [evConsumption, setEvConsumption] = useState(16); // kWh/100km

  const data = countryData[country];

  const savings = useMemo(() => {
    const fuelCostPerMonth = (kmPerMonth / 100) * fuelConsumption * data.fuelPrice;
    const evCostPerMonth = (kmPerMonth / 100) * evConsumption * electricityRate;
    const monthlySavings = fuelCostPerMonth - evCostPerMonth;
    const yearlySavings = monthlySavings * 12;
    const fiveYearSavings = yearlySavings * 5;
    const co2SavedPerYear = Math.round((kmPerMonth * 12 / 100) * fuelConsumption * 2.31 * 0.001 * 100); // tons CO2

    return {
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      fiveYearSavings: Math.round(fiveYearSavings),
      co2SavedPerYear: Math.round(co2SavedPerYear * 10) / 10,
      fuelCost: Math.round(fuelCostPerMonth),
      evCost: Math.round(evCostPerMonth),
    };
  }, [kmPerMonth, fuelConsumption, electricityRate, evConsumption, data]);

  return (
    <section id="calculator" className="ev-calculator">
      <div className="max-w-7xl mx-auto">
        <div className="calculator-header">
          <div className="section-tag reveal">Calculadora</div>
          <h2 className="display reveal">
            ¿CUÁNTO<br />
            <span className="neon-text">AHORRÁS</span><br />
            CON UN EV?
          </h2>
          <p className="reveal">
            Calculá tu ahorro mensual vs un auto a combustión. Los números hablan solos.
          </p>
        </div>

        <div className="calculator-content">
          {/* Inputs */}
          <div className="calculator-inputs glass reveal-left">
            <div className="input-group">
              <label>País</label>
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="calc-select">
                {Object.entries(countryData).map(([key, val]) => (
                  <option key={key} value={key}>{val.label}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Km por mes: <span className="input-value">{kmPerMonth.toLocaleString()}</span></label>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={kmPerMonth}
                onChange={(e) => setKmPerMonth(Number(e.target.value))}
                className="calc-range"
              />
              <div className="range-labels">
                <span>500</span>
                <span>5,000</span>
              </div>
            </div>

            <div className="input-group">
              <label>Consumo combustible (L/100km): <span className="input-value">{fuelConsumption}</span></label>
              <input
                type="range"
                min="5"
                max="20"
                step="0.5"
                value={fuelConsumption}
                onChange={(e) => setFuelConsumption(Number(e.target.value))}
                className="calc-range"
              />
              <div className="range-labels">
                <span>5</span>
                <span>20</span>
              </div>
            </div>

            <div className="input-group">
              <label>Precio electricidad ($/kWh): <span className="input-value">${electricityRate}</span></label>
              <input
                type="range"
                min="0.05"
                max="0.40"
                step="0.01"
                value={electricityRate}
                onChange={(e) => setElectricityRate(Number(e.target.value))}
                className="calc-range"
              />
              <div className="range-labels">
                <span>$0.05</span>
                <span>$0.40</span>
              </div>
            </div>

            <div className="input-group">
              <label>Consumo EV (kWh/100km): <span className="input-value">{evConsumption}</span></label>
              <input
                type="range"
                min="12"
                max="25"
                step="1"
                value={evConsumption}
                onChange={(e) => setEvConsumption(Number(e.target.value))}
                className="calc-range"
              />
              <div className="range-labels">
                <span>12</span>
                <span>25</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="calculator-results">
            <div className="result-card result-main glass-neon">
              <div className="result-label">AHORRO ANUAL</div>
              <div className="result-value neon-text">${savings.yearlySavings.toLocaleString()}</div>
              <div className="result-sub">USD por año</div>
            </div>

            <div className="result-card glass">
              <div className="result-label">AHORRO MENSUAL</div>
              <div className="result-value">${savings.monthlySavings.toLocaleString()}</div>
            </div>

            <div className="result-card glass">
              <div className="result-label">AHORRO EN 5 AÑOS</div>
              <div className="result-value">${savings.fiveYearSavings.toLocaleString()}</div>
            </div>

            <div className="result-card glass">
              <div className="result-label">CO₂ AHORRADO / AÑO</div>
              <div className="result-value">{savings.co2SavedPerYear} ton</div>
              <div className="result-sub">Emisiones evitadas</div>
            </div>

            {/* Cost comparison bar */}
            <div className="cost-comparison glass">
              <div className="cost-label">Comparativa mensual</div>
              <div className="cost-bar-group">
                <div className="cost-bar-item">
                  <div className="cost-bar-label">Combustión</div>
                  <div className="cost-bar-visual">
                    <div className="cost-bar-fill cost-bar-fill-fuel" style={{ width: `${Math.min(100, (savings.fuelCost / (savings.fuelCost + savings.evCost)) * 100 * 2)}%` }}></div>
                  </div>
                  <div className="cost-bar-amount">${savings.fuelCost}/mes</div>
                </div>
                <div className="cost-bar-item">
                  <div className="cost-bar-label">Eléctrico</div>
                  <div className="cost-bar-visual">
                    <div className="cost-bar-fill cost-bar-fill-ev" style={{ width: `${Math.min(100, (savings.evCost / (savings.fuelCost + savings.evCost)) * 100 * 2)}%` }}></div>
                  </div>
                  <div className="cost-bar-amount">${savings.evCost}/mes</div>
                </div>
              </div>
            </div>

            <a href="#services" className="neon-btn calc-cta">
              Quiero mi EV →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
