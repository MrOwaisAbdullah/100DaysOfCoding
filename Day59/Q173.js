var n = 10;
next: for (var i = 2; i <= n; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0)
            continue next;
    }
    alert(i);
}
