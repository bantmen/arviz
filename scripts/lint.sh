#! /bin/bash

set -ex # fail on first error, print commands

SRC_DIR=${SRC_DIR:-`pwd`}

echo "Checking documentation..."
python -m pydocstyle --convention=numpy ${SRC_DIR}/arviz/
echo "Success!"

echo "Checking code style with black..."
python -m black -l 100 --check arviz/ examples/
echo "Success!"

echo "Checking code style with pylint..."
python -m pylint arviz/
echo "Success!"
