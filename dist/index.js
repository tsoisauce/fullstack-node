"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_response_time_1 = __importDefault(require("koa-response-time"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const server = new koa_1.default();
const router = new koa_router_1.default();
router.get('/', ctx => {
    ctx.body = "Hello World!";
    ctx.res.statusCode = 200;
});
server.use(koa_bodyparser_1.default());
server.use(koa_logger_1.default());
server.use(koa_json_1.default());
server.use(koa_response_time_1.default());
server.use(router.routes());
server.use(router.allowedMethods());
server.listen(port, () => {
    console.log(`>>>>> Ready on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map