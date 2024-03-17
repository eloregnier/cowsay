const information = require('./information');


const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hello I'm ${information.mesInfos.prenom} from ${information.mesInfos.campus} campus`,
    e: "oO",
    T: "U "
}));