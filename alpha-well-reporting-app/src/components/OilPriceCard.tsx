import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from 'axios';

export function OilPriceCard() {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchOilPrice = async () => {
      const options = {
        method: 'GET',
        url: 'https://commodities-apised.p.rapidapi.com/v1/market-data',
        params: { symbols: 'OIL', base: 'USD' },
        headers: {
          'x-rapidapi-key': '7ab45e2b6bmsh3acbaa69b0dbde7p16222ejsn4d4fab41bf8d',
          'x-rapidapi-host': 'commodities-apised.p.rapidapi.com'
        }
      };
    
      try {
        const response = await axios.request(options);
        console.log('Full API Response:', JSON.stringify(response.data, null, 2));
        
        if (response.data && response.data.rates && response.data.rates.OIL) {
          const oilPrice = response.data.rates.OIL.current;
          console.log('Oil Price:', oilPrice);
          setPrice(oilPrice);
        } else {
          console.log('Unexpected API response structure');
        }
      } catch (error) {
        console.error('Error fetching oil price:', error);
      }
    };
    

    fetchOilPrice(); // Initial fetch

    // Set interval to 2 hours (7,200,000 milliseconds)
    const interval = setInterval(fetchOilPrice, 7200000);

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
