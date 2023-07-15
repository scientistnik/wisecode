#!/bin/bash

set -xe

export $(cat .env | xargs -0)

DATETIME=`date -u +"%Y-%m-%dT%H:%M:%SZ"`

CURRENT_PATH=$SERVER_BASE_DIR/$DATETIME

scp -r build $SERVER_SSH:$CURRENT_PATH

ssh $SERVER_SSH CURRENT_PATH=$CURRENT_PATH SERVER_BASE_DIR=$SERVER_BASE_DIR 'bash -s' <<'ENDSSH'
  ln -sfT $CURRENT_PATH $SERVER_BASE_DIR/current
ENDSSH