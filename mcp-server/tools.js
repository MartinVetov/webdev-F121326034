
const fs = require('node:fs');
const path = require('node:path');

const lectures = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'lectures.json'), 'utf8')
);

const tools = [
    {
        name: 'find_lecture',
        description: 'Find a course lecture by number and return its title and topics.',
        inputSchema: {
            type: 'object',
            properties: {
                number: {
                    type: 'integer',
                    description: 'Lecture number from 1 to 10'
                }
            },
            required: ['number']
        }
    },
    {
        name: 'count_lectures',
        description: 'Count the total number of course lectures.',
        inputSchema: {
            type: 'object',
            properties: {}
        }
    }
];

function toolResult(text, isError = false) {
    return {
        content: [{ type: 'text', text: String(text) }],
        isError
    };
}

function executeTool(name, args = {}) {
    switch (name) {
        case 'find_lecture': {
            const number = args.number;

            if (!Number.isInteger(number)) {
                return toolResult('Lecture number must be an integer', true);
            }

            const lecture = lectures.find(item => item.number === number);

            return lecture ? toolResult(JSON.stringify(lecture)) :
                             toolResult(`Lecture ${number} not found`, true);
        }

        case 'count_lectures':
            return toolResult(lectures.length);

        default:
            return null;
    }
}

module.exports = { tools, executeTool };
