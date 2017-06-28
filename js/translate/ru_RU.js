if(typeof translations == 'undefined'){
    translations = {};
}

translations.ru_RU = {
// header
    'Search': 'Поиск',
    // Nav menu
    'Add': 'Добавить',
    'By URIs': 'URL-адреса',
    'By Torrents': 'Torrent-файлы',
    'By Metalinks': 'Metalink-файлы',
    'Manage': 'Управление',
    'Pause All': 'Приостановить всё',
    'Resume Paused': 'Возобновить всё',
    'Purge Completed': 'Удалить завершенные',
    'Settings': 'Настройки',
    'Connection Settings': 'Настройки соединения',
    'Global Settings': 'Глобальные настройки',
    'Server info': 'Информация о сервере',
    'About and contribute': 'Информация и сотрудничество',
    'Toggle navigation': 'Переключение навигации',
// body
// nav side bar
    'Miscellaneous': 'Разное',
    'Global Statistics': 'Глобальная статистика',
    'About': 'Об',
    'Displaying': 'Показано',
    'of': 'из',
    'downloads': 'загрузок',
    'Language': 'Язык',
// download filters
    'Download Filters': 'Фильтр загрузок',
    'Running': 'Запущенные',
    'Active': 'Активные',
    'Waiting': 'Ожидающие',
    'Complete': 'Завершенные',
    'Error': 'С ошибками',
    'Paused': 'Приостановленные',
    'Removed': 'Удаленные',
    'Hide linked meta-data': 'Скрыть связанные метаданные',
    'Toggle': 'Переключить',
    'Reset filters': 'Сбросить фильтры',
// starred properties
    'Quick Access Settings': 'Настройки быстрого доступа',
    'Save settings': 'Сохранить настройки',
    'Currently no download in line to display, use the': 'На данный момент ничего не загружается, используйте кнопку',
    'download button to start downloading files!': 'чтобы начать загрузку файла!',
    'Peers': 'Пиры',
    'More Info': 'Информация',
    'Remove': 'Удалить',
    '# of': '# из',
    'Length': 'Размер',
// modals
    'Add Downloads By URIs': 'Добавить загрузки из URL-адресов',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '- Вы можете добавить несколько загрузок (файлов) одновременно, помещая URL-адреса для каждого файла на отдельной строке.',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '- Можно также добавить несколько URL-адресов (зеркал) для *одного* файла. Для этого отделите URL-адреса пробелом.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '- URL-адрес может быть HTTP(S)/FTP/BitTorrent-Magnet.',
    'Download settings': 'Настройки загрузки',
    'Advanced settings': 'Расширенные настройки',
    'Cancel': 'Отмена',
    'Start': 'Начать',
    'Choose': 'Выбрать',
    'Quick Access (shown on the main page)': 'Простой доступ (смотреть на главной странице)',
// add torrent modal
    'Add Downloads By Torrents': 'Добавить загрузку из Torrent-файлов',
    '- Select the torrent from the local filesystem to start the download.': '- Выберите Torrent-файлы из локальной файловой системы для начала загрузку.',
    '- You can select multiple torrents to start multiple downloads.': '- Вы можете выбрать несколько Torrent-файлы для запуска нескольких загрузок.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '- Для добавления BitTorrent-Magnet ссылки воспользуйтесь пунктом меню *Добавить из URL-адреса*',
    'Select Torrents': 'Выберите торренты',
    'Select a Torrent': 'Выберите торрент',
// add metalink modal
    'Add Downloads By Metalinks': 'Добавить загрузку из Metalink-файлов',
    'Select Metalinks': 'Выбрать Metalink-файлы',
    '- Select the Metalink from the local filesystem to start the download.': '- Выберите Metalink-файлы из локальной файловой системы для начала загрузки',
    '- You can select multiple Metalinks to start multiple downloads.': '- Вы можете выбрать несколько Metalink-файлов для запуска нескольких загрузок.',
    'Select a Metalink': 'Выберите Metalink',
// select file modal
    'Choose files to start download for': 'Выберите файлы чтобы начать загрузку для',
    'Select to download': 'Выберите для загрузки',
// settings modal
    'Aria2 RPC host and port': 'Aria2 RPC хост и порт',
    'Enter the host': 'Укажите хост',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Укажите IP или DNS-имя сервера, на котором запущена Aria2 со включенным RPC (по умолчанию: localhost)',
    'Enter the port': 'Укажите порт',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Укажите порт сервера, на котором запущена Aria2 со включенным RPC (по умолчанию: 6800)',
    'Enter the RPC path': 'Укажите путь RPC',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Укажите конечный путь для Aria2 RPC (по умолчанию: /jsonrpc)',
    'SSL/TLS encryption': 'SSL/TLS шифрование',
    'Enable SSL/TLS encryption': 'Разрешить SSL/TLS шифрование',
    'Enter the secret token (optional)': 'Укажите секретный токен (необязательно)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Укажите секретный токен Aria2 RPC (оставьте пустым, если авторизация не включена)',
    'Enter the username (optional)': 'Укажите имя пользователя (необязательно)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Укажите имя пользователя Aria2 RPC (оставьте пустым, если авторизация не включена)',
    'Enter the password (optional)': 'Укажите пароль (необязательно)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Укажите пароль для Aria2 RPC (оставьте пустым, если авторизация не включена)',
    'Enter base URL (optional)': 'Укажите базовый URL-адрес (необязательно)',
    'Direct Download': 'Прямая загрузка',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'Ссылки (при наличии) будут созданы для загрузки непосредственно с сервера Aria2.',
    '(Requires appropriate webserver to be configured.)': '(Требуется соответствующий веб-сервер для настройки.)',
    'Save Connection configuration': 'Сохранить настройки соединения',
    'Filter': 'Фильтр',
// server info modal
    'Aria2 server info': 'Информация о сервере Aria2',
    'Aria2 Version': 'Версия Aria2',
    'Features Enabled': 'Имеющийся функционал',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Чтобы загрузить последнюю версию проекта, добавить вопросы или внести свой вклад, передите на',
    'Or you can open the latest version in the browser through': 'Или вы можете открыть последнюю версию в браузере через',
    'Close': 'Закрыть',
// lables
    'Download status':'Статус загрузки',
    'Download Speed':'Скорость загрузки',
    'Upload Speed':'Скорость отдачи',
    'Estimated time':'Оставшееся время',
    'Download Size':'Размер загрузки',
    'Downloaded':'Загружено',
    'Progress':'Прогресс',
    'Download Path':'Путь к загружаемым файлам',
    'Uploaded':'Отдано',
    'Download GID':'Загруженый GID',
    'Number of Pieces':'Количество частей',
    'Piece Length': 'Размер частей',
    'Shutdown Server': 'Выключить сервер',

    'The last connection attempt was unsuccessful. Trying another configuration': 'Последняя попытка подключения была неудачной. Попробуйте другую конфигурацию',
    'Oh Snap!': 'Опаньки!',
    'Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings': 
       'Не удалось подключиться к серверу Aria2 RPC. Попытка будет повторена в течение 10 секунд. Вы можете проверить параметры подключения, перейдя в меню Настройки > Настройки соединения',
    'Successfully connected to Aria2 through its remote RPC …': 'Успешное подключение к Aria2 через удаленный RPC …',
    'Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)': 
       'Успешное подключение к Aria2 через удаленный RPC, однако соединение все еще небезопасно. Для обеспечения лучшей безопасности добавьте секретный токен авторизации при запуске aria2 (через флаг --rpc-secret)',
    'Trying to connect to aria2 using the new connection configuration': 
       'Попытка подключиться к aria2 с использованием новой конфигурации',
};
