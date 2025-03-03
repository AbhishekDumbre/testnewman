var newman=require('newman');
newman.run({
  collection:'collection1.json',
  environment:'envirement1.json',
  reporters:'myreporter',
  reporter:{
    html:{
      export:'./result.html'
    }
  }
})