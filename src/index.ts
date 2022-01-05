import { createExpressServer, useContainer as RoutingContainer } from 'routing-controllers';
import {useContainer as OrmContainer} from "typeorm/container";
import {Container} from "typeorm-typedi-extensions";
import path from "path";
import {createConnection} from "typeorm";


OrmContainer(Container);
RoutingContainer(Container);

createConnection({
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'multi-tenant',
    entities: [path.join(__dirname + '/**/*.entity.{js,ts}')],
    synchronize: true,
    logging: false
})

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    classTransformer: true,
    validation: true,
    controllers: [
        path.join(__dirname + '/**/*.controller.{js,ts}')
    ],
    middlewares:[
        path.join(__dirname + '/**/*.middleware.{js,ts}')
    ]
});

// run express application on port 3000
const APP_PORT = 8000;
app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
});