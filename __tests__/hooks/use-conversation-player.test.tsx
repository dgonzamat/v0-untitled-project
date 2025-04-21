import { renderHook, act } from "@testing-library/react"
import { useConversationPlayer } from "@/hooks/use-conversation-player"

describe("useConversationPlayer Hook", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const mockConversation = [
    { id: "1", sender: "agent", content: "Hello", timestamp: new Date().toISOString() },
    { id: "2", sender: "user", content: "Hi", timestamp: new Date().toISOString() },
    { id: "3", sender: "agent", content: "How can I help?", timestamp: new Date().toISOString() },
  ]

  it("initializes with default values", () => {
    const { result } = renderHook(() => useConversationPlayer(mockConversation))

    expect(result.current.currentIndex).toBe(0)
    expect(result.current.isPlaying).toBe(false)
    expect(result.current.isComplete).toBe(false)
  })

  it("plays conversation correctly", () => {
    const { result } = renderHook(() => useConversationPlayer(mockConversation))

    act(() => {
      result.current.play()
    })

    expect(result.current.isPlaying).toBe(true)

    // Fast-forward timer to advance the conversation
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.currentIndex).toBe(1)

    // Complete the conversation
    act(() => {
      jest.advanceTimersByTime(2000) // 2 more messages at 1000ms each
    })

    expect(result.current.currentIndex).toBe(3)
    expect(result.current.isComplete).toBe(true)
    expect(result.current.isPlaying).toBe(false)
  })

  it("pauses conversation correctly", () => {
    const { result } = renderHook(() => useConversationPlayer(mockConversation))

    // Start playing
    act(() => {
      result.current.play()
    })

    expect(result.current.isPlaying).toBe(true)

    // Advance one message
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.currentIndex).toBe(1)

    // Pause
    act(() => {
      result.current.pause()
    })

    expect(result.current.isPlaying).toBe(false)

    // Make sure index doesn't advance after pausing
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.currentIndex).toBe(1)
  })

  it("resets conversation correctly", () => {
    const { result } = renderHook(() => useConversationPlayer(mockConversation))

    // Play and advance
    act(() => {
      result.current.play()
      jest.advanceTimersByTime(2000) // Advance 2 messages
    })

    expect(result.current.currentIndex).toBe(2)

    // Reset
    act(() => {
      result.current.reset()
    })

    expect(result.current.currentIndex).toBe(0)
    expect(result.current.isPlaying).toBe(false)
    expect(result.current.isComplete).toBe(false)
  })

  it("toggles play/pause correctly", () => {
    const { result } = renderHook(() => useConversationPlayer(mockConversation))

    // Toggle to play
    act(() => {
      result.current.togglePlay()
    })

    expect(result.current.isPlaying).toBe(true)

    // Toggle to pause
    act(() => {
      result.current.togglePlay()
    })

    expect(result.current.isPlaying).toBe(false)
  })
})
