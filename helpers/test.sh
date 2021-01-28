#!/usr/bin/env bash

SAUCECTL_VERSION=0.25.1
SAUCE_CONNECT_VERSION=4.6.3
SAUCE_CONNECT_URL=https://saucelabs.com/downloads/sc-${SAUCE_CONNECT_VERSION}-linux.tar.gz

SAUCE_TUNNELID=ci-${GITHUB_SHA}

# Install sauce-connect + saucectl
curl -L -s ${SAUCE_CONNECT_URL} | sudo tar -xvz -C /usr/ --strip-components=1 sc-${SAUCE_CONNECT_VERSION}-linux/bin/sc
curl -L -s  https://github.com/saucelabs/saucectl/releases/download/v${SAUCECTL_VERSION}/saucectl_${SAUCECTL_VERSION}_linux_64-bit.tar.gz | sudo tar -xvz -C /usr/bin/

# Start sauce-connect
echo "Starting sauce-connect..."
sc -u ${SAUCE_USERNAME} -k ${SAUCE_ACCESS_KEY} -i ${SAUCE_TUNNELID} --pidfile /tmp/sc.pid -f /tmp/sc.ready > /tmp/sauce-connect.log 2>&1 &
sleep 1
SC_PID=$(cat /tmp/sc.pid)
if [ -z "${SC_PID}" ];then
    echo "SC failed to start"
    exit 1;
fi

# Wait for shell to be up
while true;do
    if ! kill -0 ${SC_PID};then
        echo "sc is not running"
        exit 1;
    fi

    if [ -f /tmp/sc.ready ];then
        break;
    fi

    echo "Waiting for sauce-connect to be ready"
    sleep 5
done

# Updating to allow several parallel runs.
sed -i "s/id: sauce-ci-tunnel/id: ${SAUCE_TUNNELID}/" .sauce/config.yml

# Start Local service
cd site/dist && python3 -m http.server 8080 > /tmp/web.log 2>&1 &
WEBSERVER_PID=${!}

# Run tests
saucectl run -c ./.sauce/config.yml --test-env sauce --region us-west-1
SAUCECTL_RETURN=${?}

# Cleaning and dumping logs
kill -INT ${WEBSERVER_PID}
kill -INT ${SC_PID}

exit ${SAUCECTL_RETURN}