import { renderHook, act } from "@testing-library/react"
import { useIdentityVerification } from "@/hooks/use-identity-verification"

describe("useIdentityVerification Hook", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it("initializes with default values", () => {
    const { result } = renderHook(() => useIdentityVerification())

    expect(result.current.identityVerified).toBe(false)
    expect(result.current.currentIdentityStep).toBe(1)
    expect(result.current.faceScanComplete).toBe(false)
    expect(result.current.fingerprintScanComplete).toBe(false)
    expect(result.current.faceDetected).toBe(false)
    expect(result.current.scanProgress).toBe(0)
  })

  it("starts face scan correctly", () => {
    const { result } = renderHook(() => useIdentityVerification())

    act(() => {
      result.current.startFaceScan()
    })

    expect(result.current.faceDetected).toBe(true)

    // Fast-forward timer to simulate progress
    act(() => {
      jest.advanceTimersByTime(200)
    })

    expect(result.current.scanProgress).toBe(10)

    // Complete the scan
    act(() => {
      jest.advanceTimersByTime(2000) // 10 intervals of 200ms
    })

    expect(result.current.scanProgress).toBe(100)
    expect(result.current.faceScanComplete).toBe(true)
  })

  it("starts fingerprint scan correctly", () => {
    const { result } = renderHook(() => useIdentityVerification())

    act(() => {
      result.current.startFingerprintScan()
    })

    expect(result.current.fingerprintScanComplete).toBe(true)
  })

  it("completes identity verification correctly", () => {
    const { result } = renderHook(() => useIdentityVerification())

    act(() => {
      result.current.completeIdentity()
    })

    expect(result.current.identityVerified).toBe(true)
  })

  it("resets identity verification correctly", () => {
    const { result } = renderHook(() => useIdentityVerification())

    // Set some values first
    act(() => {
      result.current.startFaceScan()
      result.current.startFingerprintScan()
      result.current.completeIdentity()
    })

    // Then reset
    act(() => {
      result.current.resetIdentity()
    })

    expect(result.current.identityVerified).toBe(false)
    expect(result.current.currentIdentityStep).toBe(1)
    expect(result.current.faceScanComplete).toBe(false)
    expect(result.current.fingerprintScanComplete).toBe(false)
    expect(result.current.faceDetected).toBe(false)
    expect(result.current.scanProgress).toBe(0)
  })
})
