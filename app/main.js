// NOTE This file spins up app and loads all the controllers.

import PostController from "./Controllers/PostController.js";
class App {
     postController = new PostController();
}

window["app"] = new App();

// NOTE unless I add another controller main is done