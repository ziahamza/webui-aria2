if (typeof translations == "undefined") {
  translations = {};
}

translations.id_ID = {
  // replace en_US to ll_CC, examples: zh_CN, de_AT.
  // header
  Search: "Telusuri",
  // Nav menu
  Add: "Tambah",
  "By URIs": "Dari URI",
  "By Torrents": "Dari Torrent",
  "By Metalinks": "Dari Metalink",
  Manage: "Kelola",
  "Pause All": "Jeda Semua",
  "Resume Paused": "Lanjut yang Dijeda",
  "Purge Completed": "Hapus yang Terunduh",
  "Shutdown Server": "Matikan Peladen",
  Settings: "Pengaturan",
  "Connection Settings": "Pengaturan Koneksi",
  "Global Settings": "Pengaturan Global",
  "Server info": "Info peladen",
  "About and contribute": "Tentang dan kontribusi",
  "Toggle navigation": "Alihkan navigasi",
  // body
  // nav side bar
  Miscellaneous: "Lain-lain",
  "Global Statistics": "Statistik Global",
  About: "Tentang",
  Displaying: "Tampilan",
  of: "dari",
  downloads: "unduhan",
  Language: "Bahasa",
  // download filters
  "Download Filters": "Saring Unduhan",
  Running: "Berjalan",
  Active: "Aktif",
  Waiting: "Menunggu",
  Complete: "Selesai",
  Error: "Galat",
  Paused: "Dijeda",
  Removed: "Dihapus",
  "Hide linked meta-data": "Sembunyikan tautan meta-data",
  Toggle: "Tombol alihan",
  "Reset filters": "Reset penyaring",
  // download status
  Verifying: "Memverifikasi",
  "Verify Pending": "Verifikasi Ditunda",
  // starred properties
  "Quick Access Settings": "Pengaturan Akses Cepat",
  Save: "Simpan",
  "Save settings": "Simpan pengaturan",
  "Currently no download in line to display, use the":
    "Sekarang tak ada unduhan yang ditampilkan, gunakan",
  "download button to start downloading files!": "tombol unduh untuk mulai mengunduh berkas!",
  Peers: "Peer",
  "More Info": "Info Lengkap",
  Remove: "Hapus",
  "# of": "# dari",
  Length: "Ukuran",
  // modals
  "Add Downloads By URIs": "Unduh dari URI",
  "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
    "- Anda dapat menambah banyak unduhan (berkas) sekali waktu dg menaruh URI setiap berkas dlm baris terpisah.",
  "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
    "- Anda juga dapat menambah banyak URI (cermin) untuk berkas yang *sama*. Pisahkan URI dengan spasi.",
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
    "- URI dapat berbentuk HTTP(S)/FTP/BitTorrent-Magnet.",
  "Download settings": "Pengaturan unduhan",
  "Advanced settings": "Pengaturan mahir",
  Cancel: "Batal",
  Start: "Mulai",
  Choose: "Pilih",
  "Quick Access (shown on the main page)": "Akses Cepat (terlihat di laman utama)",
  // add torrent modal
  "Add Downloads By Torrents": "Unduh dari Torrent",
  "- Select the torrent from the local filesystem to start the download.":
    "- Pilih torrent dari sistem berkas lokal untuk mulai mengunduh.",
  "- You can select multiple torrents to start multiple downloads.":
    "Anda dapat memilih banyak torrent untuk memulai multi unduh.",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
    "Untuk menambah BitTorrent-Magnet URL, pakai opsi Tambah dari URI dan tambahkan di situ.",
  "Select Torrents": "Pilih Torrent",
  "Select a Torrent": "Pilih Torrent",
  // add metalink modal
  "Add Downloads By Metalinks": "Unduh dari Metalink",
  "Select Metalinks": "Pilih Metalink",
  "- Select the Metalink from the local filesystem to start the download.":
    "- Pilih Metalink dari sistem berkas lokal untuk mulai mengunduh.",
  "- You can select multiple Metalinks to start multiple downloads.":
    "- Anda dapat memilih banyak Metalink untuk mulai multi unduh.",
  "Select a Metalink": "Pilih Metalink",
  // select file modal
  "Choose files to start download for": "Pilih berkas untuk mulai mengunduh",
  "Select to download": "Pilih untuk mengunduh",
  // settings modal
  "Aria2 RPC host and port": "Port dan host RPC Aria2",
  "Enter the host": "Masukkan host",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "Masukkan IP atau nama DNS peladen tempat RPC Aria2 berjalan (asali: localhost)",
  "Enter the port": "Masukkan porta",
  "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
    "Masukkan porta peladen tempat RPC Aria2 berjalan (asali: 6800)",
  "Enter the RPC path": "Masukkan path RPC",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
    "Masukkan path untuk endpoint RPC Aria2 (asali: /jsonrpc)",
  "SSL/TLS encryption": "Enkripsi SSL/TLS",
  "Enable SSL/TLS encryption": "Aktifkan enkripsi SSL/TLS",
  "Enter the secret token (optional)": "Masukkan token rahasia (opsional)",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
    "Masukkan token rahasia RPC Aria2 (kosongkan jika otentifikasi tidak aktif)",
  "Enter the username (optional)": "Masukkan username (opsional)",
  "Enter the Aria2 RPC username (empty if authentication not enabled)":
    "Masukkan username RPC Aria2 (kosongkan jika otentifikasi tidak aktif)",
  "Enter the password (optional)": "Masukkan kata sandi (opsional)",
  "Enter the Aria2 RPC password (empty if authentication not enabled)":
    "Masukkan kata sandi RPC Aria2 (kosongkan jika otentifikasi tidak aktif)",
  "Enter base URL (optional)": "Masukkan URL dasar (opsional)",
  "Direct Download": "Unduh Langsung",
  "If supplied, links will be created to enable direct download from the Aria2 server.":
    "Jika tersedia, tautan akan dibuat untuk mengaktifkan unduhan langsung dari peladen Aria2.",
  "(Requires appropriate webserver to be configured.)":
    "(Mewajibkan webserver yang perlu dikonfigurasi)",
  "Save Connection configuration": "Simpan konfigurasi Koneksi",
  Filter: "Saring",
  // server info modal
  "Aria2 server info": "Info peladen Aria2",
  "Aria2 Version": "Versi Aria2",
  "Features Enabled": "Fitur yang Aktif",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to":
    "Untuk mengunduh versi terkini proyek, tambahkan isu atau kontribusi balik ke",
  "Or you can open the latest version in the browser through":
    "Atau Anda dapat membuka versi terkini via peramban lewat",
  Close: "Tutup",
  // labels
  "Download status": "Status unduh",
  "Download Speed": "Kecepatan unduh",
  "Upload Speed": "Kecepatan unggah",
  "Estimated time": "Waktu estimasi",
  "Download Size": "Ukuran unduh",
  Downloaded: "Terunduh",
  Progress: "Proses",
  "Download Path": "Path unduh",
  Uploaded: "Terunggah",
  "Download GID": "GID unduh",
  "Number of Pieces": "Jumlah Bagian",
  "Piece Length": "Ukuran Bagian",

  //alerts
  "The last connection attempt was unsuccessful. Trying another configuration":
    "Usaha koneksi terakhir gagal. Coba konfigurasi lain",
  "Oh Snap!": "Oh Sial!",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "Tak dapat terkoneksi ke peladen RPC aria2. Akan diulang dalam 10 detik. Anda mungkin ingin menguji pengaturan koneksi melalui Pengaturan > Pengaturan Koneksi",
  "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
    "Otentifikasi gagal saat membuka koneksi ke peladen RPC Aria2. Akan diulang dalam 10 detik. Anda mungkin ingin mengonfirmasi detail otentifikasi di Pengaturan > Pengaturan Koneksi",
  "Successfully connected to Aria2 through its remote RPC …":
    "Sukses terkoneksi ke Aria2 melalui remot RPC …",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "Sukses terkoneksi ke Aria2 melalui remot RPC, bagaimanapun koneksi masih tidak aman. Untuk melengkapi keamanan coba tambahkan token rahasia otorisasi saat memulai Aria2 (lewat flag --rpc-secret)",
  "Trying to connect to aria2 using the new connection configuration":
    "Mencoba koneksi ke aria2 menggunakan konfigurasi koneksi baru",
  // {{name}} refers to the download name, do not modify.
  "Remove {{name}} and associated meta-data?": "Hapus {{name}} dan meta-data yang berhubungan?"
};
