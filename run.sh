#!/bin/sh

# npx http-server jgex-web/ -p 8080 -c-1 --cors
# nix shell nixpkgs#caddy -c caddy file-server --listen :8080 --root jgex-web/

docker run --rm -p 8080:8080 -v "$(pwd)/jgex-web":/srv -w /srv caddy:alpine caddy file-server --listen :8080 --access-log
