#!/bin/bash
em++ -v div4update.cxx -s EXPORTED_FUNCTIONS="['_doubler', '_tripler', '_div4updateArray', '_div4updateLength']" -s EXPORTED_RUNTIME_METHODS="['AsciiToString']" -o "div4update.wasm" -o "div4update.js"
