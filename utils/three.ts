import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { BufferGeometry, Object3D } from "three";

export function mergeAndExtractModel(model: Object3D, scale = 1) {
  let geometries: BufferGeometry[] = [];

  const recursiveMergeAndExtract = (childObject: any) => {
    if (childObject.isMesh) {
      let geometry = childObject.geometry.clone().toNonIndexed();
      let matrixWorld = childObject.matrixWorld;

      // Handle positions
      geometry.applyMatrix4(matrixWorld);

      // Remove other attributes
      for (let attributeKey in geometry.attributes) {
        if (attributeKey !== "position" && attributeKey !== "normal") {
          geometry.deleteAttribute(attributeKey);
        }
      }

      geometries.push(geometry);
    }

    childObject.children.forEach(recursiveMergeAndExtract);
  };

  //recursive search
  recursiveMergeAndExtract(model);

  let mergedGeometry = mergeGeometries(geometries);
  mergedGeometry.center().scale(scale, scale, scale);

  return mergedGeometry;
}
