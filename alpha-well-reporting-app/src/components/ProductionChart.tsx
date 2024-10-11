import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define prop types for ProductionChart
interface ProductionChartProps {
  field: 'All Fields' | 'Eagle Ford' | 'Permian Basin' | 'Bakken'; // Or use the Field type if it's exported
  well: string;
}

// Mock data - replace with actual data in a real application
const generateMockData = (field: ProductionChartProps['field'], well: string) => {
  const baseProduction = field === 'Eagle Ford' ? 1000 : field === 'Permian Basin' ? 1500 : 800;
  const wellMultiplier = well === 'All Wells' ? 3 : 1;
  
  return Array.from({ length: 30 }, (_, i) => ({
    date: `2023-05-${String(i + 1).padStart(2, '0')}`,
    production: Math.round((baseProduction + Math.random() * 200 - 100) * wellMultiplier)
  }));
};

export function ProductionChart({ field, well }: ProductionChartProps) {
  const data = generateMockData(field, well);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Production Data</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="production" stroke="#8884d8" name="Daily Production (bbl)" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
