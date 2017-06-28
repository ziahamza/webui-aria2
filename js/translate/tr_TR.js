if(typeof translations == 'undefined'){
    translations = {};
}

translations.tr_TR = {
// header
    'Search': 'Arama',
    // Nav menu
    'Add': 'Ekle',
    'By URIs': 'URI ile',
    'By Torrents': 'Torrent ile',
    'By Metalinks': 'Metalink ile',
    'Manage': 'Yönet',
    'Pause All': 'Hepsini Duraklat',
    'Resume Paused': 'Devam Et',
    'Purge Completed': 'Temizleme Tamamlandı',
    'Settings': 'Ayarlar',
    'Connection Settings': 'Bağlantı Ayarları',
    'Global Settings': 'Genel Ayarlar',
    'Server info': 'Sunucu bilgisi',
    'About and contribute': 'Hakkında ve katkıda bulunanlar',
    'Toggle navigation': 'Gezinmeyi aç / kapat',
// body
// nav side bar
    'Miscellaneous': 'Çeşitli',
    'Global Statistics': 'Genel İstatistikler',
    'About': 'Hakkında',
    'Displaying': 'Gösteriliyor',
    'of': ' / ',
    'downloads': 'Indirme',
    'Language': 'Dil',
// download filters
    'Download Filters': 'İndirme Filtreleri',
    'Running': 'Çalışıyor',
    'Active': 'Aktif',
    'Waiting': 'Bekliyor',
    'Complete': 'Tamamlandı',
    'Error': 'Hata',
    'Paused': 'Duraklatıldı',
    'Removed': 'Silindi',
    'Hide linked meta-data': 'Bağlı meta verileri gizle',
    'Toggle': 'aç/kapat',
    'Reset filters': 'Filtreleri sıfırla',
// starred properties
    'Quick Access Settings': 'Hızlı Erişim Ayarları',
    'Save settings': 'Ayarları kaydet',
    'Currently no download in line to display, use the': 'Şu anda görüntülenebilecek bir indirme yok,',
    'download button to start downloading files!': 'butonu aracılığı ile dosya indirebilirsiniz!',
    'Peers': 'Peers',
    'More Info': 'Daha fazla bilgi',
    'Remove': 'Kaldır',
    '# of': '# dan',
    'Length': 'Uzunluk',
// modals
    'Add Downloads By URIs': 'URI kullanarak indirmelere ekle',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- Ayrı bir satıra her dosya için URI koyarak aynı anda birden fazla dosya indirebilirsiniz.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- Aynı dosyalar için birden fazla URI (ayna) da ekleyebilirsiniz. Bunu yapmak için URIları bir boşlukla ayırın.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- Bir URI, HTTP(S)/FTP/BitTorrent-Magnet olabilir.',
    'Download settings': 'İndirme ayarları',
    'Advanced settings': 'Gelişmiş Ayarlar',
    'Cancel': 'İptal et',
    'Start': 'Başlat',
    'Choose': 'Seçiniz',
    'Quick Access (shown on the main page)': 'Hızlı Erişim (ana sayfada gösterilir)',
// add torrent modal
    'Add Downloads By Torrents': 'Torrent kullanarak indirmelere ekle',
    '- Select the torrent from the local filesystem to start the download.': '- İndirmeyi başlatmak için yerel dosya sisteminden torrenti seçin.',
    '- You can select multiple torrents to start multiple downloads.': '- Birden çok indirmeyi başlatmak için birden çok torrent seçebilirsiniz.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- BitTorrent-Magnetli bir URL eklemek için, İstek Üzerine Ekle seçeneğini kullanın ve oraya ekleyin.',
    'Select Torrents': 'Torrentleri seçin',
    'Select a Torrent': 'Bir Torrent seçin',
// add metalink modal
    'Add Downloads By Metalinks': 'Metalink kullanarak indirmelere ekle',
    'Select Metalinks': 'Metalinkleri seçin',
    '- Select the Metalink from the local filesystem to start the download.': '- İndirmeyi başlatmak için yerel dosya sisteminden Metalinki seçin.',
    '- You can select multiple Metalinks to start multiple downloads.': '- Birden fazla yüklemeye başlamak için birden fazla Metalink seçebilirsiniz.',
    'Select a Metalink': 'Bir Metalink Seç',
// select file modal
    'Choose files to start download for': 'Için indirmeye başlamak için dosyaları seçin',
    'Select to download': 'Indirmek için seçin',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC ana bilgisayar ve bağlantı noktası',
    'Enter the host': 'Ana bilgisayar(host) girin',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Aria2 için RPC\'nin çalıştığı sunucunun IP veya DNS adını girin (varsayılan: localhost)',
    'Enter the port': 'Bağlantı noktasını gir',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Aria2 için RPC\'nin çalıştığı sunucunun bağlantı noktasını girin (varsayılan: 6800)',
    'Enter the RPC path': 'RPC yolunu girin',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Aria2 RPC bitiş noktası için yolu girin (varsayılan: / jsonrpc)',
    'SSL/TLS encryption': 'SSL / TLS şifreleme',
    'Enable SSL/TLS encryption': 'SSL / TLS şifrelemeyi etkinleştir',
    'Enter the secret token (optional)': 'Gizli simge girin (isteğe bağlı)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Aria2 RPC gizli simgesini girin (kimlik doğrulama etkin değilse boş bırakın)',
    'Enter the username (optional)': 'Kullanıcı adını girin (isteğe bağlı)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Aria2 RPC kullanıcı adını girin (kimlik doğrulama etkin değilse boş bırakın)',
    'Enter the password (optional)': 'Parolayı girin (isteğe bağlı)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Aria2 RPC şifresini girin (kimlik doğrulama etkin değilse boş bırakın)',
    'Enter base URL (optional)': 'Temel URL\'yi girin (isteğe bağlı)',
    'Direct Download': 'Direkt indirme',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'Verilen, bağlantıları aria2 sunucudan doğrudan indirmeyi etkinleştirmek için oluşturulur.',
    '(Requires appropriate webserver to be configured.)': '(Uygun web sunucusunun yapılandırılmasını gerektirir.)',
    'Save Connection configuration': 'Bağlantı yapılandırmasını kaydedin',
    'Filter':'Filtre',
// server info modal
    'Aria2 server info': 'Aria2 sunucu bilgisi',
    'Aria2 Version': 'Aria2 Sürümü',
    'Features Enabled': 'Aşağıdaki Özellikler Etkin',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Projenin en son sürümünü indirmek için sorun ekleyin veya katkıda bulunun;',
    'Or you can open the latest version in the browser through': 'Veya en son sürümü tarayıcınız aracılığıyla açabilirsiniz.',
    'Close': 'Kapat',
// lables
    'Download status':'İndirme durumu',
    'Download Speed':'İndirme hızı',
    'Upload Speed':'Yükleme hızı',
    'Estimated time':'Tahmini süre',
    'Download Size':'İndirme Boyutu',
    'Downloaded':'İndirildi',
    'Progress':'İlerleme',
    'Download Path':'İndirme Yolu',
    'Uploaded':'Yüklendi',
    'Download GID':'GID\'yi indirin',
    'Number of Pieces':'Parça sayısı',
    'Piece Length': 'Parça Uzunluğu',
    'Shutdown Server': 'Sunucuyu Kapat',

    'The last connection attempt was unsuccessful. Trying another configuration': 'Son bağlantı girişimi başarısız oldu. Başka bir yapılandırma deneyin',
    'Oh Snap!': 'HAydaaaaa!',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings': 'Aria2 RPC sunucusuna bağlanılamadı. 10 saniye içinde tekrar deneyecek. Bağlantı ayarlarını, Ayarlar> Bağlantı Ayarları bölümüne giderek kontrol etmek isteyebilirsiniz.',
    'Successfully connected to Aria2 through its remote RPC …': 'Uzak RPC aracılığıyla Aria2\'ye başarıyla bağlandı ...',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)': 'Uzak RPC aracılığıyla Aria2\'ye başarıyla bağlandı ancak bağlantı hala güvende değil. Tam güvenlik için, Aria2\'yi başlatırken (--rpc-secret bayrağını kullanın) ve bir yetkilendirme gizli simgesi eklemeyi deneyin.',
    'Trying to connect to aria2 using the new connection configuration': 'Yeni bağlantı yapılandırmasını kullanarak aria2\'ye bağlanmaya çalışılıyor',
};
