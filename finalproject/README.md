# Final Project: Build What Matters

**Final Project | Web Programming Class | HMIF UNSRI 2026**

---

## Tema Project

Project yang dibangun **wajib menyelesaikan masalah**. Peserta harus bisa menjelaskan dengan jelas:

1. **Masalah apa** yang ingin diselesaikan, untuk siapa, dan kenapa masalah itu penting.
2. **Solusi seperti apa** yang ditawarkan website, dan bagaimana solusi itu menyelesaikan masalah tersebut.

Project tidak boleh hanya berupa CRUD atau website yang dibuat tanpa alasan yang jelas. Peserta bebas memilih tema apa pun, selama ada masalah yang jelas dan solusi yang masuk akal.

Contoh solusi yang kuat: platform donasi seperti Saweria atau Kitabisa, tetapi dengan tambahan fitur yang belum dimiliki platform serupa, misalnya fitur filter anti promosi judi online.

---

## Pengajuan Tema

- Semua peserta wajib mengisi tema, deskripsi project, dan alasan membangun project tersebut di spreadsheet pengajuan tema.
- Tema antar peserta tidak boleh sama atau terlalu mirip.
- Tema yang diajukan dapat ditolak jika dinilai tidak memenuhi kriteria (masalah tidak jelas, tujuan tidak kuat, konteks terlalu sederhana, dsb).
- Pengajuan tema dilakukan paling lambat pada Progress Report 1.

---

## Tech Stack

### Wajib

| Teknologi | Fungsi |
|---|---|
| React | Frontend framework |
| Tailwind CSS | Styling |
| Supabase | Backend utama (autentikasi, database, API) |

### Library Pendukung (diperbolehkan)

- `react-router-dom` untuk routing
- React Hook Form + Zod untuk form management dan validasi
- `react-icons` / `lucide-react` untuk ikon
- Library React lainnya sesuai kebutuhan

### Service/Provider Tambahan (diperbolehkan)

Penggunaan service atau provider tambahan diperbolehkan sebagai fitur pendukung selama tidak menggantikan fungsi utama Supabase sebagai backend. Contoh: Gemini API untuk chatbot, WebSocket untuk fitur realtime, public API lainnya untuk data tambahan.

---

## Ketentuan Teknis Website

- **Sistem Autentikasi:** Website harus memiliki fitur register dan login menggunakan Supabase Auth, serta logout dan manajemen sesi.
- **Landing Page:** Website wajib memiliki halaman utama yang menjelaskan website beserta Call-to-Action (CTA) yang jelas.
- **Multi-Page dengan Routing:** Website memiliki lebih dari 1 halaman dan menerapkan routing menggunakan React Router. Wajib ada halaman 404.
- **Operasi CRUD:** Setiap data utama di aplikasi harus bisa ditambah, dilihat, diubah, dan dihapus, minimal menggunakan Supabase.
- **Database dengan Tabel yang Saling Berhubungan:** Database tidak boleh hanya terdiri dari satu tabel. Tabel-tabel harus saling berhubungan sesuai konteks aplikasi. Contoh: tabel `users` terhubung ke tabel `orders`, dan tabel `orders` terhubung ke tabel `products`.
- **Role-Based Authorization:** Minimal 2 role pengguna (misal: admin dan user biasa), masing-masing memiliki hak akses berbeda baik dari segi halaman maupun aksi yang bisa dilakukan.
- **Minimal 3-4 Tabel:** Di luar tabel autentikasi bawaan Supabase, database harus memiliki minimal 3-4 tabel dengan masing-masing memiliki operasi CRUD. Selain CRUD standar, harus ada operasi tambahan sesuai kebutuhan sistem (contoh: pencarian, filter kategori, proses persetujuan, pengurutan berdasarkan kriteria tertentu, dsb).
- **Responsive:** Website tampil dan berfungsi dengan baik di berbagai ukuran layar.
- **Row Level Security (RLS):** Setiap tabel wajib mengaktifkan RLS beserta policy-nya.

---

## Cakupan Materi Pembelajaran (Pertemuan 1-7)

Project wajib menerapkan seluruh materi pertemuan 1-7. Setiap poin di bawah ini harus benar-benar terpakai di dalam kode.

### P1 - Version Control (Git & GitHub)
- [ ] Project dikelola dengan Git (repo GitHub).
- [ ] Riwayat commit rapi, memakai Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).
- [ ] Ada file `.gitignore` (`node_modules`, `dist`, `.env.local` tidak ikut di-commit).

### P2 - Tailwind CSS & JavaScript ES6+
- [ ] Seluruh UI di-styling dengan Tailwind CSS dan responsive (mobile & desktop).
- [ ] Memakai: `let`/`const`, arrow function, template literal, destructuring, spread/rest, default parameter, array methods (`map`, `filter`, `find`, dsb.), module import/export, dan `async`/`await`.

### P3 - React Dasar
- [ ] Project dibuat dengan Vite (React + JSX).
- [ ] Memakai komponen, props, `useState`, dan event handling.
- [ ] Rendering list dengan `.map()` + `key`, serta conditional rendering (loading / error / empty / data).
- [ ] Struktur folder rapi (`components/`, `pages/`, `lib/`, `schemas/`, dsb.).

### P4 - React Router DOM
- [ ] Routing memakai `BrowserRouter`, `Routes`, `Route`.
- [ ] Minimal 3 halaman berbeda + halaman 404 (`path="*"`).
- [ ] Navigasi memakai `<Link>` / `<NavLink>` (bukan reload halaman).
- [ ] Memakai `useNavigate` / `useParams` / nested route bila diperlukan.

### P5 - Fetching API & Form
- [ ] Fetch data dengan `fetch` + `async`/`await` di dalam `useEffect`.
- [ ] State `loading`, `error`, dan empty state ditangani.
- [ ] Ada tombol "Coba Lagi" saat gagal fetch.
- [ ] URL API disimpan di `.env.local` (`import.meta.env.VITE_...`).
- [ ] Form memakai React Hook Form + validasi Zod (`zodResolver`), error per field, tombol disable saat `isSubmitting`, dan reset setelah sukses.

### P6 - Supabase CRUD
- [ ] Supabase client dibuat sekali di `src/lib/supabaseClient.js` (`createClient`).
- [ ] Operasi CRUD lengkap: `select`, `insert().select().single()`, `update().eq('id', id)`, `delete().eq('id', id)`.
- [ ] Menangani hasil `{ data, error }` dari Supabase dengan benar.
- [ ] Skema tabel (DDL SQL) didokumentasikan.

### P7 - Supabase Auth & Proteksi Path
- [ ] Sign up, login, dan logout berfungsi.
- [ ] State sesi dikelola di satu tempat (Context: `AuthProvider` + `useAuth`).
- [ ] Sesi dipulihkan saat refresh (`getSession`) dan dipantau (`onAuthStateChange`) + `unsubscribe`.
- [ ] Path CRUD diproteksi (`ProtectedRoute`), halaman login/signup diarahkan ke home jika sudah login (`PublicOnlyRoute`).
- [ ] Setelah login, user kembali ke halaman yang tadi dituju.
- [ ] RLS policy dibatasi ke role `authenticated`; hanya memakai anon/publishable key di frontend.

---

## Ketentuan Pengerjaan

- Project disimpan di repository GitHub dengan nama sesuai project/produk yang dibuat (boleh membuat nama produk sendiri). Berikan deskripsi project yang jelas di halaman repository.
- Repository wajib di-**private**. Invite akun GitHub ak7prisma sebagai collaborator.
- Menerapkan **conventional commit message**. Contoh: `feat: add login page`, `fix: resolve routing issue`, `refactor: extract auth logic to custom hook`.
- Menerapkan **atomic commit** (satu commit berisi satu perubahan/logical unit yang jelas). Pastikan semua commit berasal dari akun GitHub sendiri. Tidak boleh ada akun GitHub lain atau agent AI yang tercatat di history commit.
- Membuat dokumentasi **README.md** yang jelas, mencakup: penjelasan project dan fitur, cara menjalankan project (sedetail dan sejelas mungkin), serta flow/alur penggunaan website.
- Wajib **deploy** ke Vercel atau provider hosting lain. Jika project memiliki service tambahan yang berjalan secara lokal dan tidak bisa di-deploy, bagian tersebut tidak wajib di-deploy, tapi frontend React tetap harus di-deploy.
- Kredensial dimasukkan ke file `.env` dan tidak di-commit. Buatkan file **`.env.example`** sebagai referensi.
- Tidak boleh melakukan commit setelah **deadline pengumpulan**, kecuali untuk perbaikan minor (typo, bug kecil, penyesuaian UI ringan).
- Progress Report 1 wajib ada progres (penentuan tema). Progress Report 2 sampai 3 tidak harus selalu ada progres, asalkan project selesai tepat waktu.
- Membuat **slide presentasi** (PPT/PDF) dengan waktu presentasi 10-15 menit per peserta secara offline/online sesuai kesepakatan. Materi: overview project (masalah dan solusi), tech stack, arsitektur sistem, penjelasan source code penting, dan demo website.

---

## Timeline

| Kegiatan | Tanggal |
|---|---|
| Briefing dan Mulai Pengerjaan | 11 Oktober 2026 |
| Progress Report 1 (Brainstorming dan Breakdown Ide Project) | 17 - 18 Oktober 2026 |
| Progress Report 2 | 24 - 25 Oktober 2026 |
| Progress Report 3 | 7 Oktober - 8 November 2026 |
| Pengumpulan / Last Commit |  11  November 2026 |
| Presentasi Final Project (Offline) | 14/15 November 2026 |

> Note: Jadwal progress report bersifat flexible.

---

## Rubrik Penilaian

### Penilaian Umum

| Kriteria | Deskripsi |
|---|---|
| Tema | Penemuan masalah dan kreativitas ide dalam menentukan tema |
| Impact dan Solusi | Apakah website yang dibangun benar-benar solutif atau sekadar asal pilih tema |
| Komunikasi | Keaktifan komunikasi selama masa pengerjaan |
| Presentasi | Penguasaan materi dan kualitas penyampaian saat presentasi |
| Kesesuaian dengan Rencana | Hasil akhir sesuai rencana awal. Perubahan diperbolehkan selama dikomunikasikan |
| Dokumentasi | Kelengkapan dan kejelasan README project |

### Penilaian Teknis

| Kriteria | Deskripsi |
|---|---|
| UI/UX Design | Kualitas desain antarmuka dan pengalaman pengguna. Minimal tampilan website harus bagus dan dibuat dengan serius |
| Best Practice | Kualitas penulisan kode. Contoh: tidak props drilling, penggunaan custom hooks untuk logika reusable, penamaan variabel/fungsi yang deskriptif, pemisahan komponen yang tepat, penanganan loading state dan error |
| Arsitektur Kode | Struktur folder dan organisasi file yang rapi, konsisten, dan mudah dipahami |
| Responsive | Website tampil dan berfungsi dengan baik di berbagai ukuran layar |
| Kematangan Fitur | Kualitas dan kematangan implementasi fitur sesuai tema dan kebutuhan pengguna. Tidak hanya memastikan fitur berjalan, tetapi juga memperhatikan alur penggunaan, validasi, dan kondisi yang mungkin terjadi dalam penggunaan nyata |
| Commit History | Penerapan conventional commit message dan atomic commit secara konsisten |
| Prioritas Materi Pembelajaran | Penilaian berpusat pada implementasi materi pertemuan 1-7. Implementasi di luar materi tersebut menjadi nilai tambahan (penilaian tetap dibuat seimbang) |