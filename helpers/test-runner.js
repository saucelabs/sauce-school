const { lookup } = require('dns');
const { hostname } = require('os');
const { spawn } = require('child_process');
const waitPort = require('wait-port');
const path = require('path');

const testPort = 8080;

const main = async () => {
    const testAddr = await new Promise((resolve) => {
        lookup(hostname(), (err, add) => resolve(add));
    });

    // Spawn local webserver
    const procWeb = spawn(process.argv[0], ['node_modules/.bin/gulp', 'serve:dist', `--port=${testPort}`], { cwd: path.join(__dirname, '..', 'site') });
    procWeb.stdout.pipe(process.stdout);
    procWeb.stderr.pipe(process.stderr);

    await waitPort({host: testAddr, port: testPort});

    const procTest = spawn('saucectl', ['run', '--env', `CYPRESS_HOST_URL=http://${testAddr}:${testPort}/`, '-c', '.sauce/local.yml']);
    procTest.stdout.pipe(process.stdout);
    procTest.stderr.pipe(process.stderr);

    procTest.on('exit', (exitCode) => {
        console.log(`saucectl: ExitCode=${exitCode}`)
        procWeb.kill('SIGTERM');
        process.exit(exitCode);
    })
};

(async () => {
    await main();
})();