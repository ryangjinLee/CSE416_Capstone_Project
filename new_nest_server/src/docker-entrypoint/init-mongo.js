db = db.getSiblingDB('cse416');

db.createCollection('state');
db.state.insert({ name: 'example', value: 1 });
