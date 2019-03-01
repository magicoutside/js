class ConsoleLogger{
    log(message){
        console.log(message);
    }
}

class FileLogger{
    log(text){
        let fs = require("fs");
        fs.appendFileSync("log.txt", text + '\r\n');
    }
}

class EmptyLogger{
    log(text){
    }
}

class MultiLogger{
    constructor(loggers){
        this.loggers = loggers
    }

    log(message){
        this.loggers.map(logger => logger.log(message))
    }
}



//----





let logger = new MultiLogger([new FileLogger(), new ConsoleLogger(), new EmptyLogger()])
logger.log('test1')
logger.log('test2')
logger.log('test3')