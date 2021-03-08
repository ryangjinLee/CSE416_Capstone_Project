import * as ActionTypes from './ActionTypes'

export const togglePrecinctSwitch = (bool) => {
    return {
        type: ActionTypes.TOGGLE_PRECINCT_SWITCH, 
        DisplayPrecincts : bool
    }
}

export const toggleDistrictSwitch = (bool) => {
    return {
        type: ActionTypes.TOGGLE_DISTRICT_SWITCH, 
        DisplayDistricts : bool
    }
}

export const toggleCountySwitch = (bool) => {
    return {
        type: ActionTypes.TOGGLE_COUNTY_SWITCH,
        DisplayCounties : bool
    }
}

export const setTentativeDistricting = (districting) => {
    return {
        type: ActionTypes.SET_TENTATIVE_DISTRICTING,
        TentativeDistricting : {
            name : districting.name,
            geoJson : districting.geoJson
        }
    }
}

export const setCurrentDistricting = (districting) => {
    return {
        type: ActionTypes.SET_CURRENT_DISTRICTING,
        CurrentDistricting : districting
    }
}

export const moveMouse = (event) => {
    if (event.nativeEvent) {
        return {
            type : ActionTypes.MOVE_MOUSE,
            MouseX : event.nativeEvent.offsetX,
            MouseY : event.nativeEvent.offsetY,
        }
    }
}

export const setMouseEntered = (bool) => {
    return {
        type : ActionTypes.SET_MOUSE_ENTERED,
        MouseEntered : bool,
    }
}

export const setFeaturedDistrict = (district) => {
    return {
        type : ActionTypes.SET_FEATURED_DISTRICT,
        FeaturedDistrict : district
    }
}

export const setFeaturedPrecinct = (precinct) => {
    return {
        type : ActionTypes.SET_FEATURED_PRECINCT,
        FeaturedPrecinct : precinct
    }
}

export const setLoadedStatus = (bool) => {
    return {
        type : ActionTypes.SET_LOADED_STATUS,
        Loaded : bool
    }
}

export const updateObjectiveFunctionSettings = (key, newValue) => {
    return {
        type : ActionTypes.UPDATE_OBJECTIVE_FUNCTION_SETTINGS,
        Key : key,
        NewValue : newValue
    }
}

export const updateConstraintSettings = (key, newValue) => {
    return {
        type : ActionTypes.UPDATE_CONSTRAINT_SETTINGS,
        Key : key,
        NewValue : newValue
    }
}

export const updateIncumbentProtection = (key, newValue) => {
    return {
        type : ActionTypes.UPDATE_INCUMBENT_PROTECTION,
        Key : key,
        NewValue : newValue
    }
}

export const setInSelectionMenu = (bool) => {
    return {
        type : ActionTypes.SET_IN_SELECTION_MENU,
        In : bool
    }
}

export const changeValueSortedBy = (value, descending) => {
    return {
        type: ActionTypes.CHANGE_VALUE_SORTED_BY,
        Value : value,
        Descending : descending
    }
}

export const changeComparisonDistrictingA = (districting) => {
    return {
        type: ActionTypes.CHANGE_COMPARISON_DISTRICTING_A,
        Districting : districting
    }
}

export const changeComparisonDistrictingB = (districting) => {
    return {
        type: ActionTypes.CHANGE_COMPARISON_DISTRICTING_B,
        Districting : districting
    }
}


export const addFeatureToHighlight = (feature) => {
    return {
        type : ActionTypes.ADD_FEATURE_TO_HIGHLIGHT,
        Feature : feature
    }
}


export const removeFeatureHighlighting = (feature) => {
    return {
        type : ActionTypes.REMOVE_FEATURE_HIGHLIGHTING,
        Feature : feature
    }
}

export const resetAllHighlighting = () => {
    return {
        type : ActionTypes.RESET_ALL_HIGHLIGHTING
    }
}

export const clearFeaturesToUnhighlight = () => {
    return {
        type : ActionTypes.CLEAR_FEATURES_TO_UNHIGHLIGHT
    }
}

export const loadInDistrictings = (districtings) => {
    return {
        type : ActionTypes.LOAD_IN_DISTRICTINGS,
        Districtings : districtings
    }
}

export const setViewingDistrictDetails = (bool) => {
    return {
        type : ActionTypes.SET_VIEWING_DISTRICT_DETAILS,
        Viewing : bool
    }
}

export const setCurrentTab = (tab) => {
    return {
        type : ActionTypes.SET_CURRENT_TAB,
        Tab : tab
    }
}

export const setMinimizedMap = (bool) => {
    return {
        type : ActionTypes.SET_MINIMIZED_MAP,
        Minimized : bool
    }
}

export const setViewport = (viewport) => {
    return {
        type : ActionTypes.SET_VIEWPORT,
        Viewport : viewport
    }
}