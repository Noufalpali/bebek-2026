import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../context/useAuth'

export default function GoogleButton({ label = 'Google' }) {
  const { signInWithGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = async () => {
    setError(null)
    setLoading(true)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-hairline bg-white px-5 py-3 font-text text-body font-semibold text-ink transition hover:bg-parchment disabled:pointer-events-none disabled:opacity-50"
      >
        <FcGoogle size={20} />
        {loading ? 'Mengalihkan...' : `Masuk dengan ${label}`}
      </button>
      {error && (
        <p className="mt-2 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 font-text text-caption text-red-600">
          <AlertCircle size={16} className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}
