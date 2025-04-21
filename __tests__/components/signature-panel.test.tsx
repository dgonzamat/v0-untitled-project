import { render, screen, fireEvent } from "@testing-library/react"
import { SignaturePanel } from "@/components/demo/signature-panel"

describe("SignaturePanel Component", () => {
  const mockProps = {
    signatureComplete: false,
    completeSignature: jest.fn(),
  }

  it("renders correctly in initial state", () => {
    render(<SignaturePanel {...mockProps} />)

    expect(screen.getByText("Firma Electrónica Avanzada")).toBeInTheDocument()
    expect(screen.getByText("Conforme a Ley 19.799")).toBeInTheDocument()
    expect(screen.getByText("Contrato de Portabilidad Financiera")).toBeInTheDocument()
    expect(screen.getByText("Crédito Hipotecario - Ley 21.236")).toBeInTheDocument()
    expect(screen.getByText("Completar firma")).toBeInTheDocument()
  })

  it("shows completion UI when signature is complete", () => {
    render(<SignaturePanel signatureComplete={true} completeSignature={mockProps.completeSignature} />)

    expect(screen.getByText("Firma completada exitosamente")).toBeInTheDocument()
    expect(screen.getByText("El documento ha sido firmado y registrado conforme a la Ley 19.799")).toBeInTheDocument()
  })

  it("calls completeSignature when button is clicked", () => {
    render(<SignaturePanel {...mockProps} />)

    fireEvent.click(screen.getByText("Completar firma"))
    expect(mockProps.completeSignature).toHaveBeenCalledTimes(1)
  })

  it("does not show the complete button when signature is complete", () => {
    render(<SignaturePanel signatureComplete={true} completeSignature={mockProps.completeSignature} />)

    expect(screen.queryByText("Completar firma")).not.toBeInTheDocument()
  })
})
