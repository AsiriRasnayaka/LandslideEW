import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart, Legend } from 'recharts';
const data = [{
  time: '00:00',
  rain: 0,
  moisture: 30
}, {
  time: '04:00',
  rain: 0,
  moisture: 32
}, {
  time: '08:00',
  rain: 5,
  moisture: 35
}, {
  time: '12:00',
  rain: 12,
  moisture: 45
}, {
  time: '16:00',
  rain: 8,
  moisture: 55
}, {
  time: '20:00',
  rain: 2,
  moisture: 58
}, {
  time: '24:00',
  rain: 0,
  moisture: 56
}];
export function SensorChart() {
  return <div className="w-full h-[350px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{
        top: 10,
        right: 10,
        left: -20,
        bottom: 0
      }}>
          <defs>
            <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
          <XAxis dataKey="time" stroke="#9ca3af" tick={{
          fill: '#9ca3af',
          fontSize: 12
        }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" stroke="#9ca3af" tick={{
          fill: '#9ca3af',
          fontSize: 12
        }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{
          fill: '#9ca3af',
          fontSize: 12
        }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{
          backgroundColor: '#1f2937',
          borderColor: '#374151',
          color: '#f3f4f6'
        }} itemStyle={{
          color: '#e5e7eb'
        }} />
          <Legend />
          <Bar yAxisId="right" dataKey="rain" name="Rain (mm)" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={20} />
          <Line yAxisId="left" type="monotone" dataKey="moisture" name="Moisture (%)" stroke="#3b82f6" strokeWidth={3} dot={false} activeDot={{
          r: 6
        }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>;
}