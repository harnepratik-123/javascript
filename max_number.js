function max() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
	var z = Number(document.getElementById('z').value);

    document.getElementById('result').innerHTML = Math.max(x , y, z);
    return false;
}