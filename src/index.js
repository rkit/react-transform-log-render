const countRender = new Map();

function updateCountRender(componentId) {
  let count = countRender.get(componentId) || 0;
  count++;
  countRender.set(componentId, count);

  return count;
}

function inArray(componentName, list) {
  return list.some((item) => {
    if (componentName === item) {
      return true;
    }
  });
}

export default function logRender({ components, imports }) {
  const options = imports[0];
  return function wrap(ReactClass, componentId) {
    const originalRender = ReactClass.prototype.render;
    const displayName = components[componentId].displayName;
    let enableLog = true;

    if (options) {
      enableLog = options.include ? enableLog && inArray(displayName, options.include) : enableLog;
      enableLog = options.exclude ? enableLog && !inArray(displayName, options.exclude) : enableLog;
    }

    if (enableLog) {
      ReactClass.prototype.render = function () {
        const count = updateCountRender(componentId);
        console.groupCollapsed(`render: ${displayName} (${count})`);
        console.log('props', this.props);
        console.log('state', this.state);
        console.groupEnd();

        return originalRender.apply(this, arguments);
      };
    }

    return ReactClass;
  };
}
