db = db.getSiblingDB('cse416');

db.createCollection('boxplots');
db.boxplots.insert({ name: 'ny_smd', value: {
    "total": [
      { "district": "1", "min": 9, "q1": 23, "median": 32, "q3": 36, "max": 40 },
      { "district": "2", "min": 9, "q1": 16, "median": 18, "q3": 36, "max": 55 },
      { "district": "3", "min": 2, "q1": 15, "median": 26, "q3": 43, "max": 55 },
      { "district": "4", "min": 6, "q1": 15, "median": 32, "q3": 45, "max": 57 },
      { "district": "5", "min": 0, "q1": 10, "median": 18, "q3": 28, "max": 37 },
      { "district": "6", "min": 10, "q1": 11, "median": 20, "q3": 40, "max": 60 },
      { "district": "7", "min": 5, "q1": 22, "median": 42, "q3": 50, "max": 66 },
      { "district": "8", "min": 3, "q1": 8, "median": 18, "q3": 19, "max": 35 },
      { "district": "9", "min": 0, "q1": 11, "median": 28, "q3": 43, "max": 61 },
      { "district": "10", "min": 3, "q1": 5, "median": 21, "q3": 26, "max": 43 },
      { "district": "11", "min": 6, "q1": 16, "median": 26, "q3": 33, "max": 41 },
      { "district": "12", "min": 5, "q1": 7, "median": 13, "q3": 16, "max": 19 },
      { "district": "13", "min": 8, "q1": 22, "median": 41, "q3": 48, "max": 61 },
      { "district": "14", "min": 5, "q1": 13, "median": 26, "q3": 30, "max": 44 },
      { "district": "15", "min": 7, "q1": 26, "median": 44, "q3": 45, "max": 58 },
      { "district": "16", "min": 4, "q1": 24, "median": 29, "q3": 49, "max": 68 },
      { "district": "17", "min": 3, "q1": 9, "median": 15, "q3": 30, "max": 48 },
      { "district": "18", "min": 5, "q1": 6, "median": 10, "q3": 17, "max": 31 },
      { "district": "19", "min": 4, "q1": 23, "median": 26, "q3": 33, "max": 39 },
      { "district": "20", "min": 9, "q1": 21, "median": 27, "q3": 33, "max": 46 },
      { "district": "21", "min": 5, "q1": 10, "median": 21, "q3": 29, "max": 48 },
      {
        "district": "22",
        "min": 10,
        "q1": 21,
        "median": 24,
        "q3": 44,
        "max": 57
      },
      { "district": "23", "min": 5, "q1": 19, "median": 39, "q3": 58, "max": 75 },
      { "district": "24", "min": 0, "q1": 6, "median": 7, "q3": 23, "max": 24 },
      { "district": "25", "min": 7, "q1": 16, "median": 36, "q3": 49, "max": 57 },
      { "district": "26", "min": 7, "q1": 24, "median": 25, "q3": 41, "max": 54 }
    ],
    "republican": [
      {
        "district": "1",
        "percentage": 10
      },
      {
        "district": "2",
        "percentage": 16
      },
      {
        "district": "3",
        "percentage": 17
      },
      {
        "district": "4",
        "percentage": 57
      },
      {
        "district": "5",
        "percentage": 57
      },
      {
        "district": "6",
        "percentage": 81
      },
      {
        "district": "7",
        "percentage": 58
      },
      {
        "district": "8",
        "percentage": 82
      },
      {
        "district": "9",
        "percentage": 81
      },
      {
        "district": "10",
        "percentage": 89
      },
      {
        "district": "11",
        "percentage": 91
      },
      {
        "district": "12",
        "percentage": 56
      },
      {
        "district": "13",
        "percentage": 88
      },
      {
        "district": "14",
        "percentage": 85
      },
      {
        "district": "15",
        "percentage": 93
      },
      {
        "district": "16",
        "percentage": 83
      },
      {
        "district": "17",
        "percentage": 73
      },
      {
        "district": "18",
        "percentage": 65
      },
      {
        "district": "19",
        "percentage": 56
      },
      {
        "district": "20",
        "percentage": 67
      },
      {
        "district": "21",
        "percentage": 42
      },
      {
        "district": "22",
        "percentage": 53
      },
      {
        "district": "23",
        "percentage": 50
      },
      {
        "district": "24",
        "percentage": 47
      },
      {
        "district": "25",
        "percentage": 62
      },
      {
        "district": "26",
        "percentage": 65
      }
    ],

    "democratic": [
      { "district": "1", "percentage": 90 },
      { "district": "2", "percentage": 84 },
      { "district": "3", "percentage": 83 },
      { "district": "4", "percentage": 43 },
      { "district": "5", "percentage": 43 },
      { "district": "6", "percentage": 19 },
      { "district": "7", "percentage": 42 },
      { "district": "8", "percentage": 18 },
      { "district": "9", "percentage": 19 },
      { "district": "10", "percentage": 11 },
      { "district": "11", "percentage": 9 },
      { "district": "12", "percentage": 44 },
      { "district": "13", "percentage": 12 },
      { "district": "14", "percentage": 15 },
      { "district": "15", "percentage": 7 },
      { "district": "16", "percentage": 17 },
      { "district": "17", "percentage": 27 },
      { "district": "18", "percentage": 35 },
      { "district": "19", "percentage": 44 },
      { "district": "20", "percentage": 33 },
      { "district": "21", "percentage": 58 },
      { "district": "22", "percentage": 47 },
      { "district": "23", "percentage": 50 },
      { "district": "24", "percentage": 53 },
      { "district": "25", "percentage": 38 },
      { "district": "26", "percentage": 35 }
    ]
  }
});

db.boxplots.insert({ name: 'ny_mmd2', value: {
    "total": [
      {
        "district": "District 1",
        "min": 7,
        "q1": 12,
        "median": 15,
        "q3": 30,
        "max": 43
      },

      {
        "district": "District 2",
        "min": 10,
        "q1": 29,
        "median": 30,
        "q3": 42,
        "max": 52
      },

      {
        "district": "District 3",
        "min": 6,
        "q1": 13,
        "median": 14,
        "q3": 27,
        "max": 38
      },

      {
        "district": "District 4",
        "min": 6,
        "q1": 9,
        "median": 27,
        "q3": 36,
        "max": 47
      },

      {
        "district": "District 5",
        "min": 0,
        "q1": 11,
        "median": 27,
        "q3": 37,
        "max": 51
      },

      {
        "district": "District 6",
        "min": 5,
        "q1": 19,
        "median": 36,
        "q3": 47,
        "max": 62
      },

      {
        "district": "District 7",
        "min": 2,
        "q1": 11,
        "median": 20,
        "q3": 39,
        "max": 48
      },

      {
        "district": "District 8",
        "min": 5,
        "q1": 13,
        "median": 28,
        "q3": 37,
        "max": 57
      },

      {
        "district": "District 9",
        "min": 4,
        "q1": 5,
        "median": 11,
        "q3": 19,
        "max": 39
      },

      {
        "district": "District 10",
        "min": 8,
        "q1": 23,
        "median": 25,
        "q3": 41,
        "max": 57
      },

      {
        "district": "District 11",
        "min": 10,
        "q1": 23,
        "median": 38,
        "q3": 56,
        "max": 71
      },

      {
        "district": "District 12",
        "min": 2,
        "q1": 7,
        "median": 22,
        "q3": 32,
        "max": 37
      },

      {
        "district": "District 13",
        "min": 2,
        "q1": 20,
        "median": 30,
        "q3": 44,
        "max": 57
      }
    ],
    "democratic": [
      { "district": "District 1", "percentage": 28 },
      { "district": "District 2", "percentage": 44 },
      { "district": "District 3", "percentage": 88 },
      { "district": "District 4", "percentage": 37 },
      { "district": "District 5", "percentage": 86 },
      { "district": "District 6", "percentage": 71 },
      { "district": "District 7", "percentage": 89 },
      { "district": "District 8", "percentage": 41 },
      { "district": "District 9", "percentage": 27 },
      { "district": "District 10", "percentage": 62 },
      { "district": "District 11", "percentage": 48 },
      { "district": "District 12", "percentage": 61 },
      { "district": "District 13", "percentage": 93 },
      { "district": "District 14", "percentage": 61 },
      { "district": "District 15", "percentage": 28 }
    ],
    "republican": [
      { "district": "District 1", "percentage": 72 },
      { "district": "District 2", "percentage": 56 },
      { "district": "District 3", "percentage": 12 },
      { "district": "District 4", "percentage": 63 },
      { "district": "District 5", "percentage": 14 },
      { "district": "District 6", "percentage": 29 },
      { "district": "District 7", "percentage": 11 },
      { "district": "District 8", "percentage": 59 },
      { "district": "District 9", "percentage": 73 },
      { "district": "District 10", "percentage": 38 },
      { "district": "District 11", "percentage": 52 },
      { "district": "District 12", "percentage": 39 },
      { "district": "District 13", "percentage": 7 },
      { "district": "District 14", "percentage": 39 },
      { "district": "District 15", "percentage": 72 }
    ]
  }
});

db.boxplots.insert({ name: 'ny_mmd3', value: {
    "total": [
      {
        "district": "District 1",
        "min": 7,
        "q1": 25,
        "median": 43,
        "q3": 60,
        "max": 64
      },

      {
        "district": "District 2",
        "min": 3,
        "q1": 15,
        "median": 16,
        "q3": 20,
        "max": 33
      },

      {
        "district": "District 3",
        "min": 4,
        "q1": 15,
        "median": 25,
        "q3": 32,
        "max": 49
      },

      {
        "district": "District 4",
        "min": 10,
        "q1": 25,
        "median": 35,
        "q3": 42,
        "max": 43
      },

      {
        "district": "District 5",
        "min": 10,
        "q1": 23,
        "median": 40,
        "q3": 41,
        "max": 56
      },

      {
        "district": "District 6",
        "min": 9,
        "q1": 28,
        "median": 46,
        "q3": 64,
        "max": 82
      },

      {
        "district": "District 7",
        "min": 5,
        "q1": 15,
        "median": 32,
        "q3": 46,
        "max": 59
      },

      {
        "district": "District 8",
        "min": 8,
        "q1": 11,
        "median": 29,
        "q3": 33,
        "max": 37
      },

      {
        "district": "District 9",
        "min": 1,
        "q1": 9,
        "median": 12,
        "q3": 18,
        "max": 26
      }
    ],
    "democratic": [
      { "district": "District 1", "percentage": 28 },
      { "district": "District 2", "percentage": 22 },
      { "district": "District 3", "percentage": 22 },
      { "district": "District 4", "percentage": 60 },
      { "district": "District 5", "percentage": 1 },
      { "district": "District 6", "percentage": 59 },
      { "district": "District 7", "percentage": 7 },
      { "district": "District 8", "percentage": 13 },
      { "district": "District 9", "percentage": 27 }
    ],
    "republican": [
      { "district": "District 1", "percentage": 72 },
      { "district": "District 2", "percentage": 78 },
      { "district": "District 3", "percentage": 78 },
      { "district": "District 4", "percentage": 40 },
      { "district": "District 5", "percentage": 99 },
      { "district": "District 6", "percentage": 41 },
      { "district": "District 7", "percentage": 93 },
      { "district": "District 8", "percentage": 87 },
      { "district": "District 9", "percentage": 73 }
    ]
  }
});

db.boxplots.insert({ name: 'ny_mmd4', value: {
    "total": [
      {
        "district": "District 1",
        "min": 0,
        "q1": 4,
        "median": 9,
        "q3": 25,
        "max": 30
      },
      {
        "district": "District 2",
        "min": 9,
        "q1": 19,
        "median": 26,
        "q3": 45,
        "max": 47
      },
      {
        "district": "District 3",
        "min": 10,
        "q1": 30,
        "median": 43,
        "q3": 61,
        "max": 77
      },
      {
        "district": "District 4",
        "min": 9,
        "q1": 16,
        "median": 33,
        "q3": 39,
        "max": 44
      },
      {
        "district": "District 5",
        "min": 2,
        "q1": 12,
        "median": 20,
        "q3": 36,
        "max": 52
      },
      {
        "district": "District 6",
        "min": 7,
        "q1": 11,
        "median": 26,
        "q3": 44,
        "max": 57
      },
      {
        "district": "District 7",
        "min": 3,
        "q1": 6,
        "median": 10,
        "q3": 18,
        "max": 24
      }
    ],
    "democratic": [
      { "district": "District 1", "percentage": 36 },
      { "district": "District 2", "percentage": 21 },
      { "district": "District 3", "percentage": 17 },
      { "district": "District 4", "percentage": 9 },
      { "district": "District 5", "percentage": 56 },
      { "district": "District 6", "percentage": 35 },
      { "district": "District 7", "percentage": 62 }
    ],
    "republican": [
      { "district": "District 1", "percentage": 64 },
      { "district": "District 2", "percentage": 79 },
      { "district": "District 3", "percentage": 83 },
      { "district": "District 4", "percentage": 91 },
      { "district": "District 5", "percentage": 44 },
      { "district": "District 6", "percentage": 65 },
      { "district": "District 7", "percentage": 38 }
    ]
  }
});

db.boxplots.insert({ name: 'ny_mmd5', value: {
    "total": [
      {
        "district": "District 1",
        "min": 2,
        "q1": 18,
        "median": 31,
        "q3": 48,
        "max": 49
      },
      {
        "district": "District 2",
        "min": 6,
        "q1": 26,
        "median": 34,
        "q3": 40,
        "max": 58
      },
      {
        "district": "District 3",
        "min": 2,
        "q1": 4,
        "median": 10,
        "q3": 28,
        "max": 34
      },
      {
        "district": "District 4",
        "min": 4,
        "q1": 9,
        "median": 24,
        "q3": 25,
        "max": 40
      },
      {
        "district": "District 5",
        "min": 10,
        "q1": 22,
        "median": 28,
        "q3": 48,
        "max": 64
      },
      {
        "district": "District 6",
        "min": 4,
        "q1": 11,
        "median": 25,
        "q3": 33,
        "max": 53
      }
    ],
    "democratic": [
      { "district": "District 1", "percentage": 30 },
      { "district": "District 2", "percentage": 38 },
      { "district": "District 3", "percentage": 32 },
      { "district": "District 4", "percentage": 33 },
      { "district": "District 5", "percentage": 34 },
      { "district": "District 6", "percentage": 21 }
    ],
    "republican": [
      { "district": "District 1", "percentage": 70 },
      { "district": "District 2", "percentage": 62 },
      { "district": "District 3", "percentage": 68 },
      { "district": "District 4", "percentage": 67 },
      { "district": "District 5", "percentage": 66 },
      { "district": "District 6", "percentage": 79 }
    ]
  }
});
