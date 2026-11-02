
const readline = require('node:readline');
const { tools, executeTool } = require('./tools');

const METHODS = {
    INIT: 'initialize',
    INITIALIZED: 'notifications/initialized',
    LIST: 'tools/list',
    CALL: 'tools/call'
};

function success(id, result) {
    return {
        jsonrpc: '2.0',
        id, result
    };
}

function error(id, code, message) {
    return {
        jsonrpc: '2.0',
        id,
        error: { code, message }
    };
}

function handle(msg) {
    switch (msg.method) {
        case METHODS.INIT:
            return success(msg.id, {
                protocolVersion: msg.params.protocolVersion,
                capabilities: { tools: {} },
                serverInfo: {
                    name: 'lectures',
                    version: '0.1.0'
                }
            });

        case METHODS.INITIALIZED:
            return null;

        case METHODS.LIST:
            return success(msg.id, { tools });

        case METHODS.CALL: {
            const name = msg.params?.name;
            const result = executeTool(name, msg.params?.arguments);

            return result
                ? success(msg.id, result)
                : error(msg.id, -32602, `Unknown tool: ${name}`);
        }

        default:
            return error(msg.id, -32601, `Method not found: ${msg.method}`);
    }
}

const input = readline.createInterface({
    input: process.stdin
});

input.on('line', line => {
    try {
        const msg = JSON.parse(line);
        const response = handle(msg);

        if (response !== null) {
            process.stdout.write(JSON.stringify(response) + '\n');
        }
    } catch (err) {
        console.error(err);

        process.stdout.write(JSON.stringify(
            error(null, -32700, 'Invalid JSON request')
        ) + '\n');
    }
});
