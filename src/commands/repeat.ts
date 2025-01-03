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

  const message = interaction.isCommand() ? interaction.options.getString("message") : "";

  if (message) {
    return interaction.reply(message);
  } else {
    return interaction.reply("You must provide a message to repeat.");
  }

}