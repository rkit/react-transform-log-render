# React Transform of the render method for log output

Transform for [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)

## Installation

1. First, install the [Babel plugin](https://github.com/gaearon/babel-plugin-react-transform):
   ```
   npm install --save-dev babel-plugin-react-transform
   ```

2. Then, install the transform:
   ```
   npm install --save-dev react-transform-log-render
   ```  

3. Now edit your .babelrc to include extra.babel-plugin-react-transform

   ```
   {
     "stage": 0,
     "env": {
       "development": {
         "plugins": ["react-transform"],
         "extra": {
           "react-transform": {
             "transforms": [{
               "transform": "react-transform-log-render",
             }, …]
           }
         }
       }
     }
   }
   ```
