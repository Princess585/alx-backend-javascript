/// <reference path="../js/subjects/Cpp.ts" />
/// <reference path="../js/subjects/Java.ts" />
/// <reference path="../js/subjects/React.ts" />

import { cpp, java, react } from '../js/subjects/Cpp';
import { cTeacher } from '../js/subjects/Teacher';

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

