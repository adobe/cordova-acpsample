package com.cowbell.cordova.geofence;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;

import com.google.android.gms.location.GeofencingClient;
import com.google.android.gms.location.LocationServices;

import java.util.List;

public class RemoveGeofenceCommand extends AbstractGoogleServiceCommand {
    private List<String> geofencesIds;

    public RemoveGeofenceCommand(Context context, List<String> geofencesIds) {
        super(context);
        this.geofencesIds = geofencesIds;
    }

    @Override
    protected void ExecuteCustomCode() {
        if (geofencesIds != null && geofencesIds.size() > 0) {
            logger.log(Log.DEBUG, "Removing geofences...");

            GeofencingClient geofencingClient = LocationServices.getGeofencingClient(this.context);
            geofencingClient
                    .removeGeofences(geofencesIds)
                    .addOnSuccessListener((Void aVoid) ->
                    {
                        logger.log(Log.DEBUG, "Geofences successfully removed");
                        CommandExecuted();
                    })
                    .addOnFailureListener((@NonNull Exception e) -> {
                        String message = "Removing geofences failed - " + e.getMessage();
                        logger.log(Log.ERROR, message);
                        CommandExecuted(new Error(message));
                    });
        } else {
            logger.log(Log.DEBUG, "Tried to remove Geofences when there were none");
            CommandExecuted();
        }
    }
}
