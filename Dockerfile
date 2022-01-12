# <DOCKER_FROM>
# </DOCKER_FROM>

# <NODE>
ENV NVM_DIR=/opt/nvm \
    NVM_VERSION=0.39.0
ENV NODE_VERSION=16.13.2 \
    NPM_VERSION=8.3.0

ADD build /stack/boilerplate
RUN bash /stack/boilerplate/install.sh

ENV NODE_PATH=$NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules \
    PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
# </NODE>

# <DOCKER_BUILD>
# </DOCKER_BUILD>
