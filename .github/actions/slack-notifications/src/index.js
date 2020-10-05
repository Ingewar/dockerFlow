const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

try {
    const slackWebhookUrl = core.getInput('SLACK_WEBHOOK');
    const message = core.getInput('MESSAGE');
  
    if (!slackWebhookUrl || !message) {
        console.error('Invalid input');
    } else {
      const options = {
          body: {
              text: message
          }
      };
      
      request.post(options, (err, res, body) => {
          if (err) {
              return console.log(err);
          }
          console.log(`Status: ${res.statusCode}`);
          console.log(body);
      });

      fetch(slackWebhookUrl, {
          method: 'POST',
          body: options
      }).then(res => console.info(res))
        .catch(e => {
            console.error(e)
            throw(e);
        })
    }
  } catch (error) {
    core.setFailed(error.message);
  }