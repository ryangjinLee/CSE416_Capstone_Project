export const VALUES = {
  UNHIGHLIGHTED_DISTRICT_OPACITY: 0.35,
};

export const MESSAGES = {
  NoInfoToDisplayMsg: "Hover over a display to see more info!",
  ViewAndFilterDistrictingsMsg: "View and Filter Districtings",
  ReturnToStateSelectionMsg: "Return to State Selection",
};

export const IDs = {
  PRECINCT_LINE_LAYER_ID: "precinct-outline-layer",
  PRECINCT_FILL_LAYER_ID: "precinct-fill-layer",
  DISTRICT_LINE_LAYER_ID: "district-outline-layer",
  DISTRICT_FILL_LAYER_ID: "district-fill-layer",
  COUNTY_LINE_LAYER_ID: "county-outline-layer",
  COUNTY_FILL_LAYER_ID: "county-fill-layer",
  PRECINCT_SOURCE_ID: "precinct-source",
  DISTRICT_SOURCE_ID: "district-source",
  COUNTY_SOURCE_ID: "county-source",
};

/* To correspond with the labels in the GeoJsonBuilder */
/* TODO Move this to a labels utility file */
export const PROPERTY_LABELS = {
  /* District Properties */
  PRECINCT_NAME: "name",
  DISTRICT_ID: "id",
  PRECINCT_ID: "id",
  COUNTY_NAME: "county",

  /* Population Properties */
  TOTAL_POPULATION: "TOTAL_POPULATION",
  TOTAL_VOTER_COUNT: "VOTER_COUNT",
  WHITE_COUNT: "RACE_WHITE_COUNT",
  BLACK_COUNT: "RACE_BLACK_COUNT",
  HISPANIC_COUNT : "RACE_HISPANIC_COUNT",
  ASIAN_COUNT: "RACE_ASIAN_COUNT",
  NATIVE_COUNT: "RACE_NATIVE_COUNT",
  PACIFIC_ISLANDER_COUNT: "RACE_PACIFIC_ISLANDER_COUNT",
  UNDESIGNATED_COUNT: "RACE_UNDESIGNATED_COUNT",
  RACE_OTHER_COUNT: "RACE_OTHER_COUNT",
  MINORITY_POPULATION: "MINORITY_POPULATION",

  /* Objective Function Properties */
  POPULATION_EQUALITY: "POPULATION_EQUALITY",
  POLITICAL_FAIRNESS: "POLITICAL_FAIRNESS",
  SPLIT_COUNTIES: "SPLIT_COUNTIES",
  DEVIATION_FROM_AVG_DISTRICTING: "DEVIATION_FROM_AVG_DISTRICTING",
  DEVIATION_FROM_ENACTED_DISTRICTING: "DEVIATION_FROM_ENACTED_DISTRICTING",
  COMPACTNESS: "COMPACTNESS",
  MAJORITY_MINORITY_DISTRICT: "MAJORITY_MINORITY_DISTRICT",

  /*Districting Specific-Properties */
  AVG_POPULATION_EQUALITY: "AVG_POPULATION_EQUALITY",
  SPLIT_COUNTIES_SCORE: "SPLIT_COUNTY_SCORE",
  TOTAL_MAJORITY_MINORITY_DISTRICTS: "TOTAL_MAJORITY_MINORITY_DISTRICTS",
  AVG_DEVIATION_FROM_AVG_DISTRICTING: "AVG_DEVIATION_FROM_AVG_DISTRICTING",
  AVG_DEVIATION_FROM_ENACTED_DISTRICTING:
    "AVG_DEVIATION_FROM_ENACTED_DISTRICTING",
  AVG_COMPACTNESS: "AVG_COMPACTNESS",
};
