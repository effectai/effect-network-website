#define GLSLIFY 1

float displacement = f(position);
vec3 displacedPosition = position + normal * displacement;
vec3 displacedNormal = normalize(normal);
