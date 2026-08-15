import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, AlertCircle } from 'lucide-react'
import { clubSchema } from '../schemas/clubSchema'

const inputClass =
  'font-text text-body w-full rounded-full border border-hairline bg-white px-5 py-3 text-ink placeholder:text-ink-48/60 outline-none transition focus:border-action-focus focus:ring-2 focus:ring-action-focus/25'

function FieldError({ message }) {
  if (!message) return null
  return (
    <p className="mt-2 flex items-center gap-1.5 font-text text-caption text-red-600">
      <AlertCircle size={14} className="shrink-0" />
      {message}
    </p>
  )
}

function ClubForm({ onAddClub }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(clubSchema),
    defaultValues: {
      strTeam: '',
      strStadium: '',
      intFormedYear: '',
      strBadge: '',
    },
  })

  const onSubmit = (data) => {
    onAddClub(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
      <div>
        <label htmlFor="strTeam" className="mb-2 block font-text text-caption-strong text-ink-80">
          Nama Klub *
        </label>
        <input
          id="strTeam"
          type="text"
          placeholder="Contoh: Manchester United"
          className={inputClass}
          {...register('strTeam')}
        />
        <FieldError message={errors.strTeam?.message} />
      </div>

      <div>
        <label htmlFor="strStadium" className="mb-2 block font-text text-caption-strong text-ink-80">
          Nama Stadion *
        </label>
        <input
          id="strStadium"
          type="text"
          placeholder="Contoh: Old Trafford"
          className={inputClass}
          {...register('strStadium')}
        />
        <FieldError message={errors.strStadium?.message} />
      </div>

      <div>
        <label htmlFor="intFormedYear" className="mb-2 block font-text text-caption-strong text-ink-80">
          Tahun Berdiri *
        </label>
        <input
          id="intFormedYear"
          type="text"
          inputMode="numeric"
          placeholder="Contoh: 1878"
          className={inputClass}
          {...register('intFormedYear')}
        />
        <FieldError message={errors.intFormedYear?.message} />
      </div>

      <div>
        <label htmlFor="strBadge" className="mb-2 block font-text text-caption-strong text-ink-80">
          URL Logo <span className="font-normal text-ink-48">(Opsional)</span>
        </label>
        <input
          id="strBadge"
          type="text"
          placeholder="https://logo-klub.png"
          className={inputClass}
          {...register('strBadge')}
        />
        <FieldError message={errors.strBadge?.message} />
      </div>

      <div className="flex sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:pointer-events-none disabled:opacity-50"
        >
          <Plus size={18} />
          Tambah Klub
        </button>
      </div>
    </form>
  )
}

export default ClubForm