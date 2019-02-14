#!/usr/bin/env bash

set -e

echo "> Init and updating submodules..."
[ ! -d "apps/git-subrepo" ] && git submodule add https://github.com/ingydotnet/git-subrepo apps/git-subrepo
git submodule update --init apps/git-subrepo

ROOT_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/"

source "$ROOT_PATH/apps/git-subrepo/.rc"

echo "> Pulling and update all subrepos"
[ ! -d "src/deps/hw-core/reactstrap-modals" ] && git subrepo clone https://gitlab.com/hw-core/modules/reactstrap-modals/ src/deps/hw-core/reactstrap-modals
git subrepo pull src/deps/hw-core/reactstrap-modals
git subrepo push src/deps/hw-core/reactstrap-modals
git subrepo clean src/deps/hw-core/reactstrap-modals