var traverseJsonObjectForBaordsAndAddLabel = function (jsonObject) {
    for (var child in jsonObject) {
        if (jsonObject[child].extensionPointId=="org.bahmni.clinical.consultation.board") {
            jsonObject[child].translationKey = jsonObject[child].label;
            delete jsonObject[child].label;
        }
        if(jsonObject[child].extensionPointId=="org.bahmni.patient.search") {
            jsonObject[child].extensionParams.translationKey = jsonObject[child].extensionParams.display;
            delete jsonObject[child].extensionParams.display;
        }
    };


    return jsonObject;

}

migrate("openmrs/apps/clinical/extension.json", traverseJsonObjectForBaordsAndAddLabel);
migrate("openmrs/apps/documentUpload/extension-Patient Document.json", traverseJsonObjectForBaordsAndAddLabel);
migrate("openmrs/apps/documentUpload/extension-RADIOLOGY.json", traverseJsonObjectForBaordsAndAddLabel);
migrate("openmrs/apps/adt/extension.json", traverseJsonObjectForBaordsAndAddLabel);
migrate("openmrs/apps/orders/extension.json", traverseJsonObjectForBaordsAndAddLabel);