'use strict';



this.x = 9;
const module = {
  x: 81,
  self: this,
  getX() {
    return this.self.x;
  },
};

module.getX(); // 81

const { getX } = module;
getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module
const boundGetX = getX();
boundGetX(); // 81


const modulefunc = (context, callback) => {
    this = context
  const newfunc = () => {}
}