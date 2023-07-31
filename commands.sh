#!/usr/bin/env bash

set -e

if [[ $# -gt 0 ]];then

    if [[ "$1" == "install" ]]; then
        echo "$2"
    fi
fi
