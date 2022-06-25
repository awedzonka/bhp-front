#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
echo -e "\e[42mBuilding\e[49m" && $DIR/build.sh && echo -e "\e[42mRunning\e[49m" && $DIR/run.sh