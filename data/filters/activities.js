const filters = [
    {
        id: "ActivityFilterType",
        name: "type",
        key: "filter[type]",
        type: "string",
        multiSelect: true,
        values:['call','meeting','message']
    },
    {
        id: "ActivityFilterLead_id",
        name: "lead",
        key: "filter[lead_id]",
        type: "string",
        multiSelect: true
    },
    {
        id: "ActivityFilterLead_stage_id",
        name: "stage",
        key: "filter[lead_stage_id]",
        type: "string",
        multiSelect: true
    },
    {
        id: "ActivityFilterCreated_between",
        name: "created date",
        key: "filter[created_between]",
        type: "string",
        multiSelect: true
    },
    {
        id: "ActivityFilterActivity_date_between",
        name: "activity date",
        key: "filter[activity_date_between]",
        type: "string",
        multiSelect: true
    },
    {
        id: "ActivityFilterAgents",
        name: "agents",
        key: "filter[agent_id]",
        type: "string",
        multiSelect: true
    },
    {
        id: "ActivityFilterFilter_by_activity_status",
        name: "Overdue",
        key: "filter[filter_by_activity_status]",
        type: "string",
        multiSelect: true
    },
]

export default filters