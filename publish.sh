#!/bin/bash

# export $(cat .env.production.local | xargs -0)
DATETIME=`date -Iseconds`

CURRENT_PATH=$SERVER_BASE_DIR/$DATETIME

echo $DATETIME
scp -r build $SERVER_SSH:$CURRENT_PATH

ssh $SERVER_SSH CURRENT_PATH=$CURRENT_PATH SERVER_BASE_DIR=$SERVER_BASE_DIR 'bash -s' <<'ENDSSH'
  ln -sfT $CURRENT_PATH $SERVER_BASE_DIR/current
ENDSSH