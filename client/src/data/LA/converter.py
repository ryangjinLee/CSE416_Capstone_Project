import json

def convert_geojson_to_json_with_properties(geojson_file, output_file):
    # Load the GeoJSON file
    with open(geojson_file, 'r') as f:
        geojson_data = json.load(f)
    
    # Initialize counter for the name field
    counter = 1
    
    # Iterate over each feature and add the properties field
    for feature in geojson_data['features']:
        feature['properties'] = {'name': str(counter)}  # Make the value a string
        counter += 1
    
    # Save the modified data as JSON
    with open(output_file, 'w') as f:
        json.dump(geojson_data, f, indent=4)

# Example usage
geojson_file = 'NYS_Congressional_Districts_1248143431698889131.geojson'  # Replace with your actual geojson file path
output_file = 'output.json'  # Replace with the desired output file path

convert_geojson_to_json_with_properties(geojson_file, output_file)
