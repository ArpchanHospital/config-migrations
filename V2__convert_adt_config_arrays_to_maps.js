migrate("openmrs/apps/adt/app.json", function (jsonObject) {
    //Remove the array container
    jsonObject = jsonObject[0];

    //Convert the sections array to map
    var sectionsMap = {};
    jsonObject.config.dashboard.sections.forEach(function (section) {
        var sectionKey = section.title.toLowerCase().replace(/\s/g, "_"); //Replace all spaces with _
        sectionsMap[sectionKey] = section;
    });
    jsonObject.config.dashboard.sections = sectionsMap;
    return jsonObject;
});

migrate("openmrs/apps/adt/extension.json", function (jsonObject) {
    var extensionMap = {};
    jsonObject.forEach(function (extension) {
        var extensionKey = extension.id.toLowerCase().replace(/\./g, "_"); //Replace all . with _
        extensionMap[extensionKey] = extension;
    });
    return extensionMap;
});
