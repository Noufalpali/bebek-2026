import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ClubForm from './components/ClubForm'
import ClubList from './components/ClubList'

function App() {
  const [clubs, setClubs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)
  const formRef = useRef(null)

  useEffect(() => {
    const fetchClubs = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(import.meta.env.VITE_API_URL)
        if (!response.ok) {
          throw new Error(`Permintaan gagal (HTTP ${response.status})`)
        }
        const data = await response.json()
        setClubs(data.teams ?? [])
      } catch (err) {
        setError(err.message || 'Terjadi kesalahan yang tidak diketahui')
      } finally {
        setLoading(false)
      }
    }

    fetchClubs()
  }, [reloadKey])

  const handleAddClub = (club) => {
    setClubs((prevClubs) => [club, ...prevClubs])
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <Header clubCount={clubs.length} onAddClub={scrollToForm} />

      <main>
        <section
          ref={formRef}
          className="scroll-mt-28 border-b border-black/5 bg-white py-12 sm:py-16"
        >
          <div className="mx-auto w-full max-w-6xl px-4">
            <h2 className="font-text text-display-md text-ink">Tambah Klub Sepak Bola Baru</h2>
            <p className="mt-3 max-w-2xl font-text text-body text-ink-48">
              Lengkapi data klub baru di bawah ini. Setelah berhasil disimpan, klub akan langsung
              muncul di bagian atas daftar.
            </p>
            <div className="mt-8">
              <ClubForm onAddClub={handleAddClub} />
            </div>
          </div>
        </section>

        <ClubList
          clubs={clubs}
          loading={loading}
          error={error}
          onRetry={() => setReloadKey((key) => key + 1)}
        />
      </main>

      <Footer onAddClub={scrollToForm} />
    </div>
  )
}

export default App