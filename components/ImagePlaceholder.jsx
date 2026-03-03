export default function ImagePlaceholder({ filename, description, aspect = 'aspect-video', className = '' }) {
  return (
    <div className={`border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 flex flex-col items-center justify-center py-12 px-8 my-6 ${aspect} ${className}`}>
      <svg className="w-10 h-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 15-5-5L5 21" />
      </svg>
      <p className="text-xs font-mono text-gray-400 mb-1">{filename}</p>
      {description && <p className="text-xs text-gray-400 text-center max-w-xs">{description}</p>}
    </div>
  )
}
