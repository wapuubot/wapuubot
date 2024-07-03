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

## What next?

After setting up and running the bot, you can extend and customize its functionality by modifying the code in the `src` directory. Here are some ideas:

- Add new commands or event listeners to handle different types of messages or reactions.
- Integrate with other APIs or services to provide additional features.
- Customize the bot's responses to better suit your needs.

## Testing and Troubleshooting

To test the bot's features, you can use the following methods:

- Send messages or reactions in your Slack workspace and observe the bot's responses.
- Check the console output for any error messages or logs.

If you encounter any issues, try the following troubleshooting steps:

- Ensure that your environment variables are correctly set in the `.env` file.
- Verify that your Slack and GitHub tokens are valid and have the necessary permissions.
- Check the documentation for the Slack and GitHub APIs for any changes or updates.

## Contribution Guidelines

We welcome contributions to the project! To contribute, please follow these steps:

1. Fork the repository and create a new branch for your feature or bugfix.
2. Make your changes and ensure that the code passes the linting and testing checks.
3. Submit a pull request with a clear description of your changes.

### Roadmap

Here are some planned features and improvements for future development:

- Add support for more Slack events and commands.
- Improve error handling and logging.
- Enhance the bot's customization options.
- Add more integration options with other services and APIs.
