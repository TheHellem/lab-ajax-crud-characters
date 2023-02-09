const ApiHandler = require("./services/APIhandler")
const apiHandler = new ApiHandler();

apiHandler.getAllCharacters()
.then((allCharacters) => console.log(allCharacters.data))
.catch((err) => console.log(err))