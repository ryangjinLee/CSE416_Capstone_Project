import json

def merge_features(geojson_file, output_file):
    # Load the GeoJSON file
    with open(geojson_file, 'r') as f:
        geojson_data = json.load(f)

    merged_features = []
    features = geojson_data["features"]

    # Define the custom groupings

    groupings = [
        [1 ,2 ,3 ,4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13 ,14, 15, 16],
        [17 ,18, 19, 20 ],
        [21 ,22, 24, 25],
        [23 ,26]
    ]

    # Helper function to find a feature by its ID
    def find_feature_by_id(feature_id):
        return next((feature for feature in features if feature["id"] == feature_id), None)

    # Iterate over each group and merge features
    name_counter = 1
    for group in groupings:
        # Initialize the merged geometry
        merged_geometry = {
            "type": "MultiPolygon",
            "coordinates": []
        }

        # For each feature ID in the group, merge its geometry
        for feature_id in group:
            feature = find_feature_by_id(feature_id)
            if feature:
                print("merging ", feature_id)
                merged_geometry["coordinates"].extend(feature["geometry"]["coordinates"])
                print(len(merged_geometry["coordinates"]))

        # Create the new merged feature
        merged_feature = {
            "type": "Feature",
            "id": name_counter,  # Use the incremental name counter as the ID
            "properties": {
                "name": str(name_counter)  # Incremental name starting from 1
            },
            "geometry": merged_geometry
        }

        # Add the merged feature to the list
        merged_features.append(merged_feature)

        # Increment the name counter
        name_counter += 1

    # Create a new GeoJSON object with the merged features
    merged_geojson = {
        "type": "FeatureCollection",
        "crs": geojson_data["crs"],
        "features": merged_features
    }

    # Save the merged GeoJSON to a new file
    with open(output_file, 'w') as f:
        json.dump(merged_geojson, f, indent=4)

# Example usage
geojson_file = 'output.json'  # Replace with your input geojson file path
output_file = 'output4.json'  # Replace with the desired output file path

merge_features(geojson_file, output_file)
