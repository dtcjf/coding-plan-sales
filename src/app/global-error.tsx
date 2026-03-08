'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            出错了
          </h2>
          <p className="text-gray-600 mb-6">
            页面加载时发生错误
          </p>
          <button
            onClick={reset}
            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            重试
          </button>
        </div>
      </body>
    </html>
  )
}
