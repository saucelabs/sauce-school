#!/usr/bin/env bash

SAUCECTL_VERSION=0.23.2
SAUCE_CONNECT_VERSION=4.6.3
SAUCE_CONNECT_URL=https://saucelabs.com/downloads/sc-${SAUCE_CONNECT_VERSION}-linux.tar.gz

# Install sauce-connect + saucectl
curl -L -s ${SAUCE_CONNECT_URL} | sudo tar -xvz -C /usr/ --strip-components=1 sc-${SAUCE_CONNECT_VERSION}-linux/bin/sc
curl -L -s  https://github.com/saucelabs/saucectl/releases/download/v${SAUCECTL_VERSION}/saucectl_${SAUCECTL_VERSION}_linux_64-bit.tar.gz | sudo tar -xvz -C /usr/bin/

# Start sauce-connect
echo "Starting sauce-connect..."
sc -u ${SAUCE_USERNAME} -k ${SAUCE_ACCESS_KEY} > /tmp/sauce-connect.log --pidfile /tmp/sc.pid &
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

    if grep -F "Sauce Connect is up, you may start your tests" /tmp/sauce-connect.log;then
        break;
    fi

    echo "Waiting for sauce-connect to be ready"
    sleep 5
done

SC_TUNNEL_LINE=$(grep -oE "Tunnel ID: (.+)$" /tmp/sauce-connect.log)
[[ $SC_TUNNEL_LINE =~ Tunnel\ ID:\ (.+)$ ]]
SC_TUNNEL_ID=${BASH_REMATCH[1]}

echo "Tunnel ID: ${SC_TUNNEL_ID}"
sed -i "s/id: dummy-tunnel-id/id: ${SC_TUNNEL_ID}/" .sauce/config.yml 

# Start Local service
cd site/dist && python3 -m http.server 8080 > /tmp/web.log &
WEBSERVER_PID=${!}

# Run tests
saucectl run -c ./.sauce/config.yml --test-env sauce --region us-west-1

# Cleaning and dumping logs
kill -INT ${WEBSERVER_PID}
kill -INT ${SC_PID}

echo "Sauce-connect logs:"
cat /tmp/sauce-connect.log
echo ""
echo "Webserver logs:"
cat /tmp/web.log
