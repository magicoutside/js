class Logger{
    log(message){
        console.log(message);
    }
}

class FileLogger{
    log(text){
        let fs = require("fs");
        fs.appendFileSync("filename.txt", text);
    }
}

let fcr = new FileLogger()
fcr.log('test1')
fcr.log('test2')
fcr.log('test3')