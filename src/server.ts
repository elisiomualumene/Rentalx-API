import {app} from "./app"

const port = process.env.PORT_SERVER || 3030;

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
});