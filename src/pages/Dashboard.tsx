import React from 'react';
import { Droplets, CloudRain, Mountain, Thermometer, Droplet, CheckCircle } from 'lucide-react';
import { SensorCard } from '../components/SensorCard';
import { SoilMoistureIndicator } from '../components/SoilMoistureIndicator';
import { RainSensorIndicator } from '../components/RainSensorIndicator';
import { SlopeAngleIndicator } from '../components/SlopeAngleIndicator';
import { SensorChart } from '../components/SensorChart';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
export function Dashboard() {
  // Mock Data
  const sensorData = {
    soilMoisture: 45,
    rainStatus: 'High' as const,
    rainValue: 12,
    slopeAngle: 0.2,
    temperature: 24.5,
    humidity: 68
  };
  return <div className="flex min-h-screen bg-[#1a1d2e] text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Fixed Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 z-30">
        <Sidebar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-6 lg:p-8 max-w-[1400px] mx-auto w-full">
          {/* Threat Level Card */}
          <section className="mb-8">
            <div className="bg-[#252936] rounded-2xl p-8 border border-gray-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-emerald-500/10" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-gray-400 font-medium mb-1">
                    Current Threat Level
                  </h2>
                  <div className="text-5xl font-bold text-emerald-500 tracking-tight mb-4">
                    NORMAL
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-2">
                    <HistoryIcon className="w-4 h-4" />
                    <span>All sensors online. Last update: 30s ago.</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sensor Grid */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-medium">
              <RadioIcon className="w-5 h-5" />
              <h2>Real-time Sensor Data</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Soil Moisture - Spans 2 cols */}
              <div className="lg:col-span-2">
                <SensorCard title="Soil Moisture" subtitle="Capacitive Sensor" icon={<Droplets className="w-5 h-5" />}>
                  <SoilMoistureIndicator percentage={sensorData.soilMoisture} />
                </SensorCard>
              </div>

              {/* Rain Sensor */}
              <SensorCard title="Rainfall" subtitle="Last 1h" icon={<CloudRain className="w-5 h-5" />}>
                <RainSensorIndicator status={sensorData.rainStatus} value={sensorData.rainValue} />
              </SensorCard>

              {/* Slope Angle */}
              <SensorCard title="Slope Angle" subtitle="MPU6050 Sensor" icon={<Mountain className="w-5 h-5" />}>
                <SlopeAngleIndicator angle={sensorData.slopeAngle} />
              </SensorCard>

              {/* Temperature */}
              <SensorCard title="Temperature" subtitle="Ambient" icon={<Thermometer className="w-5 h-5" />}>
                <div className="flex flex-col h-full justify-center">
                  <span className="text-4xl font-bold text-rose-400">
                    {sensorData.temperature}
                    <span className="text-2xl text-gray-500 ml-1">°C</span>
                  </span>
                  <p className="text-gray-400 mt-2 text-sm">Normal Range</p>
                </div>
              </SensorCard>

              {/* Humidity */}
              <SensorCard title="Humidity" subtitle="Relative" icon={<Droplet className="w-5 h-5" />}>
                <div className="flex flex-col h-full justify-center">
                  <span className="text-4xl font-bold text-purple-400">
                    {sensorData.humidity}
                    <span className="text-2xl text-gray-500 ml-1">%</span>
                  </span>
                  <p className="text-gray-400 mt-2 text-sm">Optimal Level</p>
                </div>
              </SensorCard>
            </div>
          </section>

          {/* Charts Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-medium">
              <HistoryIcon className="w-5 h-5" />
              <h2>Sensor Trends</h2>
            </div>

            <div className="bg-[#252936] rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-100">
                  Rainfall vs Soil Moisture (24h)
                </h3>
                <div className="px-3 py-1 rounded-lg bg-gray-800 text-xs font-medium text-gray-400 border border-gray-700">
                  Last 24 Hours
                </div>
              </div>
              <SensorChart />
            </div>
          </section>

          {/* Alert Button */}
          <section className="flex justify-center pb-8">
            <button className="group relative w-full max-w-2xl bg-rose-600 hover:bg-rose-500 text-white rounded-xl py-4 px-8 font-bold text-lg shadow-lg shadow-rose-900/20 transition-all duration-300 active:scale-[0.98]">
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-center gap-3">
                <AlertIcon className="w-6 h-6 animate-pulse" />
                <span>ALERT AUTHORITIES</span>
              </div>
              <p className="text-xs font-normal opacity-80 mt-1 text-rose-100">
                Press only in case of visual confirmation of landslide
              </p>
            </button>
          </section>
        </main>
      </div>
    </div>;
}
// Helper Icons
function HistoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" />
      <path d="M3 3v9h9" />
      <path d="M12 7v5l4 2" />
    </svg>;
}
function RadioIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
    </svg>;
}
function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>;
}