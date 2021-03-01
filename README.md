# node-cronojobs
cronjobs for node instance 


# Example constructor: 

```js 
const CronoJobs = require('node-cronojobs')

var x = new CronoJobs()
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

```

# Example job: 
```js
function exampleJob() {
  console.log("EXAMPLE JOB");
}

module.exports = exampleJob;
```
