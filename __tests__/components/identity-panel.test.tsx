import { render, screen, fireEvent } from "@testing-library/react"
import { IdentityPanel } from "@/components/demo/identity-panel"

describe("IdentityPanel Component", () => {
  const mockProps = {
    faceScanComplete: false,
    scanProgress: 0,
    faceDetected: false,
    startFaceScan: jest.fn(),
    completeIdentity: jest.fn(),
  }

  it("renders correctly in initial state", () => {
    render(<IdentityPanel {...mockProps} />)

    expect(screen.getByText("Verificación de Identidad")).toBeInTheDocument()
    expect(screen.getByText("Reconocimiento Facial")).toBeInTheDocument()
    expect(screen.getByText("Verificación Biométrica")).toBeInTheDocument()
    expect(screen.getByText("Iniciar verificación")).toBeInTheDocument()
    expect(screen.getByText("Mire directamente a la cámara para iniciar el reconocimiento facial.")).toBeInTheDocument()
  })

  it("shows scanning UI when face is detected", () => {
    render(<IdentityPanel {...mockProps} faceDetected={true} scanProgress={30} />)

    expect(screen.getByText("Escaneando...")).toBeInTheDocument()
    expect(screen.getByText("Escaneando rasgos faciales...")).toBeInTheDocument()
    expect(screen.getByText("Progreso: 30%")).toBeInTheDocument()
  })

  it("shows completion UI when face scan is complete", () => {
    render(<IdentityPanel {...mockProps} faceScanComplete={true} />)

    expect(screen.getByText("Identidad verificada exitosamente")).toBeInTheDocument()
    expect(screen.getByText("Continuar")).toBeInTheDocument()
    expect(
      screen.getByText("Su identidad ha sido verificada conforme a los estándares de seguridad requeridos."),
    ).toBeInTheDocument()
  })

  it("calls startFaceScan when button is clicked", () => {
    render(<IdentityPanel {...mockProps} />)

    fireEvent.click(screen.getByText("Iniciar verificación"))
    expect(mockProps.startFaceScan).toHaveBeenCalledTimes(1)
  })

  it("calls completeIdentity when continue button is clicked", () => {
    render(<IdentityPanel {...mockProps} faceScanComplete={true} />)

    fireEvent.click(screen.getByText("Continuar"))
    expect(mockProps.completeIdentity).toHaveBeenCalledTimes(1)
  })

  it("disables start button when face is detected", () => {
    render(<IdentityPanel {...mockProps} faceDetected={true} />)

    const button = screen.getByText("Escaneando...")
    expect(button).toBeDisabled()
  })
})
