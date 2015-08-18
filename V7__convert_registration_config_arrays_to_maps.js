migrate("openmrs/apps/registration/app.json", function (jsonObject) {
    return jsonObject[0];
});

migrate("openmrs/apps/registration/appTemplate.json", function (jsonObject) {
    var appTemplateMap = jsonObject[0];
    var configOptionsMap = {};
    appTemplateMap.configOptions.forEach(function (configOption) {
        configOptionsMap[configOption.name] = configOption;
    });
    appTemplateMap.configOptions = configOptionsMap;
    return appTemplateMap;
});

migrate("openmrs/apps/registration/extension.json", function (jsonObject) {
    var extensionMap = {};
    jsonObject.forEach(function (extension) {
        var extensionKey = extension.id.toLowerCase().replace(/\./g, "_"); //Replace all . with _
        extensionMap[extensionKey] = extension;
    });
    return extensionMap;
});