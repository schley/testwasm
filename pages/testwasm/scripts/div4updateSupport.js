
var Module = {
	onRuntimeInitialized: function() {
		checkit();
		
	}
};

function checkit() {
    val = 21;
    console.log("Doubler of " + val + " = " + _doubler(val));
    console.log("tripler of " + val + " = " + _tripler(val));
}

function updateFromWasm {
	var elem_str = document.getElementById('4.0.1');
	var str_content = AsciiToString(_div4updateArray());
	// elem_str.innerHTML = str_content;
	console.log("updateFromWasm : string = " + str_content);
	return str_content;
}

function updatediv4() {
    var elem = document.getElementById('4.0.1');
	if (typeof elem !== 'undefined') {
	   // # elem.innerHTML = updateFromWasm();
	   var elem_update = updateFromWasm();
	   elem.innerHTML = elem_update;
	   length_elem = document.getElementById('4.0.2');
	   if (typeof length_elem !== 'undefined') {
	       var fromwasmLength = _div4updateLength();
	       console.log("updatediv4 : length_elem = " + fromwasmLength);
	       length_elem.innerHTML = "(source: github.com/schley/testwasm) LENGTH = " + _div4updateLength();
	   }
	   else {
	       console.log("updatediv4 found null length_elem");
	   }
	} else {
	    console.log("updatediv4 found null elem");
	}
}

