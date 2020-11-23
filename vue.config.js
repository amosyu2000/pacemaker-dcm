module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import \"@/assets/sass/_constants.sass\""
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        "appId": "pacemaker-dcm",
        "productName": "Pacemaker DCM",
        "mac": {
          "icon": "./public/icon.icns",
          "category": "public.app-category.utilities"
        },
        "win": {
          "icon": "./public/icon.png"
        }
      },
      externals: ["serialport"],
    }
  }
}