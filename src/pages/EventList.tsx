
const EventList = () => {
  const events = [
    { id: 1, title: "Seminar AI", date: "2025-06-10", location: "Aula Kampus" },
    { id: 2, title: "Workshop UI/UX", date: "2025-06-15", location: "Lab Multimedia" },
  ];

  return (
    <div className="relative p-6">
      {/* Tombol tambah */}
      <button
        className="absolute top-6 right-6 w-10 h-10 bg-sky-600 hover:bg-sky-700 text-white text-xl font-bold rounded-md shadow-md flex items-center justify-center"
        title="Tambah Event"
      >
        +
      </button>

      <h2 className="text-2xl font-bold mb-4 text-sky-700">Daftar Event</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-500">Tanggal: {event.date}</p>
            <p className="text-gray-500">Lokasi: {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;