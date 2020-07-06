#!/bin/bash
DEFAULT_FILE="/etc/jdos_host"
START_TAG="/opt/host_started"
if [ -f "$DEFAULT_FILE" ]; then 
  if [ ! -f "$START_TAG" ]; then
    # touch "$START_TAG" 
    cat "$DEFAULT_FILE" | while read line || [[ -n ${line} ]]
    do
        echo "${line}" >> /etc/hosts
    done
  fi
fi