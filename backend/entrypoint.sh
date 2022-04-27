#!/bin/bash

set -e

if [ -f tmp/pids/server.pid ]; then
    rm tmp/pids/server.pid
fi

echo "- Create database"
bundle exec rails db:create
echo "- Migrate database"
bundle exec rails db:create

exec "$@"