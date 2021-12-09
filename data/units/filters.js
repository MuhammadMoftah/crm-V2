const filters = [
  {
    id: "UnitsFilterName",
    name: "name",
    key: "filter[name]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterStatus",
    name: "status",
    key: "filter[status]",
    type: "string",
    values: ['active', 'inactive'],
    multiSelect: true
  },
  {
    id: "UnitsFilterUnittype",
    name: "unit type",
    key: "filter[unit_type_id]",
    type: "string",
    multiSelect: true
  },

  {
    id: "UnitsFilterDeveloper",
    name: "developer",
    key: "filter[developer_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterProject",
    name: "project",
    key: "filter[project_id]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterRooms",
    name: "rooms number",
    key: "filter[rooms_number]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterBathrooms",
    name: "bathrooms number",
    key: "filter[bathrooms_number]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterArea",
    name: "area",
    key: "filter[area]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterPrice",
    name: "Price range",
    key: "filter[price_between]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterCreated",
    name: "Created date",
    key: "filter[created_between]",
    type: "string",
    multiSelect: true
  },
  {
    id: "UnitsFilterAssigned",
    name: "Assigned date",
    key: "filter[assigned_between]",
    type: "string",
    multiSelect: true
  },



];

export default filters;
