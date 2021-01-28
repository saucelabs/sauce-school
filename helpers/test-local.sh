#!/usr/bin/env bash

SAUCECTL_VERSION=0.25.1

# Install saucectl
curl -L -s  https://github.com/saucelabs/saucectl/releases/download/v${SAUCECTL_VERSION}/saucectl_${SAUCECTL_VERSION}_linux_64-bit.tar.gz | sudo tar -xvz -C /usr/bin/

# Start Local service
cd site/dist && python3 -m http.server 8080 > /tmp/web.log 2>&1 &
WEBSERVER_PID=${!}

# Run tests
saucectl run
SAUCECTL_RETURN=${?}

# Cleaning and dumping logs
kill -INT ${WEBSERVER_PID}
kill -INT ${SC_PID}

exit ${SAUCECTL_RETURN}