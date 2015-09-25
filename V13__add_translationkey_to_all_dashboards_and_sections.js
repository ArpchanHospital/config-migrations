var traverseJsonObjectForDashboardssAndInsertTranslationKey = function (jsonObject) {
    var sections;
    for (var child in jsonObject) {
            jsonObject[child].translationKey = jsonObject[child].dashboardName;
            delete jsonObject[child].dashboardName;
        sections= jsonObject[child].sections;
       for(var section in sections) {
            sections[section].translationKey = sections[section].title;
            delete sections[section].title;
        }
    };
    return jsonObject;
}


migrate("openmrs/apps/clinical/dashboard.json", traverseJsonObjectForDashboardssAndInsertTranslationKey);