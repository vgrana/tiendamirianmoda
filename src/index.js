express = require("express");
const server = express();
const path = require("path");

server.set('port', 10000);
server.set('views',path.join(__dirname, 'views'))

server.use(express.static(path.join(__dirname, 'views')));

server.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname , 'views/index.html'));    
});

server.listen(server.get('port'), () => {
    console.log("Server running on port",server.get('port'));
  });