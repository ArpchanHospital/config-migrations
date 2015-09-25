var traverseJsonObjectForSectionsAndInsertDisplayOrderKey = function (jsonObject) {
    for (var child in jsonObject) {

       jsonObject[child].translationKey=jsonObject[child].title;
        delete jsonObject[child].title;
        var sections = jsonObject[child]["sections"];
        if (sections) {

            for (var section in sections) {
               sections[section].config.translationKey=sections[section].config.title;
                sections[section].translationKey=sections[section].title;
                delete sections[section].config.title;
            }
        }
    }
    return jsonObject;
}


migrate("openmrs/apps/clinical/visit.json", traverseJsonObjectForSectionsAndInsertDisplayOrderKey);

