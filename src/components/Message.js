import React, { Component } from 'react'
import VRViz from "vr-viz"
import mapData from '../mapData/mapData.json'

class Message extends Component {

    render() {
        return(
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
              'position': '5 5 35',
              'rotation': '0 0 0',
            },
            'floor': {
              'style': {
                'color': '#ccc',
                'texture': false,
                'width': 200,
                'depth': 200,
              }
            }
          }
        }
        graph={
          [
            {
              'type': 'RectangleChart',
              'data': {
                'dataFile': "data/rectangleChart.csv",
                'fileType': 'csv',
                'fieldDesc': [['Year', 'text'], ['Type', 'number'], ['Tornadoes', 'number'], ['Deaths', 'number']]
              },
              'style': {
                'origin': [0, 0, 0],
                'dimensions': {
                  'width': 20,
                  'height': 20,
                  'depth': 20,
                },
              },
              'mark': {
                'position': {
                  'x': {
                    'scaleType': 'ordinal',
                    'field': 'Year',
                  },
                },
                'type': 'box',
                'style': {
                  'padding': {
                    'x': 0.1,
                  },
                  'depth': {
                    'scaleType': 'linear',
                    'field': 'Deaths',
                  },
                  'height': {
                    'scaleType': 'linear',
                    'field': 'Tornadoes',
                  },
                  'fill': {
                    'opacity': 0.4,
                    'scaleType': 'ordinal',
                    'field': 'Type',
                    'color': ['red', 'green'],
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
                    'value': (d) => `Year:${d.Year}\nType:${d.Type}\nDeaths:${d.Deaths}\nTornadoes:${d.Tornadoes}\n`,
                    'align': 'center',
                    'fontSize': 1,
                    'backgroundColor': '#333',
                    'backgroundOpacity': 1,
                    'fontColor': '#fff',
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
        );
    }
}

export default Message