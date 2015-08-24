var traverseJsonObjectForSectionsAndInsertDisplayOrderKey = function (jsonObject) {
    for (var child in jsonObject) {
        var sections = jsonObject[child]["sections"];
        if (sections) {
            var count = 0;
            for (var section in sections) {
                sections[section].displayOrder = count++;
            }
        }
    }
    return jsonObject;
}

migrate("openmrs/apps/clinical/dashboard.json", traverseJsonObjectForSectionsAndInsertDisplayOrderKey);

migrate("openmrs/apps/clinical/visit.json", traverseJsonObjectForSectionsAndInsertDisplayOrderKey);

migrate("openmrs/apps/adt/app.json", function (jsonObject) {
    var sections = jsonObject.config.dashboard.sections;
    if (sections) {
        var count = 0;
        for (var section in sections) {
            sections[section].displayOrder = count++;
        }
    }
    return jsonObject;
});