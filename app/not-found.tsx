import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" className="text-primary hover:underline">
        Go back to homepage
      </Link>
    </div>
  )
}

