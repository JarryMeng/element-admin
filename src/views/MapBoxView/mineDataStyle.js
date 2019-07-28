/* eslint-disable */
// 获取当前启动服务页面访问地址
const locationObj = window.location
const pathname = locationObj.pathname.substr(0, locationObj.pathname.lastIndexOf('/'))
const locationPath = locationObj.protocol + '//' + locationObj.host + pathname
const CONFIG = {
  // 需要代理
  API_URL: `${locationPath}/mineData/`,
  DATA_URL: "https://datahive.minedata.cn/data/",
  DATA_U: "https://datahive.minedata.cn/",
  ACCESS_TOKEN: '16901418a2504ea7b33bda65ed98187d',
  SOLUTION: 11149
};
const mapStyle = {
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  "sprite": "mapbox://sprites/mapbox/streets-v8",

  // "glyphs": CONFIG.API_URL + "fonts/{fontstack}/{range}.pbf",
  // "sprite": CONFIG.API_URL + "sprite/sprite",
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
  "solution": {
    "bearing": 0,
    "center": "[116.40717,39.90469]",
    "icon": "nightblue",
    "maxZoom": 17,
    "minZoom": 3,
    "name": "极夜蓝地图_1_import",
    "pitch": 0,
    "template": "0",
    "zoom": 10.4
  },
  "layers": [{
    "id": "a41d7aad3a7c43d8b9b72e2f1110e633",
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
    "id": "ca8b0730ebdc4d0686f467c1cca21cd4",
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
    "id": "83f9ae5bb8a14407949e98f2fdcdd25d",
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
    "id": "e21ed4b04927445e8f57311f96fa99dd",
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
    "id": "a49b778e87bb4fb18de95cf000a5085c",
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
    "id": "a498ce318c94414ca26294e02681bd2e",
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
    "id": "582c69fb94c3495492bd6d011a2669d9",
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
    "id": "942e51bf20d4459886b105d076d53f28",
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
    "id": "b540d01f248141738b46aa05e494f6ab",
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
    "id": "eb4e9a29ed5d4cc1a4dd0fe29133e5ed",
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
    "id": "ca7ca66175574f00a691e18e3511a184",
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
    "id": "f5042a8a6bfc4e6290806cd8009bd429",
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
    "id": "09fc3e5730c645dfba79a1eb6b3a70ad",
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
    "id": "24eba2790e314539b13b1b30f8d088ff",
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
    "id": "180097e32c064501a5f3bfd9a2aa89ca",
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
    "id": "7271f1826a454853840b9cbedd964713",
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
    "id": "bd526e63f3a348d09f15669e2b109843",
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
    "id": "1285f4f3113b4e74bf7fc3f13867acee",
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
    "id": "35c6c81def474c3ea04e831af2c99dc5",
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
    "id": "166ba1d9e0a34b4cb890917e5bde466a",
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
    "id": "8751c9dafdac441084b5407591a69cba",
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
    "id": "d811575216e241689dd2be9fb6da22c7",
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
    "id": "ce0b9c1d8c8949bfbfaca167eaf9c75a",
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
    "id": "d837ded33a2e426787755ba6cc685ff0",
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
    "id": "90c05122ed924806aec54af83542a8fc",
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
    "id": "b06a8271b6cf4b8fa3069dc56f8c2d58",
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
    "id": "b7a2aa6a84cf4320a49383d11ee347bc",
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
    "id": "5bbba4dfe76e4fd0817106caf84edc36",
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
    "id": "e3b88055aa5a4d348f11e91797e51b86",
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
    "id": "9fb7416c075a4a57807d7aecfc7797f4",
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
    "id": "dd188088e6614e21a5d24b78fd011735",
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
    "id": "70a2c0a310b1422a9d5560983a1021ea",
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
    "id": "1578c9bfbb2e419a8e7b8f8a1ca5c5d8",
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
    "id": "c5bf73ea217b4df3a7a188c27a9fb915",
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
    "id": "a0ad3dfdf26e4df798b30b9f5034d56b",
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
    "id": "f75048e7d8384e1cb3775ed50fcfc8fe",
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
    "id": "26aa1b04d41c4caeb929b10f7853949d",
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
    "id": "66982681bcca4e0a93eb10573e87dfb5",
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
    "id": "1fb250bc5bfa4ef4a5a9714bf9cfca4c",
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
    "id": "643b7af464d5415ab851a00f60a010e1",
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
    "id": "fbbfe029adf54340b37af13c9dff917f",
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
    "id": "2ce6620e254040209ba58586e8a2cd19",
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
    "id": "a162dc8a33dd4e8081b48cc04c44a01a",
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
    "id": "277206c7d1224f00aaf0767614bdf72e",
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
    "id": "aa8ebc2ec8334a93bfd293bd6cbd2625",
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
    "id": "3b6a2f052fa84318969a4a090f87e29c",
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
    "id": "f7cdf829f1e64f6ba3ded8a6b9a99488",
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
    "id": "72cc5d125269468094085cd6683f6145",
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
    "id": "71297ad396de420ba5e8028115adcd79",
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
    "id": "60d96651b7154325af25377fe2983013",
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
    "id": "db1b2b073385449899464a1c623313bf",
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
    "id": "8e16608fb46c436e822f4202242baa0a",
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
    "id": "2fa6040671cd4bf6818d90b2feed2249",
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
    "id": "0988a1afc0cc4148ae427006d58a64de",
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
    "id": "c312a957efa948438dae9baa5d63ca04",
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
    "id": "78b2ac7b84e34ca2afd71310c77e7fd0",
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
    "id": "4bf78b3a5a7b4c65a16a775167629052",
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
    "id": "f0bea93ab46f4f03950b12c6d399bbfb",
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
    "id": "c7e0642a1f1744d9add449ee7b97ee7d",
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
    "id": "fe1aa2b5fd7649b398a12361bb6c8048",
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
      ["!in", "form", "15"]
    ]
  }, {
    "id": "5f2d6902ac3a483d8832a44c41f4253e",
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
      ["!in", "form", "15"]
    ]
  }, {
    "id": "a6526c43778a42e2a7b84119b5f4efb0",
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
    "id": "29b20f567d4d45b3a3b7f0bdbbcbfaf7",
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
    "id": "64975f7defde41e4ac758f6c5e0999a0",
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
      ["!in", "form", "15"]
    ]
  }, {
    "id": "24ca8c8e639445abaac44b0a58ffb8e7",
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
      ["!in", "form", "15"]
    ]
  }, {
    "id": "8200574fc14644f59a358ececff7390b",
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
    "id": "472327bc591d4a5fa180113c00fa9806",
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
    "id": "926eaf67982d4f5886ba4692f6e7a1aa",
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
    "id": "bcbf178dbcd04364a109691a3ba3a29b",
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
    "id": "2079fef41a2c475b844a9b75ed6d6d90",
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
    "id": "20cca50071b140e9873cdad13f70f42a",
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
    "id": "8065ae3ee8934b0d907c25fe955331e1",
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
    "id": "5922dba6def94c98a3740fd419edec89",
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
    "id": "c2d0aeb86fe3498a8d8ca1efcec4a2d9",
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
    "id": "b4f77040e83c453895358211e6789eb2",
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
    "id": "8d1bc3cbf7ae4e79b71646f576dc6aa4",
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
    "id": "f706d8b57c0c4381ae47fe97cc56dc15",
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
    "id": "cd87e3c2cee048b8b489740d4cdf219e",
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
      ["!in", "form", "10"]
    ]
  }, {
    "id": "4b7be477c4284b8d9a837b8eb88f9b49",
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
      ["!in", "form", "10"]
    ]
  }, {
    "id": "64962433de144d818a19cafc63502b44",
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
      ["!in", "form", "10"]
    ]
  }, {
    "id": "8af210207d254ba7a2d99f5fcd2fcd42",
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
      ["!in", "form", "10"]
    ]
  }, {
    "id": "c4cbca1306094962a9e05c5d73af29bb",
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
    "id": "2f367d7777f84931bc88cea720785826",
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
    "id": "9a6cfb30d7594129ada02db853c504d5",
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
    "id": "58fe16263b9b40c8a268df2ba32c9d43",
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
    "id": "f6fc689d53444980880aaf1e3df51645",
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
    "id": "0ac9c678f49549958481a6260d77febd",
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
    "id": "8c3b05fc8c404f359a257893e8c3b15e",
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
    "id": "f347b13a943644c2b88a6864e0876d24",
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
    "id": "8ae1b7e45735452896bfd3ccdea4f075",
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
    "id": "32fe9d042dc142eeb54591eae466180e",
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
    "id": "29560569201e4bb68e9b01423866f54b",
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
    "id": "1146c9077c2644258a8deaa824d518d5",
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
    "id": "4c07457720e5438db8d27e82a1c1f300",
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
    "id": "972d76febb084c48a054beb39788ca62",
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
    "id": "f1a5cc5bd49a4f63a7ca8b23601777b7",
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
    "id": "ffbf2c774a9a431081b9d5d12b798b62",
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
    "id": "a4f666bf99da4cc0b7c479da1cf3f834",
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
    "id": "98d2dd8519b3411ea95c0736bbf029be",
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
    "id": "6cca9aac395d46539e3615d74ac1045d",
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
    "id": "aa6f641269c0480e94bf2460c16aadea",
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
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "9c1e15ac4a2a421abcb6692be042a5af",
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
    "id": "0f6bd9f8ce2d460fb02161b6f5bc7f6a",
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
    "id": "3ce51ffe7f844b87b5ad3497519fffad",
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
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "60160453f0f8428b8ec50ef0ccdf7fe8",
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
    "id": "6cb0e1ea82f74f7f9b049acf5384d6dc",
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
    "id": "63f700c318384cc29a81ab2ffe919135",
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
    "id": "c0af5908e64c4df783843f362cb316f1",
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
    "id": "f1e6cf287c184be99d8365460b4c7d74",
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
    "id": "659c4d46ef1a421b9699a540c20f13db",
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
    "id": "ef24f1fb49ca416c8e0cdab3285e20ff",
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
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "e0b1835befa54f398b48d8b387bf513c",
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
    "id": "83659b36a8d6438f82638c62eb2594f1",
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
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "9ecd3d96ee654905a3131d321da388b5",
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
    "id": "8e08c5b1c8a842ce964359eea633d9a5",
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
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "6486550064f149b1b738698f30b1533c",
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
    "id": "7324f65f088e490cba2768bce67575fb",
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
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "825139e8bb634d399f92111b08b78837",
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
    "id": "50190a4c0afa47cbb2d8c4f3b47da4dc",
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
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "8707c23a9d144e518c8ffa24339afb71",
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
    "id": "8cd7118a4503481995c2104a23803b5b",
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
      ["!in", "form", "12", "13", "39", "36", "11", "10", "15"]
    ]
  }, {
    "id": "76e73aa2f36049f9b24681befbe09167",
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
    "id": "96f1bc99dd7744858d7fbe2dbe17ddcc",
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
    "id": "c9f349cee2c449d9989acfb473892173",
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
    "id": "f82c8363aa114054b8069648925b6b69",
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
    "id": "7d4027c7c2294946bc38dbfe4ca4b39b",
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
    "id": "e6013abd226c4f9db595bd4a496d6d8d",
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
    "id": "c495e28bcbe4423fa4e0679f85538dd9",
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
    "id": "22e333010e3142a3ae57f429414b07e8",
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
    "id": "f5091c8a195941fd8708be9e2b1916d4",
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
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "bca20e826ada4f18bb955dd234f3b0ce",
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
      ["!in", "form", "37", "39", "10", "38", "15"]
    ]
  }, {
    "id": "ac14d95a94dc42058b1b6bfd58f1cabc",
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
    "id": "1b17410105de4c9980a1bf74e355bc80",
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
      ["!in", "form", "37", "14", "36", "10", "38", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "2a6e19c282f14c88baf8bbfecf5b40d4",
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
    "id": "d1c1571af4aa40fdaf045ef427817a31",
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
      ["!in", "form", "37", "14", "36", "10", "38", "15"]
    ]
  }, {
    "id": "1e9486e57a9c4ffd9e896f31d28f1f78",
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
    "id": "166ac08644cc4f67b68ba4f9c53340d4",
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
    "id": "4a9ee4c4031b479c9c3238b7614e2e16",
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
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "d8801ad18c134b26a335c29d1937ae13",
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
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "f411ba4a8b584a2ea725aab178c89c90",
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
    "id": "4113366d43e047d1a546adc708b4ef05",
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
    "id": "c2e04836ddc744158d1ffaabb2346016",
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
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "7fc412a1454346b1b760946f728653a5",
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
      ["!in", "form", "12", "13", "39", "11", "10", "15"],
      [">=", "zvalue", 1]
    ]
  }, {
    "id": "b2d28cd84a2e43448d9eaf0c5ec24fe5",
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
    "id": "6ebe03008b5a466e961d421dfe2f0b10",
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
    "id": "cb2321d4dbaa4d3aa9158ca0765d8d04",
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
    "id": "445feb4fa23a451a915dd0a006060e14",
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
    "id": "9d09d96928a84fd49b0156b26edad3ee",
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
    "id": "62b6f2daa8d94768a144afd61993c38b",
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
    "id": "0224a223069c4371b0ad2276bef761a1",
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
    "id": "f231b6d992a545eda8d99318aa0d3717",
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
    "id": "4b58277d35c249e69d67ed4f55227461",
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
    "id": "490f0e0960154e25bc090573c4f20694",
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
    "id": "6bb6823eef5349b3997f73eaee86c6b6",
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
    "id": "59558427d27347cc933ef1cdd36bbc0b",
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
    "id": "7a248a4279b0465d97373d6c40ca54fb",
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
    "id": "6ef7e1eacb624059830ccda4263456d3",
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
    "id": "c3e1ae7b7da04749ad3149fcfabdba5f",
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
    "id": "4456400975074b2b8e9f4c4dc28b3498",
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
    "id": "675c6679fc194885a09730bd2fdaa40d",
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
    "id": "27c5c1cdf19248c689a7ed955e5f4254",
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
    "id": "d81a5382bc3d4440bf01b8b2eeb8a965",
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
    "id": "68545d7d293145948a70665a907e4c18",
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
    "id": "38cfaf8446e94cab85ae83c35c654a23",
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
    "id": "0c062790f33a43ce818a9e24bac9420d",
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
    "id": "a6dbe5515648485cb2171859da776eaf",
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
    "id": "0bd5a9d628b54b3e882c573d6441de4b",
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
    "id": "ccf8e644c9f742c78c7b4ba08a078c19",
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
    "id": "d550a73e47564ce6b457175603d80e45",
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
    "id": "328acf43048e445e82a24cc4216f14d3",
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
    "id": "355c268f2dc94d6b9e65052a476d80c1",
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
    "id": "6b518656737f43788f74e7764bbdcf65",
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
    "id": "5bd614531a4644e2b48d87736193ee20",
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
    "id": "cb8b6169d9cb4b29bc1fc23057d8a872",
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
    "id": "258dd1ea044746bdbf5cde8c573217da",
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
    "id": "fd70b9177ed541e79e7e22a38ff16354",
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
    "id": "17ac292885d448438a10dee65e004900",
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
    "id": "01681b3864374be3aed28a5241f4ea6b",
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
    "id": "ac9310349b1f4e76a81bebfc039e31f6",
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
    "id": "0d9c09eeb289469ead01ca22cf2aab3e",
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
    "id": "be3996146a7a4d7eb48c6266063fcbff",
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
    "id": "05716001a39a4ac6ab2913ba26902212",
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
    "id": "503380888bef481cb1acbedafc5a2965",
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
      "icon-size": 0,
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
    "id": "2a0fa2bfad64481f9922a7046bea856d",
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
    "id": "f1c7f62f0a104c3094e653cfe4e2e92d",
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
      "icon-size": 0,
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
    "id": "303df8f7b16a4121a8f74c8a41cdbd29",
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
    "id": "c7ea1f0dd33845768dcc87e36f8385db",
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
      "icon-size": 0,
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
    "id": "e8bd3bdfab4544399897d4d66bc64dcf",
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
    "id": "2c175c49dcfe4ee08d6e817bd9cc16f7",
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
    "id": "8a833ed3af8b4d1ab6271e0e20dcba24",
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
    "id": "3bb7618454194a1896ae0571baec32c7",
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
    "id": "bb3ccf731d584576a543004569d37d32",
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
    "id": "661b7fbc79164bb7aeef3a1ad5e6386b",
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
    "filter": ["all", ["in", "kindcode", "180209", "180210", "180211"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "5129ca9f15584791a682eef17b40cbc1",
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
    "filter": ["all", ["in", "kindcode", "180206", "180207", "180208", "180301", "180302", "180303"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "37819e2a99174a8d98d1317ae822192c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180201_16",
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
    "filter": ["all", ["in", "kindcode", "180201", "180202", "180203", "180204", "180205"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "b432d47be06e4e82b996fca21e129ef3",
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
    "id": "f4f2a93a5fae411097861dc1695f1cf6",
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
    "id": "335097c20f534ffbb2650e8a2e3d3361",
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
    "id": "1c749c1a28724a62acb4e41b0e513e3a",
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
    "id": "e0bb87b9623d4f64a0b4938e78e6a806",
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
      "icon-size": 0,
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
    "id": "981a136c082249578519fccba3f47f0e",
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
      "icon-size": 0,
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
    "id": "cdf81037f81642c9a6bbed5b96478833",
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
      "icon-size": 0,
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
    "id": "ff68b398be044640907c6bcd7f79faba",
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
    "id": "e43b8c855b4c43efb8186ec709eeeb68",
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
    "id": "9643dc8c4b8b47409b0543c89de13bd2",
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
    "id": "c9366b789ce24fb1b96c7695cb49271a",
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
    "id": "ced52aba15fc483eb0d55b23cac83f5b",
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
      "icon-size": 0,
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
    "id": "59688021774a4555bdcb2e0e603b4a93",
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
    "filter": ["all", ["==", "kindcode", "180304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "68cc5f5e4eb04b57b16532b3d4435df2",
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
    "filter": ["all", ["in", "kindcode", "180100", "180101", "180102", "180103", "180104", "180105", "180106", "180306", "180400"],
      ["==", "accessflag", 0],
      ["!=", "name_zh", "澳門總督府"]
    ]
  }, {
    "id": "c5edd051c5874cd88b0f384f47917fb0",
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
      "symbol-placement": "line",
      "icon-size": 0.89,
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
    "filter": ["all", ["==", "accessflag", 0],
      ["in", "kindcode", "180107", "180110"]
    ]
  }, {
    "id": "66918d29692944eeac66411bb97eddad",
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
    "id": "8510e5d9c4e24b449453351790f6399b",
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
    "id": "e0d0c8fe92ec4c9595018796da2b7eb9",
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
    "id": "64ef825844a04f5297ef57cd0707709f",
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
    "id": "7d9765711ece4112ac0bb3a12387d517",
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
    "id": "aa19bdc906c2440098dfd559ce6da93e",
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
    "id": "3f97d36dda274b78bb954cf5749ec43d",
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
      "icon-size": 0,
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
    "id": "425b3268c7cb4ad1a2e66f89aa843209",
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
      "icon-size": 0,
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
    "id": "bc01d69c750f4a8da39e3644d30d3e0f",
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
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "120104"]
    ]
  }, {
    "id": "92dd44964d40477aab6ef0a79bbf916f",
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
    "id": "1db927a8e11244f88420cd43dfebbcb9",
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
    "id": "99ffabc223b64325bb9dea19d3bc438d",
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
      "icon-size": 0.89,
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
    "filter": ["all", ["in", "kindcode", "110101", "110102", "110103", "110200", "110301", "110302", "110303", "110304"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "9a4b895dec7a44838a65e240054cd482",
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
      "icon-size": 0.89,
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
      "text-color": "#5294ff",
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
    "id": "05a725cc0b34445bb8fef5566954aa89",
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
      "text-color": "#5294ff",
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
    "id": "f75ed07e77514f87b1576e96d7700e00",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_door_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89
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
    "id": "bbe75cb2685a4744afe9beec53ce9be8",
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
    "id": "c156b837ab4549d9a84e518f6b0f3b08",
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
    "id": "597719722d0b45cd84a73d11ae0dcc36",
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
    "id": "37b926326bc842ec939f33aeed331662",
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
    "filter": ["all", ["==", "kindcode", "180309"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "6d725e35e0a3419981642be5b091f812",
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
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
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
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180307", "180308"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "0f618787873b4256afe2eaa9a848051e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180304_16",
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
    "filter": ["all", ["==", "accessflag", 0],
      ["==", "kindcode", "180305"]
    ]
  }, {
    "id": "63ef548a350b41c6944f480c317e52c5",
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
    "id": "d6367cb676fc468590d2c5f5c92ad32a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
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
    "id": "9600911a40a34d5da78f8d75ee9774a0",
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
    "id": "50b2acf179794d0eb0f9f75629f88926",
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
    "id": "a94e0e1ad88a48ac8c3696589091c88b",
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
    "id": "3c22cccc190e40a0ad0e022278b31112",
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
      "icon-size": 0,
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
    "id": "07a49659e077459fb4fa7732c40ceb4d",
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
      "icon-size": 0,
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
    "id": "032ed3087dd04939a72286ed8beb6bd3",
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
    "id": "a5ce4d68381d41be87ec897540a4f06c",
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
    "id": "9e678e4933a44b0c9f38fb99e1b274cb",
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
    "id": "8a5e98f42f9b4a3a8eb9bc0c7558db9b",
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
    "id": "0455c1d327544d818128b9032cfda01a",
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
    "id": "6e168adae55c41c19445b539f824ba70",
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
    "id": "c83ffa338fc447bf92416f30e2107065",
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
    "id": "5092893b3e52419f8a4a1323d49ff91b",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
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
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180109"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "5f8c738b77fd4b2cb47bd978ce1d41d9",
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
      "icon-size": 0,
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
    "id": "2e62f94334214112bbeeb342afbcd8e9",
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
      "icon-size": 0,
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
    "id": "9edbbb957b994f159be0f4d13fc37557",
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
      "icon-size": 0,
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
    "id": "8c17bdfe1fe6483980cd3127ab5969d3",
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
    "id": "6ed81e51892942bea1fb40a5f6d702ea",
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
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180310"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "6923fb08a6524d00a66db232a8a1d3f5",
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
    "id": "47e255d40f7f44419d81b04bf1fd80c9",
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
    "id": "adeb979c1b3b425cb899182e253350e1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
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
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "260000", "260100"],
      ["==", "accessflag", 0]
    ]
  }, {
    "id": "bda1d4212efc4a169c45e76eac132ac3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
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
    "id": "3f504397747943ce9b3cfe2a45a56dd8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
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
    "id": "67832c7d9e084cc69d7e29e47997d431",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
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
    "id": "fc4e386de3544ac4a0b099f10a3df63d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
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
    "id": "6bcda3c08cae469d9aa883bae23dd9fb",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
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
    "id": "a38eb5e6a0aa4dc586577e5d3191e7eb",
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
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
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
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180102"]]
  }, {
    "id": "264dabdd7b8446eebefe1980c76431e4",
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
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
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
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180101"]]
  }, {
    "id": "3e0df3ed79bd432f84c8e944136bfb5a",
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
    "id": "6683956c3c2847a596a1a20b9bee2552",
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
    "id": "bba4a6c654574708838d76bd531ca1ca",
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
    "id": "265b82d48f5d4378a92a63cc33629b14",
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
    "id": "3f7b9f5e6fef496bac920391a78a4ced",
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
    "id": "be4a00a080534f35bd878482edc4a54a",
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
    "id": "9c61d77a5161407ebb5dc75401141bc6",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
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
    "id": "38dbdf77cc99442ab0a28a88e611553d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
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
    "id": "2b6997ec887744598c5585947957b9a9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 10,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
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
    "id": "dfaf7d3bae2c43d087a7549ee0d766d3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
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
    "id": "d01c2488ffcc4d0884f04dbb87bba913",
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
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
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
    "filter": ["all", ["==", "kindcode", "180310"]]
  }, {
    "id": "3fe11bb40f104c84bfb436f21453ddd5",
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
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
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
    "filter": ["all", ["==", "kindcode", "185122"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "01ec8bd78c864e7ca29e982381a8ce43",
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
    "id": "e4b77f0f471947bd8f385c1a3a99efbd",
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
    "id": "395924cdedad4c5da73a53508525c3b1",
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
    "id": "d01c740f801f4fd3b70615d6b74f51d0",
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
    "id": "c426cc1e436845738203fbe49fd5eb30",
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
    "id": "4a21fda2e9644542b3e42cd5b813d9a8",
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
    "id": "e50ad238bd7e4226acd65eeec720f8aa",
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
    "id": "4e72c36953bb4a5aa75ceff02ec289d4",
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
    "id": "8dd2131b55424d74aab4692a2bfa109d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120102_16",
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
    "filter": ["all", ["==", "kindcode", "120102"]]
  }, {
    "id": "73f5a207ee51487493aa4b46cbf75751",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
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
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120104"]]
  }, {
    "id": "fa03cbab0c394dcaa28aa501fa38ead9",
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
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "185123", "180301"]]
  }, {
    "id": "39e4ff7aa73b47239a03d8f85ae51809",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
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
    "filter": ["all", ["==", "kindcode", "180302"]]
  }, {
    "id": "775646438472444490547fa75765a867",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
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
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120103"]]
  }, {
    "id": "bc685870dadf4886bf4f114c7bf2ce52",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
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
    "id": "fcfd0bb4970d490aba6a862eddb2a9cc",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
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
    "id": "c5cef7a4beec448eac192a9dc2455f32",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
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
    "id": "219753baec63479eb42c85b338080f34",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
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
    "id": "902e9c13232742509697da750b3f56fa",
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
      "icon-size": 0,
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
    "id": "767dc9fb78b54bc28c61b4f517c00ce1",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "none",
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
    "id": "3217dbd49abf4ba2a30059224952ce14",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
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
    "id": "75469f5887a3429e9d28a5bc95069e46",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
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
    "filter": ["all", ["==", "kindcode", "180309"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "9eb84293e5a340d49f1b07bfc5381802",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0,
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
    "filter": ["all", ["==", "kindcode", "275009"],
      ["<=", "rank", 3]
    ]
  }, {
    "id": "bf3dcb3946fd41ba92349bb372829208",
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
      "icon-size": 0,
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
    "filter": ["all", ["==", "kindcode", "180306"]]
  }, {
    "id": "68dd2ff9253f4bcc91490b8aced4460f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230207_16",
      "visibility": "none",
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
    "id": "e5930d1aa886413a94c5a1617a0c6b16",
    "maxzoom": 17.5,
    "source": "Ptstop",
    "layout": {
      "icon-image": "poi_code_230100_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
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
    "id": "9ab061f79e3b4e4a9ce2fe2fcc366a97",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230209_34",
      "visibility": "none",
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
    "id": "5c1bd61d097043258bf6e63b23d56533",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
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
    "id": "63dcc88650e743dc9970dd3aedf64173",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "none",
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
    "id": "cea3123b38434e2b9c8739322472e473",
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
    "id": "7faefc0f81a0431aafc5ee8ac82f0245",
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
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
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
    "filter": ["all", ["==", "kindcode", "180104"]]
  }, {
    "id": "59d4e5d08649427394458465222df2d0",
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
    "id": "043359a396284e74a29a214825f3cb9b",
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
    "id": "a5f49f9e83f34261aafd3e57fb878c26",
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
    "id": "595ccb91825c4301a5346f7db21893f5",
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
    "id": "c586984a02254612a7491084e36f0de1",
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
    "id": "60fe720e8ba34a67a68ed7364e2c4f67",
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
    "id": "f4154d63dc4e4530b875b02020bd8995",
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
    "id": "a31147586d4a4363be8e8616d7a1ccf1",
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
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
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
    "filter": ["all", ["==", "kindcode", "185121"]]
  }, {
    "id": "2b90b709de7c4a8ea37fd0ac0301aaf3",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
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
    "filter": ["all", ["==", "kindcode", "185116"],
      [">", "rank", 1]
    ]
  }, {
    "id": "95b719fd6a8e48e498aebf74f1287125",
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
      "icon-size": 0,
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
      "name": "14+公园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 312
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
    "filter": ["all", ["==", "kindcode", "185120"],
      [">=", "name_zh", ""],
      ["<", "rank", 2]
    ]
  }, {
    "id": "1d61b243510f4ec799521741968f1a6f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_150101_16",
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
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
    "id": "11a8071bab81475fab89b9055c83a80e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
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
    "id": "6c33a68d945d4108b1f9474491ba455d",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
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
    "id": "51f20561d19a4243a04959a1a2778070",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
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
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "125134", "125136", "125137", "125138"]]
  }, {
    "id": "afcbf9817eb34fcb906df48cd494cdc7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "none",
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
    "id": "5228e3b7ee8d471ba5a7637e6c212bef",
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
    "id": "8c95c1f9e9b44fccb4b420f3caae33eb",
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
    "id": "e390accf9bb4452faacda93514ef44cc",
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
    "id": "4fad86c4daa24ca880817ac23957ce45",
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
    "id": "4acad94ae3e2476780aea7f4b92f352c",
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
    "id": "aa53719167114e08a25ea15c36d25296",
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
    "id": "5eaa8a20e94848ea8b6abe0a0c8a7b14",
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
    "id": "0a65ae8e422f41a79286b257418ad94e",
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
    "id": "39c8a929a049482eb402053fc4885f85",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "none",
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
    "id": "89d86d8cfa2e4643b0213aa3340369ef",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
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
    "id": "945a258afd7249d8b103e72272910670",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
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
    "id": "e437742e09d24523a56d896ccde4c98f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "visibility": "none",
      "text-pitch-alignment": "viewport",
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
    "id": "11ed54695a004ac0a11ca9753a2f0353",
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
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
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
    "filter": ["all", ["==", "kindcode", "185122"],
      ["<", "rank", 3]
    ]
  }, {
    "id": "711ecfed60c446fda006f5d75c1d214e",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_1904014_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
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
    "filter": ["all", ["==", "kindcode", "195126"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "8625eca7938745efa6d26dbc80bddc6c",
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
      "icon-size": 0,
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
      "name": "13+名胜古迹",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 332
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
    "filter": ["all", ["==", "kindcode", "185116"],
      ["<=", "rank", 1]
    ]
  }, {
    "id": "e904b4ce86cc47679e9e30807af58598",
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
      "icon-size": 0,
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
    "filter": ["all", ["==", "kindcode", "160205"],
      ["<", "rank", 2]
    ]
  }, {
    "id": "08b409b30dce4072b60f62f22116ca37",
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
    "id": "e54f3dbda5484aeca7e931cb9f677d7d",
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
      ["!in", "rank", 2, 3]
    ]
  }, {
    "id": "24642252592d4601aec2379632a8b3c6",
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
    "id": "6adcc4e9dda849baa101654ba2036805",
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
    "id": "8277a94b6150454bbb521172603fb29a",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
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
    "filter": ["all", ["==", "kindcode", "125139"]]
  }, {
    "id": "860240e074bd46d0bf21fa5657defbf8",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
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
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "125140"]]
  }, {
    "id": "92c1f502b8fc49d3b3c80fcac70d59b7",
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
    "id": "a9f7236f759f47a6bbe5cf1dee6146da",
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
    "id": "adc9125579fd46d4908bd248e1650464",
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
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
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
    "filter": ["all", ["==", "kindcode", "180106"]]
  }, {
    "id": "6908da3c76764131b20cc69edbb0df55",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0,
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
    "filter": ["all", ["==", "kindcode", "275009"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "55082b2388c8402ea06ad716536e9ab7",
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
      "icon-size": 0,
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
      "name": "12+公园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 344
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
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"],
      ["in", "rank", 2, 3]
    ]
  }, {
    "id": "a0e1a162c2ef4d91a9521bb735c6da73",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
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
    "filter": ["all", ["==", "kindcode", "165024"]]
  }, {
    "id": "2c9247db6fdc4458b1edcf329b4a6ba9",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180307_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
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
    "filter": ["all", ["==", "kindcode", "185119"]]
  }, {
    "id": "c55df185a1a9421cbd765f61d073deca",
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
    "id": "751303289f354ea0817022a32fff49fc",
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
    "id": "6dc8a388997343ec98baf164f689aa5e",
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
    "id": "ce920a8509c64e9691ab49c6a7c2f503",
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
    "id": "3782ca63dcde44048e72883bdff3215c",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
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
    "id": "b3d3a39c5d3a401f8768da1c52c33b89",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "none",
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
    "id": "6eb489fadb6c40468151f881e9227092",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
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
    "id": "98da05ed51954e7e897ab97be3c4e2d7",
    "maxzoom": 15,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
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
    "id": "24dfc38eea4d46b696ac47daf145d54b",
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
    "id": "4d3ec0266a02420fa15281bf4b659f8b",
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
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
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
    "filter": ["all", ["==", "kindcode", "180105"]]
  }, {
    "id": "2dd071abf0264497896e6379fbf400cc",
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
    "id": "ba7b084c9d1b4f7db61f18ef5a81e3ad",
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
    "id": "7450f39cdf0e4db0b3b0d44af6dbda46",
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
      "icon-size": 0,
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
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160205"],
      [">=", "rank", 2]
    ]
  }, {
    "id": "fa0557d65aee4924bfde082f0c350b21",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230126_16",
      "visibility": "none",
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
    "id": "a1f6aa0d84294e9ba5d53969da2e104f",
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
    "id": "0e33ca8cbfd94e3699378f4dde736931",
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
      "visibility": "none",
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
    "id": "eba45bbb88384f7f8bcef7637a08cca1",
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
      "visibility": "none",
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
    "id": "b6a934d393cb49328201f3195390142b",
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
      "visibility": "none",
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
    "id": "46671325104a41f9b6efcbf91e0e7c80",
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
    "id": "29e8bde762394d4d92c34142cdc0ca7f",
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
    "id": "1c168fc55bca44769580cedd92d3b81d",
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
    "id": "c4721329ba6349e9b2b98c3f59e42f2b",
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
    "id": "93c38530b34d430ba57c5233bf307a81",
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
    "id": "ea8668c790c843d9a394844cb4664810",
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
    "id": "01418dbd09f34bf9879e4e1d1dee773f",
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
      "visibility": "none",
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
    "id": "ec7ccb97345246fdaa0bd516bfd6e9c7",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180308_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
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
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180308"]]
  }, {
    "id": "2f49bc9689e345f5b727c80206a0a2b4",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
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
    "filter": ["all", ["==", "kindcode", "180309"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "dbdff3ebeb59499ca1a9602b3ebff86f",
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
    "id": "f17def57f160408eb7561239acced529",
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
      "icon-size": 0,
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
      "name": "10+名胜古迹",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 375
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
    "filter": ["all", ["in", "kindcode", "185116"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "09981e8c85ce42a2ae27a4877129cd14",
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
      "icon-size": 0,
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
      "name": "10+公园",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 376
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
    "filter": ["all", ["==", "kindcode", "185120"],
      [">=", "rank", 4]
    ]
  }, {
    "id": "e12d25dbca574005814c7f6f53aeee64",
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
    "id": "0705ac0e92ef4d97bd56af9372ee4d13",
    "maxzoom": 17.5,
    "source": "Trafficlight",
    "layout": {
      "icon-image": "traffic-light-15",
      "visibility": "none",
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
    "id": "52c20beff6fa4848a98455c046558c4c",
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
    "id": "f032fca69a99441293181fcd00acd545",
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
    "id": "8ed5e5961af74ee3b61131fec0821414",
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
    "id": "605b488160464c83a5ec4c637cb56466",
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
    "id": "584f3ceb39de4f298172273b546e59a1",
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
    "id": "e3cf18d7590e4720b44fd9b69257dab6",
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
    "id": "ad8dbb1c7a1747968e9a73d592832ebc",
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
    "id": "fab8d5c22c2743c4a830ef76f6d945ec",
    "maxzoom": 12,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
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
    "id": "b459292a7c7e4f09be97e12ea509d209",
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
      "icon-size": 0,
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
      "name": "10+体育场，体育馆（滑冰，游泳，网球，排球，羽毛球，田径场，体育中心等）",
      "sourceminzoom": 3,
      "groupname": "文字",
      "groupid": "eca06727",
      "datatype": "symbol",
      "sourcemaxzoom": 17.5,
      "zindex": 387
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
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"],
      [">=", "rank", 3]
    ]
  }, {
    "id": "4eedf5d944bf4c31b0ad95dd44892901",
    "maxzoom": 11,
    "source": "Merge_1",
    "layout": {
      "icon-image": "poi_code_230126_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
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
    "id": "dcd627249e1f4a0881497ed1963330ff",
    "maxzoom": 17.5,
    "source": "Ptexit",
    "layout": {
      "text-size": 12,
      "visibility": "none",
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
    "id": "e16a5e96930b4ec19c0c7c9e4d7b091f",
    "maxzoom": 17.5,
    "source": "Merge_1",
    "layout": {
      "text-size": 11,
      "icon-image": "Tiananmen",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0,
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
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#badbff",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "source-layer": "Annotation",
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "天安门"]]
  }, {
    "id": "224028876d154365bcae38344dff77e0",
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
    "id": "bd699ba4fb5944328c370598ecdd1ebb",
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
    "id": "4784f595c57d4f57843b802474fd78cb",
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
    "id": "0c1d5b40cc94486dbb02f82e3ab7a346",
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
    "id": "01535fadbcf4470b8da2b80dfea4ee5e",
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
    "id": "7afab18cc50341e18cfef935cfab338c",
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
    "id": "cd51ef170519434d8056a8557c025866",
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
    "id": "72fd7c14a0984dcda6ebd39657d40746",
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
    "id": "1c9175ee2f6144748a875e24ef766d76",
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
    "id": "7afa372dcab349a8b946afd446e7f32e",
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
    "id": "d99860886e6d4166b51a13274d8e33d7",
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
    "id": "d7cc18270bdd4e54a5d78fc3e8c0e488",
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
    "id": "b797e45378364bce8ed5d2ac79b52e81",
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
    "id": "25e057131d764647a4dc86defaf1c123",
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
    "id": "47f325467c5c47ce98e6e1b051795a67",
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
    "id": "85d5296b727e42c2b202220bfbf992ce",
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
    "id": "53ef9514e4394890a3e7f5a74dd930df",
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
    "id": "58c298b5f5094a5f91032f5b6ab0c530",
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
    "id": "7de15d4c35aa49e8ab6e10acaa6d6eff",
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
    "id": "e105c821626e4d2ba419bb04476223c9",
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
    "id": "a57f0db1c8d44f098c4694bf98083077",
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
    "id": "84be50beb2ff4dc8bc6038e92ae7f7b3",
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
    "id": "d83be371d8224d5690e4e69f5460bce5",
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
  "version": 8
};
export default mapStyle
