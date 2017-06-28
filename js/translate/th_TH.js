if(typeof translations == 'undefined'){
    translations = {};
}

translations.th_TH = {
// header
    'Search': 'ค้นหา',
    // Nav menu
    'Add': 'เพื่ม',
    'By URIs': 'ด้วยยูอาร์ไอ',
    'By Torrents': 'ด้วยทอร์เรนต์',
    'By Metalinks': 'ด้วยเมทาลิงค์',
    'Manage': 'บริหาร',
    'Pause All': 'หยุดชั่วคราวหมด',
    'Resume Paused': 'ไปต่อหมด',
    'Purge Completed': 'ลบอันเสร็จ',
    'Settings': 'ตั้งค่า',
    'Connection Settings': 'ตั้งค่าเชื่อมต่อ',
    'Global Settings': 'ตั้งค่าทั่วไป',
    'Server info': 'ข้อมูลเซอร์เวอร์',
    'About and contribute': 'เกี่ยวกับและช่วย',
    'Toggle navigation': 'สลับนำทาง',
    'Language': 'ภาษา',
// body
// nav side bar
    'Miscellaneous': 'เบ็ดเตล็ด',
    'Global Statistics': 'สถิติทั่วไป',
    'About': 'เกี่ยวกับ',
    'Displaying': 'แแสดงดาวน์โหลด',
    'of': 'อันใน',
    'downloads': 'อันทั้งหมด',
// download filters
    'Download Filters': 'กรองดาวน์โหลด',
    'Running': 'กำลังทำงาน',
    'Active': 'ใช้งานอยู่',
    'Waiting': 'กำลังรอ',
    'Complete': 'เสร็จ',
    'Error': 'ผิดพลาด',
    'Paused': 'หยุดอยู่',
    'Removed': 'ลบแล้ว',
    'Hide linked meta-data': 'ซ่อนข้อมูลเมตาที่เชื่อมโยง',
    'Toggle': 'สลับ',
    'Reset filters': 'รีเซตตัวกรอง',
// starred properties
    'Quick Access Settings': 'ตั้งค่าอย่างรวดเร็ว',
    'Save settings': 'บันทึกการตั้งค่า',
    'Currently no download in line to display, use the': 'ตอนนี้ไม่มีการดาวน์โหลดที่แสดงได้ ก็ใช้ปุ่ม',
    'download button to start downloading files!': 'ให้เริ่มดาวน์โหลดไฟล์',
    'Peers': 'พีร์ส',
    'More Info': 'ข้อมูลเพิ่ม',
    'Remove': 'ลบ',
    '# of': 'จำนวน',
    'Length': 'ความยาว',
// modals
    'Add Downloads By URIs': 'เพิ่มดาวน์โหลดด้วยยูอาร์ไอ',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        '',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        '',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': '',
    'Download settings': 'ตั้งค่าการดาวน์โหลด',
    'Advanced settings': 'ตั้งค่าขั้นสูง',
    'Cancel': 'ยกเลิก',
    'Start': 'เริ่มต้น',
    'Choose': 'เลือก',
    'Quick Access (shown on the main page)': 'ใช้งานอย่างรวดเร็ว (แสดงที่เพจหลัก)',
// add torrent modal
    'Add Downloads By Torrents': 'เพิ่มดาวน์โหลดด้วยทอร์เรนต์',
    '- Select the torrent from the local filesystem to start the download.': '',
    '- You can select multiple torrents to start multiple downloads.': '',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': '',
    'Select Torrents': 'เลือกทอร์เรนต์',
    'Select a Torrent': 'เลือกทอร์เรนต์',
// add metalink modal
    'Add Downloads By Metalinks': 'เพิ่มดาวน์โหลดด้วยเมทาลิงค์',
    'Select Metalinks': 'เลือกเมทาลิงค์',
    '- Select the Metalink from the local filesystem to start the download.': '',
    '- You can select multiple Metalinks to start multiple downloads.': '',
    'Select a Metalink': 'เลือกเมทาลิงค์',
// select file modal
    'Choose files to start download for': 'เลือกไฟล์ที่จะเริ่มดาวน์โหลด',
    'Select to download': 'เลือกให้ดาวน์โหลด',
// settings modal
    'Aria2 RPC host and port': 'โฮสต์และพอร์ตของ Aria2 RPC',
    'Enter the host': 'ป้อนโฮสต์',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        '',
    'Enter the port': 'ป้อนพอร์ต',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        '',
    'Enter the RPC path': 'ป้อนเส้นทาง RPC',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': '',
    'SSL/TLS encryption': 'การเข้ารหัสลับ SSL/TLS',
    'Enable SSL/TLS encryption': 'เปิดใช้การเข้ารหัสลับ SSL/TLS',
    'Enter the secret token (optional)': 'ป้อนสัญลักษณ์ความลับ (เป็นตัวเลือก)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        '',
    'Enter the username (optional)': 'ป้อนเชื่อ (เป็นตัวเลือก)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        '',
    'Enter the password (optional)': 'ป้อนรหัสผ่าน (เป็นตัวเลือก)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': '',
    'Enter base URL (optional)': 'ป้อน URL หลัก (เป็นตัวเลือก)',
    'Direct Download': 'ดาวน์โหลดโดยตรง',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        '',
    '(Requires appropriate webserver to be configured.)': '',
    'Save Connection configuration': 'บันทึกการตั้งค่าการเชื่อมต่อ',
    'Filter': 'กรอง',
// server info modal
    'Aria2 server info': 'ข้อมูลเซอร์เวอร์ Aria2',
    'Aria2 Version': 'รุ่น Aria2',
    'Features Enabled': 'คุณสมบัติที่เปิดใช้งาน',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'ให้ดาวน์โหลดรุ่นสุดท้ายของโครงการ เพิ่มปัญหา หรือช่วยเหลือมีส่วนร่วม ไปสู่',
    'Or you can open the latest version in the browser through': 'หรือเปิดรุ่นสุดท้ายในเบราว์เซอร์โดยใช้',
    'Close': 'ปิด'
};
