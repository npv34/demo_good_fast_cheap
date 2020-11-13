function play(id) {
    let good = document.getElementById('good');
    let fast = document.getElementById('fast');
    let cheap = document.getElementById('cheap');
    console.log(fast.checked)
    if (id == 'good') {
        if (good.checked == true) {
            if (fast.checked == true) {
                cheap.checked = false;
            }
        }
    } else if (id == 'fast') {
        if (fast.checked == true) {
            if (cheap.checked == true) {
                console.log(1)
                good.checked = false;
            }
        }
    } else {
        if (cheap.checked == true) {
            if (good.checked == true) {
                fast.checked = false;
            }
        }
    }

    document.getElementById('cheap').checked = cheap.checked;
    document.getElementById('good').checked = good.checked;
    document.getElementById('fast').checked = fast.checked;
}
