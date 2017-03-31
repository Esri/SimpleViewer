define([], function () {
  //Default configuration settings for the application. This is where you'll define things like a bing maps key,
  //default web map, default app color theme and more. These values can be overwritten by template configuration settings
  //and url parameters.
  var defaults = {
    "appid": "",
    "webmap": "6c4e81f90c4b4935945e9b623c5247e0",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    //group: "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    // This is an option added so that developers working with the
    // hosted version of the application can apply custom styles
    // not used in the download version.
    "customstyle": null,
    //Color defines the text color for the menu icon and title that appear in the title bar.
    "color": "#2f4f4f",
    //Theme defines the background color of the title bar and also the background color of the popup
    //title bar.
    "theme": "#949494",
    "bodyBg": "#fff",
    "bodyColor": "#666",
    "buttonColor": "#2f4f4f",
    "buttonBg": "#949494",
    "find": null,
    //Setup the app to support a custom url parameter. Use this if you want users
    //to be able to search for a string field in a layer. For example if the web map
    //has parcel data and you'd like to be able to zoom to a feature using its parcel id
    //you could add a custom url param named parcel then users could enter
    //a value for that param in the url. index.html?parcel=3203
    "customUrlLayer": {
      "id": null, //id of the search layer as defined in the web map
      "fields": [] //Name of the string field to search
    },
    "customUrlParam": null, //Name of url param. For example parcels
    "bingmapskey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
    //default values for any items you need using the helper services and units properties.
    "queryForOrg": true,
    "markerSymbol": "./images/EsriBluePinCircle26.png",
    "markerSymbolWidth": 26,
    "markerSymbolHeight": 26,
    "units": null,
    //Enter text here that will display in the title section.
    //If not specified the web map title is used.
    "title": null,
    //Enter text here that will display in the about panel
    //If not specified the web map description is used.
    //When true the locate button is displayed on the map.
    "about": null,
    "locate": true,
    //When true the home button is displayed on the map.
    "home": true,
    //When true the geocoder search box is displayed in the title area
    //When searchextent is true the geocoder will prioritize results within
    //the current map extent
    "searchExtent": true,
    "locationSearch": true,
    "search": true,
    "searchLayers": [{
      "id": "",
      "fields": []
    }],
    "helperServices": {
      "geometry": {
        "url": null
      },
      "printTask": {
        "url": null
      },
      "elevationSync": {
        "url": null
      },
      "geocode": [{
        "url": null
      }]
    }
  };
  return defaults;
});
