from json import load, JSONEncoder
from argparse import ArgumentParser, FileType
from shapely.geometry import Polygon, mapping
from shapely.ops import unary_union
import sys

parser = ArgumentParser(description="Group (merge) the GeoJSON geometries based on predefined groupings.")

defaults = dict(outfile=sys.stdout)

parser.set_defaults(**defaults)

parser.add_argument('infile', type=FileType('r'), help='GeoJSON file whose features will be merged')
parser.add_argument('-o', '--outfile', dest='outfile', type=FileType('w'), help='Outfile')

# Define the custom groupings by feature IDs
groupings = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 11],
    [10, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 24, 25],
    [23, 26]
]




def extract_polygons(geometry):
    """Helper function to extract Polygons from both Polygon and MultiPolygon geometries."""
    if geometry['type'] == 'Polygon':
        return [Polygon(geometry['coordinates'][0])]
    elif geometry['type'] == 'MultiPolygon':
        polygons = []
        for polygon_coords in geometry['coordinates']:
            polygons.append(Polygon(polygon_coords[0]))  # Exterior ring
        return polygons
    else:
        return []

def find_feature_by_id(features, feature_id):
    """Helper function to find a feature by its ID."""
    return next((feature for feature in features if feature["id"] == feature_id), None)

if __name__ == '__main__':
    args = parser.parse_args()
    infile = args.infile
    outfile = args.outfile

    file = load(infile)
    merged_features = []
    feature_counter = 1  # Start the feature counter at 1

    # Iterate through each group of feature IDs and merge them
    for group in groupings:
        polygons = []

        # Collect polygons from all features in the group
        for feature_id in group:
            feature = find_feature_by_id(file['features'], feature_id)
            if feature:
                geom = feature['geometry']
                polygons.extend(extract_polygons(geom))  # Extract and add polygons

        # Merge the polygons within the group
        new_geometry = mapping(unary_union(polygons))

        # Create a new merged feature
        new_feature = dict(
            type='Feature',
            id=feature_counter,  # Increment the ID for each merged feature
            properties=dict(name=str(feature_counter)),  # Incrementing name property
            geometry=dict(type=new_geometry['type'], coordinates=new_geometry['coordinates'])
        )

        merged_features.append(new_feature)
        feature_counter += 1  # Increment the feature counter

    # Create the output GeoJSON structure
    outjson = dict(type='FeatureCollection', features=merged_features)

    # Write the merged features to the output file
    encoder = JSONEncoder(separators=(',', ':'))
    encoded = encoder.iterencode(outjson)

    output = outfile

    for token in encoded:
        output.write(token)
