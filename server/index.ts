import { makeGreet } from './services/greet.service';

(async function() {
    for (let i = 0; i < 5; i++) {
        console.log(await makeGreet(`Pepito ${i}`));
    }
})();
