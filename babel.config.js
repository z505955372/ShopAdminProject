module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    //关于element-ui的减少体积的目的


  ],
  "plugins": [
    ["component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}