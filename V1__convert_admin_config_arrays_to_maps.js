migrate("openmrs/apps/admin/app.json", function (jsonObject) {
    return jsonObject[0];
});

migrate("openmrs/apps/admin/extension.json", function (jsonObject) {
    var jsonMap = {};
    jsonObject.forEach(function (extension) {
        var extensionKey = extension.label.toLowerCase().replace(/\s/g, "_"); //Replace all spaces with _
        jsonMap[extensionKey] = extension;
    });
    return jsonMap;
});



