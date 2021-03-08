import { IncomingWebhook } from '@slack/webhook';

export interface Input {
  text: string;
  username?: string;
  // eslint-disable-next-line camelcase
  icon_emoji?: string;
  // eslint-disable-next-line camelcase
  icon_url?: string;
}

export async function sendMessage (webhookUrl: string, input: Input): Promise<void> {
  const webhook = new IncomingWebhook(webhookUrl);

  await webhook.send({
    text: input.text,
    username: input.username || undefined,
    icon_emoji: input.icon_emoji || undefined,
    icon_url: input.icon_url || undefined
  });
}
