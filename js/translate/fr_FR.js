if(typeof translations == 'undefined'){
    translations = {};
}

translations.fr_FR = {
// header
    'Search': 'Rechercher',
    // Nav menu
    'Add': 'Ajouter',
    'By URIs': 'Par URIs',
    'By Torrents': 'Par Torrents',
    'By Metalinks': 'Par Metaliens',
    'Manage': 'Gérer',
    'Pause All': 'Tout suspendre',
    'Resume Paused': 'Reprendre',
    'Purge Completed': 'Nettoyer les fichiers complétés',
    'Settings': 'Paramètres',
    'Connection Settings': 'Paramètres de connexion',
    'Global Settings': 'Paramètres globaux',
    'Server info': 'Informations serveur',
    'About and contribute': 'À propos et contribuer',
    'Toggle navigation': 'Basculer la navigation',
// body
// nav side bar
    'Miscellaneous': 'Autres',
    'Global Statistics': 'Statistiques globales',
    'About': 'À propos',
    'Displaying': 'Affichage de',
    'of': 'parmi',
    'downloads': 'téléchargements',
    'Language': 'Langue',
// download filters
    'Download Filters': 'Filtres de téléchargement',
    'Running': 'En cours',
    'Active': 'Actifs',
    'Waiting': 'En attente',
    'Complete': 'Complétés',
    'Error': 'Erreurs',
    'Paused': 'En pause',
    'Removed': 'Supprimés',
    'Hide linked meta-data': 'Cacher les métadonnées liées',
    'Toggle': 'Basculer',
    'Reset filters': 'Réinitialiser les filtres',
// starred properties
    'Quick Access Settings': 'Paramètres d\'accès rapide',
    'Save settings': 'Sauvegarder les paramètres',
    'Currently no download in line to display, use the': 'Aucun téléchargement dans la file d\'attente, utilisez le bouton de téléchargement',
    'download button to start downloading files!': 'pour commencer à télécharger des fichiers!',
    'Peers': 'Pairs',
    'More Info': 'Plus d\'infos',
    'Remove': 'Supprimer',
    '# of': '# parmi',
    'Length': 'Longueur',
// modals
    'Add Downloads By URIs': 'Ajouter des téléchargements depuis des URIs',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        'Vous pouvez ajouter plusieurs téléchargements (fichiers) en même temps, en mettant une URI pour chaque fichier sur une nouvelle ligne',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        'Vous pouvez aussi ajouter plusieurs URIs (mirroirs) pour le *même* fichier. Pour ce faire, séparez les URIs par un espace.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': 'Une URI peut être HTTP(S)/FTP/BitTorrent-Magnet.',
    'Download settings': 'Paramètres de téléchargement',
    'Advanced settings': 'Paramètres avancés',
    'Cancel': 'Annuler',
    'Start': 'Démarrer',
    'Choose': 'Choisir',
    'Quick Access (shown on the main page)': 'Accès rapide (affiché sur la page principale',
// add torrent modal
    'Add Downloads By Torrents': 'Ajouter des téléchargements à partir de fichiers Torrent',
    '- Select the torrent from the local filesystem to start the download.': '- Sélectionnez le torrent depuis votre système de fichier local pour commencer le téléchargement.',
    '- You can select multiple torrents to start multiple downloads.': 'Vous pouvez sélectionner plusieurs torrents pour commencer plusieurs téléchargements.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': 'Pour ajouter une URL BitTorrent-Magnet, utilisez l\'option Ajouter par URIs et ajoutez-la à ce niveau.',
    'Select Torrents': 'Sélectionner des Torrents',
    'Select a Torrent': 'Sélectionner un Torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Ajouter des téléchargements par Metaliens',
    'Select Metalinks': 'Sélectionner des Métaliens',
    '- Select the Metalink from the local filesystem to start the download.': 'Sélectionner le Métalien depuis votre système de fichier local pour commencer le téléchargement.',
    '- You can select multiple Metalinks to start multiple downloads.': 'Vous pouvez sélectionner plusieurs Métaliens pour commencer plusieurs téléchargements.',
    'Select a Metalink': 'Sélectionner un Métalien',
// select file modal
    'Choose files to start download for': 'Sélectionner les fichiers pour lesquels commencer le téléchargement.',
    'Select to download': 'Sélectionner pour télécharger',
// settings modal
    'Aria2 RPC host and port': 'Hôte et ports Aria2 RPC',
    'Enter the host': 'Entrer l\'hôte',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Entrer l\'IP ou le nom DNS du serveur sur lequel est lancé le RPC pour Aria2 (défaut : localhost)',
    'Enter the port': 'Entrer le port',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Entrer le port du serveur sur lequel tourne le RPC pour Aria2 (défaut : 6800)',
    'Enter the RPC path': 'Entrer le chemin vers le RPC',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Entrer le chemin final pour le RPC Aria2 (défaut : /jsonrpc)',
    'SSL/TLS encryption': 'Chiffrage SSL/TLS',
    'Enable SSL/TLS encryption': 'Activer le chiffrage SSL/TLS',
    'Enter the secret token (optional)': 'Entrer le token secret (optionnel)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Entrer le token secret pour le RPC Aria2 (laisser vide si l\'authentification n\'est pas activée)',
    'Enter the username (optional)': 'Entrer le nom d\'utilisateur (optionnel)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Entrer le nom d\'utilisateur RPC Aria2 (laisser vide si l\authentification n\'est pas activée)',
    'Enter the password (optional)': 'Entrer le mot de passe (optionnel)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Entrer le mot de passe RPC Aria2 (laisser vide si l\'authentification n\'est pas activée)',
    'Enter base URL (optional)': 'Entrez l\'URL de base',
    'Direct Download': 'Téléchargement direct',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'S\'ils sont fournis, les liens seront créés pour activer le téléchargement direct depuis le serveur Aria2',
    '(Requires appropriate webserver to be configured.)': '(Nécessite un serveur web approprié pour être configuré)',
    'Save Connection configuration': 'Sauvegarder la configuration de connexion',
    'Filter': 'Filtre',
// server info modal
    'Aria2 server info': 'Infos serveur Aria2',
    'Aria2 Version': 'Version Aria2',
    'Features Enabled': 'Fonctionnalités activées',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Pour télécharger la dernière version du projet, signaler des problèmes ou pour contribuer, aller à l\'adresse',
    'Or you can open the latest version in the browser through': 'Ou vous pouvez ouvrir la dernière version dans le navigateur depuis',
    'Close': 'Fermer',
// lables
    'Download status':'Statut de téléchargement',
    'Download Speed':'Vitesse de téléchargement',
    'Upload Speed':'Vitesse d\'envoi',
    'Estimated time':'Temps estimé',
    'Download Size':'Taille du téléchargement',
    'Downloaded':'Téléchargé',
    'Progress':'Avancement',
    'Download Path':'Chemin de téléchargement',
    'Uploaded':'Envoyé',
    'Download GID':'GID du téléchargement',
    'Number of Pieces':'Nombre de pièces',
    'Piece Length':'Taille de la pièce'
};
