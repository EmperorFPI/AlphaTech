import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data - replace with actual data in a real application
const generateMockWellData = (field, well) => {
  const baseProduction = field === 'Eagle Ford' ? 1000 : field === 'Permian Basin' ? 1500 : 800;
  const wells = well === 'All Wells' ? ['01', '02', '03'] : [well.split('-')[1]];
  
  return wells.map(wellNum => ({
    id: `${field.split(' ')[0]}-${wellNum}`,
    production: Math.round(baseProduction + Math.random() * 200 - 100),
    pressure: Math.round(2000 + Math.random() * 500),
    temperature: Math.round(150 + Math.random() * 50),
    waterCut: Math.round(Math.random() * 20)
  }));
};

export function WellDataTable({ field, well }) {
  const data = generateMockWellData(field, well);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Well ID</TableHead>
          <TableHead>Production (bbl/day)</TableHead>
          <TableHead>Pressure (psi)</TableHead>
          <TableHead>Temperature (°F)</TableHead>
          <TableHead>Water Cut (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((well) => (
          <TableRow key={well.id}>
            <TableCell>{well.id}</TableCell>
            <TableCell>{well.production}</TableCell>
            <TableCell>{well.pressure}</TableCell>
            <TableCell>{well.temperature}</TableCell>
            <TableCell>{well.waterCut}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}