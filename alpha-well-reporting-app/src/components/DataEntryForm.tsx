import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface DataEntryFormProps {
  fields: string[]
  wells: { [key: string]: string[] }
}

export function DataEntryForm({ fields, wells }: DataEntryFormProps) {
  const [selectedField, setSelectedField] = useState<string>(fields[0])
  const [selectedWell, setSelectedWell] = useState<string>('')
  const [formData, setFormData] = useState({
    date: '',
    oilProduction: '',
    gasProduction: '',
    waterProduction: '',
    tubingPressure: '',
    casingPressure: '',
    chokeSize: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted data:', { field: selectedField, well: selectedWell, ...formData })
    // Here you would typically send this data to your backend
    alert('Data submitted successfully!')
    // Reset form
    setFormData({
      date: '',
      oilProduction: '',
      gasProduction: '',
      waterProduction: '',
      tubingPressure: '',
      casingPressure: '',
      chokeSize: '',
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Entry Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="field">Field</Label>
            <Select value={selectedField} onValueChange={setSelectedField}>
              <SelectTrigger id="field">
                <SelectValue placeholder="Select a field" />
              </SelectTrigger>
              <SelectContent>
                {fields.map(field => (
                  <SelectItem key={field} value={field}>{field}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="well">Well</Label>
            <Select value={selectedWell} onValueChange={setSelectedWell}>
              <SelectTrigger id="well">
                <SelectValue placeholder="Select a well" />
              </SelectTrigger>
              <SelectContent>
                {wells[selectedField]?.map(well => (
                  <SelectItem key={well} value={well}>{well}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="oilProduction">Oil Production (bbl/day)</Label>
            <Input
              id="oilProduction"
              name="oilProduction"
              type="number"
              value={formData.oilProduction}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gasProduction">Gas Production (MCF/day)</Label>
            <Input
              id="gasProduction"
              name="gasProduction"
              type="number"
              value={formData.gasProduction}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="waterProduction">Water Production (bbl/day)</Label>
            <Input
              id="waterProduction"
              name="waterProduction"
              type="number"
              value={formData.waterProduction}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tubingPressure">Tubing Pressure (psi)</Label>
            <Input
              id="tubingPressure"
              name="tubingPressure"
              type="number"
              value={formData.tubingPressure}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="casingPressure">Casing Pressure (psi)</Label>
            <Input
              id="casingPressure"
              name="casingPressure"
              type="number"
              value={formData.casingPressure}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chokeSize">Choke Size (1/64")</Label>
            <Input
              id="chokeSize"
              name="chokeSize"
              type="number"
              value={formData.chokeSize}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button type="submit">Submit Data</Button>
        </form>
      </CardContent>
    </Card>
  )
}