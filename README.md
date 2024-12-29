# proxy-pages
## About
Use GitHub Pages as a proxy.

In VRChat's String Loading feature, `*.github.io` is included in the Trusted URLs.  
This allows you to host files downloaded from specified URLs on GitHub Pages.

## Usage
- Repository Setting > Secrets and variables > Actions > Variable
- New repository variable
    - Name: `FETCH_URL`
    - Value: The URL of the file you want to proxy
- Actions > Build and Deploy Pages > Run workflow
- Deploy to `${your-github-id}.github.io/proxy-pages/date.json`
    - If you want to change the file name, edit the FILE_NAME in the workflow YAML.