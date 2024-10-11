import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define prop types for WellSelectionGrid
interface WellSelectionGridProps {
  wells: string[];
  onSelectWell: (well: string) => void;
}

export function WellSelectionGrid({ wells, onSelectWell }: WellSelectionGridProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select a Well</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {wells.map((well: string) => (
            <Button key={well} onClick={() => onSelectWell(well)} variant="outline">
              {well}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
