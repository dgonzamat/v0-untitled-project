import { renderHook, act } from "@testing-library/react"
import { useDigitalSignature } from "@/hooks/use-digital-signature"

describe("useDigitalSignature Hook", () => {
  it("initializes with default values", () => {
    const { result } = renderHook(() => useDigitalSignature())

    expect(result.current.signatureComplete).toBe(false)
  })

  it("completes signature correctly", () => {
    const { result } = renderHook(() => useDigitalSignature())

    act(() => {
      result.current.completeSignature()
    })

    expect(result.current.signatureComplete).toBe(true)
  })

  it("resets signature correctly", () => {
    const { result } = renderHook(() => useDigitalSignature())

    // Complete signature first
    act(() => {
      result.current.completeSignature()
    })

    // Then reset
    act(() => {
      result.current.resetSignature()
    })

    expect(result.current.signatureComplete).toBe(false)
  })
})
