let curr, cov, diff, year, month, date, hours, mins, secs, msecs, finalSend;

// SAVING TIME FROM PAST
const coverTime = {
    cyr: 2019,
    cmnth: 11,
    cdate: 12,
    chrs: 00,
    cmins: 00,
    csecs: 00,
    cmsecs: 00 
}

const lockTime = {
    cyr: 2020,
    cmnth: 02,
    cdate: 23,
    chrs: 00,
    cmins: 00,
    csecs: 00,
    cmsecs: 00 
}

const coronaVal = {
    years: '.coronaBox .years',
    months: '.coronaBox .months',
    days: '.coronaBox .days',
    hours: '.coronaBox .hours',
    mins: '.coronaBox .minutes',
    secs: '.coronaBox .seconds',
    msecs: '.coronaBox .msecs'
}

const lockVal = {
    years: '.lockBox .years',
    months: '.lockBox .months',
    days: '.lockBox .days',
    hours: '.lockBox .hours',
    mins: '.lockBox .minutes',
    secs: '.lockBox .seconds',
    msecs: '.lockBox .msecs'
}

        
// CALCULATE TIME FUNCTION
function calcTime(coverTime) {
    cov = new Date(coverTime.cyr, coverTime.cmnth, coverTime.cdate, coverTime.chrs, coverTime.cmins, coverTime.csecs, coverTime.cmsecs);

    diff = new Date(new Date() - cov);

    year = (diff/(1000*60*60*24*365)).toFixed();
    month = diff.getMonth();
    date = diff.getDate()-1;
    hours = diff.getHours();
    mins = diff.getMinutes();
    secs = diff.getSeconds();
    msecs = diff.getMilliseconds();

    finalSend = {
        year: year,
        month: month,
        date: date,
        mins: mins,
        hours: hours,
        secs: secs,
        msecs: msecs
    }

    return finalSend;
    
}


// UPDATE UI FUNCTION
function updateUI(data, elLoca) {
    
    // ADDS ZERO TO SINGLE DIGITS BEFORE ADDING TO UI
    function addZero(x) {
        if (x < 10) {
            x = '' + 0 + x;
            return x;
        } else {
            return x;
        }
    }

    // ADD UPDATED TIMES TO THE UI
    document.querySelector(elLoca.years).innerHTML = addZero(data.year);
    document.querySelector(elLoca.months).innerHTML = addZero(data.month);
    document.querySelector(elLoca.days).innerHTML = addZero(data.date);
    document.querySelector(elLoca.hours).innerHTML = addZero(data.hours);
    document.querySelector(elLoca.mins).innerHTML = addZero(data.mins);
    document.querySelector(elLoca.secs).innerHTML = addZero(data.secs);
    document.querySelector(elLoca.msecs).innerHTML = addZero(data.msecs);
}


function updater() {
    
    let coroTime = calcTime(coverTime);
    updateUI(coroTime, coronaVal);
        
    let lkTime = calcTime(lockTime);
    updateUI(lkTime, lockVal);
}


setInterval(updater, 100);

