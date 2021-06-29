# <DOCKER_FROM>
# </DOCKER_FROM>

# <NODE>
ADD build /stack/boilerplate

ENV NODE_VERSION=14.17.1 \
    NPM_VERSION=6.14.13

RUN bash /stack/boilerplate/install.sh

ENV NODE_PATH=$NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules \
    PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
# </NODE>

# <DOCKER_BUILD>
# </DOCKER_BUILD>
