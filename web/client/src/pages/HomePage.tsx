import { Camera } from 'lucide-react'

function HomePage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-20 text-center">
      <Camera className="h-12 w-12 text-slate-700" aria-hidden="true" />
      <h1 className="text-3xl font-semibold text-slate-900">ACS Capture</h1>
      <p className="text-slate-600">
        Photography studio platform. The website setup works!
      </p>
    </section>
  )
}

export default HomePage
