const filters = [
  {
    id: "UsersFilterName",
    name: "name",
    key: "filter[name]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UsersFilterEmail",
    name: "email",
    key: "filter[email]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UsersFilterStatus",
    name: "status",
    key: "filter[status]",
    type: "string",
    multiSelect: true,
    values: ["active", "inactive"]
  }
];

export default filters;
