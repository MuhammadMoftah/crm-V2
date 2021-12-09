const filters = [
  {
    id: "ProjectsFilterName",
    name: "Project Name",
    key: "filter[name]",
    type: "string",
    multiSelect: true
  },
  {
    id: "ProjectsFilterLocation",
    name: "Location",
    key: "filter[location_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "ProjectsFilterDeveloper",
    name: "Developer",
    key: "filter[developer_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "ProjectsFilterStatus",
    name: "Status",
    key: "filter[status]",
    values: ["active", "inactive"],
    type: "string",
    multiSelect: true
  }
];

export default filters;
