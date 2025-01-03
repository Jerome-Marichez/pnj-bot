import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { getVoiceConnection } from "@discordjs/voice";

export const data = new SlashCommandBuilder()
  .setName("exitvocal")
  .setDescription("Bot leaves the voice channel");

export async function execute(interaction: CommandInteraction) {
  const { reply, guild } = interaction; 
  
  if (!guild) return reply("This command can only be used in a server.");
  
  const connection = getVoiceConnection(guild.id);
  if (!connection) return reply("I'm not connected to any voice channel.");
  

  connection.destroy();
  const checkConnection = getVoiceConnection(guild.id);
  
  return checkConnection ? reply("Disconnected from the voice channel.") : reply("Failed to disconnect from the voice channel.");
}
