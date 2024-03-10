import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { Vector3, Matrix3, Float32BufferAttribute } from "three";

export function mergeModel(model, scale = 1) {
  let geometries = [];

  model.traverse((child) => {
    if (child.isMesh) {
      let geometry = child.geometry.clone().toNonIndexed();
      let matrixWorld = child.matrixWorld;

      // Handle positions
      geometry.applyMatrix4(matrixWorld);

      // Handle normals
      if (geometry.attributes.normal) {
        let normals = geometry.attributes.normal.clone();
        let normalMatrix = new Matrix3().getNormalMatrix(matrixWorld);
        normals.applyMatrix3(normalMatrix);
        geometry.setAttribute("normal", normals);
      }

      // Remove other attributes
      for (let attributeKey in geometry.attributes) {
        if (attributeKey !== "position" && attributeKey !== "normal") {
          geometry.deleteAttribute(attributeKey);
        }
      }

      geometries.push(geometry);
    }
  });

  // Traverse nested Object3Ds
  model.traverse((child) => {
    if (child !== model && child.isObject3D) {
      geometries.push(...extractGeometriesFromObject(child));
    }
  });

  // Merge geometries
  let mergedGeometry = mergeGeometries(geometries);

  // Center and scale the merged geometry
  mergedGeometry.center().scale(scale, scale, scale);

  return mergedGeometry;
}

function extractGeometriesFromObject(object) {
  let geometries = [];

  object.traverse((child) => {
    if (child.isMesh) {
      let geometry = child.geometry.clone().toNonIndexed();
      let matrixWorld = child.matrixWorld;

      // Handle positions
      geometry.applyMatrix4(matrixWorld);

      // Handle normals
      if (geometry.attributes.normal) {
        let normals = geometry.attributes.normal.clone();
        let normalMatrix = new Matrix3().getNormalMatrix(matrixWorld);
        normals.applyMatrix3(normalMatrix);
        geometry.setAttribute("normal", normals);
      }

      // Remove other attributes
      for (let attributeKey in geometry.attributes) {
        if (attributeKey !== "position" && attributeKey !== "normal") {
          geometry.deleteAttribute(attributeKey);
        }
      }

      geometries.push(geometry);
    }
  });

  return geometries;
}

export function calculateNormals(positions) {
  const normals = new Array(positions.length / 3)
    .fill(0)
    .map(() => new Vector3());
  // Compute face normals
  for (let i = 0; i < positions.length; i += 9) {
    const pA = new Vector3().fromArray(positions, i);
    const pB = new Vector3().fromArray(positions, i + 3);
    const pC = new Vector3().fromArray(positions, i + 6);
    const cb = new Vector3().subVectors(pC, pB);
    const ab = new Vector3().subVectors(pA, pB);
    const normal = new Vector3().crossVectors(cb, ab).normalize();

    normals[i / 3].add(normal);
    normals[i / 3 + 1].add(normal);
    normals[i / 3 + 2].add(normal);
  }

  // Normalize vertex normals
  for (let i = 0; i < normals.length; i++) {
    normals[i].normalize();
  }

  // Convert normals to array format
  const normalArray = new Float32Array(normals.length * 3);
  for (let i = 0; i < normals.length; i++) {
    normalArray[i * 3] = normals[i].x;
    normalArray[i * 3 + 1] = normals[i].y;
    normalArray[i * 3 + 2] = normals[i].z;
  }

  return normalArray;
}

export function subdivide(geometry, levels) {
  for (let i = 0; i < levels; i++) {
    const vertices = geometry.attributes.position.array;
    const indices = geometry.index.array;

    const newVertices = [];
    const newIndices = [];

    // Update geometry with new vertices and indices
    geometry.setIndex(newIndices);
    geometry.setAttribute(
      "position",
      new Float32BufferAttribute(newVertices, 3)
    );
  }
}
