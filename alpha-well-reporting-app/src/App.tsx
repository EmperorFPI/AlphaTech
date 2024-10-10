import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductionChart } from "./components/ProductionChart";
import { OilPriceCard } from "./components/OilPriceCard";
import { WellDataTable } from "./components/WellDataTable";
import { AerialMapView } from "./components/AerialMapView";
import { DataEntryForm } from "./components/DataEntryForm";

// Mock data
const individualFields = ['Eagle Ford', 'Permian Basin', 'Bakken'];
const fields = ['All Fields', ...individualFields];
const wells = {
  'All Fields': [],
  'Eagle Ford': ['EF-01', 'EF-02', 'EF-03'],
  'Permian Basin': ['PB-01', 'PB-02', 'PB-03'],
  'Bakken': ['BK-01', 'BK-02', 'BK-03']
};

function App() {
  const [selectedField, setSelectedField] = useState(fields[0]);
  const [selectedWell, setSelectedWell] = useState('All Wells');

  const availableWells = useMemo(() => {
    if (selectedField === 'All Fields') {
      return Object.values(wells).flat();
    }
    return wells[selectedField];
  }, [selectedField]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Oilfield Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Field Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSelectedField} defaultValue={selectedField}>
              <SelectTrigger>
                <SelectValue placeholder="Select a field" />
              </SelectTrigger>
              <SelectContent>
                {fields.map(field => (
                  <SelectItem key={field} value={field}>{field}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Well Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSelectedWell} defaultValue={selectedWell}>
              <SelectTrigger>
                <SelectValue placeholder="Select a well" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Wells">All Wells</SelectItem>
                {availableWells.map(well => (
                  <SelectItem key={well} value={well}>{well}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="data-entry">Data Entry</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <ProductionChart field={selectedField} well={selectedWell} />
            </div>
            <OilPriceCard />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <AerialMapView field={selectedField} well={selectedWell} />
            <Card>
              <CardHeader>
                <CardTitle>Well Data</CardTitle>
                <CardDescription>Detailed information for {selectedField} wells</CardDescription>
              </CardHeader>
              <CardContent>
                <WellDataTable field={selectedField} well={selectedWell} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="data-entry">
          <DataEntryForm fields={individualFields} wells={wells} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;