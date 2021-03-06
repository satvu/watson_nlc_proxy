let nlc = require('./controllers/nlc')
let visual = require('./controllers/visual')

function init(app) {
  app.post('/nlc/classify', nlc.classifyPhrase)
  app.post('/visual/classify', visual.classifyImage)
}

module.exports = init
