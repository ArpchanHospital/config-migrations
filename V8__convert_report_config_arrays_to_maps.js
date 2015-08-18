migrate("openmrs/apps/reports/app.json", function (jsonObject) {
    return jsonObject[0];
});

migrate("openmrs/apps/reports/extension.json", function (jsonObject) {
    return {};
});
