migrate("openmrs/apps/home/app.json", function (jsonObject) {
    return jsonObject[0];
});

migrate("openmrs/apps/home/extension.json", function (jsonObject) {
    var extensionMap = {};
    jsonObject.forEach(function (extension) {
        var extensionKey = extension.id.toLowerCase().replace(/\./g, "_"); //Replace all . with _
        extensionMap[extensionKey] = extension;
    });
    return extensionMap;
});