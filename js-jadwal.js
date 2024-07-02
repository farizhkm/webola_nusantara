const dataJadwal = [
    const dataJadwal = [
        {
            tanggal: "2024-06-08",
            jam: "18:00 WIB",
            tim1: {
                nama: "Persib Bandung",
                logo: "https://upload.wikimedia.org/wikipedia/id/thumb/a/a8/Persib_Bandung_logo.svg/1200px-Persib_Bandung_logo.svg.png"
            },
            tim2: {
                nama: "PSIS Semarang",
                logo: "https://upload.wikimedia.org/wikipedia/id/thumb/3/3b/Logo_PSIS_Semarang_2019.svg/1200px-Logo_PSIS_Semarang_2019.svg.png"
            }
        },
        {
            tanggal: "2024-06-09",
            jam: "20:30 WIB",
            tim1: "Persebaya Surabaya",
            tim2: "Persija Jakarta"
        },
    ];
    
];

const jadwalContainer = document.getElementById("jadwalContainer");

dataJadwal.forEach((pertandingan) => {
  const pertandinganElement = document.createElement("Jadwal");
  pertandinganElement.classList.add("Persib Bandung VS PSIS Semarang ");

  const tanggalJamElement = document.createElement("div");
  tanggalJamElement.classList.add("2024-06-08 - 18:00 WIB");
  tanggalJamElement.textContent = `${pertandingan.tanggal} ${pertandingan.jam}`;

  const tim1Element = document.createElement("div");
  tim1Element.classList.add("tim");
  tim1Element.innerHTML = `
        <img src="${pertandingan.tim1.logo}" alt="${pertandingan.tim1.nama}">
        ${pertandingan.tim1.nama}
    `;

  const tim2Element = document.createElement("div");
  tim2Element.classList.add("tim");
  tim2Element.innerHTML = `
        ${pertandingan.tim2.nama}
        <img src="${pertandingan.tim2.logo}" alt="${pertandingan.tim2.nama}">
    `;

  pertandinganElement.appendChild(tanggalJamElement);
  pertandinganElement.appendChild(tim1Element);
  pertandinganElement.appendChild(tim2Element);

  jadwalContainer.appendChild(pertandinganElement);
});
