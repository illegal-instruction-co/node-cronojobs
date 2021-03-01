/*
Modular functions
*/
const Log = require('./functions/log')

/*
: Void
*/

var el

class CronJobs {

  startInstance(config) {

    try {
      for (var i = 0; i < config.jobs.length; i++) {
        el = config.jobs[i]
        if(el.run_at_start) require(`${el.job}`)()
        this.runJob(el, config)
      }
    } catch(err) {
      Log(config.error_log_prefix, {
        current: 'CronoJobManager',
        step: 'Scheduling jobs',
        error: err
      })
    }
  }

  runJob(el, config) {
    setInterval(function(){
      try {
        Log(config.log_prefix, {
          current: 'CronoJobManager',
          running: el.job
        })
        require(`${el.job}`)()
      } catch(err) {
        Log(config.error_log_prefix, {
          current: 'CronoJobManager',
          step: 'Running job',
          error: err
        })
      }
    },
    el.timer
  )
}

  Time() {
    var Time = {
      second : 1 * 1000,
      minute : this.Time.second * 60,
      hour : this.Time.minute * 60,
      day : this.Time.hour * 24,
      week : this.Time.day * 7,
      year : this.Time.day * 365
    }
    return Time
  }

  Colors() {
    var Colors = {
      Reset : "\x1b[0m",
      Bright : "\x1b[1m",
      Dim : "\x1b[2m",
      Underscore : "\x1b[4m",
      Blink : "\x1b[5m",
      Reverse : "\x1b[7m",
      Hidden : "\x1b[8m",

      FgBlack : "\x1b[30m",
      FgRed : "\x1b[31m",
      FgGreen : "\x1b[32m",
      FgYellow : "\x1b[33m",
      FgBlue : "\x1b[34m",
      FgMagenta : "\x1b[35m",
      FgCyan : "\x1b[36m",
      FgWhite : "\x1b[37m",

      BgBlack : "\x1b[40m",
      BgRed : "\x1b[41m",
      BgGreen : "\x1b[42m",
      BgYellow : "\x1b[43m",
      BgBlue : "\x1b[44m",
      BgMagenta : "\x1b[45m",
      BgCyan : "\x1b[46m",
      BgWhite : "\x1b[47m"
    }
    return Colors
  }
}

module.exports = CronJobs;
