#!/bin/bash
# Helps starting node on atlaschain specific configuration.

geth --datadir "$HOME/atlaschain/.ethereum" --networkid "33333" --identity "Atlaschain" --rpc --rpcport 8545 --rpcaddr 192.168.27.101 --rpccorsdomain "*" --minerthreads "1" --unlock 0
