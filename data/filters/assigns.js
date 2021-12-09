const filters = [
  {
    id: "AssignsFilterAgent",
    name: "agent",
    key: "filter[agent_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "AssignsFilterCreateBetween",
    name: "create between",
    key: "filter[created_between]",
    type: "string",
    multiSelect: true
  },
  {
    id: "AssignsFilterAssignBy",
    name: "assign by",
    key: "filter[assigned_by]",
    type: "string",
    multiSelect: true,
  },
  {
    id: "AssignsFilterLeadDefaultMobile",
    name: "lead mobile",
    key: "filter[lead.defaultMobile.mobile]",
    type: "string",
    multiSelect: true,
  },
  {
    id: "AssignsFilterFranchiseID",
    name: "franchise",
    key: "filter[lead.franchise_id]",
    type: "franchise id",
    multiSelect: true,
  }
];

export default filters;
