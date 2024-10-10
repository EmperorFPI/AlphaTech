import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AerialMapView({ field, well }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aerial View</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <p>Aerial view of {field} - {well}</p>
          <p>(Placeholder for actual map implementation)</p>
        </div>
      </CardContent>
    </Card>
  );
}