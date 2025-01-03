import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { joinVoiceChannel } from "@discordjs/voice";

export const data = new SlashCommandBuilder()
  .setName("joinvocal")
  .setDescription("Bot joins the voice channel");

export async function execute(interaction: CommandInteraction) {
  if (!interaction.member || !("voice" in interaction.member) || !interaction.member.voice.channel) {
    return interaction.reply("You must be in a voice channel to use this command.");
  }
  
  if (!interaction.guild) { return interaction.reply("Interaction guild is not found");}
  
  const connection = joinVoiceChannel({
    channelId: (interaction.member.voice.channel.id),
    guildId: interaction.guild.id,
    adapterCreator: interaction.guild.voiceAdapterCreator,
  });

  connection.on("error", (error) => {
    console.error("Voice connection error:", error);
  });

  return interaction.reply(`Joined ${interaction.member.voice.channel.name}.`);
}
