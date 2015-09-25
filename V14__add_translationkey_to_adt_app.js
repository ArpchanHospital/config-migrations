var traverseJsonObjectForDashboardsAndInsertTranslationKey = function (jsonObject) {
    var sections;
    if (jsonObject) {
        if(jsonObject.config)
        var dashboard=jsonObject.config.dashboard;

        if(dashboard) {
            dashboard.translationKey = dashboard.dashboardName;
            delete dashboard.dashboardName;
            sections= dashboard.sections;
            for(var section in sections) {
                sections[section].translationKey = sections[section].title;
                delete sections[section].title;
            }
        }
    };
    return jsonObject;
}


migrate("openmrs/apps/adt/app.json", traverseJsonObjectForDashboardsAndInsertTranslationKey);