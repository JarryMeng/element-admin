/* eslint-disable */
// 获取当前启动服务页面访问地址
const locationObj = window.location
const pathname = locationObj.pathname.substr(0, locationObj.pathname.lastIndexOf('/'))
const locationPath = locationObj.protocol + '//' + locationObj.host + pathname

// const CONFIG = {
//   // 需要代理
//   API_URL: `${locationPath}/mineData/`,
//   DATA_URL: "https://datahive.minedata.cn/data/",
//   DATA_U: "https://datahive.minedata.cn/",
//   ACCESS_TOKEN: 'e8ad292f1c7c49aa88360ec1eddcde12',
//   SOLUTION: 12530
// };
var CONFIG = {
  API_URL: "http://minedata.cn/minemapapi/v2.0.0/",
  DATA_URL: "http://datahive.minedata.cn/data/",
  ACCESS_TOKEN: 'e8ad292f1c7c49aa88360ec1eddcde12',
  SOLUTION: 12530
};
const style = {
  "version": 8,
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  "sprite": "mapbox://sprites/mapbox/streets-v8",
  "sources": {
    "Landuse": {
      "tiles": [CONFIG.DATA_URL + "Landuse/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "satellite": {
      "tiles": [CONFIG.DATA_URL + "p1.map.gtimg.com/sateTiles/{z}/{m}/{n}/{x}_{y}.jpg?version=228"],
      "scheme": "tms",
      "tileSize": 256,
      "type": "raster"
    },
    "Trafficlight": {
      "tiles": [CONFIG.DATA_URL + "Trafficlight/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Event": {
      "tiles": [CONFIG.DATA_U + "datad/Event/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Landuse": {
      "tiles": [CONFIG.DATA_URL + "Landuse/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Greenface": {
      "tiles": [CONFIG.DATA_URL + "Greenface/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Worldwaterface": {
      "tiles": [CONFIG.DATA_URL + "Worldwaterface/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Waterline": {
      "tiles": [CONFIG.DATA_URL + "Waterline/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Ptexit": {
      "tiles": [CONFIG.DATA_URL + "Ptexit/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Subwaypolygon": {
      "tiles": [CONFIG.DATA_URL + "Subwaypolygon/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Waterface": {
      "tiles": [CONFIG.DATA_URL + "Waterface/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Adminbound": {
      "tiles": [CONFIG.DATA_URL + "Adminbound/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Hillshade": {
      "tiles": [CONFIG.DATA_U + "datao/hillshade/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "raster"
    },
    "Traffic": {
      "tiles": [CONFIG.DATA_U + "datad/Trafficrtic/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "traffic": true,
      "type": "vector"
    },
    "Zlevel": {
      "tiles": [CONFIG.DATA_URL + "Zlevel/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Ptstop": {
      "tiles": [CONFIG.DATA_URL + "Ptstop/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Merge_1": {
      "tiles": ["https://datahive.minedata.cn/mergeddata/Adminflag,Annotation,Poi,Ptline,Railway,Road,Villtown,Worldannotation/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Buildingmore": {
      "tiles": [CONFIG.DATA_URL + "Buildingmore/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "ResidentialPolygon": {
      "odevity": 1,
      "maxzoom": 17,
      "tiles": [CONFIG.DATA_URL + "ResidentialPolygon/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
    "Worldcountries": {
      "tiles": [CONFIG.DATA_URL + "Worldcountries/{z}/{x}/{y}?token=" + CONFIG.ACCESS_TOKEN + "&solu=" + CONFIG.SOLUTION],
      "type": "vector"
    },
  },
  "layers": [
    {
    "id": "cc2bfe3efdc84ef69a7b82992868a0d0",
    "maxzoom": 17.5,
    "source": "",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "",
      "prefix": "",
      "describe": "背景",
      "name": "背景",
      "sourceminzoom": 0,
      "groupname": "",
      "groupid": "",
      "datatype": "background",
      "sourcemaxzoom": 22,
      "zindex": 0
    },
    "paint": {
      "background-color": "#071733"
    },
    "source-layer": "",
    "minzoom": 3,
    "type": "background"
  }, {
    "id": "3eb1c5b810784c098441310fbc8e4222",
    "maxzoom": 6,
    "source": "Worldwaterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Worldwaterface",
      "prefix": "102",
      "describe": "世界地图水系面",
      "name": "世界地图水系面",
      "sourceminzoom": 3,
      "groupname": "轮廓面",
      "groupid": "0f94af90",
      "datatype": "fill",
      "sourcemaxzoom": 8.5,
      "zindex": 1
    },
    "source-layer": "Worldwaterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 3,
    "type": "fill"
  }, {
    "id": "7313ea51ea21420c92a53f63ffa45ff1",
    "maxzoom": 8.5,
    "source": "Worldcountries",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Worldcountries",
      "prefix": "104",
      "describe": "世界地图",
      "name": "世界地图",
      "sourceminzoom": 3,
      "groupname": "轮廓面",
      "groupid": "0f94af90",
      "datatype": "fill",
      "sourcemaxzoom": 8.5,
      "zindex": 2
    },
    "paint": {
      "fill-outline-color": "#071733",
      "fill-color": "#071733",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Worldcountries",
    "minzoom": 3,
    "type": "fill"
  }, {
    "id": "743151e1c790407ea522036d04c59422",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-海岸线",
      "sourceminzoom": 3,
      "groupname": "轮廓面",
      "groupid": "0f94af90",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 3
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 5,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "19812e58d48a471bb4c3b0889b7a9363",
    "maxzoom": 17.5,
    "source": "ResidentialPolygon",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "ResidentialPolygon",
      "prefix": "106004",
      "describe": "小区面",
      "name": "小区面",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 4
    },
    "source-layer": "ResidentialPolygon",
    "paint": {
      "fill-outline-color": "#0f2645",
      "fill-color": "#0f2645",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13,
    "type": "fill"
  }, {
    "id": "1308a6e673854fdb96877c66123953d8",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106006",
      "describe": "土地利用",
      "name": "文化区域",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 5
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#071637",
      "fill-color": "#071637",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["in", "kind", 31, 38]]
  }, {
    "id": "1f0cf7ea5aad484b91324784001c216f",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106005",
      "describe": "土地利用",
      "name": "机场",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 6
    },
    "paint": {
      "fill-outline-color": "#0e2351",
      "fill-color": "#0e2351",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["==", "kind", 11]]
  }, {
    "id": "19ca548b110345fcbdd1b5efe4fd195b",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106005",
      "describe": "土地利用",
      "name": "机场跑道",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 7
    },
    "paint": {
      "fill-outline-color": "#112b64",
      "fill-color": "#112b64",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["==", "kind", 12]]
  }, {
    "id": "5093607d4833490fa2cbd65a9128454f",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106004",
      "describe": "土地利用",
      "name": "工业区",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 8
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#0b1a3b",
      "fill-color": "#0b1a3b",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["==", "kind", 7]]
  }, {
    "id": "8b9b060741f843aaa883990dc83eb6f8",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106007",
      "describe": "土地利用",
      "name": "商业",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 9
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#061940",
      "fill-color": "#061940",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["in", "kind", 30, 36, 35, 2]]
  }, {
    "id": "d71c8eae4dae49f4a0668a65042e014c",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106009",
      "describe": "土地利用",
      "name": "公共区域",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 10
    },
    "paint": {
      "fill-outline-color": "#091b43",
      "fill-color": "#091b43",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["in", "kind", 32, 34, 33, 39]]
  }, {
    "id": "263e9329a68d4aa7af62786366bb5854",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106003",
      "describe": "土地利用",
      "name": "医院",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 11
    },
    "paint": {
      "fill-outline-color": "#223459",
      "fill-color": "#223459",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "934c809884844c9f9a760d9233cdc388",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106003",
      "describe": "土地利用",
      "name": "大学",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 12
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#07183a",
      "fill-color": "#07183a",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "424a180957b540d68302260ce301dbc3",
    "maxzoom": 17.5,
    "source": "Landuse",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Landuse",
      "prefix": "106008",
      "describe": "土地利用",
      "name": "停车场",
      "sourceminzoom": 12,
      "groupname": "土地利用",
      "groupid": "061236f8",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 13
    },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#103462",
      "fill-color": "#103462",
      "fill-opacity": 0.25,
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13,
    "type": "fill",
    "filter": ["all", ["in", "kind", 6, 40]]
  }, {
    "id": "7d66864aea3e4185b79fe59dcb5573c8",
    "maxzoom": 17.5,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地16-17.5",
      "sourceminzoom": 3,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 14
    },
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 16,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"]]
  }, {
    "id": "8da38929629e4ca982f174a1cf07e060",
    "maxzoom": 16,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地14-16",
      "sourceminzoom": 3,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 15
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 20]
    ]
  }, {
    "id": "890cbcff768646a9b25b8d637b070581",
    "maxzoom": 14,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地12-14",
      "sourceminzoom": 3,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 16
    },
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 40]
    ]
  }, {
    "id": "e5b9e2efaf174880a76ff1d0da45a8a8",
    "maxzoom": 12,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地10-12",
      "sourceminzoom": 3,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 17
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 93]
    ]
  }, {
    "id": "65cd7782ce5d4c30b6d9019577cb8123",
    "maxzoom": 10,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "106001",
      "describe": "绿地",
      "name": "绿地8-10",
      "sourceminzoom": 3,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 18
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"],
      [">=", "area_level", 98]
    ]
  }, {
    "id": "040d6210560c4151a9904eca1a825792",
    "maxzoom": 17.5,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "104",
      "describe": "绿地",
      "name": "岛无属性2",
      "sourceminzoom": 3,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 19
    },
    "paint": {
      "fill-outline-color": "#071733",
      "fill-color": "#071733",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 8,
    "type": "fill",
    "filter": ["all", ["==", "kind", "1"]]
  }, {
    "id": "cd4a3fadd5a94dec80b9eb2fd067eaee",
    "maxzoom": 8,
    "source": "Greenface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Greenface",
      "prefix": "104",
      "describe": "绿地",
      "name": "岛无属性1",
      "sourceminzoom": 3,
      "groupname": "绿地",
      "groupid": "d651889d",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 20
    },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#071733",
      "fill-color": "#071733",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 5,
    "type": "fill",
    "filter": ["all", [">=", "area_level", 75],
      ["==", "kind", "1"]
    ]
  }, {
    "id": "b9adbee9c96e43aaafc5cbb102aa3187",
    "maxzoom": 8,
    "source": "Waterline",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Waterline",
      "prefix": "102",
      "describe": "单线河",
      "name": "单线河",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 21
    },
    "source-layer": "Waterline",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1b4073",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.8],
          [7, 1.6],
          [9, 1.6],
          [20, 10]
        ],
        "base": 1
      }
    },
    "minzoom": 3,
    "type": "line"
  }, {
    "id": "35d09eb59ae947828e467eae7d148063",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-港湾",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 22
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 3,
    "type": "fill",
    "filter": ["all", ["==", "kind", 5],
      ["==", "display_class", 8]
    ]
  }, {
    "id": "19dea1fd05954cffa81b07d7579002d2",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-鸭绿江",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 23
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 7,
    "type": "fill",
    "filter": ["all", ["==", "display_class", -1]]
  }, {
    "id": "505d2bcba4f24e65ba03391667b759a5",
    "maxzoom": 12,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "水域面-黄金坪",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 24
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 7,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", -2]
    ]
  }, {
    "id": "38c0f68ab4604b4689cec665fb827a16",
    "maxzoom": 4,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼3-4",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 25
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 3,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 8]
    ]
  }, {
    "id": "e85a4d00be634d10b4bb9be59b9daf4b",
    "maxzoom": 6,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼4-6",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 26
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 4,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      [">=", "display_class", 7]
    ]
  }, {
    "id": "78cfdb1f2541456088ce8ff15641c4a7",
    "maxzoom": 8,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级6-8",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 27
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 6,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 92]
    ]
  }, {
    "id": "dfb88b063f2a4505b0caf1d8dbeece30",
    "maxzoom": 8,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级6-8",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 28
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 6,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      [">", "display_class", 1],
      [">=", "area_level", 60]
    ]
  }, {
    "id": "5ac1d233483e47e2906c6b357c068751",
    "maxzoom": 10,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级8-10",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 29
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 70]
    ]
  }, {
    "id": "374b8c844b744332b8e5b250868e68be",
    "maxzoom": 10,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级8-10",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 30
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "515fb0e3e47d464aad47825b4ed4e6a6",
    "maxzoom": 12,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级10-12",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 31
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 50]
    ]
  }, {
    "id": "d10fa3ca0a0b4ff7a218e271fa79e29a",
    "maxzoom": 12,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级10-12",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 32
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 10,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "8ce6bf820a6647949df6106a7c9f6634",
    "maxzoom": 14,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级12-14",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 33
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 30]
    ]
  }, {
    "id": "9da6afec057f4094b4e2a311cb41ad61",
    "maxzoom": 14,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级12-14",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 34
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "d1e3a2e713f84d8daec69273cb432fd2",
    "maxzoom": 16,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼1级14-16",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 35
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 14,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["==", "display_class", 1],
      [">=", "area_level", 10]
    ]
  }, {
    "id": "c0c7e779a5ce4f5faf4eb87126c559b7",
    "maxzoom": 16,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级14-16",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 36
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 14,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "3245fb6156d640908078458ea2fa0d69",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "湖沼其他级16-17.5",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 37
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 16,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2],
      ["!in", "display_class", -2, -1]
    ]
  }, {
    "id": "97ea5216c1474bbca56f7900aeb88815",
    "maxzoom": 6,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河3-6",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 38
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 3,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "248af8d6f2284da59b59da215086064e",
    "maxzoom": 8,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河6-8",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 39
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 6,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "fc4d277b86354fa4a09f90a0d3e1ad4e",
    "maxzoom": 10,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级8-10",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 40
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 8,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1]
    ]
  }, {
    "id": "c928ccbc660840c5a671df344de79613",
    "maxzoom": 10,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河8-10",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 41
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 8,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "32641808c6744ed9b05d06f2cbb6a175",
    "maxzoom": 12,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级10-12",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 42
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1],
      [">=", "area_level", 73]
    ]
  }, {
    "id": "f430da28c8014510998ad98966864f75",
    "maxzoom": 12,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河10-12",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 43
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 10,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1],
      [">=", "area_level", 60]
    ]
  }, {
    "id": "6fe2becd9ef7470590fb7b99db5c9c1e",
    "maxzoom": 14,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级12-14",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 44
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1],
      [">=", "area_level", 15]
    ]
  }, {
    "id": "8b2decbc01f142b9bc258d3ca222b74b",
    "maxzoom": 14,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河12-14",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 45
    },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 12,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1, 1]
    ]
  }, {
    "id": "38917caea8ec4f668304664b18b41578",
    "maxzoom": 16,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河1级14-16",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 46
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["==", "display_class", 1]
    ]
  }, {
    "id": "a1eede7c26e3422c8f9894d705e7d8f9",
    "maxzoom": 16,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河14-16",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 47
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1, 1],
      [">=", "area_level", 10]
    ]
  }, {
    "id": "ec818efd5f084bfc994bc39f6f9ab012",
    "maxzoom": 17.5,
    "source": "Waterface",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Waterface",
      "prefix": "102",
      "describe": "水域面",
      "name": "双线河16-17.5",
      "sourceminzoom": 3,
      "groupname": "水系",
      "groupid": "ce6f216e",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 48
    },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 16,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3],
      ["!in", "display_class", -2, -1]
    ]
  }, {
    "id": "e10a660a21ac407a97dc6bc42afa34b7",
    "maxzoom": 17.5,
    "source": "satellite",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "satellite",
      "prefix": "202",
      "describe": "卫星影像",
      "name": "资三",
      "sourceminzoom": 3,
      "groupname": "",
      "groupid": "",
      "datatype": "raster",
      "sourcemaxzoom": 17.5,
      "zindex": 49
    },
    "source-layer": "satellite",
    "paint": {
      "raster-fade-duration": 0.001
    },
    "minzoom": 3,
    "type": "raster"
  }, {
    "id": "eb48891cd6574ede91413f5e02be91de",
    "maxzoom": 13.5,
    "source": "Hillshade",
    "layout": {
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Hillshade",
      "prefix": "203",
      "describe": "山体阴影图",
      "name": "山体阴影图",
      "sourceminzoom": 1,
      "groupname": "",
      "groupid": "",
      "datatype": "raster",
      "sourcemaxzoom": 13.5,
      "zindex": 50
    },
    "source-layer": "hillshade",
    "paint": {
      "raster-fade-duration": 0.001
    },
    "minzoom": 1,
    "type": "raster"
  }, {
    "id": "a467520e45f8407e960355b9c308dbe7",
    "maxzoom": 17.5,
    "source": "Subwaypolygon",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Subwaypolygon",
      "prefix": "106005",
      "describe": "地铁站点面",
      "name": "地铁站点面",
      "sourceminzoom": 10,
      "groupname": "",
      "groupid": "",
      "datatype": "fill",
      "sourcemaxzoom": 17.5,
      "zindex": 51
    },
    "paint": {
      "fill-outline-color": "#071733",
      "fill-color": {
        "property": "color",
        "type": "identity"
      },
      "fill-opacity": 0.5,
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Subwaypolygon",
    "minzoom": 15.5,
    "type": "fill"
  }, {
    "id": "611a7a407f4b483f931309fa79c2ae71",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Railway",
      "prefix": "101009",
      "describe": "铁路",
      "name": "铁路_边框",
      "sourceminzoom": 6,
      "groupname": "铁路",
      "groupid": "50829a6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 52
    },
    "source-layer": "Railway",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#16305a",
      "line-width": {
        "stops": [
          [7, 1.5],
          [18, 6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 6,
    "type": "line"
  }, {
    "id": "0b88dfae20aa410da5df64e2ebbc46b5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Railway",
      "prefix": "101009",
      "describe": "铁路",
      "name": "铁路_线",
      "sourceminzoom": 6,
      "groupname": "铁路",
      "groupid": "50829a6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 53
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [9, 9],
      "line-color": "#2568ab",
      "line-width": {
        "stops": [
          [7, 1],
          [18, 3.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Railway",
    "minzoom": 6,
    "type": "line"
  }, {
    "id": "281e5615337540ea99ceae2b23ed0f32",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103003",
      "describe": "行政区划边界",
      "name": "特别行政区边界",
      "sourceminzoom": 3,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 54
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [6, 3, 3, 4],
      "line-color": "#208bcb",
      "line-width": 1
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 6]]
  }, {
    "id": "5dc5f0dc0d264121ab66e0902bc57121",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103003",
      "describe": "行政区划边界",
      "name": "省界",
      "sourceminzoom": 3,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 55
    },
    "source-layer": "Adminbound",
    "paint": {
      "line-dasharray": [5, 3],
      "line-translate-anchor": "viewport",
      "line-color": "#0b6598",
      "line-width": 1
    },
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 5]]
  }, {
    "id": "f51b1e4497c5452c83c485e9e7f3c19c",
    "maxzoom": 7,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103002",
      "describe": "行政区划边界",
      "name": "国界争议区域",
      "sourceminzoom": 3,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 56
    },
    "source-layer": "Adminbound",
    "paint": {
      "line-dasharray": [3, 3, 5, 5],
      "line-translate-anchor": "viewport",
      "line-color": "#2f92ce",
      "line-width": {
        "stops": [
          [3, 1],
          [8, 2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 2]]
  }, {
    "id": "bd8f1ec6540e49fb80a34abbad2961e9",
    "maxzoom": 7,
    "source": "Adminbound",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Adminbound",
      "prefix": "103002",
      "describe": "行政区划边界",
      "name": "国界",
      "sourceminzoom": 3,
      "groupname": "行政区划边界",
      "groupid": "f7212a4c",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 57
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#208bcb",
      "line-width": {
        "stops": [
          [3, 1],
          [8, 2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["in", "kind", 3, 1]]
  }, {
    "id": "b98179487a134991b33eefc77ff218ed",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101007",
      "describe": "道路",
      "name": "轮渡9-17.5",
      "sourceminzoom": 5,
      "groupname": "",
      "groupid": "",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 58
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [3, 3],
      "line-color": "#226cc0",
      "line-width": {
        "stops": [
          [10, 1],
          [18, 3]
        ],
        "base": 1.2
      }
    },
    "minzoom": 9,
    "type": "line",
    "filter": ["all", ["==", "kind", 13],
      ["==", "const_st", 1]
    ]
  }, {
    "id": "ddf3f54fbef04b47b0df40b4372aa03a",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道边框5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 59
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "15"]
    ]
  }, {
    "id": "01b500a683ee4425a9110e66d957992b",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道边框5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 60
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "15"]
    ]
  }, {
    "id": "b3e6eacad02c4e2cac38433d512dd1fb",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "一般道路9-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 61
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.7],
          [9, 0.7],
          [10, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 9,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["in", "kind", 7, 6]
    ]
  }, {
    "id": "c0457a556cfb49d586cd0830774cff0d",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "一般道路5-9",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 62
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.7],
          [9, 0.7],
          [10, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3],
      [">=", "functionclass", 3]
    ]
  }, {
    "id": "948a8ba0c3be4e9a8634a9117e55b0bb",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 63
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "15"]
    ]
  }, {
    "id": "0090a2c8dc034aca9bd80a70d630ddb7",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 64
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "15"]
    ]
  }, {
    "id": "5b3771b5b6e64928b729e537819f6bd5",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速边框5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 65
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 36],
          [18, 36],
          [19, 36]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2]
    ]
  }, {
    "id": "fa755b24798a4c5c8a09706f71de966c",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 66
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2]
    ]
  }, {
    "id": "e2b7d1d9a1b741dfb875c8623585cd07",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路边框5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 67
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2.5],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1]
    ]
  }, {
    "id": "a65446720b8647bc8c7e392beab2b9b9",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路5-10",
      "sourceminzoom": 5,
      "groupname": "道路10-",
      "groupid": "7a306ef3",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 68
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2.5],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1]
    ]
  }, {
    "id": "e84e87124799460a93383a9793669173",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路边框10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 69
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.7],
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "0c77ff1ff9494ceeaf300e1a6668ca0f",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道边框10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 70
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.6],
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "74ebc4b774cd4eab97fed3c80cad867c",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道边框10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 71
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "643153296e624968a1b6bcf595a05fa6",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道边框10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 72
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "aa8eb080f245431f95cb4ef0a4da137c",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 73
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "782b3137e61343d28854bdb599560ee2",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 74
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "0fe1df685d13448aa008faaa07857148",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 75
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "52c4a8a1d1be460f85b98089b58ec020",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 76
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "2054baaa6fba47af9aa3e9158bb9698e",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速边框10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 77
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "10"]
    ]
  }, {
    "id": "b46099ef46944c01ad876b44515d9ae3",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 78
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "10"]
    ]
  }, {
    "id": "5cecb448fe794d88b0d1d1caad917418",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路边框10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 79
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "10"]
    ]
  }, {
    "id": "a21df8a6060b45afbdd36b4ad1c352cb",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路10-12",
      "sourceminzoom": 5,
      "groupname": "道路10-12",
      "groupid": "6867ba44",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 80
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "10"]
    ]
  }, {
    "id": "016f773c50ed4614b012ea6c04fbb1c6",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路边框13-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 81
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 0],
          [14, 0.6],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "ca3e26c538844d33a8e531cb10fd224c",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路边框12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 82
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.7],
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "7be09715eaa3415ea0e3c01451d4c01a",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道边框12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 83
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.6],
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "e08dd156f7404a4fbb1778729d9c430e",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道边框12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 84
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "4bdfebd711b84030b67f370d4f6bf31a",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道边框12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 85
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "c94834fa0a4046a89ac648db1405ab19",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路13-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 86
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "483172c5a4bd4248b7c070097edff7e6",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 87
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "70212bb9bbd14675a970dce11fd840ca",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 88
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "18e822d32edb4adf8f0edbd78d105bbf",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 89
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "1d320f8b77ba4e9f9d861b52cbb3ed89",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 90
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "65e4eee5996d4293ab9ecb32e2741450",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速边框12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 91
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2]
    ]
  }, {
    "id": "bbe0cffad6394e3d87d66f25e1630167",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 92
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2]
    ]
  }, {
    "id": "9473851e5c6343f9b2c91ad8f7935e0a",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路边框12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 93
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1]
    ]
  }, {
    "id": "cd3d0d5e33fc4795bc684d4203e5e392",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路12-14",
      "sourceminzoom": 5,
      "groupname": "道路12-14",
      "groupid": "3e7dff6f",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 94
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1]
    ]
  }, {
    "id": "c2dbaaafb5044629a792ebf0e865b7fc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101006",
      "describe": "道路",
      "name": "步行道路边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 95
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 2],
          [16, 3],
          [17, 5],
          [18, 5],
          [19, 5]
        ],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [13, 0],
          [14, 0.4],
          [15, 0.6],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 10],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "3e8f0cb72d144c3d84abee4f36fd2068",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 96
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 0],
          [14, 0.6],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "2b7371f600ef4303a9e44ce5956e981f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "九级路边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 97
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 1],
          [14, 2],
          [15, 4],
          [16, 6],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [9, 0],
          [10, 0],
          [11, 0],
          [12, 0],
          [13, 0],
          [14, 0.3],
          [15, 0.6],
          [16, 0.8],
          [17, 1],
          [18, 1],
          [19, 1]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 9],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "ebb69b817cda4d13afe80c5a96347116",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路-边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 98
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.7],
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "ff23cb5d17a2418b8007a6f148a074d4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 99
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0],
          [8, 0],
          [9, 0],
          [10, 0.3],
          [11, 0.4],
          [12, 0.6],
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "46fffbef110e4765811f55a5d175ff96",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 100
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "7193f32cd79e48529f8c05b5bcd91c68",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道附属边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 101
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.8],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "64dcb48910c34db0afe6e2966ce45e0c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道附属边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 102
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "313b8fe1eb2b43a38010b0d38d37cdbb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 103
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.7],
          [8, 0.5],
          [9, 0.7],
          [10, 0.7],
          [11, 0.8],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "dda94f4907fe49fca9a37f52abbc8468",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101006",
      "describe": "道路",
      "name": "步行道路14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 104
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 2],
          [16, 3],
          [17, 5],
          [18, 5],
          [19, 5]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 10],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "07ae8aeba11e49b4b0c59fa993e36839",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 105
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "46f9f21b74024ca2a2f529d67edec405",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "九级路14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 106
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 2],
          [15, 4],
          [16, 6],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 9],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "9dd8627b64f54bbca329f2b801fd31fc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 107
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 1.6],
          [12, 1.8],
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "ec479c96c116419c90777c3f0fa967f3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 108
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [5, 0.7],
          [6, 0.7],
          [7, 0.7],
          [8, 0.8],
          [9, 0.8],
          [10, 1.2],
          [11, 2],
          [12, 3],
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "f98532e8d0ee42ae8b01963b6e6da331",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道附属14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 109
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "5162405c5d1b462ab7d98f534e0b57cb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 110
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "2033b56962bf44438f6d266b78b2a0ca",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道附属14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 111
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 2],
          [12, 2],
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "1a3a1fe7d4ad4cfbbeb92476c25bbc2b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 112
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 0.8],
          [6, 1],
          [7, 1.2],
          [8, 1.4],
          [9, 1.8],
          [10, 2],
          [11, 2],
          [12, 2],
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "a994702af94647489f6d21b3db5ef65f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速附属边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 113
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "20a939a1ac2741048b875de626abe334",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 114
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "046173c1ac9d4c74a0a057469ffbb5eb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速附属14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 115
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "1fe56f0782464d0aac48b6a2e88dad51",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 116
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "b71e013695624d38993ea728ec7e917c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路附属边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 117
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "d50abab2f7a4462da8d108e86f88b102",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路边框14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 118
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 2],
          [10, 1.8],
          [11, 2],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [5, 0],
          [6, 0],
          [7, 0.8],
          [8, 0.8],
          [9, 0.8],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "4ef59bdba7594c8d9c7d65e7c65379a0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路附属14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 119
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [10, 1.8],
          [11, 1.8],
          [12, 2],
          [13, 2.4],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "bacc29e541f84d6d9d385b65f5a3194b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路14-17.5",
      "sourceminzoom": 5,
      "groupname": "道路14-17.5",
      "groupid": "b9102b15",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 120
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [5, 1],
          [6, 1.2],
          [7, 1.4],
          [8, 1.6],
          [9, 1.8],
          [10, 2],
          [11, 1.8],
          [12, 2.4],
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "minzoom": 14,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "834abb75200242199eb88d89b364317c",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-其它道路-边框13",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 121
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [13, 0],
          [14, 0.6],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "29d0b6286262493ca45a38fce83729cc",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-其它道路13",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 122
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "dab0718d0d8f46c8bcbb69f2a0a5e69b",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-乡镇村道路边框13",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 123
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "7f37c992468947128d975afbd897dcde",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-乡镇村道路13",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 124
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 20],
          [18, 20],
          [19, 20]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "a5310db899314b438af7bbd6ca78e661",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-县道边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 125
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "87443c3b31aa4f5b94530e941526f486",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101005",
      "describe": "道路立交",
      "name": "立交-县道",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 126
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "79a020b1b5794df2aa787bdc0c00c94e",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道附属边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 127
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "bd1f4cd4ed5b4fb09096d5eeb49e0320",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道附属",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 128
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "64eb3f7d0b204a1aba2db26c177c35ec",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 129
    },
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "61f5019328434f64818f7ad44cb54af4",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101004",
      "describe": "道路立交",
      "name": "道路立交-省道",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 130
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      [">=", "zvalue", 1],
      ["in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "9c67754f680f4207a1daa2b32c99de26",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道附属边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 131
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["in", "form", "37", "14", "36", "10", "38", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "f7a5da1cd464435e9b8346da57e18f44",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 132
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["in", "form", "37", "14", "36", "10", "38", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "b857d1105c0647d4ad915a7bccc82852",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道附属",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 133
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.4],
          [15, 2.8],
          [16, 5.5],
          [17, 11],
          [18, 11],
          [19, 11]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      [">=", "zvalue", 1],
      ["in", "form", "37", "14", "36", "10", "38", "15"]
    ]
  }, {
    "id": "5e237bdcd1fa4a49b9e9e1dad57f486d",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101003",
      "describe": "道路立交",
      "name": "道路立交-国道",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 134
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      [">=", "zvalue", 1],
      ["in", "form", "37", "14", "36", "10", "38", "15"]
    ]
  }, {
    "id": "fbc7d030112443b385b6be787e7e024b",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速附属边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 135
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "8b069d54dae740ddb7664bfec385ff67",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速附属",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 136
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 6],
          [16, 9],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "f67c6a7f42264628824cda038e16cd53",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 137
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "e1e787a6c95e4b65994283cc8a51d06f",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101002",
      "describe": "道路立交",
      "name": "道路立交-城市高速",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 138
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": 0,
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 2],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "298be504acf24b228cc17164284ccb91",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路附属边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 139
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.6],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Zlevel",
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "87e83dc25bbf429b9639fde047719550",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路附属",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 140
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 3],
          [15, 5],
          [16, 7.5],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "ca50764185474421b792bf455561ba93",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路边框",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 141
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30],
          [20, 30]
        ],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "d7f8363ab99d4d758e5fb2e2d35ef279",
    "maxzoom": 17.5,
    "source": "Zlevel",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Zlevel",
      "prefix": "101001",
      "describe": "道路立交",
      "name": "道路立交-高速道路",
      "sourceminzoom": 5,
      "groupname": "立交15-17.5",
      "groupid": "02ccaecc",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 142
    },
    "source-layer": "Zlevel",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "minzoom": 15,
    "type": "line",
    "filter": ["all", ["==", "kind", 1],
      ["in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "34ac8216479d4456a311fd8186760814",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路隧道边框",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 143
    },
    "source-layer": "Road",
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 0],
          [14, 0.6],
          [15, 0.8],
          [16, 1.2],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "b73cdeeae9ac46e0af86495c104dd725",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "其它道路隧道",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 144
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1.4],
          [15, 2.8],
          [16, 6.4],
          [17, 10],
          [18, 10],
          [19, 10]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 8],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "c259c7912d654aeeb7273d3b50d5e081",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路隧道边框14",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 145
    },
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.9],
          [15, 1],
          [16, 1.2],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "9bce360c61b34aec89eb8863e62d5851",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "乡镇村道路隧道14",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 146
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 2],
          [14, 2.8],
          [15, 7.2],
          [16, 10],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "620495c13dd74acea725520fd3f093b2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道隧道边框14",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 147
    },
    "source-layer": "Road",
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 0.8],
          [14, 0.8],
          [15, 0.8],
          [16, 1],
          [17, 1.2],
          [18, 1.2],
          [19, 1.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "305b27208aa243ecb1995b9f16e75ba6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路",
      "name": "县道隧道",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 148
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [
          [13, 4.2],
          [14, 4.8],
          [15, 7.2],
          [16, 10],
          [17, 24],
          [18, 24],
          [19, 24]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "1e83704478d24ff9bd5f62bcce03dd82",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道隧道边框",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 149
    },
    "paint": {
      "line-dasharray": [3, 3],
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "2df5d0e2d5cf43f19cb87c30fca560b4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路",
      "name": "省道隧道",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 150
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 4],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "d7bd60a6eb044b79b5910ea84911b37a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道隧道边框",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 151
    },
    "paint": {
      "line-dasharray": [3, 3],
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      },
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 1],
          [14, 1],
          [15, 1.2],
          [16, 1.2],
          [17, 1.4],
          [18, 1.4],
          [19, 1.4]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["==", "const_st", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "8c8f8caea10843c48e2c1969d709aaf8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路",
      "name": "国道隧道",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 152
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 2.4],
          [14, 2.8],
          [15, 5.5],
          [16, 11],
          [17, 22],
          [18, 22],
          [19, 22]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3],
      ["in", "form", "31"]
    ]
  }, {
    "id": "c1861eb65fc84ccb813e63e70a29e018",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速隧道边框",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 153
    },
    "source-layer": "Road",
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "31"]
    ]
  }, {
    "id": "12c3c1aac45f4585886f0f3843c270bf",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路",
      "name": "城市高速隧道",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 154
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-opacity": 1,
      "line-width": {
        "stops": [
          [13, 3],
          [14, 6],
          [15, 9],
          [16, 18],
          [17, 32],
          [18, 32],
          [19, 32]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 2],
      ["in", "form", "31"]
    ]
  }, {
    "id": "60b3658659844ec6a8004e3d116e7dc2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路隧道边框",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 155
    },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-dasharray": [3, 3],
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 1.2],
          [14, 1.2],
          [15, 1.4],
          [16, 1.4],
          [17, 1.6],
          [18, 1.6],
          [19, 1.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "7594e19764f64e1ca7c72ed54bdc16aa",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路",
      "name": "高速道路隧道",
      "sourceminzoom": 5,
      "groupname": "道路隧道13",
      "groupid": "7bf55016",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 156
    },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [
          [13, 3],
          [14, 5],
          [15, 7.5],
          [16, 15],
          [17, 30],
          [18, 30],
          [19, 30]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 1],
      ["in", "form", "31"]
    ]
  }, {
    "id": "26ea896c812445eba4c7b0f415c8d8d1",
    "maxzoom": 16,
    "source": "Buildingmore",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Buildingmore",
      "prefix": "",
      "describe": "建筑物",
      "name": "建筑物-平面",
      "sourceminzoom": 14,
      "groupname": "",
      "groupid": "",
      "datatype": "fill-extrusion",
      "sourcemaxzoom": 17.5,
      "zindex": 157
    },
    "source-layer": "Buildingmore",
    "paint": {
      "fill-outline-color": "#1f5ba9",
      "fill-color": "#1f5ba9",
      "fill-antialias": true
    },
    "minzoom": 14,
    "type": "fill"
  }, {
    "id": "a8b656de52e44034b194b5e83d95d9bd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "101010",
      "describe": "公共交通线路",
      "name": "地铁线路_边框",
      "sourceminzoom": 10,
      "groupname": "地铁线路",
      "groupid": "74541ee7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 158
    },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-opacity": 1,
      "line-color": "#071733",
      "line-width": {
        "stops": [
          [10, 2.8],
          [19, 6]
        ],
        "base": 1.2
      }
    },
    "source-layer": "Ptline",
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "status", 0]]
  }, {
    "id": "d50aeb13b32a4aa2b100d4ad964a6d35",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "line-join": "round",
      "visibility": "visible",
      "line-cap": "butt"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "101010",
      "describe": "公共交通线路",
      "name": "地铁线路",
      "sourceminzoom": 10,
      "groupname": "地铁线路",
      "groupid": "74541ee7",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 159
    },
    "source-layer": "Ptline",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-opacity": 0.5,
      "line-color": {
        "property": "color",
        "type": "identity"
      },
      "line-width": {
        "stops": [
          [10, 1.8],
          [19, 3.6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 10,
    "type": "line",
    "filter": ["all", ["==", "status", 0]]
  }, {
    "id": "bafc7df5399547cb9a241a0597a7a96f",
    "maxzoom": 17.5,
    "source": "Buildingmore",
    "layout": {
      "visibility": "visible"
    },
    "layerInfo": {
      "source": "Buildingmore",
      "prefix": "",
      "describe": "建筑物",
      "name": "建筑物-立体",
      "sourceminzoom": 14,
      "groupname": "",
      "groupid": "",
      "datatype": "fill-extrusion",
      "sourcemaxzoom": 17.5,
      "zindex": 160
    },
    "paint": {
      "fill-extrusion-color": "#2674dc",
      "fill-extrusion-translate-anchor": "viewport",
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.75,
      "fill-extrusion-translate": [0, 0],
      "fill-extrusion-height": {
        "property": "levels",
        "type": "identity"
      }
    },
    "source-layer": "Buildingmore",
    "minzoom": 16,
    "type": "fill-extrusion"
  }, {
    "id": "17f68231e6c646afb27d3a9c4812c587",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC5边框13-17.5",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 161
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [9, 1.6],
          [12, 1.2],
          [19, 6]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.2],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "function_class", 5]]
  }, {
    "id": "a54b887eecdb48dc87da53e58cfa0eeb",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC5-13-17.5",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 162
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-color": {
        "stops": [
          [0, "#b3b3b3"],
          [1, "#1fab6c"],
          [2, "#dea927"],
          [3, "#c03b37"],
          [4, "#7f060e"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 0.8],
          [9, 1.6],
          [12, 1.2],
          [19, 6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 13,
    "type": "line",
    "filter": ["all", ["==", "function_class", 5]]
  }, {
    "id": "5a04a39000fe47e4abbd3352210b227d",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC4边框12-17.5",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 163
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 0.8],
          [9, 1.6],
          [12, 1.2],
          [19, 6]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.2],
          [12, 1.6],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "function_class", 4]]
  }, {
    "id": "c2c1a0623b624904bd91e9bf02b8826e",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC4-12-17.5",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 164
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-color": {
        "stops": [
          [0, "#b3b3b3"],
          [1, "#1fab6c"],
          [2, "#dea927"],
          [3, "#c03b37"],
          [4, "#7f060e"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 0.8],
          [9, 1.6],
          [12, 2],
          [19, 6]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["==", "function_class", 4]]
  }, {
    "id": "67ac615572ff4591a696f87330f040d2",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC123边框12-17.5",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 165
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 2],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["in", "function_class", 1, 2, 3]]
  }, {
    "id": "0b39b9f6f9754c8cbe6b3ec9b7cb3811",
    "maxzoom": 17.5,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC123-12-17.5",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 166
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-color": {
        "stops": [
          [0, "#b3b3b3"],
          [1, "#1fab6c"],
          [2, "#dea927"],
          [3, "#c03b37"],
          [4, "#7f060e"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 12,
    "type": "line",
    "filter": ["all", ["in", "function_class", 1, 2, 3]]
  }, {
    "id": "3dc7e9ba2c694025a88b75e7f9d4497c",
    "maxzoom": 12,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC2边框-8-12",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 167
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 8,
    "type": "line",
    "filter": ["all", ["==", "function_class", 2]]
  }, {
    "id": "dfa6a300417f4fc99dc80b10a3d3767e",
    "maxzoom": 12,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC2-8-12",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 168
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-color": {
        "stops": [
          [0, "#b3b3b3"],
          [1, "#1fab6c"],
          [2, "#dea927"],
          [3, "#c03b37"],
          [4, "#7f060e"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 8,
    "type": "line",
    "filter": ["all", ["==", "function_class", 2]]
  }, {
    "id": "44cdd7dacf574a75a9777c55725b0ecd",
    "maxzoom": 12,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1边框-8-12",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 169
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 8,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "bf4aa724d87941f7910d9809bb190ecd",
    "maxzoom": 12,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1-8-12",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 170
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-color": {
        "stops": [
          [0, "#b3b3b3"],
          [1, "#1fab6c"],
          [2, "#dea927"],
          [3, "#c03b37"],
          [4, "#7f060e"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 8,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "542adc240d4b403890a46fe97e744654",
    "maxzoom": 8,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1边框-5-8",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 171
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-gap-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1
      },
      "line-color": "#ffffff",
      "line-width": {
        "stops": [
          [5, 1],
          [9, 1.4],
          [12, 1.8],
          [19, 2.4]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "e016b329eb2d41768d6aaa9685b8826a",
    "maxzoom": 8,
    "source": "Traffic",
    "layout": {
      "line-join": "round",
      "visibility": "none",
      "line-cap": "round"
    },
    "layerInfo": {
      "source": "Traffic",
      "prefix": "",
      "describe": "交通路况",
      "name": "交通路况FC1-5-8",
      "sourceminzoom": 5,
      "groupname": "交通路况",
      "groupid": "a3f14b34",
      "datatype": "line",
      "sourcemaxzoom": 17.5,
      "zindex": 172
    },
    "source-layer": "Trafficrtic",
    "paint": {
      "line-color": {
        "stops": [
          [0, "#b3b3b3"],
          [1, "#1fab6c"],
          [2, "#dea927"],
          [3, "#c03b37"],
          [4, "#7f060e"]
        ],
        "property": "status"
      },
      "line-width": {
        "stops": [
          [5, 1],
          [9, 2.4],
          [12, 2],
          [19, 7.2]
        ],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["==", "function_class", 1]]
  }, {
    "id": "cd08ce8685f14cc3aab2501a3f33dfb4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 11],
          [13, 11],
          [14, 11],
          [15, 11],
          [16, 12],
          [17, 12],
          [18, 12],
          [19, 12]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 11,
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101006",
      "describe": "道路名",
      "name": "15步行道路名",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 173
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1,
      "text-color": "#60a1f0",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 10],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "9d68d1bd8d5e4b048808719491f0c3c3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 11],
          [13, 11],
          [14, 11],
          [15, 11],
          [16, 12],
          [17, 13],
          [18, 13],
          [19, 13]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "14九级路名",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 174
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 9],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "830d807ad42f4afeb86cb5609c4867d0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 12],
          [13, 12],
          [14, 14],
          [15, 14],
          [16, 14],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "14其他道路名",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 175
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Road",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 8],
      ["==", "const_st", 1],
      ["!=", "form", "12"]
    ]
  }, {
    "id": "159d6a887171481087ebf8db2ba39766",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 12],
          [13, 12],
          [14, 12],
          [15, 14],
          [16, 14],
          [17, 16],
          [18, 16],
          [19, 16]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "text-padding": 2,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "14乡镇村道路名",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 176
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 7],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "efd2351c5b5841d690ab9cbd9e75ca57",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 10],
          [11, 11],
          [12, 11],
          [13, 12],
          [14, 12],
          [15, 13],
          [16, 14],
          [17, 15],
          [18, 15],
          [19, 15]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-padding": 2,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101005",
      "describe": "道路名",
      "name": "12县道名",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 177
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1,
      "text-color": "#60a1f0",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 6],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "4ae781e68ec542f79764ca69d6c3fd1f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [7, 10],
          [12, 10],
          [13, 10],
          [14, 11],
          [15, 11],
          [16, 11],
          [17, 12],
          [18, 12],
          [19, 12]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Railway",
      "prefix": "101009",
      "describe": "铁路名",
      "name": "12铁路名",
      "sourceminzoom": 6,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 178
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1,
      "text-color": "#38a5f7",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Railway",
    "minzoom": 12,
    "type": "symbol"
  }, {
    "id": "cdc56c29c6334487a1d31a9b1f5474b6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "11轮渡名",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 179
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Road",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 13],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "a72c3d90cf644beaa4d8b9d6e1e4961b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9,
      "icon-image": "county-15-{brief_cnt}",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "icon-size": 0.94
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "12县道简称",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 180
    },
    "paint": {
      "text-color": "#4a4a4a",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Road",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 6]
    ]
  }, {
    "id": "bd2381d3f71d49618c7891f3f330f3fe",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9,
      "icon-image": "Provincial-15-{brief_cnt}",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.94,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "9省道简称",
      "sourceminzoom": 5,
      "groupname": "道路名称",
      "groupid": "113c8276",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 181
    },
    "source-layer": "Road",
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 4]
    ]
  }, {
    "id": "b97f5614fdd74c7cada0040e0b611a53",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17E-金融、保险-03-17级-ATM/自助银行",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 182
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "150101", "150102"]
    ]
  }, {
    "id": "40466d11849e4ec191254aeabc3fcf23",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17E-金融、保险-01-17级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 183
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "150101"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "e1a50ba6eb874953885430aaaccfa09a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17E-金融、保险-01-17级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 184
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "150103", "150104"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "28492f79bd3c4ea8a6c5f3c42cbc60c5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "17M-交通运输、仓储-06-17级-通用",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 185
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230130", "230219", "230220", "230221", "230228", "230229"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "7dcc799c24504d2c810967f12c2beb39",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "17K-居民服务-03-17级-宠物医院",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 186
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "210105"]
    ]
  }, {
    "id": "a82e25d5a57841f7b16f4ea7e9a6639b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "17K-居民服务-03-17级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 187
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "210101", "210102", "210103", "210104", "210201", "210202", "210203", "210204", "210206", "210207", "210209", "210210", "210213", "210214", "210216", "210217", "210218", "210219", "210301", "210302", "210303", "210400"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "9cf6c20765f84379b2249a0de4c932dc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17J-商业设施、商务服务-04-17级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 188
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "200200", "200300", "200400", "200404", "200405"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "5097cc6fd5484214a8c6d5db87b4b006",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190200_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "17I-公共设施-06-17级-消防",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 189
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "190204"]
    ]
  }, {
    "id": "f0ebf85368b9465389526d91b23a1d8c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "17I-公共设施-06-17级-国际组织",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 190
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "190500", "190501"]
    ]
  }, {
    "id": "4831577a62c04db28f8d121fa6f8c2f4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "17I-公共设施-06-17级-通用",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 191
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190111", "190112", "190113", "190114", "190301", "190502"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "ec2c4d0b26924d99813ca36c18a1bd8a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "17H-运动、休闲-03-17级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 192
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180209", "180210", "180211"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "755718fe5ab4480c940e5ab7efa006ea",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "17H-运动、休闲-03-17级-通用",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 193
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180206", "180207", "180208", "180301", "180302", "180303"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "061342498e114f37bc0273a078cb14bc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180201_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "17H-运动、休闲-03-17级-休闲娱乐",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 194
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180201", "180202", "180203", "180204", "180205"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "40d87c82283c4a578d95faa35fff9340",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17G-卫生、社保-03-17级-牙科诊所",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 195
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "170107"]
    ]
  }, {
    "id": "6088b10c75a646da9c54bf319ac25265",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17G-卫生、社保-03-17级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 196
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170106", "170108", "170109", "170110", "170201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "7eb6a54d76064ed0a3e16eb2a816186b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17F-教育、文化-03-17级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 197
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160201", "160202"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "dae858d1ecbb45178c6f9390cd659479",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "17F-教育、文化-03-17级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 198
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160108", "160110", "160209"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2e3b53dbe4ea4900b42c76aa477cf6f6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17D-汽车销售及服务-02-17级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 199
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "140202"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "6a2d762a6c2e4d2bbd4cd170f2fde2a2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17C-批发、零售-01-17级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 200
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130101", "130200", "130201", "130202", "130303", "130304", "130501", "130502"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "4b945a57a494409aa1fc1b8767495408",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "17C-批发、零售-01-17级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 201
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130104", "130105", "130203", "130204", "130205", "130206", "130207", "130302", "130401", "130403", "130404", "130405", "130406", "130407", "130408", "130409", "130410", "130411", "130800", "130801", "130803", "130804", "130805", "130806", "130807"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "b9571f8ceb64400c9d66f8153d267ee4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 12],
          [18, 20]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-padding": 0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "16M-交通运输、仓储-07-16级-桥+立交桥",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 202
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "230201", "230202"]
    ]
  }, {
    "id": "b999e100f41b463b9a05e19baa37e738",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230207_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "16M-交通运输、仓储-07-16级+停车场（三类）",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 203
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#000000",
      "text-halo-width": 1.5,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230211", "230212", "230214", "230223", "230224", "230225", "230213"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "c3dc70b86bcb4613860e0c0fef04d183",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_22",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "16M-交通运输、仓储-07-16级+停车场（三类）_2",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 204
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#000000",
      "text-halo-width": 1.5,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230203", "230204", "230230"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "a6a1fc74b12e4e559d75c76a336eb92b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "16L-公司企业-03-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 205
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220200"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "524da52167554e34ad7fd7117f628934",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16J-商业设施、商务服务-03-16级-大厦",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 206
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "200103"]
    ]
  }, {
    "id": "38b5000a91b44773bf28574ff358e27b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "16H-运动、休闲-05-公园-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 207
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "839c0d1f5cba4eafb37b454595cf49fb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "16H-运动、休闲-01-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 208
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180100", "180101", "180102", "180103", "180104", "180105", "180106", "180306", "180400"],
      ["==", "accessflag", 0],
      ["!=", "name_zh", "澳門總督府"]
    ]
  }, {
    "id": "8c652e65124e4bbabecda73be8bf3096",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "symbol-placement": "line",
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "16H-运动、休闲-01-16级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 209
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "180107", "180110"]
    ]
  }, {
    "id": "3c8c22ad96284b0ca99ac098d6dba631",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16G-卫生、社保-02-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 210
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170103", "170104"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "b8a9827590cb4364abecbd9a28590311",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16G-卫生、社保-02-16级-急诊",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 211
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "170105"]
    ]
  }, {
    "id": "26ced06684a04f6ea2e8fd26703efd04",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160102_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16F-教育、文化-01-16级-中学",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 212
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "160103"]
    ]
  }, {
    "id": "a96e7f5a77a64cb085bb5b2e564ad998",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16F-教育、文化-01-16级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 213
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160100", "160207", "160208"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "f3fae27b7a034399a9705d810f06ee7f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "16F-教育、文化-01-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 214
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160101", "160102", "160104", "160204", "160205", "160206"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "db8f89ae759f46fb99d6b7b9b95ebe0d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16E-金融、保险-02-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 215
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "150200"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "16cf3f37f8584d3e947a7dc0319f1503",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-justify": "center",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16C-批发、零售-02-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 216
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130102", "130106", "130301"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "75eec6372f56467ab8e4eb715df5d8e5",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "16C-批发、零售-02-16级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 217
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130402", "130601", "130602", "130603", "130700", "130701", "130702", "130703", "130704", "130705"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "fe697507686449e48fcccd9fac85a58e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16B-住、宿-16级-通用图标层",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 218
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#a0c0f0",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "120104"]
    ]
  }, {
    "id": "f1032b68cb21475a866e60c6b1b1c3c3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.5, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "16L-公司企业-02-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 219
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "220100", "220400"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "d3bbae2c2fde4f47a18dcad4b9c76866",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-padding": 2,
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "16N-科研及技术服务-01-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 220
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "240100"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "48459d7a063c42ba828e344876751d0b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16A-餐饮-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 221
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#a0c0f0",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "110101", "110102", "110103", "110200", "110301", "110302", "110303", "110304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "ca4f5929d7db471a8fc929dd6e1de3e6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16B-住、宿-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 222
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#a0c0f0",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "120101", "120102", "120103", "120201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "b522eb510b404882bd77b288e672ae4c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16B-住、宿-小区-01-16级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 223
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#a0c0f0",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"],
      ["==", "generation", 2],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "b7e153dbabd54d8ea9fc8546271101ef",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_door_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "icon-size": 0
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105001",
      "describe": "兴趣点",
      "name": "16出入口-正门、非正门16",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 224
    },
    "source-layer": "Poi",
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "accessflag", 2, 1]]
  }, {
    "id": "85fbd7a156ce452f86e24f64b8d4e640",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-04-15级-宗教-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 225
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "190400"]
    ]
  }, {
    "id": "edf9542c3fda4bbfac4eee32ec606663",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-04-15级-宗教",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 226
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190401", "190402", "190403", "190404"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "3ebac3f06c3d4608b5ce0e2f93b1f295",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190200_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-05-15级-公安机关",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 227
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190200", "190201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2a9ceabad9b84135b97f844b0af5d895",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "15H-运动、休闲-06-植物园-15级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 228
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "1b276b30935e40aabb85498297eedde9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "15H-运动、休闲-04-15级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 229
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180307", "180308"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "808dd9e8eaca47598d55d4b8b88d35bb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "15H-运动、休闲-04-15级-街心公园",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 230
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "180305"]
    ]
  }, {
    "id": "3c623c2585334fb98c338f877bf707bb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15G-卫生、社保-01-15级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 231
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170100", "170101", "170102"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "f247fd1b554f414796f6ff4cf136f934",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [1, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "15-居民服务-02-15级-公共厕所",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 232
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
      "text-color": "#000000",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "210215"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "107644c34236445e9834b853030104b3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15F-教育、文化-02-15级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 233
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "200102", "200201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2df2015582b448cab0547abac6c25028",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15F-教育、文化-02-15级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 234
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160105", "160203", "160106", "160107"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "30a8002ca914417782b56eb7e7302825",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105003",
      "describe": "兴趣点",
      "name": "15F-教育、文化-02-15级-通用图标",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 235
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "", "160109"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "fd070d00b9ae4046ad2d4fcd22ca6169",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "15D-汽车销售及服务-01-15级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 236
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "140101", "140104", "140201", "140301", "140302", "140303", "140304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "6cc8106abd2a4ed0bbd3d6e4b77dba8a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "15K-居民服务-01-15级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 237
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "210211", "210304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "9a2a8cf1407149968addc46804a47c2e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15M-交通运输、仓储-04-15级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 238
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230125", "230206", "230207"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "978601bd416a427f9e56b6ad5161f535",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15M-交通运输、仓储-04-15级-通用",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 239
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230127", "230128", "230129", ""],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "daf482bcf4524fd0aae2fad970e7fc0a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15M-交通运输、仓储-02-15级-机场/候机楼-02",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 240
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"],
      ["==", "generation", 2],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "558110992d734592bede93c1068df07b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15L-公司企业-01-15级-工业园",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 241
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220300"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "d6585517729d498488821f883981e3e0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-03-15级-政府及管理机构-机关1",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 242
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190100", "190101", "190103", "190104", "190105", "190106"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "d054a146f04a4d7fa01953c07e3557d3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "15I-公共设施-03-15级-政府及管理机构-机关2",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 243
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "190110"]
    ]
  }, {
    "id": "4c5826ac82bf4c69adf85a47075eda8a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "14I-公共设施-02-14级-省级政府机关",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 244
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190102"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "522156d3c40f44d09c9ba0950a2ab8a6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "14H-运动、休闲-02-垂钓-14级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 245
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180109"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "145f10af52264086a96256a7163c61a4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105005",
      "describe": "兴趣点",
      "name": "14J-商业设施、商务服务-01-14级-商业综合体",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 246
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200105"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "e556e25339e34ae08e16555402875d96",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "14O-农林牧渔业-01-14级-通用",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 247
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "250100", "250200"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "43f0b5e0e38241e48e99e30b3dd42127",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105006",
      "describe": "兴趣点",
      "name": "14B-住、宿-小区-02-14级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 248
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "2fb16c7bd2e347e192cee0c0b0b1b7be",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "14M-交通运输、仓储-03-14级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 249
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230100", "230108", "230226"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "6d2a23c3deff45aea05ad2e51d718e88",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105002",
      "describe": "兴趣点",
      "name": "13H-运动、休闲-07-水族馆-13级",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 250
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180310"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "c61c0b4b059b45f3ae014d36ddc244ad",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105004",
      "describe": "兴趣点",
      "name": "13I-公共设施-01-13级-省/直辖市/自治区政府+市县政府",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 251
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190107", "190108"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "65204d8977c94ff6931e403f0375a8cb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "12M-交通运输、仓储-01-12级-机场/候机楼-01",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 252
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"],
      ["==", "generation", 1],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "0ae13f924e8d435bb403197843bb093b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105008",
      "describe": "兴趣点",
      "name": "11P-自然地物\\地名-01-11级-通用",
      "sourceminzoom": 9,
      "groupname": "POI",
      "groupid": "c0ab8aba",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 253
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "260000", "260100"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "dc29cee0a7a34257ba7884440c28392c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+家居用品",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 254
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130705"]]
  }, {
    "id": "4632edadc655477aac91e35df8c18c93",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+日杂店",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 255
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130104"]]
  }, {
    "id": "9d80fe4792a0482da6a7ca2843304138",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+百货商店",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 256
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130103"]]
  }, {
    "id": "488f10af5be140898201eb5e9de38e76",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+超市代表",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 257
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "135036"]]
  }, {
    "id": "961bfdf292954dffab600940df8c1273",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "17+购物中心，商厦代表",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 258
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "210217"]]
  }, {
    "id": "5461def97ca94a6092aee3364d5dd63d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 0,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "16+网球场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 259
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180102"]]
  }, {
    "id": "494dc0f1384a43159a86a501ca705e25",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "16+羽毛球场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 260
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180101"]]
  }, {
    "id": "bc37cb45a830499abe01388645f9cd26",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190403_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+基督教",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 261
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190403"]]
  }, {
    "id": "81f9b4faf7c24dcbb65384b4e7f05a9e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190402_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+天主教",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 262
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190402"]]
  }, {
    "id": "39b6afa6c8d147e4a430ce59a713ef55",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190404 _16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+伊斯兰教",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 263
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190404"]]
  }, {
    "id": "54c63f3b8c364fad9ef781e64e12f4f4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+幼儿园/托儿所",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 264
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160101"]]
  }, {
    "id": "32f70974a1b24e7d9a9435a73a9855c6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+社区医疗",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 265
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170106"]]
  }, {
    "id": "f163ee5103294537b5a90576fe2e93de",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "16+其他单位/广播",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 266
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "220400", "165026"]]
  }, {
    "id": "e64ee293b26a436f9ebc4ed344541318",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "16+商业零售设施类-家具",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 267
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130702"]]
  }, {
    "id": "0b3f7f182ff949bfbb2958ad4d7853bc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "16+小商品城，其他批发市场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 268
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130101"]]
  }, {
    "id": "0d09e2efcd6045b4ae974aac21f81682",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "16+邮局",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 269
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "215201"]]
  }, {
    "id": "961768dfa35e464ea07e845175a60e16",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "16+街区，小区",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 270
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275015"]]
  }, {
    "id": "1bb8cad4d58047d9a1dca3f9d1cc588c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180310_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "15+水族馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 271
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180310"]]
  }, {
    "id": "d7058431fcca454c83f9a905e5839828",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "15+体育场，体育馆（滑冰，游泳，网球，排球，羽毛球，田径场，体育中心等）",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 272
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "806e555f84b6448fa74dc776470c994e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+美术馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 273
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160206"]]
  }, {
    "id": "dee2dbf19d534d8f812a9741eafd5de4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+资料馆，档案馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 274
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160204"]]
  }, {
    "id": "7ca618a3bee34d778faf3ca701a7309b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+新闻社，报社，出版社",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 275
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160201"]]
  }, {
    "id": "9a0824d506bc452eb4618ff9647f4c96",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160202_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "icon-optional": false,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+电视台",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 276
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165028"]]
  }, {
    "id": "32a9e259c4fa4963a36947dfab37c0a7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+专科医院",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 277
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170102"]]
  }, {
    "id": "bee163c491a741388287ea5948e64b4c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+医院",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 278
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "175115"]]
  }, {
    "id": "7209046385e24f84baf24ed53d710082",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+其他教育机构/厂矿/公司，企业代表/电力/墓地",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 279
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160100", "220200", "225018", "215033", "215031", "275016", ""]]
  }, {
    "id": "50e200730a1047a3b767d9987fef999e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "15+中专/职高/技校",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 280
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160104", ""]]
  }, {
    "id": "29ce2bacc0364c2ab5fa1994c7ec713e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120102_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+旅馆，招待所",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 281
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#a0c0f0",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120102"]]
  }, {
    "id": "d298129123b44df1b28f619f7cf63d2b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+普通出租公寓",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 282
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#a0c0f0",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120104"]]
  }, {
    "id": "85d3ec759ac9447bbb0d6eb147fdd38a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+温泉/农家乐",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 283
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#a0c0f0",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "185123", "180301"]]
  }, {
    "id": "f7ab1cc7943146c491255443aa53ac29",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+非星级度假村，疗养院",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 284
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#a0c0f0",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180302"]]
  }, {
    "id": "9a3aa5d9572e4c52979fb99caed9d70a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "15+酒店式公寓",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 285
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#a0c0f0",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120103"]]
  }, {
    "id": "61e702a702844aaea8f3d71446635a78",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+灯饰",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 286
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130704"]]
  }, {
    "id": "a8cc5c46f8c34b189632162372c4d68a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+建材，洁具",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 287
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130703"]]
  }, {
    "id": "804df02a1f764aca87b1394ccc1ca61a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+家居建材代表",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 288
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130700"]]
  }, {
    "id": "b1a15f7b46b948a5afd11719d40efc1d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "15+农贸市场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 289
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130202"]]
  }, {
    "id": "2bb6ab511fa14e7e8cf9f7df26c47455",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "15+点状文字分类",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 290
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275016"]]
  }, {
    "id": "57ddce6469e2457ab96e0a12ce5f20b9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "15+通讯代表、中国电信、中国移动、中国联通、中国铁通",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 291
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "215035", "215204", "215205", "215206", "215207"]]
  }, {
    "id": "d5d25e2f48914844bf7d22043f15da46",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "15+住宅楼",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 292
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120202"]]
  }, {
    "id": "dce8745d39c84eafb59cb4407a865b6d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "15+植物园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 293
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "e4390e4ba9124cd2ad9482881eee36ad",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.5, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "15+山",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 294
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275009"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "a5e76770ff9d4bd8bdb727b4992a034c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "15+广场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 295
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180306"]]
  }, {
    "id": "4ac7930f8b37418d97167a2009f83c44",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230207_16",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15+高速停车区",
      "sourceminzoom": 9,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 296
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230207"]]
  }, {
    "id": "8af2fd95715c48fe851f22d982c1f499",
    "maxzoom": 17.5,
    "source": "Ptstop",
    "layout": {
      "icon-image": "poi_code_230100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "105007",
      "describe": "公共交通站点",
      "name": "15公交站",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 297
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#e67a7f"
    },
    "source-layer": "Ptstop",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 0],
      ["==", "status", 0]
    ]
  }, {
    "id": "97673f22b5df42f99b2e01a758fe6f97",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230209_34",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0
    },
    "layerInfo": {
      "source": "Poi",
      "prefix": "105007",
      "describe": "兴趣点",
      "name": "15+收费站",
      "sourceminzoom": 9,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 298
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230209"]]
  }, {
    "id": "5cf27c1c859148e0a9ca23c381ba36fc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+火车站",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 299
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"]]
  }, {
    "id": "b226cbcf0378429c9235a4f2161d2791",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-anchor": "left",
      "icon-size": 0
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+港，港口",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 300
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-color": "#ff0000",
      "text-translate": [10, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "235021", "235022"],
      ["<", "rank", 3]
    ]
  }, {
    "id": "914b794202594592a400f7ad127e2be1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "15+其它政府机关街道办事处",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 301
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195130"]]
  }, {
    "id": "b09393fd4f9f4f82b31cfff962b484ce",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180104_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "14+滑雪场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 302
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180104"]]
  }, {
    "id": "3d0db246f53b49468b741ee18c8d3045",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+花卉",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 303
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130801"]]
  }, {
    "id": "2381780936084a909f010a8a0f0b3300",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+剧场，戏院，音乐厅",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 304
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180210"],
      ["<=", "rank", 2]
    ]
  }, {
    "id": "3138f18e36604c299f2a91ab2e87fb64",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+驾校",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 305
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160109"]]
  }, {
    "id": "c0f6dc36be9c47358ed190368b97bdd4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+学校代表",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 306
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165027"]]
  }, {
    "id": "496f1edd6c334a649ab78612bc0403ac",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+小学",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 307
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160102"]]
  }, {
    "id": "af196cdbee6947589082fa387b56099d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160102_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+中学",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 308
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160103"],
      ["<=", "rank", 1]
    ]
  }, {
    "id": "5f6efae878394dcfb177f110154ca288",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-padding": 0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "14+大专院校",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 309
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"],
      ["<", "rank", 2]
    ]
  }, {
    "id": "3f4a4a91b77240aaa5b4a8bfcc6d18d9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180209_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "14+电影院",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 310
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185121"]]
  }, {
    "id": "754b839484b94ebca54f5c3273865e85",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "14+名胜古迹",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 311
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185116"],
      [">", "rank", 1]
    ]
  }, {
    "id": "351c3a4326e34d79bacfe53b7d271acd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "14+公园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 312
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      [">=", "name_zh", ""],
      ["<", "rank", 2]
    ]
  }, {
    "id": "2d7880d82da74c1da15551e6703de1a2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_150101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "14+银行",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 313
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "155030", "155029", "155175", "155176", "155177", "155178", "155179", "155180", "155181", "155182", "155183", "155184", "155185", "155186", "155187", "155188", "155189", "155190", "155191", "155192", "155193", "155194", "155195", "155196", "155197", "155198", "155199", "155200", "155030", "155029"]]
  }, {
    "id": "d892487f43e34c29861ab9043d409449",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "14+工业园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 314
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220300"]]
  }, {
    "id": "fa0363805ea9427ca4d3405f32ae16e8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105006",
      "describe": "文字",
      "name": "14+小区",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 315
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"]]
  }, {
    "id": "25fa0df19a7e4082b0c90bdeb8abe226",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "14+星级饭店（星级度假村）1/2/3星级",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 316
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#a0c0f0",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "125134", "125136", "125137", "125138"]]
  }, {
    "id": "3eb6f14626cb48a3ade4e1afa8349704",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "14+渡口，码头",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 317
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "235021"]]
  }, {
    "id": "c24a41cbf4df4cfe9509f58cea716a35",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190200_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+警察局/公安局/派出所/交警队/消防队（港澳）",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 318
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "195133", "190201", "190202", "190203", "190204"]]
  }, {
    "id": "f12b779b1e6f4037afec6783309691d4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+大厦代表",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 319
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "215032"]]
  }, {
    "id": "f437d9f880404164aadb8599cedaa76d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+乡、镇政府",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 320
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190110"]]
  }, {
    "id": "736752d20b3c44a2ae8f02a73932d31d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+法院，检察院",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 321
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195129"]]
  }, {
    "id": "5bcf1d7421554b5189cf5e8f374ef3ad",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+县级政府机关",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 322
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190105"]]
  }, {
    "id": "f0f7f18b7ec848dcb4856fb1693c594b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+区、县级市、县政府",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 323
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190104"]]
  }, {
    "id": "5715ddb188ef4e7a86120fffce539858",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+外国大使馆｜领事馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 324
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190501"]]
  }, {
    "id": "433da23a72cd4b0f908b01f159d59a7b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "14+政府机关（国务院所属29部委以外的其他部委，省级和省会的国家机关）",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 325
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195128"]]
  }, {
    "id": "fa1159c4ff344736902cf947ab165604",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "14+高速服务区",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 326
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230206"]]
  }, {
    "id": "bb2d0e38a62c438f8a2da805bfa79a57",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "13+五金、机电、仪器仪表",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 327
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130701"]]
  }, {
    "id": "30b2b69aee544b3e83d9c07712075380",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "13+商务中心/会馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 328
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200104"]]
  }, {
    "id": "c67e59d0c0274e039cc9a3f7498717db",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "13+商业综合体",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 329
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200104"]]
  }, {
    "id": "7ef7670206804f36a120e88f4d390640",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 0,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "13+体育场，体育馆（滑冰，游泳，网球，排球，羽毛球，田径场，体育中心等）",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 330
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"],
      ["<", "rank", 3]
    ]
  }, {
    "id": "2f0e4ba0723344faba88d242af4192a0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_1904014_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "13+寺庙",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 331
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195126"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "7c6b0c9654c54f64830b601a7212b272",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "13+名胜古迹",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 332
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185116"],
      ["<=", "rank", 1]
    ]
  }, {
    "id": "1a32259daed14ee99c5df3f76da36282",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "13+博物馆，纪念馆，展览馆，陈列馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 333
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160205"],
      ["<", "rank", 2]
    ]
  }, {
    "id": "0b11137721ff41bfaa371bfb63bb5186",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+道观",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 334
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195132"]]
  }, {
    "id": "a15f00164e7446b3bd252f8bbb8e693f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+会议中心，展览中心_2",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 335
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200101"],
      ["in", "rank", 2, 3]
    ]
  }, {
    "id": "200e97a3f5624173a08bc92580244574",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+综合医院",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 336
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170101"]]
  }, {
    "id": "983a5f49f9bf4642be02087467593990",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "13+中学",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 337
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160103"],
      [">", "rank", 1]
    ]
  }, {
    "id": "6c3789bbd17547bd97787febd0d8e13d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "13+星级饭店（星级度假村）4星级",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 338
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#a0c0f0",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "125139"]]
  }, {
    "id": "37d8034e136f4e2a853b651859e95c30",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105001",
      "describe": "文字",
      "name": "13+星级饭店（星级度假村）5星级",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 339
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#a0c0f0",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "125140"]]
  }, {
    "id": "d9b888229ba741ca98b05e1ed64fb6f7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "13+省级政府机关",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 340
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190102"]]
  }, {
    "id": "fdd0d01e7d0f46738df4a7c457c58898",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "13+国家机关（部委局）",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 341
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190101"]]
  }, {
    "id": "44cc9eacfb9f46d5a822f72e081d44ee",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "12+高尔夫练习场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 342
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180106"]]
  }, {
    "id": "59272e5b32b94210b9af4c4ae22be047",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+山",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 343
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275009"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "8624adccfb8c45e98bc66655f835d3b1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-padding": 2,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+公园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 344
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      ["in", "rank", 2, 3]
    ]
  }, {
    "id": "ceb107bd9aa847bab77d224af81040a8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+城墙",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 345
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165024"]]
  }, {
    "id": "7ef974bae4b040b5b4ae70e65b4b6df0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180307_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "12+游乐园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 346
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185119"]]
  }, {
    "id": "3cbda06cbdb347228af23dd5ea1826d1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+剧场，戏院，音乐厅",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 347
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180210"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "2aa97fe1925a4a26b975b4bc24019068",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+文化馆，活动中心",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 348
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160208"]]
  }, {
    "id": "d17f4129df834730b54dbc456f156655",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+科技馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 349
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160207"]]
  }, {
    "id": "4990823f37ae4c89a57be163f311ffdd",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-padding": 0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "12+大专院校",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 350
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"],
      ["==", "rank", 2]
    ]
  }, {
    "id": "a83871b396e8444087840dba8e2f0d10",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105005",
      "describe": "文字",
      "name": "12+百货商场/百货商城",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 351
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130102"]]
  }, {
    "id": "f32da50e71dd4a138a9bfaefcaf3047e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-anchor": "left",
      "icon-size": 0
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "12+港，港口",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 352
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-color": "#ff0000",
      "text-translate": [10, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "235021", "235022"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "03f242c602fc4c95b8519d1d5ad2a451",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "12+货运火车站",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 353
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230107"]]
  }, {
    "id": "d842024aef3b4f2395982c52c628800a",
    "maxzoom": 15,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "12-15火车站",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 354
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"],
      [">=", "rank", 1]
    ]
  }, {
    "id": "396a5edd249841f7aa4147be9b782325",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "12+区、县级市、县政府",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 355
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190109"]]
  }, {
    "id": "58537cb0cd57442aac61b32909f5f98e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180105_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105002",
      "describe": "文字",
      "name": "11+高尔夫球场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 356
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180105"]]
  }, {
    "id": "4bd5d116e1f34a029b75f4a3ef0b53f7",
    "maxzoom": 14,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_1904014_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "11-14寺庙",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 357
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195126"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "7203e2669346471682f9d487fabca58f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "11+会议中心，展览中心",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 358
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200101"],
      ["in", "rank", 2, 3]
    ]
  }, {
    "id": "889a8132bf3149ec9953b1d5add9928c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "11+博物馆，纪念馆，展览馆，陈列馆",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 359
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160205"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "6c6094c8af2f41b9b16cc4d9f4eed2f2",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230126_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "11+机场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 360
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"]]
  }, {
    "id": "300f742ea88842c883b0a577f230e581",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105004",
      "describe": "文字",
      "name": "11+省会政府/省、直辖市政府/地级市、州政府，直辖市区政府",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 361
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "195125", "190107", "195131"]]
  }, {
    "id": "f2557b5234af46b3a31f924aa1a20232",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [14, 12],
          [15, 12],
          [16, 14],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+桥",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 362
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#75b3ff",
      "text-halo-width": 1.2,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230201"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "108757843b73492ebea85ca30d6d4f72",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 11],
          [12, 11],
          [13, 12],
          [14, 13],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "15+立交桥",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 363
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.2,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230202"],
      ["<=", "rank", 4]
    ]
  }, {
    "id": "01ba5290ef9f461c957423d519c18a55",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [14, 12],
          [15, 12],
          [16, 14],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "13+桥",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 364
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.2,
      "text-color": "#75b3ff",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Annotation",
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230201"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "0c051c96424d41a4937cf9a2428fec24",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9,
      "icon-image": "national-15-{brief_cnt}",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "6高速简称",
      "sourceminzoom": 5,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 365
    },
    "source-layer": "Road",
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 6,
    "type": "symbol",
    "filter": ["all", ["in", "kind", 2, 1],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "1a33e4590ff54d11a2d486c900a285c1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 10],
          [11, 10],
          [12, 11],
          [13, 12],
          [14, 13],
          [15, 13],
          [16, 14],
          [17, 14],
          [18, 15],
          [19, 15]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101004",
      "describe": "道路名",
      "name": "10省道名",
      "sourceminzoom": 5,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 366
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1,
      "text-color": "#75b3ff",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 4],
      ["==", "const_st", 1]
    ]
  }, {
    "id": "5a87b3243fa9454990ce94afdd0fa295",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 10],
          [11, 10],
          [12, 11],
          [13, 12],
          [14, 13],
          [15, 13],
          [16, 14],
          [17, 14],
          [18, 15],
          [19, 15]
        ],
        "base": 1
      },
      "symbol-spacing": 250,
      "visibility": "visible",
      "text-padding": 2,
      "symbol-avoid-edges": false,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101003",
      "describe": "道路名",
      "name": "10国道名",
      "sourceminzoom": 5,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 367
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#423a32",
      "text-halo-width": 1,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 3],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "60c2f599d26d4326b96669a437ffeb95",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 12],
          [12, 12],
          [13, 12],
          [14, 12],
          [15, 12],
          [16, 13],
          [17, 13],
          [18, 13],
          [19, 13]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Villtown",
      "prefix": "103007",
      "describe": "乡镇点",
      "name": "10+村",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 368
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#348ddc",
      "text-halo-width": 1.2,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260100"]]
  }, {
    "id": "4c5957f9eb7c443e8362d67f0fccd0f6",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 12],
          [13, 12]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-padding": 16,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Villtown",
      "prefix": "103006",
      "describe": "乡镇点",
      "name": "街道10-12",
      "sourceminzoom": 9,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 369
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.2,
      "text-color": "#5fa3dd",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-opacity": 1
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260000"],
      ["==", "name_tag", 3]
    ]
  }, {
    "id": "2f2ca1b558a34840acf42b17f9d4c883",
    "maxzoom": 13,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 12],
          [13, 12]
        ],
        "base": 1
      },
      "symbol-avoid-edges": false,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-padding": 2,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-ignore-placement": false,
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "text-allow-overlap": false,
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Villtown",
      "prefix": "103006",
      "describe": "乡镇点",
      "name": "乡镇9-13",
      "sourceminzoom": 9,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 370
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#5fa3dd",
      "text-halo-width": 1.2,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-opacity": 1
    },
    "source-layer": "Villtown",
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260000"],
      ["in", "name_tag", 2, 1],
      ["!=", "special", 1]
    ]
  }, {
    "id": "815ef05e81d4437691b5f5ddd96a5a0a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [11, 11],
          [12, 12],
          [13, 13],
          [14, 13],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 20],
          [19, 24]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "11+立交桥",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 371
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.2,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230202"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "52b5d0a113b546cfa980ee3015fe5f0b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180308_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+动物园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 372
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180308"]]
  }, {
    "id": "61cfb4886464488aa4821321592a309c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+植物园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 373
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "5e9cda10b5e446dfae69e9ead3de7fe3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2,
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105003",
      "describe": "文字",
      "name": "10+大专院校",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 374
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "771d7d65f66b4a57b74c17ddb38b6fc0",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+名胜古迹",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 375
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "185116"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "28a4034ab7db4c8788b7fdbd8dca5247",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-padding": 2,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+公园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 376
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "0e9cb2900211443a8b88a93885b864a9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [10, 11],
          [11, 11],
          [12, 11],
          [13, 11],
          [14, 12],
          [15, 12],
          [16, 12],
          [17, 13],
          [18, 13],
          [19, 13]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "text-anchor": "center",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Ptline",
      "prefix": "101010",
      "describe": "公共交通线路名称",
      "name": "10+地铁线路名称",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 377
    },
    "source-layer": "Ptline",
    "paint": {
      "text-halo-color": "#071733",
      "text-halo-width": 1,
      "text-color": {
        "property": "color",
        "type": "identity"
      },
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0]]
  }, {
    "id": "81a8c422824f47b79d0e021d71209dab",
    "maxzoom": 17.5,
    "source": "Trafficlight",
    "layout": {
      "icon-image": "traffic-light-15",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0
    },
    "layerInfo": {
      "source": "Trafficlight",
      "prefix": "105007",
      "describe": "红绿灯",
      "name": "16+红绿灯",
      "sourceminzoom": 5,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 378
    },
    "paint": {
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Trafficlight",
    "minzoom": 16,
    "type": "symbol"
  }, {
    "id": "ab808b905135493b89d12adf70c787cb",
    "maxzoom": 13,
    "source": "Ptstop",
    "layout": {
      "text-size": 12,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-anchor": "center",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point",
      "icon-size": 0.67,
      "icon-optional": false,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "12+地铁站",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 379
    },
    "source-layer": "Ptstop",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#021f39",
      "text-halo-width": 1.2,
      "icon-translate-anchor": "viewport",
      "icon-color": "#171bf0",
      "text-translate": [0, 4]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "status", 0],
      ["==", "stationtype", 1]
    ]
  }, {
    "id": "826149ec3ece439ab472257ed876fb80",
    "maxzoom": 15,
    "source": "Ptstop",
    "layout": {
      "text-size": 12,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [0, 1.2]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "13+地铁站",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 380
    },
    "source-layer": "Ptstop",
    "paint": {
      "text-halo-color": "#0e2555",
      "text-halo-width": 1,
      "text-color": "#59c3ed",
      "icon-translate-anchor": "map",
      "icon-color": "#ff0000",
      "text-translate-anchor": "map"
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 1],
      ["==", "status", 0]
    ]
  }, {
    "id": "0a59365909af47df86ca7d69781d5380",
    "maxzoom": 16,
    "source": "Ptstop",
    "layout": {
      "text-size": 13,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0, 1.2]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "15+地铁站",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 381
    },
    "source-layer": "Ptstop",
    "paint": {
      "text-halo-color": "#0e2555",
      "text-halo-width": 1,
      "text-color": "#59c3ed",
      "icon-translate-anchor": "map",
      "icon-color": "#ff0000"
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 1],
      ["==", "status", 0]
    ]
  }, {
    "id": "89e998258a8543c8818bb8d7006c6e26",
    "maxzoom": 17.5,
    "source": "Ptstop",
    "layout": {
      "text-size": 14,
      "icon-image": "metro-{istransfer}-{city_code}-18",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 1,
      "text-offset": [0, 1.2]
    },
    "layerInfo": {
      "source": "Ptstop",
      "prefix": "101010",
      "describe": "公共交通站点",
      "name": "16+地铁站",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 382
    },
    "source-layer": "Ptstop",
    "paint": {
      "text-halo-color": "#0e2555",
      "text-halo-width": 1,
      "text-color": "#59c3ed",
      "icon-color": "#ff0000"
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "stationtype", 1],
      ["==", "status", 0]
    ]
  }, {
    "id": "d4e48bd82d0948df8b3ff1e7df777cbc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 9,
      "icon-image": "state-15-{brief_cnt}",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.94,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "",
      "describe": "道路名",
      "name": "8国道简称",
      "sourceminzoom": 5,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 383
    },
    "source-layer": "Road",
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 8,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3],
      ["==", "kind", 3]
    ]
  }, {
    "id": "35a91d9d62bb49e5bdbaeab6cee652f4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 10],
          [10, 10],
          [11, 11],
          [12, 12],
          [13, 13],
          [14, 14],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-padding": 2,
      "symbol-avoid-edges": false,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101002",
      "describe": "道路名",
      "name": "9城市高速名",
      "sourceminzoom": 5,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 384
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 2],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "a037578375d04cb7ae564dcb97d3f8de",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 10],
          [10, 10],
          [11, 11],
          [12, 12],
          [13, 13],
          [14, 14],
          [15, 14],
          [16, 16],
          [17, 18],
          [18, 18],
          [19, 18]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "layerInfo": {
      "source": "Road",
      "prefix": "101001",
      "describe": "道路名",
      "name": "9高速道路名",
      "sourceminzoom": 5,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 385
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 1],
      ["!=", "const_st", 3]
    ]
  }, {
    "id": "feef94d89fda406a811b921b097e0e5e",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
      "text-offset": [0.8, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "10-12火车站",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 386
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"],
      ["!=", "name_zh", ""],
      [">=", "rank", 2]
    ]
  }, {
    "id": "5f2a1c1c5aab41639e0895bbdd19b4df",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10+体育场，体育馆（滑冰，游泳，网球，排球，羽毛球，田径场，体育中心等）",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 387
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "50b6772e304c4a6cb876a4f91b61cc0e",
    "maxzoom": 11,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230126_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-optional": false,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-allow-overlap": false,
      "icon-size": 0,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-ignore-placement": false,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "symbol-placement": "point"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105007",
      "describe": "文字",
      "name": "9-11机场",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 388
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "f1f5ace221b24c47958365ee0065e29f",
    "maxzoom": 17.5,
    "source": "Ptexit",
    "layout": {
      "text-size": 12,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{code}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1
    },
    "layerInfo": {
      "source": "Ptexit",
      "prefix": "105007",
      "describe": "公共交通出入口",
      "name": "16+地铁出入口",
      "sourceminzoom": 10,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 389
    },
    "paint": {
      "icon-halo-color": "#656565",
      "text-halo-color": "#0d7cee",
      "text-color": "#ffffff",
      "text-halo-width": 6,
      "icon-translate-anchor": "viewport",
      "icon-halo-width": 0,
      "icon-color": "#fff956",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Ptexit",
    "minzoom": 16,
    "type": "symbol"
  }, {
    "id": "0e3592a4a1d64ee08c63a85c6041f125",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "Tiananmen",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.89,
      "text-offset": [2.6, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "105008",
      "describe": "文字",
      "name": "10天安门",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 390
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#badbff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "天安门"]]
  }, {
    "id": "2621e7e5f22d458389b3db9b7a97f99b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "岛屿8+",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 391
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1,
      "text-color": "#4298f2",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Annotation",
    "minzoom": 8,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "275006", "275007"],
      ["!in", "name_zh", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "9d44e91d11c543d1a2b2a2ea29e8aaa4",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": 10,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "bottom-left",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "赤尾屿4-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 392
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#4298f2",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [6, 4]
    },
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["==", "name_zh", "赤尾屿"]
    ]
  }, {
    "id": "1117fe3b486d4235b36f925b94ac31b8",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": 14,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "103004",
      "describe": "世界地图代表点",
      "name": "台湾海峡5-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 393
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#4588d6",
      "text-halo-width": 1,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [-24, 8]
    },
    "source-layer": "Worldannotation",
    "minzoom": 5,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "275008"],
      ["==", "name_zh", "台湾海峡"]
    ]
  }, {
    "id": "5fc925b5ba3a42188c56746ece99121f",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": 10,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "top",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "敏感岛屿4-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 394
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#4298f2",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [-12, -19]
    },
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "275007"],
      ["!in", "name_zh", "黄尾屿", "赤尾屿", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "4851bb6110004cf8a8450b8d9111cc88",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": 14,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "102",
      "describe": "世界地图代表点",
      "name": "海域名4-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 395
    },
    "source-layer": "Worldannotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#4588d6",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "275008"],
      ["!in", "name_zh", "台湾海峡"]
    ]
  }, {
    "id": "dbe06545d62c42ef83bf73db5e9d9ee3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [6, 11],
          [7, 14],
          [8, 14],
          [9, 14],
          [10, 15],
          [11, 15],
          [12, 16],
          [13, 16],
          [14, 17],
          [15, 17],
          [16, 18],
          [17, 18],
          [18, 19],
          [19, 20]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 11,
      "text-rotation-alignment": "viewport",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "台湾资料6+",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 396
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#3c9cec",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 6,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"],
      ["==", "name_zh", "（台湾省详细资料暂缺）"]
    ]
  }, {
    "id": "7cbf206436af471abb0dd4d4596583ab",
    "maxzoom": 6,
    "source": "Merge_1",
    "layout": {
      "text-size": 10,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 6,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Annotation",
      "prefix": "103004",
      "describe": "文字",
      "name": "台湾资料5",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 397
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [-3, 0]
    },
    "source-layer": "Annotation",
    "minzoom": 5,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "（台湾省详细资料暂缺）"]]
  }, {
    "id": "44dbd1a09d904872800d0b32b80e9f83",
    "maxzoom": 11,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 11],
          [10, 11],
          [11, 12]
        ],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 7,
      "text-rotation-alignment": "viewport",
      "symbol-placement": "point",
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103005",
      "describe": "行政区划代表点",
      "name": "区/自治县9-11",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 398
    },
    "paint": {
      "text-halo-color": "#145fb7",
      "text-halo-width": 4,
      "text-color": "#ffffff",
      "icon-opacity": 1,
      "icon-color": "#4d98dd",
      "text-translate-anchor": "viewport",
      "text-opacity": 1,
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["==", "type", 4],
      ["!in", "name_zh", "香洲区（由澳门特别行政区实施管辖）", "台湾"]
    ]
  }, {
    "id": "d88409e79b6c4426b923644535f00893",
    "maxzoom": 9,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [7, 11],
          [8, 12],
          [9, 12]
        ],
        "base": 1
      },
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103005",
      "describe": "行政区划代表点",
      "name": "区/自治县7-9",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 399
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [3, 0]
    },
    "minzoom": 7,
    "type": "symbol",
    "filter": ["all", ["==", "type", 4],
      ["!in", "name_zh", "台湾", "元宝区", "东港市", "集安市", "临江市", "长白朝鲜族自治县", "图们市", "饶河县", "振兴区", "振安区", "呼玛县", "爱辉区"]
    ]
  }, {
    "id": "eb702250e8c84430945fa5a1a81b728d",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "text-size": 13,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "text-anchor": "center",
      "icon-size": 0.8,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "盟自治州8-10",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 400
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#3c9cec",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Adminflag",
    "minzoom": 8,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["in", "name_tag", 1, 3, 2]
    ]
  }, {
    "id": "ec38830f9ec2467ea87f540c25a32cee",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [5, 11],
          [6, 11],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-rotation-alignment": "viewport",
      "text-allow-overlap": false,
      "text-anchor": "bottom",
      "icon-size": 0.8,
      "text-offset": [0, -0.3]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "盟自治州5-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 401
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 5,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["in", "name_tag", 1, 3, 2],
      ["!in", "name_zh", "延边朝鲜族自治州", "塔城地区", "德宏傣族景颇族自治州", "西双版纳傣族自治州", "怒江傈僳族自治州", "伊犁哈萨克自治州"]
    ]
  }, {
    "id": "bd8575d6a42b4244b28f80cc958d8114",
    "maxzoom": 11,
    "source": "Merge_1",
    "layout": {
      "text-size": 14,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-anchor": "center",
      "text-allow-overlap": false,
      "icon-size": 1,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "地级市8-11",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 402
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#3c9cec",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Adminflag",
    "minzoom": 8,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["!in", "name_tag", 1, 3, 2]
    ]
  }, {
    "id": "b053f828abf84980ad67d54e45db5ca0",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "icon-image": "circle-brown-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-allow-overlap": false,
      "icon-size": 0.78,
      "text-offset": [0, -0.5],
      "text-size": {
        "stops": [
          [5, 11],
          [6, 11],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-optional": false
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "地级市5-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 403
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 5,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3],
      ["!in", "name_tag", 1, 3, 2],
      ["!in", "name_zh", "黑河", "丹东"]
    ]
  }, {
    "id": "2ff6148089734c21bdfd4067b6a64df7",
    "maxzoom": 11,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [9, 16],
          [10, 16],
          [11, 16]
        ],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "省会/直辖市8-11",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 404
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#229aff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 8,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2]]
  }, {
    "id": "a1c13f81decc48ecae7dd77883779c81",
    "maxzoom": 10,
    "source": "Merge_1",
    "layout": {
      "text-size": 16,
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1,
      "text-offset": [0, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "北京8-10",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 405
    },
    "source-layer": "Adminflag",
    "paint": {
      "icon-halo-color": "#d0021b",
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#229aff",
      "icon-halo-width": 10,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 8,
    "type": "symbol",
    "filter": ["all", ["in", "capital", 1]]
  }, {
    "id": "1a48841f4a1e419fbadfe49b11d02591",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "right",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [-0.5, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "澳门4-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 406
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 2],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "澳門"]]
  }, {
    "id": "77009364b48e4e93a9b71715ef383199",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.78,
      "text-offset": [0.5, 0]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "香港4-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 407
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Adminflag",
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "香港"]]
  }, {
    "id": "9ec9d20a264c463a881612e124d84a26",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "top",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [0, 0.5]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "天津4-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 408
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 2],
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["==", "name_zh", "天津"]
    ]
  }, {
    "id": "c9cc77c721d0440fb3633370a2be751f",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": {
        "stops": [
          [4, 11],
          [5, 11],
          [6, 12],
          [7, 12],
          [8, 13]
        ],
        "base": 1
      },
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-size": 0.78,
      "text-offset": [0, -0.5]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "省会/直辖市4-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 409
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#229aff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2],
      ["!in", "name_zh", "香港", "澳門", "天津"]
    ]
  }, {
    "id": "264273136fdf4c7e839eb9ebec169bd5",
    "maxzoom": 4,
    "source": "Merge_1",
    "layout": {
      "text-size": 20,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "103002",
      "describe": "世界地图代表点",
      "name": "中华人民共和国3-4",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 410
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#599ef2",
      "text-halo-width": 1.2,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Worldannotation",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "中华人民共和国"],
      ["==", "kind", "405001"]
    ]
  }, {
    "id": "203a0871f76c43a99c9fc924aedc7ad5",
    "maxzoom": 8.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 24,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "layerInfo": {
      "source": "Worldannotation",
      "prefix": "103001",
      "describe": "世界地图代表点",
      "name": "世界地图代表点-洲3-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 8.5,
      "zindex": 411
    },
    "source-layer": "Worldannotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.2,
      "text-color": "#347fd7",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "405002"]]
  }, {
    "id": "a28dda8583564cae9dddeb206e5aa856",
    "maxzoom": 8,
    "source": "Merge_1",
    "layout": {
      "text-size": 16,
      "icon-image": "star-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-rotation-alignment": "viewport",
      "text-offset": [0, -0.5]
    },
    "layerInfo": {
      "source": "Adminflag",
      "prefix": "103004",
      "describe": "行政区划代表点",
      "name": "北京3-8",
      "sourceminzoom": 3,
      "groupname": "行政区划代表点",
      "groupid": "1ba8b96f",
      "datatype": "symbol",
      "sourcemaxzoom": 11.5,
      "zindex": 412
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 1]]
  }, {
    "id": "ff69f9ba1177484ab099281fab6f1c36",
    "maxzoom": 17.5,
    "source": "Event",
    "layout": {
      "icon-image": "event-app-{teyetype}-18",
      "visibility": "none"
    },
    "layerInfo": {
      "source": "Event",
      "prefix": "201",
      "describe": "交通事件",
      "name": "交通事件",
      "sourceminzoom": 10,
      "groupname": "",
      "groupid": "",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 413
    },
    "paint": {},
    "source-layer": "Event",
    "minzoom": 10,
    "type": "symbol"
  }],
}
export default style;
