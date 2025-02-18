"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function TravelPlanningForm() {
  const [budget, setBudget] = useState([5000])

  return (
    <Card className="w-full max-w-md mx-auto mt-10 bg-gradient-to-br from-purple-50 to-indigo-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-indigo-700">Plan Your Trip</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="from" className="text-sm font-medium text-indigo-600">
            From
          </Label>
          <Input
            id="from"
            placeholder="Departure location"
            className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="to" className="text-sm font-medium text-indigo-600">
            To
          </Label>
          <Input
            id="to"
            placeholder="Destination"
            className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="days" className="text-sm font-medium text-indigo-600">
            Number of Days
          </Label>
          <Input
            id="days"
            type="number"
            min="1"
            placeholder="e.g. 7"
            className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="people" className="text-sm font-medium text-indigo-600">
            Number of People (9+ years)
          </Label>
          <Input
            id="people"
            type="number"
            min="1"
            placeholder="e.g. 2"
            className="transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget" className="text-sm font-medium text-indigo-600">
            Total Budget
          </Label>
          <Slider
            id="budget"
            min={1000}
            max={10000}
            step={100}
            value={budget}
            onValueChange={setBudget}
            className="py-4"
          />
          <div className="text-center text-sm font-medium text-indigo-600">${budget[0].toLocaleString()}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 transform hover:scale-105">
          Plan My Trip
        </Button>
      </CardFooter>
    </Card>
  )
}

