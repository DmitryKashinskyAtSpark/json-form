const data = {
  orgName: "test org name",
};

const schema = {
  type: "object",
  properties: {
    orgName: {
      type: "string"
    },
    bNumber: {
      type: "string",
      
    },
    address: {
      type: "object",
      properties: {
        firstLine: {
          type: "string"
        },
        city: {
          type: "string"
        },
        state: {
          type: "string"
        },
        zipCode: {
          type: "string"
        }
      },
      required: [
        "firstLine",
        "city",
        "state",
        "zipCode"
      ]
    }
  },
  required: [
    "orgName",
    "bNumber",
    "address"
  ]
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      label: "Controlling org name",
      scope: "#/properties/orgName"
    },
    {
      type: "Control",
      label: "B number",
      scope: "#/properties/bNumber"
    },
    {
      type: "Group",
      label: "Controlling Org Address",
      elements: [
        {
          type: "Control",
          label: "Address",
          scope: "#/properties/address/properties/firstLine"
        },
        {
          type: "Control",
          label: "City",
          scope: "#/properties/address/properties/city"
        },
        {
          type: "Control",
          label: "State/Region",
          scope: "#/properties/address/properties/state"
        },
        {
          type: "Control",
          label: "Zip code",
          scope: "#/properties/address/properties/zipCode"
        }
      ]
    }
  ]
};

const orgBucket = {
  data,
  schema,
  uischema
};

export default orgBucket;
