import React from 'react'
import VRViz from "vr-viz"

const Hello = () => {
    return (
        <VRViz
        scene={
          {
            'sky': {
              'style': {
                'color': '#ccc',
                'texture': false,
              }
            },
            'lights': [
              {
                'type': 'directional',
                'color': '#fff',
                'position': '0 1 1',
                'intensity': 1,
                "decay": 1,
              },
              {
                'type': 'ambient',
                'color': '#fff',
                'intensity': 1,
                "decay": 1,
              }
            ],
            'camera': {
              'position': '0 5 20',
			  'rotation': '-10 0 0',
            },
            'floor': {
              'style': {
                'color': '#ccc',
                'texture': false,
                'width': 100,
                'depth': 100,
              }
            }
          }
        }
        graph={
          [
            {
              'type': 'ScatterPlot',
              'style': {
                'origin': [0, 0, 0],
                'dimensions': {
                  'width': 10,
                  'height': 10,
                  'depth': 10,
                },
              },
              'data': {
                'dataFile': "data/scatterPlot.csv",
                'fileType': 'csv',
                'fieldDesc': [['sepal_length', 'number'], ['sepal_width', 'number'], ['petal_length', 'number'], ['petal_width', 'number'], ['species', 'text']]
              },
              'mark': {
                'position': {
                  'x': {
                    'scaleType': 'linear',
                    'field': 'sepal_length',
                  },
                  'y': {
                    'scaleType': 'linear',
                    'field': 'sepal_width',
                  },
                  'z': {
                    'scaleType': 'linear',
                    'field': 'petal_length',
                  }
                },
                'type': 'sphere',
                'style': {
                  'radius': {
                    'scaleType': 'linear',
                    'field': 'petal_width',
                    'value': [0, 0.2],
                  },
                  'fill': {
                    'scaleType': 'ordinal',
                    'opacity': 0.4,
                    'field': 'species',
                    'color': ['red', 'green', 'blue'],
                    'domain': ['setosa', 'versicolor', 'virginica'],
                  },
                },
                'mouseOver': {
                  'focusedObject': {
                    'opacity': 1,
                    'fill': '#333',
                  },
                  'nonFocusedObject': {
                    'opacity': 0,
                  },
                  'label': {
                    'value': (d) => `sepal_length:${d.sepal_length}\nsepal_width:${d.sepal_width}\npetal_length:${d.petal_length}\npetal_width:${d.petal_width}\nspecies:${d.species}`,
                    'align': 'center',
                    'fontSize': 1,
                    'backgroundColor': '#333',
                    'backgroundOpacity': 1,
                    'fontColor': '#fff',
                  }
                },
                'droplines': {
                  'xz': true,
                  'yz': false,
                  'xy': false,
                  'style': {
                    'fill': {
                      'scaleType': 'ordinal',
                      'field': 'species',
                      'color': ['red', 'green', 'blue'],
                      'opacity': 0.4,
                      'domain': ['setosa', 'versicolor', 'virginica'],
                    },
                  }
                },
                'projections': {
                  'xz': false,
                  'yz': true,
                  'xy': true,
                  'style': {
                    'fill': {
                      'scaleType': 'ordinal',
                      'field': 'species',
                      'color': ['red', 'green', 'blue'],
                      'opacity': 0.4,
                      'domain': ['setosa', 'versicolor', 'virginica'],
                    },
                    'radius': {
                      'scaleType': 'linear',
                      'field': 'petal_width',
                      'value': [0, 0.2],
                    },
                  }
                }
              },
              'axis': {
                'axis-box': {
                  'color': 'black',
                },
                'x-axis': {
                  'orient': 'bottom-back',
                  'title': {
                    'text': '',
                    'fontSize': 10,
                    'color': 'black',
                    'opacity': 1,
                  },
                  'ticks': {
                    'noOfTicks': 10,
                    'size': 0.1,
                    'color': 'black',
                    'opacity': 1,
                    'fontSize': 10,
                  },
                  'grid': {
                    'color': 'black',
                    'opacity': 1,
                  }
                },
                'y-axis': {
                  'orient': 'bottom-back',
                  'title': {
                    'text': '',
                    'fontSize': 10,
                    'color': 'black',
                    'opacity': 1,
                  },
                  'ticks': {
                    'noOfTicks': 10,
                    'size': 0.1,
                    'color': 'black',
                    'opacity': 1,
                    'fontSize': 10,
                  },
                  'grid': {
                    'color': 'black',
                    'opacity': 1,
                  }
                },
                'z-axis': {
                  'orient': 'bottom-back',
                  'title': {
                    'text': '',
                    'fontSize': 10,
                    'color': 'black',
                    'opacity': 1,
                  },
                  'ticks': {
                    'noOfTicks': 10,
                    'size': 0.1,
                    'color': 'black',
                    'opacity': 1,
                    'fontSize': 10,
                  },
                  'grid': {
                    'color': 'black',
                    'opacity': 1,
                  }
                }
              }
            }
          ]
        }
      />
    )
}

export default Hello