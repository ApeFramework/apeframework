#! /bin/bash

#
# Usage: ./bin/test.sh [(<module> <adapter> <stack>) <option>...]
#
#   Test all modules:
#     ./bin/test.sh
#
#   Test a module:
#     ./bin/test.sh api unit node
#     ./bin/test.sh db mysql mysql-8
#
#   Test a module using options:
#     ./bin/test.sh api unit node --no-coverage
#
# TODO: rewrite to match usage
#       local options=${@:4}
#       options=${@:4}
#

test() {
  local stack="stack/$1/docker-compose.yml"
  local module=$2
  local adapter=$3

  echo "----------------------------------------------------------------------"
  printf "⚫ Test stack=$1 module=$2"
  if [ ! -z $adapter ]; then
    printf " adapter=$3\n"
  else
    printf "\n"
  fi
  echo "----------------------------------------------------------------------"

  docker compose -f $stack run \
    --quiet-pull \
    --env MODULE=$module \
    --env ADAPTER=$adapter \
    node yarn test -c test/config.ts

  status=$?

  docker compose -f $stack down \
    --remove-orphans \
    --volumes \
    --timeout 0

  if [ $status != 0 ]; then
    exit 1
  fi

  sleep 1
}

stack=$1
module=$2
adapter=$3

if [ ! -z $stack ]; then
  if [ -z $module ]; then
    echo 'missing argument <module>'
    exit 1
  fi
  test $stack $module $adapter
else
  test node cipher
  test node cli
  test node config
  test node env
  test node error
  test node jwt
  test node logger
  test node logger noop
  test node mailer
  test node mailer noop
  test node parser
  test node pwd
  test node tls
  test node utils
fi
