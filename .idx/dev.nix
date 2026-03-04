 # To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Canal de nixpkgs estable
  channel = "stable-24.05";

  # Herramientas Core de la Infraestructura
  packages = [
    pkgs.openssh
    pkgs.nodejs_20
  ];

  # Variables de entorno del workspace
  env = {
    N8N_AGENT_URL = "https://n8n.agentbooster.ai";
    N8N_TECH_URL = "https://n8n.techbooster.io";
  };

  idx = {
    # Extensiones esenciales para tu flujo de trabajo
    extensions = [
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "google.gemini-cli-vscode-ide-companion"
      "redhat.vscode-yaml"
      "usernamehw.errorlens"
    ];

    workspace = {
      onCreate = {
        # Instala las dependencias de npm al crear el workspace
        npm-install = "npm install";
        # Abre archivos importantes al inicio
        default.openFiles = [ ".idx/dev.nix" "README.md" ];
      };

      onStart = { };
    };

    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}
