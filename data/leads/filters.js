const filters = [
  {
    id: "LeadFilterName",
    name: "name",
    key: "filter[name]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterMobile",
    name: "mobile",
    key: "filter[mobiles.mobile]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterFranchise",
    name: "franchise",
    key: "filter[franchise.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterChannel",
    name: "channel",
    key: "filter[channel.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterProjects",
    name: "project",
    key: "filter[project.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterAgents",
    name: "agents",
    key: "filter[agent.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterTeamLeader",
    name: "team leader",
    key: "filter[agent.parent_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadCreatorAgents",
    name: "Creator",
    key: "filter[creator_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterTags",
    name: "tags",
    key: "filter[tags.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterCampaigns",
    name: "campaigns",
    key: "filter[campaign_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterStage",
    name: "stage",
    key: "filter[stage.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterSource",
    name: "source",
    key: "filter[source.id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterCreatedDate",
    name: "created date",
    key: "filter[created_between]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterAssignDate",
    name: "assign date",
    key: "filter[assigned_between]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterLastLeadActivity.agent",
    name: "last activity agent",
    key: "filter[lastLeadActivity.agent_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterLastLogAssignedBy",
    name: "last log assigned by",
    key: "filter[lastLog.assigned_by]",
    type: "string",
    multiSelect: true
  },
  {
    id: "LeadFilterLastCommentCommenter",
    name: "Last Comment by",
    key: "filter[lastComment.commenter_id]",
    type: "string",
    multiSelect: true
  }
];

export default filters;
