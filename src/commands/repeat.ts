import {CommandInteraction, SlashCommandBuilder} from "discord.js";
import {InteractionCallbackResponse, InteractionResponse } from "discord.js/typings";

export const data = new SlashCommandBuilder()
  .setName("repeat")
  .setDescription("Repeats the message you provide.")
  .addStringOption((option) =>
    option.setName("message")
      .setDescription("The message to repeat")
      .setRequired(true));

export async function execute(interaction: CommandInteraction): Promise<InteractionCallbackResponse | InteractionResponse | undefined> {
  const { reply } = interaction;
  const message = interaction.isCommand() ? interaction.options.getString("message") : "";
  
  return reply(message ? message : "You must provide a message to repeat.");
}