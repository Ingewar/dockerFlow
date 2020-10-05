const core = require('@actions/core');
const fetch = require('node-fetch');

try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK || core.getInput('SLACK_WEBHOOK');
    const message = process.env.MESSAGE || core.getInput('MESSAGE');
  
    if (!slackWebhookUrl || !message) {
        console.error('Invalid input');
    } else {
      const options = {
        text: message
      };

      fetch(slackWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(options)
      })
        .then(res => console.info(res))
        .catch(e => {
            console.error(e)
            throw(e);
        })
    }
  } catch (error) {
    core.setFailed(error.message);
  }