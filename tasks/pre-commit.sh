set -ex

./tasks/check-coupling.sh
./tasks/lint.sh
./tasks/cov-check.sh
./tasks/readme-gen.sh
