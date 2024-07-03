# wapuubot - A WordPress Slack App

[![Build Status](https://api.travis-ci.org/wapuubot/wapuubot.svg?branch=master)](https://travis-ci.org/wapuubot/wapuubot)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

## Setting up Slack and GitHub Integration

1. Create a Slack App at https://api.slack.com/apps and install it to your workspace.
2. Create a GitHub App at https://github.com/settings/apps and install it to your repository.
3. Create a `.env` file in the root of your project and add the following environment variables:

```
SLACK_BOT_TOKEN=<your-slack-bot-token>
GITHUB_TOKEN=<your-github-token>
```

## Running the Bot

1. Install dependencies:

```
npm install
```

2. Start the bot:

```
npm start
```
