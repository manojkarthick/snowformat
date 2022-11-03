#!/usr/bin/env node

const fs = require('fs');
const {program} = require('commander');
const sqlFormatter = require("snowsql-formatter");

program
    .version("0.1.1")
    .argument("<filepath>", "file to format")
    .action((filepath) => {
        try {
            if (fs.existsSync(filepath)) {
                const contents = fs.readFileSync(filepath, 'utf-8');
                const formatted = sqlFormatter.format(contents.toString());
                fs.writeFileSync(filepath, formatted);
            } else {
                console.error(`File not found: ${filepath}`)
            }
        } catch (err) {
            console.error("Encountered error: ", err);
        }

    });

program.parse(process.argv);
