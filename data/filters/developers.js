const filters = [
  {
    id: "DeveloperFilterName",
    name: "Developer Name",
    key: "filter[name]",
    type: "string",
    multiSelect: true
  },
  {
    id: "DeveloperFilterWebsite",
    name: "Website",
    key: "filter[website]",
    type: "string",
    multiSelect: true
  },
  {
    id: "DeveloperFilterStatus",
    name: "Status",
    key: "filter[status]",
    values: ["active", "inactive"],
    type: "string",
    multiSelect: true
  },
  {
    id: "DeveloperFilterMobile",
    name: "Mobile",
    key: "filter[mobile]",
    type: "string",
    multiSelect: true
  }
];

export default filters;
