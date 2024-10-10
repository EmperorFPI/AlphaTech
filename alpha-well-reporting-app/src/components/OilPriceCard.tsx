import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OilPriceCard() {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Simulating real-time price updates
    const interval = setInterval(() => {
      setPrice(Math.random() * 10 + 70); // Random price between $70 and $80
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Oil Price</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">${price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground mt-2">per barrel</p>
      </CardContent>
    </Card>
  );
}