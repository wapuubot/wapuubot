require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const { Octokit } = require('@octokit/rest');

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

slackClient.on('message', async (event) => {
  if (event.text.includes('github')) {
    const repo = event.text.split(' ')[1];
    const response = await octokit.repos.get({
      owner: 'your-github-username',
      repo: repo,
    });
    slackClient.chat.postMessage({
      channel: event.channel,
      text: `Repository ${repo} has ${response.data.stargazers_count} stars.`,
    });
  }
});

slackClient.on('reaction_added', async (event) => {
  const response = await slackClient.reactions.get({
    channel: event.item.channel,
    timestamp: event.item.ts,
  });
  slackClient.chat.postMessage({
    channel: event.item.channel,
    text: `You reacted with :${event.reaction}: to a message.`,
  });
});

octokit.hook.before('request', async (options) => {
  console.log(`Requesting ${options.method} ${options.url}`);
});

octokit.hook.after('request', async (response, options) => {
  console.log(`Received ${response.status} from ${options.method} ${options.url}`);
});
