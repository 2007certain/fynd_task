'use strict';
const birthdays = data;
var markup = '', sunday = '', monday = '', tuesday = '', wednesday = '', thursday = '', friday = '', saturday = '';
document.getElementById("myTextarea").value = JSON.stringify(birthdays);

function getNameInitials(name) {
    let names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

function drawCards(peoplesData) {
    sunday = '', monday = '', tuesday = '', wednesday = '', thursday = '', friday = '', saturday = '';
    peoplesData.sort(function (a, b) {
        return new Date(b.birthday) + new Date(a.birthday);
    });
    peoplesData.forEach(element => {
        element['day'] = new Date(element.birthday).getDay();
        switch (element.day) {
            case 0:
                sunday += `<div>${getNameInitials(element.name)}</div>`
                break;
            case 1:
                monday += `<div>${getNameInitials(element.name)}</div>`
                break;
            case 2:
                tuesday += `<div>${getNameInitials(element.name)}</div>`
                break;
            case 3:
                wednesday += `<div>${getNameInitials(element.name)}</div>`
                break;
            case 4:
                thursday += `<div>${getNameInitials(element.name)}</div>`
                break;
            case 5:
                friday += `<div>${getNameInitials(element.name)}</div>`
                break;
            case 6:
                saturday += `<div>${getNameInitials(element.name)}</div>`
                break;
        }
    });
    markup = `<div class="calendars">
                    <div class="card">
                        <div class="card-head">MON</div>
                        <div class="card-body">${monday ? monday : '<div class="no-birthday">No Birthday</div>'}</div>
                    </div>
                    <div class="card">
                        <div class="card-head">TUE</div>
                        <div class="card-body">${tuesday ? tuesday : '<div class="no-birthday">No Birthday</div>'}</div>
                    </div>
                    <div class="card">
                        <div class="card-head">WED</div>
                        <div class="card-body">${wednesday ? wednesday : '<div class="no-birthday">No Birthday</div>'}</div>
                    </div>
                    <div class="card">
                        <div class="card-head">THU</div>
                        <div class="card-body">${thursday ? thursday : '<div class="no-birthday">No Birthday</div>'}</div>
                    </div>
                    <div class="card">
                        <div class="card-head">FRI</div>
                        <div class="card-body">${friday ? friday : '<div class="no-birthday">No Birthday</div>'}</div>
                    </div>
                    <div class="card">
                        <div class="card-head">SAT</div>
                        <div class="card-body">${saturday ? saturday : '<div class="no-birthday">No Birthday</div>'}</div>
                    </div>
                    <div class="card">
                        <div class="card-head">SUN</div>
                        <div class="card-body">${sunday ? sunday : '<div class="no-birthday">No Birthday</div>'}</div>
                    </div>
                  </div>`;
    let cal = document.getElementById("calendars");
    cal.innerHTML = markup;
}

drawCards(birthdays)


function handleInput() {
    let inputValue = document.getElementById("yearInput").value;
    if (inputValue && inputValue.length === 4 && inputValue.match(/^[0-9]+$/)) {
        let updated = birthdays.filter(element => element.birthday.split('/')[2] === inputValue);
        drawCards(updated);
    } else {
        console.log("invalid value");
    }
}