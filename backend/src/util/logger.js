import pkg from 'colors';
const { setTheme } = pkg;
import moment from 'moment';

setTheme({
  info: 'green',
  help: 'magenta',
  warn: 'yellow',
  success: 'cyan',
  error: 'red'
});

class Logger{

  constructor(){
    this.format = 'DD/MM/YYYY hh:mm:ss';
  }

  writeError(message){
    console.log(
      'ERROR:   '.error +
      moment().format(this.format) +
      '    ' +
      message.error
    );
  }

  writeInfo(message){
    console.log(
      'INFO:    '.info +
      moment().format(this.format) +
      '    ' +
      message.info
    );
  }

  writeHelp(message){
    console.log(
      'HELP:    '.help +
      moment().format(this.format) +
      '    ' +
      message.help
    );
  }

  writeSuccess(message){
    console.log(
      'SUCCESS: '.success +
      moment().format(this.format) +
      '    ' +
      message.success
    );
  }
}

export default Logger;