# react-transform-log-render

[React Transform](https://github.com/gaearon/babel-plugin-react-transform) of the render method for log output 

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

## How it looks

<img width="320" alt="2015-11-14 17 12 51" src="https://cloud.githubusercontent.com/assets/4242765/11163037/a1263916-8aea-11e5-817d-0de67d66a2bd.png">

> in brackets the number of updates
