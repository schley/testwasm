# testwasm
minimal wasm based webpage

### requires a working emscripten installation
1.  cd pages/testwasm/
2.  ./cleanit.sh
- requires a chmod +x immediately after checkout from github
- built wasm and js file are available, but building is recommended
4.  ./buildit.sh
also requires chmod +x prior to first use

- the wasm file resides in the same directory as generated javascript file
- two files should be generated in the directory

### back to testwasm base directory 
1.  node available from emscripten initialization (emsdk.sh)
2.  node install.js

### simple webpage on localhost:31290
1.  link to testwasm press
2.  toggle button to exercise simple wasm test
3.  control-c to exit node ...

### tested only on WSL Ubuntu 20.04 
