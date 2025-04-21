interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  image?: string
}

export function TestimonialCard({ quote, author, role, company, rating, image }: TestimonialCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-100 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          <img
            src={image || "/placeholder.svg?height=100&width=100&query=person"}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-600">
            {role}, {company}
          </p>
        </div>
      </div>

      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={i < rating ? "text-yellow-500" : "text-gray-300"}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <blockquote className="text-gray-700 text-sm italic">"{quote}"</blockquote>
    </div>
  )
}
