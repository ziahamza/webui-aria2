if (typeof translations == "undefined") {
  translations = {};
}

translations.pt_BR = {
  // replace en_US to ll_CC, examples: zh_CN, de_AT.
  // header
  Search: "Buscar",
  // Nav menu
  Add: "Adicionar",
  "By URIs": "Por URIs",
  "By Torrents": "Por Torrents",
  "By Metalinks": "Por Metalinks",
  Manage: "Gerenciar",
  "Pause All": "Pausar Todos",
  "Resume Paused": "Retomar Pausados",
  "Purge Completed": "Remover Completados",
  "Shutdown Server": "Desligar Servidor",
  Settings: "Configurações",
  "Connection Settings": "Configurações de Conexão",
  "Global Settings": "Configurações Globais",
  "Server info": "Informações do Servidor",
  "About and contribute": "Sobre e contribuições",
  "Toggle navigation": "Alternar navegação",
  // body
  // nav side bar
  Miscellaneous: "Miscelânia",
  "Global Statistics": "Estatísticas Globais",
  About: "Sobre",
  Displaying: "Mostrando",
  of: "de",
  downloads: "downloads",
  Language: "Linguagem",
  // download filters
  "Download Filters": "Filtros de Download",
  Running: "Rodando",
  Active: "Ativo",
  Waiting: "Esperando",
  Complete: "Completo",
  Error: "Erro",
  Paused: "Pausado",
  Removed: "Removido",
  "Hide linked meta-data": "Esconder metadados ligados",
  Toggle: "Alternar",
  "Reset filters": "Limpar filtros",
  // download status
  Verifying: "Verificando",
  "Verify Pending": "Verificação Pendente",
  // starred properties
  "Quick Access Settings": "Acesso Rápido às Configurações",
  Save: "Salvar",
  "Save settings": "Salvar configurações",
  "Currently no download in line to display, use the":
    "No momento não existem downloads para mostrar, utilize botão",
  "download button to start downloading files!": "pra iniciar a transferência de arquivos!",
  Peers: "Peers",
  "More Info": "Mais informações",
  Remove: "Remover",
  "# of": " de",
  Length: "Tamanho",
  // modals
  "Add Downloads By URIs": "Adicionar Downloads por URIs",
  "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
    "- Você pode adicionar múltiplos downloads (arquivos) ao mesmo tempo inserindo a URI de cada arquivo em uma linha separada.",
  "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
    "- Você também pode adicionar múltiplas URIs (mirrors) para o *mesmo* arquivo. Para fazer isto, separe as URIs por um espaço.",
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.":
    "- Uma URI pode ser HTTP(S)/FTP/BitTorrent-Magnet.",
  "Download settings": "Configurações de download",
  "Advanced settings": "Configurações avançadas",
  Cancel: "Cancelar",
  Start: "Iniciar",
  Choose: "Escolher",
  "Quick Access (shown on the main page)": "Acesso Rápido (exibido na página principal)",
  // add torrent modal
  "Add Downloads By Torrents": "Adicionar Downloads por Torrents",
  "- Select the torrent from the local filesystem to start the download.":
    "- Selecione o torrent de seu sistema de arquivos local para iniciar o download.",
  "- You can select multiple torrents to start multiple downloads.":
    "- Você pode selecionar múltiplos torrents para iniciar múltiplos downloads.",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
    "- Para adicionar uma URL BitTorrent-Magnet, utilize a opção Adicionar por URI.",
  "Select Torrents": "Selecione Torrents",
  "Select a Torrent": "Selecione um Torrent",
  // add metalink modal
  "Add Downloads By Metalinks": "Adicionar Downloads por Metalinks",
  "Select Metalinks": "Selecione Metalinks",
  "- Select the Metalink from the local filesystem to start the download.":
    "- Selecione o Metalink do seu sistema de arquivos local para iniciar o download.",
  "- You can select multiple Metalinks to start multiple downloads.":
    "- Você pode selecionar múltiplos Metalinks para iniciar múltiplos downloads.",
  "Select a Metalink": "Selecione um Metalink",
  // select file modal
  "Choose files to start download for": "Selecione os arquvos para serem baixados",
  "Select to download": "Selecione para baixar",
  // settings modal
  "Aria2 RPC host and port": "Host e porta do RPC Aria2",
  "Enter the host": "Informe o host",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "Informe o IP ou nome DNS do servidor no qual o RPC do Aria2 está rodando (default: localhost)",
  "Enter the port": "Informe a porta",
  "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
    "Informe a porta do servidor no qual o RPC do Aria2 está rodando (default: 6800)",
  "Enter the RPC path": "Informe o caminho RPC",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
    "Informe o caminho para o endpoint RPC do Aria2 (default: /jasonrpc)",
  "SSL/TLS encryption": "Criptografia SSL/TLS",
  "Enable SSL/TLS encryption": "Habilita criptografia SSL/TLS",
  "Enter the secret token (optional)": "Informe o token secreto (opcional)",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
    "Informe o token secreto do RPC Aria2 (deixe vazio se a autenticação não estiver habilitada)",
  "Enter the username (optional)": "Informe o usuário (opcional)",
  "Enter the Aria2 RPC username (empty if authentication not enabled)":
    "Informe o usuário RPC do Aria2 (vazio se a autenticação não estiver habilitada)",
  "Enter the password (optional)": "Informe a senha (opcional)",
  "Enter the Aria2 RPC password (empty if authentication not enabled)":
    "Informe a senha RPC do Aria2 (vazio se a autenticação não estiver habilitada)",
  "Enter base URL (optional)": "Informe a URL base (opcional)",
  "Direct Download": "Download Direto",
  "If supplied, links will be created to enable direct download from the Aria2 server.":
    "Se fornecido, links serão criados para permitir download direto do servidor Aria2.",
  "(Requires appropriate webserver to be configured.)":
    "(Requer servidor web apropriado a ser configurado.)",
  "Save Connection configuration": "Salvar Configuração de conexão",
  Filter: "Filtrar",
  // server info modal
  "Aria2 server info": "Informações do servidor Aria2",
  "Aria2 Version": "Verão do Aria2",
  "Features Enabled": "Opções Habilitadas",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to":
    "Para baixar a última versão do projeto, reportar problemas ou contribuir, acesse",
  "Or you can open the latest version in the browser through":
    "Ou você pode acessar a última versão pelo navegador através",
  Close: "Fechar",
  // labels
  "Download status": "Status do download",
  "Download Speed": "Velocidade de download",
  "Upload Speed": "Velocidade de upload",
  "Estimated time": "Tempo estimado",
  "Download Size": "Tamanho do download",
  Downloaded: "Baixado",
  Progress: "Progresso",
  "Download Path": "Caminho do download",
  Uploaded: "Enviado",
  "Download GID": "GID do download",
  "Number of Pieces": "Número de partes",
  "Piece Length": "Tamanho das partes",

  //alerts
  "The last connection attempt was unsuccessful. Trying another configuration":
    "A última tentativa de conexão não teve sucesso. Tentando outra configuração",
  "Oh Snap!": "Ah Droga!",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "Não foi possível conectar no servidor RPC aria2. Tententando em 10 seg. Você pode querer verificar as configurações da conexão em Configurações > Configurações de Conexão",
  "Authentication failed while connecting to Aria2 RPC server. Will retry in 10 secs. You might want to confirm your authentication details by going to Settings > Connection Settings":
    "Autenticação falhou enquanto conectando ao servidor RPC Aria2. Tentando em 10 seg. Você pode querer confirmar os detalhes de autenticação acessando Configurações > Configurações de Conexão",
  "Successfully connected to Aria2 through its remote RPC …":
    "Conectado com sucesso ao Aria2 através de seu RPC remoto …",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "Conectado com sucesso ao Aria2 através de seu RPC remoto, contudo a conexão é insegura. Para uma completa segurança tente adicionar um token secreto de autorização quando iniciar o Aria2 (através da opção --rpc-secret)",
  "Trying to connect to aria2 using the new connection configuration":
    "Tentando conectar-se ao aria2 utilizando a nova configuração de conexão",
  // {{name}} refers to the download name, do not modify.
  "Remove {{name}} and associated meta-data?": "Remover {{name}} e os metadados associados?"
};
