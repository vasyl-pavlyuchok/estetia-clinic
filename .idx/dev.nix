# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Canal de nixpkgs estable
  channel = "stable-24.05"; 
  
  # Herramientas Core de la Infraestructura
  packages = [
    pkgs.openssh     # Puente hacia tu VPS Hostinger
    pkgs.nodejs_20   # Motor para GSD Framework y herramientas de automatización
  ];

  # Variables de entorno del workspace
  env = {};

  idx = {
    # Extensiones esenciales para tu flujo de trabajo
    extensions = [
      "google.gemini-cli-vscode-ide-companion"
    ];

    # Configuración de previsualización (desactivada hasta que la necesites)
    previews = {
      enable = false;
      previews = {};
    };

    # Hooks de ciclo de vida del workspace
    workspace = {
      # Se ejecuta al crear el entorno por primera vez
      onCreate = {
        default.openFiles = [ ".idx/dev.nix" "README.md" ];
      };
      # Se ejecuta cada vez que el workspace se reinicia
      onStart = {};
    };
  };
}