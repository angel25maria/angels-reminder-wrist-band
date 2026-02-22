let reminders = [];

function turnOn() {
    fetch("http://192.168.123.93/on");
}

function addReminder() {
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let medicine = document.getElementById("medicine").value;
    let everyday = document.getElementById("everyday").checked;

    if (time === "" || medicine === "") {
        alert("Please fill required fields!");
        return;
    }

    if (!everyday && date === "") {
        alert("Please select a date or choose Repeat Everyday!");
        return;
    }

    let reminderDateTime;

    if (everyday) {
        reminderDateTime = new Date();
        let timeParts = time.split(":");
        reminderDateTime.setHours(timeParts[0]);
        reminderDateTime.setMinutes(timeParts[1]);
        reminderDateTime.setSeconds(0);
    } else {
        reminderDateTime = new Date(date + "T" + time);
    }

    reminders.push({
        medicine: medicine,
        datetime: reminderDateTime,
        everyday: everyday
    });

    displayReminders();

    document.getElementById("medicine").value = "";
}

function displayReminders() {
    let list = document.getElementById("reminderList");
    list.innerHTML = "";

    reminders.forEach(reminder => {
        let li = document.createElement("li");

        if (reminder.everyday) {
            li.innerText = reminder.medicine +
                " - Everyday at " +
                reminder.datetime.toLocaleTimeString();
        } else {
            li.innerText = reminder.medicine +
                " - " +
                reminder.datetime.toLocaleString();
        }

        list.appendChild(li);
    });
}

setInterval(function () {
    let now = new Date();

    reminders.forEach(reminder => {

        let sameTime =
            now.getHours() === reminder.datetime.getHours() &&
            now.getMinutes() === reminder.datetime.getMinutes() &&
            now.getSeconds() === 0;

        if (sameTime) {

            if (reminder.everyday ||
                now.toDateString() === reminder.datetime.toDateString()) {

                turnOn();

                alert("⏰ Time to take: " + reminder.medicine);

                let audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
                audio.play();
            }
        }
    });
}, 1000);