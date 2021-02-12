"use strict";

export const island = {
  "settings": {
    "tilesize": 10,
    "colors": {

    }
  },
  "items": {
    "tree1": {
      "state": "full",
      "handle": "tree",
      "position": {
        "x": 1,
        "y": 5
      },
      "actions": {
        "chop": {
          "action": "chopping",
          "result": "wood"
        },
        "shake": {
          "action": "shaking",
          "result": "coconut"
        }
      }
    },
    "tree2": {
      "state": "full",
      "handle": "tree",
      "position": {
        "x": 7,
        "y": 5
      },
      "actions": {
        "chop": {
          "action": "chopping",
          "result": "wood"
        },
        "shake": {
          "action": "shaking",
          "result": "coconut"
        }
      }
    },
    "sea1": {
      "state": "full",
      "handle": "sea",
      "position": {
        "x": 8,
        "y": 0
      },
      "actions": {
        "fish": {
          "action": "fishing",
          "result": "fish"
        }
      }
    },
    "sea2": {
      "state": "full",
      "handle": "sea",
      "position": {
        "x": 9,
        "y": 1
      },
      "actions": {
        "fish": {
          "action": "fishing",
          "result": "fish"
        }
      }
    },
    "sea3": {
      "state": "full",
      "handle": "sea",
      "position": {
        "x": 9,
        "y": 0
      },
      "actions": {
        "fish": {
          "action": "fishing",
          "result": "fish"
        }
      }
    }
  }
}
