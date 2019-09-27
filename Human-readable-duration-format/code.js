function formatDuration(seconds) {
    // Complete this function
    if (seconds == 0) return `now`;
    if (seconds == 1) return `1 second`;
    let sec = min = hrs = day = years = 0;

    for (let i = 0; i < seconds; i++) {
        sec++;
        if (sec > 59) {
            sec = 0;
            min++;
        }
        if (min > 59) {
            min = 0;
            hrs++;
        }
        if (hrs > 23) {
            hrs = 0;
            day++;
        }
        if (day > 364) {
            day = 0;
            years++;
        }
    }

    let u = v = w = x = y = undefined;
    let arr = [];
    if (sec > 0) {
        u = `${sec} ${sec == 1 ? "second" : "seconds" }`
        arr.push(u)
    }
    if (min > 0) {
        v = `${min} ${min == 1 ? "minute" : "minutes" }`
        arr.push(v)
    }
    if (hrs > 0) {
        w = `${hrs} ${hrs == 1 ? "hour" : "hours" }`
        arr.push(w)
    }
    if (day > 0) {
        x = `${day} ${day == 1 ? "day" : "days" }`
        arr.push(x)
    }
    if (years > 0) {
        y = `${years} ${years == 1 ? "year" : "years" }`
        arr.push(y)
    }

    arr = arr.filter(n => n);

    if (arr.length < 1) {
        return arr[0];
    }
    if (arr.length == 2) {
        return arr[1] + ' and ' + arr[0];
    }
    if (arr.length == 3) {
        return arr[2] + ', ' + arr[1] + ' and ' + arr[0];
    }
    if (arr.length == 4) {
        return arr[3] + ', ' + arr[2] + ', ' + arr[1] + ' and ' + arr[0];
    }
    if (arr.length == 5) {
        return arr[4] + ', ' + arr[3] + ', ' + arr[2] + ', ' + arr[1] + ' and ' + arr[0];
    }

}

console.log(formatDuration(3662))
// console.log(formatDuration(340001515151515151515515))