migrate("openmrs/apps/documentUpload/app.json", function (jsonObject) {
    return jsonObject[0];
});

migrate("openmrs/apps/documentUpload/extension-Patient Document.json", function (jsonObject) {
    var extensionMap = {};
    jsonObject.forEach(function (extension) {
        var extensionKey = extension.id.toLowerCase().replace(/\./g, "_"); //Replace all . with _
        extensionMap[extensionKey] = extension;
    });
    return extensionMap;
});

migrate("openmrs/apps/documentUpload/extension-RADIOLOGY.json", function (jsonObject) {
    var extensionMap = {};
    jsonObject.forEach(function (extension) {
        var extensionKey = extension.id.toLowerCase().replace(/\./g, "_"); //Replace all . with _
        extensionMap[extensionKey] = extension;
    });
    return extensionMap;
});
