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
    'Connection Settings': 'Paramètres de Connexion',
    'Global Settings': 'Paramètres Globaux',
    'Server info': 'Informations Serveur',
    'About and contribute': 'À propos et contribuer',
    'Toggle navigation': 'Basculer la navigation',
// body
// nav side bar
    'Miscellaneous': 'Autres',
    'Global Statistics': 'Statistiques Globales',
    'About': 'À propos',
    'Displaying': 'Affichage de',
    'of': 'parmi',
    'downloads': 'téléchargements',
    'Language': 'Langage',
// download filters
    'Download Filters': 'Filtres de Téléchargement',
    'Running': 'En cours',
    'Active': 'Actifs',
    'Waiting': 'En Attente',
    'Complete': 'Complétés',
    'Error': 'Erreurs',
    'Paused': 'En Pause',
    'Removed': 'Supprimés',
    'Hide linked meta-data': 'Cacher les méta-données liées',
    'Displaying': 'Affichage de',
    'of': 'parmi',
    'downloads': 'téléchargements',
    'Toggle': 'Basculer',
    'Reset filters': 'Réinitialiser les filtres',
// starred properties
    'Quick Access Settings': 'Paramètres d\'Accès Rapide',
    'Save settings': 'Sauvegarder les paramètres',
    'Currently no download in line to display, use the': 'Aucun téléchargement dans la file d\'attente, utilisez le button de téléchargement',
    'download button to start downloading files!': 'pour commencer à télécharger des fichiers!',
    'Peers': 'Pairs',
    'More Info': 'Plus d\'infos',
    'Remove': 'Supprimer',
    '# of': '# parmi',
    'Length': 'Longueur',
// modals
    'Add Downloads By URIs': 'Ajouter des téléchargements depuis des URIs',
    '- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.':
        'Vous pouvez ajouter plusieurs téléchargements (fichiers) en même temps, en mettant une URI pour chaque fichier sur une nouveau ligne',
    '- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.':
        'Vous pouvez aussi ajouter plusieurs URIs (mirroirs) pour le *même* fichier. Pour ce faire, séparez les URIs par un espace.',
    '- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.': 'Une URI peut être HTTP(S)/FTP/BitTorrent-Magnet.',
    'E.g. to add 2 files (downloads) f1.jpg and f2.mp4 with 2 URIs (mirrors) each, add URIs as follows':
        'E.g. pour ajouter 2 fichiers (téléchargements) f1.jpg et f2.mp4 avec 2 URIs (mirroirs) chacuns, ajoutez les URIs ainsi',
    'Download settings': 'Paramètres de téléchargement',
    'Advanced settings': 'Paramètres avancés',
    'Cancel': 'Annuler',
    'Start': 'Démarrer',
    'Choose': 'Choisir',
    'Quick Access (shown on the main page)': 'Accès Rapide (affiché sur la page principale',
// add torrent modal
    'Add Downloads By Torrents': 'Ajouter des téléchargements à partir de fichiers Torrent',
    '- Select the torrent from the local filesystem to start the download.': '- Sélectionnez le torrent depuis votre système de fichier local pour commencer le téléchargement.',
    '- You can select multiple torrents to start multiple downloads.': 'Vous pouvez sélectionner plusieurs torrents pour commencer plusieurs téléchargements.',
    '- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.': 'Pour ajouter une URL BitTorrent-Magnet, utilisez l\'option Ajoutez Par URIs et ajoutez-la à ce niveau.',
    'Select Torrents': 'Sélectionnez des Torrents',
    'Select a Torrent': 'Sélectionnez un Torrent',
// add metalink modal
    'Add Downloads By Metalinks': 'Ajoutez des téléchargements Par Metaliens',
    'Select Metalinks': 'Sélectionnez des Métaliens',
    '- Select the Metalink from the local filesystem to start the download.': 'Sélectionnez le Métalien depuis votre système de fichier local pour commencer le téléchargement.',
    '- You can select multiple Metalinks to start multiple downloads.': 'Vous pouvez sélectionner plusieurs Metaliens pour commencer plusieurs téléchargements.',
    'Select a Metalink': 'Sélectionnez un Métalien',
// select file modal
    'Choose files to start download for': 'Sélectionnez les fichiers pour lesquels commencer le téléchargement.',
    'Select to download': 'Sélectionner pour télécharger',
// settings modal
    'Aria2 RPC host and port': 'Hôte et ports Aria2 RPC',
    'Enter the host': 'Entrez l\'hôte',
    'Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)':
        'Entrez l\'IP ou le nom DNS du serveur sur lequel est lancé le RPC pour Aria2 (défaut : localhost)',
    'Enter the port': 'Entrez le port',
    'Enter the port of the server on which the RPC for Aria2 is running (default: 6800)':
        'Entrez le port du serveur sur lequel tourne le RPC pour Aria2 (défaut : 6800)',
    'Enter the RPC path': 'Entrez le chemin vers le RPC',
    'Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)': 'Entrez le chemin final pour le RPC Aria2 (défaut : /jsonrpc)',
    'SSL/TLS encryption': 'Chiffrage SSL/TLS',
    'Enable SSL/TLS encryption': 'Activer le chiffrage SSL/TLS',
    'Enter the secret token (optional)': 'Entrez le token secret (optionnel)',
    'Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)':
        'Entrez le token secret pour le RPC Aria2 (laissez vide si l\'authentification n\'est pas activée)',
    'Enter the username (optional)': 'Entrez le nom d\'utilisateur (optionnel)',
    'Enter the Aria2 RPC username (empty if authentication not enabled)':
        'Entrez le nom d\'utilisateur RPC Aria2 (laissez vide si l\authentification n\'est pas activée)',
    'Enter the password (optional)': 'Entrez le mot de passe (optionnel)',
    'Enter the Aria2 RPC password (empty if authentication not enabled)': 'Entrezle mot de passe RPC Aria2 (laissez vide si l\'authentification n\'est pas activée)',
    'Enter base URL (optional)': 'Entrez l\'URL de base',
    'Direct Download': 'Téléchargement Direct',
    'If supplied, links will be created to enable direct download from the Aria2 server.':
        'S\'ils sont fournis, les liens seront créés pour activer le téléchargement direct depuis le serveur Aria2',
    '(Requires appropriate webserver to be configured.)': '(Requière un serveur web approprié pour être configuré)',
    'Save Connection configuration': 'Sauvegarder la configuration de Connexion',
// server info modal
    'Aria2 server info': 'Infos serveur Aria2',
    'Aria2 Version': 'Version Aria2',
    'Features Enabled': 'Fonctionnalités Activées',
// about modal
    'To download the latest version of the project, add issues or to contribute back, head on to':
        'Pour télécharger la dernière version du projet, signaler des problèmes ou pour contribuer, dirigez vous vers',
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
