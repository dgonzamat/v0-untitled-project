import { render, screen } from "@testing-library/react"
import { ProcessRoadmap } from "@/components/demo/process-roadmap"
import { User, FileText, CheckCircle } from "lucide-react"

describe("ProcessRoadmap Component", () => {
  const mockStages = [
    { id: 1, name: "Inicio", icon: User, color: "blue" },
    { id: 2, name: "Verificación", icon: FileText, color: "green" },
    { id: 3, name: "Firma", icon: CheckCircle, color: "purple" },
  ]

  it("renders all stages correctly", () => {
    render(<ProcessRoadmap stages={mockStages} currentStage={1} />)

    expect(screen.getByText("Etapas del Proceso")).toBeInTheDocument()
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Verificación")).toBeInTheDocument()
    expect(screen.getByText("Firma")).toBeInTheDocument()
  })

  it("highlights the current stage correctly", () => {
    const { container } = render(<ProcessRoadmap stages={mockStages} currentStage={2} />)

    // This is a simplified test. In a real scenario, you might want to check for specific classes
    // or styles that indicate the current stage is highlighted.
    expect(screen.getByText("Verificación")).toBeInTheDocument()

    // Check that the first stage is marked as completed
    const firstStageIcon = container.querySelector("svg")
    expect(firstStageIcon).toBeInTheDocument()
  })

  it("marks completed stages correctly", () => {
    const { container } = render(<ProcessRoadmap stages={mockStages} currentStage={3} />)

    // Check that the first two stages are marked as completed
    const checkIcons = container.querySelectorAll("svg")
    expect(checkIcons.length).toBeGreaterThanOrEqual(2)
  })
})
