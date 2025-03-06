/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */
function shallowCopy(obj) {
  const copy = {};
  Object.assign(copy, obj);
  return copy;
}

function mergeObjects(objects) {
  return objects.reduce((result, obj) => {
    const res = result;
    Object.entries(obj).forEach(([key, value]) => {
      if (res[key] !== undefined) {
        res[key] += value;
      } else {
        res[key] = value;
      }
    });
    return res;
  }, {});
}

function removeProperties(obj, keys) {
  const link = obj;
  keys.forEach((key) => {
    if (link[key]) {
      delete link[key];
    }
  });
  return obj;
}

function compareObjects(obj1, obj2) {
  const stringOne = Object.entries(obj1).toString();
  const stringTwo = Object.entries(obj2).toString();
  return stringOne === stringTwo;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function makeImmutable(obj) {
  return Object.freeze(obj);
}

function makeWord(lettersObject) {
  const arr = [];
  const entries = Object.entries(lettersObject);
  entries.forEach((entry) => {
    const [key, positions] = entry;
    positions.forEach((position) => {
      arr[position] = key;
    });
  });
  return arr.join('');
}

function sellTickets(queue) {
  const obj = {
    count100: 0,
    count50: 0,
    count25: 0,
  };

  const canSell = queue.reduce((res, bill) => {
    if (!res) return false;

    if (bill === 25) {
      obj.count25 += 1;
    } else if (bill === 50) {
      if (obj.count25 >= 1) {
        obj.count25 -= 1;
        obj.count50 += 1;
      } else {
        return false;
      }
    } else if (bill === 100) {
      if (obj.count50 >= 1 && obj.count25 >= 1) {
        obj.count50 -= 1;
        obj.count25 -= 1;
        obj.count100 += 1;
      } else if (obj.count25 >= 3) {
        obj.count25 -= 3;
        obj.count100 += 1;
      } else {
        return false;
      }
    }

    return true;
  }, true);

  return canSell;
}

function Rectangle(width, height) {
  function getArea() {
    return this.height * this.width;
  }
  this.width = width;
  this.height = height;
  this.getArea = getArea;
}

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  const props = JSON.parse(json);
  const obj = Object.create(proto);
  Object.assign(obj, props);
  return obj;
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  });
}

function group(array, keySelector, valueSelector) {
  const resultMap = new Map();
  array.forEach((item) => {
    const country = keySelector(item);
    const city = valueSelector(item);
    if (!resultMap.has(country)) {
      resultMap.set(country, []);
    }
    resultMap.get(country).push(city);
  });
  return resultMap;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  element(/* value */) {
    throw new Error('Not implemented');
  },

  id(/* value */) {
    throw new Error('Not implemented');
  },

  class(/* value */) {
    throw new Error('Not implemented');
  },

  attr(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoClass(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
  },
};

module.exports = {
  shallowCopy,
  mergeObjects,
  removeProperties,
  compareObjects,
  isEmptyObject,
  makeImmutable,
  makeWord,
  sellTickets,
  Rectangle,
  getJSON,
  fromJSON,
  group,
  sortCitiesArray,
  cssSelectorBuilder,
};
