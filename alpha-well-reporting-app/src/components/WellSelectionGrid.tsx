import React from 'react';
import { Button } from  "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WellSelectionGrid({ wells, onSelectWell }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select a Well</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {wells.map((well) => (
            <Button key={well} onClick={() => onSelectWell(well)} variant="outline">
              {well}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}