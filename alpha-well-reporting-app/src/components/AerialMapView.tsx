import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define prop types
interface AerialMapViewProps {
  field: 'All Fields' | 'Eagle Ford' | 'Permian Basin' | 'Bakken'; // or you can use the Field type if it's exported
  well: string;
}

export function AerialMapView({ field, well }: AerialMapViewProps) {
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
