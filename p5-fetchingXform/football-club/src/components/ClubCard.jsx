import { useState } from 'react'
import { Shield, MapPin } from 'lucide-react'

function ClubCard({ club }) {
  const [imgFailed, setImgFailed] = useState(false)

  const hasBadge = club.strBadge && !imgFailed
  const teamName = club.strTeam || 'Klub Tanpa Nama'
  const stadium = club.strStadium || 'Tidak diketahui'
  const formedYear = club.intFormedYear ? `Tahun ${club.intFormedYear}` : null

  return (
    <article className="group flex flex-col rounded-[18px] border border-hairline bg-white p-6 transition hover:border-action-focus/50">
      <div className="flex items-center gap-5">
        <div className="flex aspect-square w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-hairline bg-parchment p-1.5 shadow-product">
          {hasBadge ? (
            <img
              src={club.strBadge}
              alt={`Logo ${teamName}`}
              onError={() => setImgFailed(true)}
              className="size-full object-contain"
            />
          ) : (
            <Shield size={36} className="text-ink-48" aria-hidden />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="font-text text-body-strong truncate text-ink">{teamName}</h3>
          {formedYear ? (
            <span className="mt-2 inline-block rounded-full border border-hairline bg-pearl px-3 py-1 font-text text-caption text-ink-80">
              {formedYear}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-hairline pt-4 font-text text-body text-ink-48">
        <MapPin size={17} className="shrink-0 text-action" />
        <span className="truncate">{stadium}</span>
      </div>
    </article>
  )
}

export default ClubCard