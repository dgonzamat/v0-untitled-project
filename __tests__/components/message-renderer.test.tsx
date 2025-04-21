import { render, screen } from "@testing-library/react"
import { MessageRenderer } from "@/components/demo/message-renderer"

describe("MessageRenderer Component", () => {
  const mockMessages = [
    { id: "1", sender: "agent", content: "Hello, how can I help you?", timestamp: new Date().toISOString() },
    { id: "2", sender: "user", content: "I need information about insurance", timestamp: new Date().toISOString() },
  ]

  it("renders messages correctly", () => {
    render(<MessageRenderer messages={mockMessages} currentIndex={2} />)

    expect(screen.getByText("Hello, how can I help you?")).toBeInTheDocument()
    expect(screen.getByText("I need information about insurance")).toBeInTheDocument()
  })

  it("only renders messages up to currentIndex", () => {
    render(<MessageRenderer messages={mockMessages} currentIndex={1} />)

    expect(screen.getByText("Hello, how can I help you?")).toBeInTheDocument()
    expect(screen.queryByText("I need information about insurance")).not.toBeInTheDocument()
  })

  it("renders empty state when no messages", () => {
    render(<MessageRenderer messages={[]} currentIndex={0} />)

    // Check that the component renders without crashing
    expect(screen.queryByText("Hello, how can I help you?")).not.toBeInTheDocument()
  })

  it("renders agent and user messages with different styles", () => {
    const { container } = render(<MessageRenderer messages={mockMessages} currentIndex={2} />)

    // This is a simplified test. In a real scenario, you might want to check for specific classes
    // or styles that differentiate agent and user messages.
    const messageElements = container.querySelectorAll(".message-bubble")
    expect(messageElements.length).toBe(2)
  })
})
