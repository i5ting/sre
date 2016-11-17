#!/bin/bash

[[ -e ~/.profile ]] && echo "source ~/.sre" >> ~/.profile

[[ -e ~/.zshrc ]] && echo "[[ -e ~/.profile ]] && emulate sh -c 'source ~/.profile' " >> ~/.zshrc

echo "" > ~/.sre_path

exec $SHELL