chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("muves-reminder", { periodInMinutes: 30 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "muves-reminder") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "/public/icon-128.png",
            title: "Time to muves",
            message: "Time to stand up and stretch!",
            priority: 2
        });
    }
});