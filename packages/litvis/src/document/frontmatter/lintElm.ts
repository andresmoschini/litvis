import { getPosition, getValue } from "data-with-position";
import * as kindOf from "kind-of";
import * as _ from "lodash";
import { LitvisDocument } from "../../types";

// @ts-ignore
import { Parent, Position, VFileBase } from "../../types";

const supportedProperties = ["dependencies", "source-directories"];

export default (dataWithPosition, document: LitvisDocument): void => {
  if (!_.isUndefined(dataWithPosition.elm)) {
    const elm = getValue(dataWithPosition.elm);
    if (_.isNull(elm)) {
      // ignore null value
    } else if (!_.isPlainObject(elm)) {
      document.message(
        `‘elm’ has to be an object, ${kindOf(elm)} given. Value ignored.`,
        getPosition(dataWithPosition.elm),
        "litvis:frontmatter:elm:dependencies",
      );
    } else {
      const unusedKeys = _.without(_.keys(elm), ...supportedProperties);
      unusedKeys.forEach((k) => {
        document.message(
          `‘elm.${k}’ is not supported and so ignored. Supported properties: ${supportedProperties.join(
            ", ",
          )}.`,
          getPosition(dataWithPosition.elm[k]),
          "litvis:frontmatter:elm",
        );
      });
    }
  }
};
