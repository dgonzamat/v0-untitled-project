interface LogoCloudProps {
  title?: string
}

export function LogoCloud({ title }: LogoCloudProps) {
  return (
    <div className="mt-12">
      {title && <h3 className="text-center text-base font-medium mb-8">{title}</h3>}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-6 w-20 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  )
}
