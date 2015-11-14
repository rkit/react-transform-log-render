const countRender = new Map();

function updateCountRender(componentId) {
  let count = countRender.get(componentId) || 0;
  count++;
  countRender.set(componentId, count);

  return count;
}

export default function logRender({ components }) {
  return function wrap(ReactClass, componentId) {
    const originalRender = ReactClass.prototype.render;
    const displayName = components[componentId].displayName;

    ReactClass.prototype.render = function () {
      const count = updateCountRender(componentId);
      console.groupCollapsed(`render: ${displayName} (${count})`);
      console.log('props', this.props);
      console.log('state', this.state);
      console.groupEnd();

      return originalRender.apply(this, arguments);
    };

    return ReactClass;
  };
}
