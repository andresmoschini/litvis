// import * as _ from "lodash";
import { NarrativeSchema, ParentDocument } from "narrative-schema-common";

// @ts-ignore
import { NarrativeSchemaData } from "narrative-schema-common";
// @ts-ignore
import { VFileBase } from "vfile";

export default (parents: Array<ParentDocument | NarrativeSchema>): string => {
  //   if (parents && parents.length) {
  //     const parts = _.reduce(
  //       parents,
  //       (arr: string[], parent) => {
  //         if (parent.path) {
  //           arr.push("\n^ ");
  //           arr.push(parent.path);
  //         }
  //         return arr;
  //       },
  //       [],
  //     );
  //     return ` (${parts.join("")})`;
  //   }
  return "";
};
