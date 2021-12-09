const filters = [
  {
    id: "CilFilterLead",
    name: "lead ",
    key: "filter[lead_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "CilFilterAgent",
    name: "agent ",
    key: "filter[agent_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "CilFilterCreator",
    name: "creator ",
    key: "filter[creator_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "CilFilterDeveloper",
    name: "developer ",
    key: "filter[developer_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "CilFilterProjects",
    name: "projects ",
    key: "filter[projects.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "CilFilterStatus",
    name: "status",
    key: "filter[status]",
    type: "string",
    multiSelect: true
  }
];

export default filters;
