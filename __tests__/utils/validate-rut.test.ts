import { validateRut } from "@/utils/validate-rut"
import { describe, it, expect } from "vitest"

describe("validateRut Utility", () => {
  it("validates correct RUTs", () => {
    expect(validateRut("12.345.678-5")).toBe(true)
    expect(validateRut("12345678-5")).toBe(true)
    expect(validateRut("123456785")).toBe(true)
  })

  it("invalidates incorrect RUTs", () => {
    expect(validateRut("12.345.678-9")).toBe(false)
    expect(validateRut("12345678-9")).toBe(false)
    expect(validateRut("123456789")).toBe(false)
  })

  it("handles RUTs with K as verification digit", () => {
    expect(validateRut("20.182.658-k")).toBe(true)
    expect(validateRut("20.182.658-K")).toBe(true)
    expect(validateRut("20182658k")).toBe(true)
    expect(validateRut("20182658K")).toBe(true)
  })

  it("handles edge cases", () => {
    expect(validateRut("")).toBe(false)
    expect(validateRut("not-a-rut")).toBe(false)
    expect(validateRut("1-9")).toBe(false)
  })
})
