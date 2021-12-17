#!/bin/bash

set -e

mkdir -p $NVM_DIR
curl -o- https://raw.githubusercontent.com/creationix/nvm/v$NVM_VERSION/install.sh | bash

source $NVM_DIR/nvm.sh
nvm install $NODE_VERSION
nvm alias default $NODE_VERSION
nvm use default

npm install -g npm@"$NPM_VERSION"
npm install -g gulp bower
