const CronJobs = require('node-cronojobs')

var x = new CronJobs()
var Time = x.Time()
var Colors = x.Colors()

x.startInstance({

  jobs: [
    {
      job: `${process.cwd()}\\example_job`,
      timer: Time.second,
      run_at_start: true
    }
  ],

  log_prefix: Colors.FgCyan + '[LOG]' + Colors.Reset,
  error_log_prefix: Colors.FgRed + '[ERROR]' + Colors.Reset
})
