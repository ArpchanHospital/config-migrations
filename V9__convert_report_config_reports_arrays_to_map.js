migrate("openmrs/apps/reports/reports.json", function (jsonObject) {
  var reportMap = {};
  jsonObject.forEach(function (report) {
      var reportKey = report.name.toLowerCase().replace(/[^\w\s]/g,"") //Remove all special characters
                        .replace(/[\.\s\/]/g, "_"); //Replace all spaces with _
      reportMap[reportKey] = report;
  });
  return reportMap;
});
