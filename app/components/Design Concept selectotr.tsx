"use client"

import { useState } from "react"

const designConcepts = ["Good Plus", "Better Plus", "Quad Plus", "Luxury Plus"]
const constructionConcepts = [
  "Good Plus Construction",
  "Better Plus Construction",
  "Quad Plus Construction",
  "Luxury Plus Construction",
]

export default function DesignConceptSelector() {
  const [selectedDesign, setSelectedDesign] = useState("")
  const [selectedConstruction, setSelectedConstruction] = useState("")

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="designConcept" className="block mb-1">
          Design Concept
        </label>
        <select
          id="designConcept"
          value={selectedDesign}
          onChange={(e) => setSelectedDesign(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select a design concept</option>
          {designConcepts.map((concept) => (
            <option key={concept} value={concept}>
              {concept}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="constructionConcept" className="block mb-1">
          Construction Concept
        </label>
        <select
          id="constructionConcept"
          value={selectedConstruction}
          onChange={(e) => setSelectedConstruction(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select a construction concept</option>
          {constructionConcepts.map((concept) => (
            <option key={concept} value={concept}>
              {concept}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

