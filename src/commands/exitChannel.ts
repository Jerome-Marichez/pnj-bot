import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { joinVoiceChannel, VoiceConnectionStatus, getVoiceConnection } from '@discordjs/voice';

export const data = new SlashCommandBuilder()
  .setName("exitChannel")
  .setDescription("Bot leaves the voice channel it's connected to.");

export async function execute(interaction: CommandInteraction) {
  if (!interaction.guild) {
    return interaction.reply("This command can only be used in a server.");
  }
  
  const connection = getVoiceConnection(interaction.guild.id);

  if (!connection) {
    return interaction.reply("I'm not connected to any voice channel.");
  }

  connection.disconnect();

  return interaction.reply("Disconnected from the voice channel.");
}
