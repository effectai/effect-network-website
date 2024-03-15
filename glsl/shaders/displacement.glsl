#define GLSLIFY 1

float displacement = f(position);
vec3 displacedPosition = position + normal * f(position);
vec3 displacedNormal = normalize(normal);

// // Generate new normals
// // https://discourse.threejs.org/t/calculating-vertex-normals-after-displacement-in-the-vertex-shader/16989
// float offset = 0.5 / 512.0;
// vec3 tangent = orthogonal(normal);
// vec3 bitangent = normalize(cross(normal, tangent));
// vec3 neighbour1 = position + tangent * offset;
// vec3 neighbour2 = position + bitangent * offset;

// vec3 displacedNeighbour1 = neighbour1 + normal * f(neighbour1);
// vec3 displacedNeighbour2 = neighbour2 + normal * f(neighbour2);

// // https://i.ya-webdesign.com/images/vector-normals-tangent-16.png
// vec3 displacedTangent = displacedNeighbour1 - displacedPosition;
// vec3 displacedBitangent = displacedNeighbour2 - displacedPosition;

// // https://upload.wikimedia.org/wikipedia/commons/d/d2/Right_hand_rule_cross_product.svg
// displacedNormal = normalize(cross(displacedTangent, displacedBitangent));