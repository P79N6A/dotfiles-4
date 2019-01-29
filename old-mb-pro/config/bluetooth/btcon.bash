#!/bin/bash

DEVICES=$(cat devices)

echo "connect $(echo $DEVICES | awk "/$1/ { print \$2 }")" | bluetoothctl
