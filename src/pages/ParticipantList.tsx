
const ParticipantList = () => {
  const participants = [
    { id: 1, name: "Misael Hendrikh", event: "Seminar AI" },
    { id: 2, name: "Anisa Putri", event: "Workshop UI/UX" },
  ];

  return (
    <div className="relative p-6">
      {/* Tombol Tambah di pojok kanan atas */}
      <button
        className="absolute top-6 right-6 w-10 h-10 bg-sky-600 hover:bg-sky-700 text-white text-xl font-bold rounded-md shadow-md flex items-center justify-center"
        title="Tambah Event"
      >
        +
      </button>

      <h2 className="text-2xl font-bold mb-4 text-sky-700">Daftar Peserta</h2>

      <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
        <thead>
          <tr className="bg-sky-100 text-left">
            <th className="p-3">Nama</th>
            <th className="p-3">Event</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((p) => (
            <tr key={p.id} className="border-t hover:bg-sky-50">
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantList;