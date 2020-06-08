package com.cowbell.cordova.geofence;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.TaskStackBuilder;
import android.util.Log;

public class GeoNotificationNotifier {
    private NotificationManager notificationManager;
    private Context context;
    private BeepHelper beepHelper;
    private Logger logger;
    private NotificationChannel notificationChannel;

    public GeoNotificationNotifier(NotificationManager notificationManager, Context context) {
        this.notificationManager = notificationManager;
        this.context = context;
        this.beepHelper = new BeepHelper();
        this.logger = Logger.getLogger();

        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            notificationChannel = new NotificationChannel("channelId", "channelName", NotificationManager.IMPORTANCE_DEFAULT);
            notificationManager.createNotificationChannel(notificationChannel);
        }
    }

    public void notify(Notification notification, String transition) {
        notification.setContext(context);
        NotificationCompat.Builder mBuilder = null;

        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            mBuilder = new NotificationCompat.Builder(context, notificationChannel.getId());
        } else {
            mBuilder = new NotificationCompat.Builder(context);
        }
        mBuilder.setVibrate(notification.getVibrate())
                .setColor(notification.getColor())
                .setSmallIcon(notification.getSmallIcon())
                .setLargeIcon(notification.getLargeIcon())
                .setAutoCancel(true)
                .setContentTitle(notification.getTitle().replace("$transition", transition))
                .setContentText(notification.getText());

        if (notification.openAppOnClick) {
            String packageName = context.getPackageName();
            Intent resultIntent = context.getPackageManager()
                    .getLaunchIntentForPackage(packageName);

            if (notification.data != null) {
                resultIntent.putExtra("geofence.notification.data", notification.getDataJson());
            }

            resultIntent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);

            PendingIntent resultPendingIntent =
                    PendingIntent.getActivity(context,
                            notification.id,
                            resultIntent,
                            PendingIntent.FLAG_UPDATE_CURRENT
                    );

            mBuilder.setContentIntent(resultPendingIntent);
        }
        try {
            Uri notificationSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
            Ringtone r = RingtoneManager.getRingtone(context, notificationSound);
            r.play();
        } catch (Exception e) {
            beepHelper.startTone("beep_beep_beep");
            e.printStackTrace();
        }
        notificationManager.notify(notification.id, mBuilder.build());
        logger.log(Log.DEBUG, notification.toString());
    }
}
