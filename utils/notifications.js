import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { AsyncStorage } from "react-native";

const NOTIFICATION_KEY = "mobileFlashcards:notifications";

export function clearLocalNotifcations() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotifcations() {
  console.warn("ok! got your notif");
  return {
    title: " Mobile Flashcard study reminder",
    body: "👋 dont forget to study Today!!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: "false",
      vibrate: "true"
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (Constants.isDevice && status === "granted") {
            console.log("Notification permissions granted.");
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(15);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotifcations(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }

          if (status !== "granted") {
            alert("Hey! You have not enabled selected permissions");
          }
        });
      }
    });
}
