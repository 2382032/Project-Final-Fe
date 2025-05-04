
const CertificateDistribution = () => {
  const certificates = [
    { id: 1, name: "Misael Hendrikh", event: "Seminar AI", link: "/sertifikat/misael.pdf" },
    { id: 2, name: "Anisa Putri", event: "Workshop UI/UX", link: "/sertifikat/anisa.pdf" },
  ];

  return (
    <div className="relative p-6">
      {/* Tombol tambah */}
      <button
        className="absolute top-6 right-6 w-10 h-10 bg-sky-600 hover:bg-sky-700 text-white text-xl font-bold rounded-md shadow-md flex items-center justify-center"
        title="Tambah Sertifikat"
      >
        +
      </button>

      <h2 className="text-2xl font-bold mb-4 text-sky-700">Distribusi Sertifikat</h2>
      <div className="space-y-4">
        {certificates.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center hover:shadow-lg transition">
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.event}</p>
            </div>
            <a
              href={c.link}
              download
              className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateDistribution;