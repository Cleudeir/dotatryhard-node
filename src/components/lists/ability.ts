export const ability = function (id) {
  const list = [
    { url: "riki_backstab", id: 5144, name: "Cloak and Dagger" },
    { url: "slardar_bash", id: 5116, name: "Bash of the Deep" },
    { url: "bloodseeker_thirst", id: 5017, name: "Thirst" },
    { url: "weaver_shukuchi", id: 5290, name: "Shukuchi" },
    { url: "ursa_fury_swipes", id: 5359, name: "Fury Swipes" },
    { url: "dark_willow_shadow_realm", id: 6341, name: "Shadow Realm" },
    { url: "winter_wyvern_arctic_burn", id: 5651, name: "Arctic Burn" },
    { url: "silencer_glaives_of_wisdom", id: 5378, name: "Glaives of Wisdom" },
    { url: "necrolyte_heartstopper_aura", id: 5159, name: "Heartstopper Aura" },
    { url: "slark_essence_shift", id: 5496, name: "Essence Shift" },
    { url: "lion_finger_of_death", id: 5047, name: "Finger of Death" },
    { url: "huskar_berserkers_blood", id: 5273, name: "Berserker's Blood" },
    { url: "kunkka_tidebringer", id: 5032, name: "Tidebringer" },
    { url: "sandking_burrowstrike", id: 5102, name: "Burrowstrike" },
    { url: "faceless_void_time_lock", id: 5184, name: "Time Lock" },
    { url: "ember_spirit_sleight_of_fist", id: 5604, name: "Sleight of Fist" },
    { url: "vengefulspirit_command_aura", id: 5123, name: "Vengeance Aura" },
    { url: "lina_fiery_soul", id: 5042, name: "Fiery Soul" },
    { url: "sven_storm_bolt", id: 5094, name: "Storm Hammer" },
    { url: "templar_assassin_psi_blades", id: 5196, name: "Psi Blades" },
    { url: "undying_tombstone", id: 5444, name: "Tombstone" },
    { url: "queenofpain_blink", id: 5174, name: "Blink" },
    { url: "abyssal_underlord_atrophy_aura", id: 5615, name: "Atrophy Aura" },
    { url: "rubick_arcane_supremacy", id: 7320, name: "Arcane Supremacy" },
    { url: "doom_bringer_infernal_blade", id: 5341, name: "Infernal Blade" },
    { url: "mars_bulwark", id: 6582, name: "Bulwark" },
    { url: "bounty_hunter_jinada", id: 5286, name: "Jinada" },
    { url: "obsidian_destroyer_equilibrium", id: 5684, name: "Essence Flux" },
    { url: "nevermore_necromastery", id: 5062, name: "Necromastery" },
    { url: "ancient_apparition_chilling_touch", id: 5347, name: "Chilling Touch" },
    { url: "spectre_dispersion", id: 5336, name: "Dispersion" },
    { url: "dragon_knight_elder_dragon_form", id: 5229, name: "Elder Dragon Form" },
    { url: "juggernaut_blade_fury", id: 5028, name: "Blade Fury" },
    { url: "antimage_blink", id: 5004, name: "Blink" },
    { url: "earthshaker_aftershock", id: 5025, name: "Aftershock" },
    { url: "marci_unleash", id: 8198, name: "Unleash" },
    { url: "crystal_maiden_frostbite", id: 5127, name: "Frostbite" },
    { url: "skeleton_king_reincarnation", id: 5089, name: "Reincarnation" },
    { url: "chaos_knight_chaos_strike", id: 5428, name: "Chaos Strike" },
    { url: "luna_moon_glaive", id: 5223, name: "Moon Glaives" },
    { url: "windrunner_windrun", id: 5132, name: "Windrun" },
    { url: "night_stalker_hunter_in_the_night", id: 5277, name: "Hunter in the Night" },
    { url: "drow_ranger_marksmanship", id: 5022, name: "Marksmanship" },
    { url: "batrider_sticky_napalm", id: 5320, name: "Sticky Napalm" },
    { url: "alchemist_goblins_greed", id: 5368, name: "Greevil's Greed" },
    { url: "sniper_take_aim", id: 5156, name: "Take Aim" },
    { url: "vengefulspirit_magic_missile", id: 5122, name: "Magic Missile" },
    { url: "pangolier_swashbuckle", id: 6344, name: "Swashbuckle" },
    { url: "enchantress_impetus", id: 5270, name: "Impetus" },
    { url: "terrorblade_metamorphosis", id: 5621, name: "Metamorphosis" },
    { url: "tusk_walrus_punch", id: 5568, name: "Walrus PUNCH!" },
    { url: "legion_commander_duel", id: 5598, name: "Duel" },
    { url: "faceless_void_time_walk", id: 5182, name: "Time Walk" },
    { url: "alchemist_chemical_rage", id: 5369, name: "Chemical Rage" },
    { url: "phantom_lancer_juxtapose", id: 5067, name: "Juxtapose" },
    { url: "doom_bringer_devour", id: 5339, name: "Devour" },
    { url: "abaddon_frostmourne", id: 5587, name: "Curse of Avernus" },
    { url: "keeper_of_the_light_chakra_magic", id: 5473, name: "Chakra Magic" },
    { url: "pudge_flesh_heap", id: 5074, name: "Flesh Heap" },
    { url: "snapfire_lil_shredder", id: 6488, name: "Lil' Shredder" },
    { url: "earthshaker_enchant_totem", id: 5024, name: "Enchant Totem" },
    { url: "axe_counter_helix", id: 5009, name: "Counter Helix" },
    { url: "void_spirit_astral_step", id: 7705, name: "Astral Step" },
    { url: "antimage_mana_break", id: 5003, name: "Mana Break" },
    { url: "skeleton_king_mortal_strike", id: 5088, name: "Mortal Strike" },
    { url: "tinker_rearm", id: 5153, name: "Rearm" },
    { url: "weaver_geminate_attack", id: 5291, name: "Geminate Attack" },
    { url: "spirit_breaker_greater_bash", id: 5355, name: "Greater Bash" },
    { url: "pudge_rot", id: 5076, name: "Rot" },
    { url: "sandking_caustic_finale", id: 5104, name: "Caustic Finale" },
    { url: "spirit_breaker_charge_of_darkness", id: 5353, name: "Charge of Darkness" },
    { url: "monkey_king_jingu_mastery", id: 5723, name: "Jingu Mastery" },
    { url: "phantom_assassin_coup_de_grace", id: 5193, name: "Coup de Grace" },
    { url: "leshrac_pulse_nova", id: 5244, name: "Pulse Nova" },
    { url: "viper_poison_attack", id: 5218, name: "Poison Attack" },
    { url: "chaos_knight_chaos_bolt", id: 5426, name: "Chaos Bolt" },
    { url: "tiny_tree_grab", id: 5108, name: "Tree Grab" },
    { url: "zuus_lightning_bolt", id: 5111, name: "Lightning Bolt" },
    { url: "gyrocopter_flak_cannon", id: 5363, name: "Flak Cannon" },
    { url: "pudge_meat_hook", id: 5075, name: "Meat Hook" },
    { url: "lycan_feral_impulse", id: 5397, name: "Feral Impulse" },
    { url: "death_prophet_exorcism", id: 5093, name: "Exorcism" },
    { url: "abyssal_underlord_firestorm", id: 5613, name: "Firestorm" },
    { url: "slark_shadow_dance", id: 5497, name: "Shadow Dance" },
    { url: "tidehunter_kraken_shell", id: 5119, name: "Kraken Shell" },
    { url: "centaur_return", id: 5516, name: "Retaliate" },
    { url: "lion_impale", id: 5044, name: "Earth Spike" },
    { url: "dragon_knight_dragon_blood", id: 5228, name: "Dragon Blood" },
    { url: "abaddon_borrowed_time", id: 5588, name: "Borrowed Time" },
    { url: "tiny_grow", id: 5109, name: "Grow" },
    { url: "shredder_reactive_armor", id: 5526, name: "Reactive Armor" },
    { url: "ursa_overpower", id: 5358, name: "Overpower" },
    { url: "leshrac_split_earth", id: 5241, name: "Split Earth" },
    { url: "clinkz_wind_walk", id: 5261, name: "Skeleton Walk" },
    { url: "viper_nethertoxin", id: 5219, name: "Nethertoxin" },
    { url: "phantom_assassin_phantom_strike", id: 5191, name: "Phantom Strike" },
    { url: "broodmother_spin_web", id: 5280, name: "Spin Web" },
    { url: "razor_unstable_current", id: 5084, name: "Storm Surge" },
    { url: "gyrocopter_homing_missile", id: 5362, name: "Homing Missile" },
    { url: "venomancer_poison_sting", id: 5179, name: "Poison Sting" },
    { url: "enigma_black_hole", id: 5149, name: "Black Hole" },
    { url: "shadow_shaman_shackles", id: 5080, name: "Shackles" },
    { url: "viper_corrosive_skin", id: 5220, name: "Corrosive Skin" },
    { url: "luna_lucent_beam", id: 5222, name: "Lucent Beam" },
    { url: "necrolyte_reapers_scythe", id: 5161, name: "Reaper's Scythe" },
    { url: "troll_warlord_fervor", id: 5511, name: "Fervor" },
    { url: "hoodwink_acorn_shot", id: 8429, name: "Acorn Shot" },
    { url: "magnataur_shockwave", id: 5518, name: "Shockwave" },
    { url: "bounty_hunter_track", id: 5288, name: "Track" },
    { url: "sniper_headshot", id: 5155, name: "Headshot" },
    { url: "sven_great_cleave", id: 5095, name: "Great Cleave" },
    { url: "witch_doctor_death_ward", id: 5141, name: "Death Ward" },
    { url: "life_stealer_rage", id: 5249, name: "Rage" },
    { url: "life_stealer_feast", id: 5250, name: "Feast" },
    { url: "undying_decay", id: 5442, name: "Decay" },
    { url: "skeleton_king_hellfire_blast", id: 5086, name: "Wraithfire Blast" },
    { url: "invoker_sun_strike_ad", id: 7841, name: "Sun Strike (AD)" },
    { url: "mirana_leap", id: 5050, name: "Leap" },
    { url: "pangolier_lucky_shot", id: 7307, name: "Lucky Shot" },
    { url: "legion_commander_moment_of_courage", id: 5597, name: "Moment of Courage" },
    { url: "medusa_mystic_snake", id: 5505, name: "Mystic Snake" },
    { url: "warlock_rain_of_chaos", id: 5165, name: "Chaotic Offering" },
    { url: "bristleback_quill_spray", id: 5549, name: "Quill Spray" },
    { url: "death_prophet_spirit_siphon", id: 5685, name: "Spirit Siphon" },
    { url: "enchantress_untouchable", id: 5267, name: "Untouchable" },
    { url: "nyx_assassin_impale", id: 5462, name: "Impale" },
    { url: "magnataur_empower", id: 5519, name: "Empower" },
    { url: "life_stealer_ghoul_frenzy", id: 631, name: "Ghoul Frenzy" },
    { url: "broodmother_insatiable_hunger", id: 5282, name: "Insatiable Hunger" },
    { url: "morphling_waveform", id: 5052, name: "Waveform" },
    { url: "windrunner_focusfire", id: 5133, name: "Focus Fire" },
    { url: "techies_suicide", id: 5601, name: "Blast Off!" },
    { url: "undying_flesh_golem", id: 5447, name: "Flesh Golem" },
    { url: "witch_doctor_paralyzing_cask", id: 5138, name: "Paralyzing Cask" },
    { url: "clinkz_strafe", id: 5259, name: "Burning Barrage" },
    { url: "monkey_king_wukongs_command", id: 5725, name: "Wukong's Command" },
    { url: "shadow_shaman_mass_serpent_ward", id: 5081, name: "Mass Serpent Ward" },
    { url: "tiny_avalanche", id: 5106, name: "Avalanche" },
    { url: "mirana_arrow", id: 5048, name: "Sacred Arrow" },
    { url: "primal_beast_trample", id: 994, name: "Trample" },
    { url: "juggernaut_blade_dance", id: 5027, name: "Blade Dance" },
    { url: "medusa_split_shot", id: 5504, name: "Split Shot" },
    { url: "obsidian_destroyer_astral_imprisonment", id: 5392, name: "Astral Imprisonment" },
    { url: "nyx_assassin_vendetta", id: 5465, name: "Vendetta" },
    { url: "dark_seer_ion_shell", id: 5256, name: "Ion Shell" },
    { url: "bane_fiends_grip", id: 5013, name: "Fiend's Grip" },
    { url: "furion_teleportation", id: 5246, name: "Teleportation" },
    { url: "tidehunter_gush", id: 5118, name: "Gush" },
    { url: "phantom_assassin_blur", id: 5192, name: "Blur" },
    { url: "monkey_king_boundless_strike", id: 5716, name: "Boundless Strike" },
    { url: "dawnbreaker_fire_wreath", id: 7902, name: "Starbreaker" },
    { url: "dawnbreaker_luminosity", id: 7918, name: "Luminosity" },
    { url: "slardar_slithereen_crush", id: 5115, name: "Slithereen Crush" },
    { url: "bristleback_bristleback", id: 5550, name: "Bristleback" },
    { url: "brewmaster_drunken_brawler", id: 5402, name: "Drunken Brawler" },
    { url: "naga_siren_mirror_image", id: 5467, name: "Mirror Image" },
    { url: "juggernaut_omni_slash", id: 5030, name: "Omnislash" },
    { url: "dazzle_poison_touch", id: 5233, name: "Poison Touch" },
    { url: "crystal_maiden_freezing_field", id: 5129, name: "Freezing Field" },
    { url: "sniper_assassinate", id: 5157, name: "Assassinate" },
    { url: "axe_berserkers_call", id: 5007, name: "Berserker's Call" },
    { url: "razor_static_link", id: 5083, name: "Static Link" },
    { url: "tidehunter_anchor_smash", id: 5120, name: "Anchor Smash" },
    { url: "clinkz_searing_arrows", id: 5260, name: "Searing Arrows" },
    { url: "dazzle_bad_juju", id: 7304, name: "Bad Juju" },
    { url: "terrorblade_reflection", id: 5619, name: "Reflection" },
    { url: "riki_blink_strike", id: 5143, name: "Blink Strike" },
    { url: "shredder_whirling_death", id: 5524, name: "Whirling Death" },
    { url: "primal_beast_uproar", id: 995, name: "Uproar" },
    { url: "dark_seer_wall_of_replica", id: 5258, name: "Wall of Replica" },
    { url: "bounty_hunter_wind_walk", id: 5287, name: "Shadow Walk" },
    { url: "bristleback_viscous_nasal_goo", id: 5548, name: "Viscous Nasal Goo" },
    { url: "invoker_chaos_meteor_ad", id: 7843, name: "Chaos Meteor (AD)" },
    { url: "medusa_mana_shield", id: 5506, name: "Mana Shield" },
    { url: "templar_assassin_refraction", id: 5194, name: "Refraction" },
    { url: "storm_spirit_ball_lightning", id: 5101, name: "Ball Lightning" },
    { url: "sven_gods_strength", id: 5097, name: "God's Strength" },
    { url: "invoker_alacrity_ad", id: 7840, name: "Alacrity (AD)" },
    { url: "lich_chain_frost", id: 5137, name: "Chain Frost" },
    { url: "pugna_life_drain", id: 5189, name: "Life Drain" },
    { url: "visage_gravekeepers_cloak", id: 5482, name: "Gravekeeper's Cloak" },
    { url: "earthshaker_fissure", id: 5023, name: "Fissure" },
    { url: "mars_spear", id: 6583, name: "Spear of Mars" },
    { url: "centaur_hoof_stomp", id: 5514, name: "Hoof Stomp" },
    { url: "huskar_inner_fire", id: 7300, name: "Inner Fire" },
    { url: "drow_ranger_frost_arrows", id: 5019, name: "Frost Arrows" },
    { url: "beastmaster_wild_axes", id: 5168, name: "Wild Axes" },
    { url: "gyrocopter_rocket_barrage", id: 5361, name: "Rocket Barrage" },
    { url: "shadow_demon_disruption", id: 5421, name: "Disruption" },
    { url: "tidehunter_ravage", id: 5121, name: "Ravage" },
    { url: "wisp_spirits", id: 5486, name: "Spirits" },
    { url: "witch_doctor_maledict", id: 5140, name: "Maledict" },
    { url: "phantom_assassin_stifling_dagger", id: 5190, name: "Stifling Dagger" },
    { url: "disruptor_thunder_strike", id: 5458, name: "Thunder Strike" },
    { url: "sniper_shrapnel", id: 5154, name: "Shrapnel" },
    { url: "lone_druid_spirit_bear", id: 5412, name: "Summon Spirit Bear" },
    { url: "slark_pounce", id: 5495, name: "Pounce" },
    { url: "skywrath_mage_mystic_flare", id: 5584, name: "Mystic Flare" },
    { url: "rattletrap_battery_assault", id: 5237, name: "Battery Assault" },
    { url: "phantom_lancer_doppelwalk", id: 5066, name: "Doppelganger" },
    { url: "nyx_assassin_spiked_carapace", id: 5464, name: "Spiked Carapace" },
    { url: "jakiro_liquid_fire", id: 5299, name: "Liquid Fire" },
    { url: "tusk_snowball", id: 5566, name: "Snowball" },
    { url: "bristleback_warpath", id: 5551, name: "Warpath" },
    { url: "arc_warden_spark_wraith", id: 5679, name: "Spark Wraith" },
    { url: "zuus_thundergods_wrath", id: 5113, name: "Thundergod's Wrath" },
    { url: "mars_gods_rebuke", id: 6495, name: "God's Rebuke" },
    { url: "dragon_knight_dragon_tail", id: 5227, name: "Dragon Tail" },
    { url: "doom_bringer_doom", id: 5342, name: "Doom" },
    { url: "elder_titan_natural_order", id: 5593, name: "Natural Order" },
    { url: "abyssal_underlord_pit_of_malice", id: 5614, name: "Pit of Malice" },
    { url: "life_stealer_infest", id: 5252, name: "Infest" },
    { url: "ancient_apparition_ice_blast", id: 5348, name: "Ice Blast" },
    { url: "wisp_tether", id: 5485, name: "Tether" },
    { url: "tinker_laser", id: 5150, name: "Laser" },
    { url: "lycan_shapeshift", id: 5398, name: "Shapeshift" },
    { url: "wisp_overcharge", id: 5487, name: "Overcharge" },
    { url: "grimstroke_ink_creature", id: 8006, name: "Phantom's Embrace" },
    { url: "skeleton_king_vampiric_aura", id: 5087, name: "Vampiric Spirit" },
    { url: "furion_wrath_of_nature", id: 5248, name: "Wrath of Nature" },
    { url: "winter_wyvern_winters_curse", id: 5654, name: "Winter's Curse" },
    { url: "troll_warlord_battle_trance", id: 5512, name: "Battle Trance" },
    { url: "treant_overgrowth", id: 5437, name: "Overgrowth" },
    { url: "grimstroke_spirit_walk", id: 8007, name: "Ink Swell" },
    { url: "lina_light_strike_array", id: 5041, name: "Light Strike Array" },
    { url: "skywrath_mage_arcane_bolt", id: 5581, name: "Arcane Bolt" },
    { url: "ogre_magi_fireblast", id: 5438, name: "Fireblast" },
    { url: "bloodseeker_bloodrage", id: 5015, name: "Bloodrage" },
    { url: "ursa_enrage", id: 5360, name: "Enrage" },
    { url: "naga_siren_ensnare", id: 5468, name: "Ensnare" },
    { url: "skywrath_mage_concussive_shot", id: 5582, name: "Concussive Shot" },
    { url: "dark_willow_bramble_maze", id: 6339, name: "Bramble Maze" },
    { url: "techies_land_mines", id: 5599, name: "Proximity Mines" },
    { url: "huskar_burning_spear", id: 5272, name: "Burning Spear" },
    { url: "obsidian_destroyer_arcane_orb", id: 5391, name: "Arcane Orb" },
    { url: "nevermore_shadowraze2", id: 5060, name: "Shadowraze" },
    { url: "grimstroke_dark_artistry", id: 8000, name: "Stroke of Fate" },
    { url: "magnataur_skewer", id: 5520, name: "Skewer" },
    { url: "antimage_counterspell", id: 7314, name: "Counterspell" },
    { url: "venomancer_venomous_gale", id: 5178, name: "Venomous Gale" },
    { url: "kunkka_torrent", id: 5031, name: "Torrent" },
    { url: "jakiro_macropyre", id: 5300, name: "Macropyre" },
    { url: "clinkz_death_pact", id: 5262, name: "Death Pact" },
    { url: "phantom_lancer_spirit_lance", id: 5065, name: "Spirit Lance" },
    { url: "ogre_magi_bloodlust", id: 5440, name: "Bloodlust" },
    { url: "zuus_arc_lightning", id: 5110, name: "Arc Lightning" },
    { url: "bloodseeker_rupture", id: 5018, name: "Rupture" },
    { url: "puck_phase_shift", id: 5072, name: "Phase Shift" },
    { url: "spectre_desolate", id: 5335, name: "Desolate" },
    { url: "razor_eye_of_the_storm", id: 5085, name: "Eye of the Storm" },
    { url: "invoker_cold_snap_ad", id: 7836, name: "Cold Snap (AD)" },
    { url: "storm_spirit_electric_vortex", id: 5099, name: "Electric Vortex" },
    { url: "sandking_sand_storm", id: 5103, name: "Sand Storm" },
    { url: "pugna_decrepify", id: 5187, name: "Decrepify" },
    { url: "lone_druid_spirit_link", id: 7309, name: "Spirit Link" },
    { url: "phoenix_supernova", id: 5630, name: "Supernova" },
    { url: "void_spirit_resonant_pulse", id: 7710, name: "Resonant Pulse" },
    { url: "queenofpain_shadow_strike", id: 5173, name: "Shadow Strike" },
    { url: "pudge_dismember", id: 5077, name: "Dismember" },
    { url: "pangolier_shield_crash", id: 6461, name: "Shield Crash" },
    { url: "lone_druid_true_form", id: 5415, name: "True Form" },
    { url: "jakiro_dual_breath", id: 5297, name: "Dual Breath" },
    { url: "marci_guardian", id: 8234, name: "Sidekick" },
    { url: "naga_siren_rip_tide", id: 5469, name: "Rip Tide" },
    { url: "templar_assassin_meld", id: 5195, name: "Meld" },
    { url: "oracle_fortunes_end", id: 5637, name: "Fortune's End" },
    { url: "magnataur_reverse_polarity", id: 5521, name: "Reverse Polarity" },
    { url: "bane_brain_sap", id: 5011, name: "Brain Sap" },
    { url: "nevermore_dark_lord", id: 5063, name: "Presence of the Dark Lord" },
    { url: "enigma_malefice", id: 5146, name: "Malefice" },
    { url: "phoenix_icarus_dive", id: 5623, name: "Icarus Dive" },
    { url: "lina_laguna_blade", id: 5043, name: "Laguna Blade" },
    { url: "night_stalker_void", id: 5275, name: "Void" },
    { url: "jakiro_ice_path", id: 5298, name: "Ice Path" },
    { url: "storm_spirit_overload", id: 5100, name: "Overload" },
    { url: "pugna_nether_ward", id: 5188, name: "Nether Ward" },
    { url: "legion_commander_press_the_attack", id: 5596, name: "Press The Attack" },
    { url: "chaos_knight_reality_rift", id: 5427, name: "Reality Rift" },
    { url: "silencer_last_word", id: 5379, name: "Last Word" },
    { url: "faceless_void_chronosphere", id: 5185, name: "Chronosphere" },
    { url: "silencer_curse_of_the_silent", id: 5377, name: "Arcane Curse" },
    { url: "shadow_demon_demonic_purge", id: 5425, name: "Demonic Purge" },
    { url: "ember_spirit_fire_remnant", id: 5606, name: "Fire Remnant" },
    { url: "hoodwink_sharpshooter", id: 8106, name: "Sharpshooter" },
    { url: "shadow_demon_shadow_poison", id: 5423, name: "Shadow Poison" },
    { url: "spectre_haunt", id: 5337, name: "Haunt" },
    { url: "puck_waning_rift", id: 5071, name: "Waning Rift" },
    { url: "visage_soul_assumption", id: 5481, name: "Soul Assumption" },
    { url: "marci_companion_run", id: 8235, name: "Rebound" },
    { url: "beastmaster_primal_roar", id: 5177, name: "Primal Roar" },
    { url: "elder_titan_ancestral_spirit", id: 5591, name: "Astral Spirit" },
    { url: "windrunner_shackleshot", id: 5130, name: "Shackleshot" },
    { url: "tusk_ice_shards", id: 5565, name: "Ice Shards" },
    { url: "crystal_maiden_brilliance_aura", id: 5128, name: "Arcane Aura" },
    { url: "slardar_amplify_damage", id: 5117, name: "Corrosive Haze" },
    { url: "beastmaster_inner_beast", id: 5172, name: "Inner Beast" },
    { url: "warlock_fatal_bonds", id: 5162, name: "Fatal Bonds" },
    { url: "pugna_nether_blast", id: 5186, name: "Nether Blast" },
    { url: "razor_plasma_field", id: 5082, name: "Plasma Field" },
    { url: "luna_lunar_blessing", id: 5224, name: "Lunar Blessing" },
    { url: "puck_illusory_orb", id: 5069, name: "Illusory Orb" },
    { url: "skywrath_mage_ancient_seal", id: 5583, name: "Ancient Seal" },
    { url: "chaos_knight_phantasm", id: 5429, name: "Phantasm" },
    { url: "necrolyte_death_pulse", id: 5158, name: "Death Pulse" },
    { url: "snapfire_mortimer_kisses", id: 6482, name: "Mortimer Kisses" },
    { url: "lion_voodoo", id: 5045, name: "Hex" },
    { url: "shadow_shaman_voodoo", id: 5079, name: "Hex" },
    { url: "phantom_lancer_phantom_edge", id: 5068, name: "Phantom Rush" },
    { url: "tinker_heat_seeking_missile", id: 5151, name: "Heat-Seeking Missile" },
    { url: "dark_willow_terrorize", id: 8340, name: "Terrorize" },
    { url: "tusk_tag_team", id: 7322, name: "Tag Team" },
    { url: "invoker_tornado_ad", id: 7838, name: "Tornado (AD)" },
    { url: "lion_mana_drain", id: 5046, name: "Mana Drain" },
    { url: "shredder_chakram", id: 5527, name: "Chakram" },
    { url: "lich_sinister_gaze", id: 7325, name: "Sinister Gaze" },
    { url: "primal_beast_pulverize", id: 996, name: "Pulverize" },
    { url: "night_stalker_darkness", id: 5278, name: "Dark Ascension" },
    { url: "terrorblade_conjure_image", id: 5620, name: "Conjure Image" },
    { url: "bane_nightmare", id: 5014, name: "Nightmare" },
    { url: "snapfire_scatterblast", id: 6480, name: "Scatterblast" },
    { url: "dark_seer_vacuum", id: 5255, name: "Vacuum" },
    { url: "invoker_ghost_walk_ad", id: 7837, name: "Ghost Walk (AD)" },
    { url: "pangolier_gyroshell", id: 6343, name: "Rolling Thunder" },
    { url: "alchemist_unstable_concoction", id: 5366, name: "Unstable Concoction" },
    { url: "primal_beast_onslaught", id: 992, name: "Onslaught" },
    { url: "ogre_magi_ignite", id: 5439, name: "Ignite" },
    { url: "chen_penitence", id: 5328, name: "Penitence" },
    { url: "furion_force_of_nature", id: 5247, name: "Nature's Call" },
    { url: "axe_culling_blade", id: 5010, name: "Culling Blade" },
    { url: "keeper_of_the_light_illuminate", id: 5471, name: "Illuminate" },
    { url: "huskar_life_break", id: 5274, name: "Life Break" },
    { url: "hoodwink_bushwhack", id: 8158, name: "Bushwhack" },
    { url: "tiny_toss", id: 5107, name: "Toss" },
    { url: "marci_grapple", id: 8192, name: "Dispose" },
    { url: "brewmaster_primal_split", id: 5403, name: "Primal Split" },
    { url: "ember_spirit_flame_guard", id: 5605, name: "Flame Guard" },
    { url: "lina_dragon_slave", id: 5040, name: "Dragon Slave" },
    { url: "slardar_sprint", id: 5114, name: "Guardian Sprint" },
    { url: "doom_bringer_scorched_earth", id: 5340, name: "Scorched Earth" },
    { url: "oracle_purifying_flames", id: 5639, name: "Purifying Flames" },
    { url: "crystal_maiden_crystal_nova", id: 5126, name: "Crystal Nova" },
    { url: "treant_natures_grasp", id: 338, name: "Nature's Grasp" },
    { url: "omniknight_hammer_of_purity", id: 656, name: "Hammer of Purity" },
    { url: "grimstroke_soul_chain", id: 6491, name: "Soulbind" },
    { url: "venomancer_poison_nova", id: 5181, name: "Poison Nova" },
    { url: "omniknight_martyr", id: 895, name: "Heavenly Grace" },
    { url: "meepo_ransack", id: 7318, name: "Ransack" },
    { url: "witch_doctor_voodoo_restoration", id: 5139, name: "Voodoo Restoration" },
    { url: "dawnbreaker_celestial_hammer", id: 7914, name: "Celestial Hammer" },
    { url: "rubick_fade_bolt", id: 5450, name: "Fade Bolt" },
    { url: "rattletrap_hookshot", id: 5240, name: "Hookshot" },
    { url: "axe_battle_hunger", id: 5008, name: "Battle Hunger" },
    { url: "earth_spirit_geomagnetic_grip", id: 5610, name: "Geomagnetic Grip" },
    { url: "bounty_hunter_shuriken_toss", id: 5285, name: "Shuriken Toss" },
    { url: "mirana_starfall", id: 5051, name: "Starstorm" },
    { url: "centaur_double_edge", id: 5515, name: "Double Edge" },
    { url: "techies_sticky_bomb", id: 879, name: "Sticky Bomb" },
    { url: "medusa_stone_gaze", id: 5507, name: "Stone Gaze" },
    { url: "bloodseeker_blood_bath", id: 5016, name: "Blood Rite" },
    { url: "snapfire_firesnap_cookie", id: 6483, name: "Firesnap Cookie" },
    { url: "venomancer_plague_ward", id: 5180, name: "Plague Ward" },
    { url: "ember_spirit_searing_chains", id: 5603, name: "Searing Chains" },
    { url: "ursa_earthshock", id: 5357, name: "Earthshock" },
    { url: "warlock_shadow_word", id: 5163, name: "Shadow Word" },
    { url: "earth_spirit_rolling_boulder", id: 5609, name: "Rolling Boulder" },
    { url: "abaddon_aphotic_shield", id: 5586, name: "Aphotic Shield" },
    { url: "riki_tricks_of_the_trade", id: 5145, name: "Tricks of the Trade" },
    { url: "void_spirit_aether_remnant", id: 7701, name: "Aether Remnant" },
    { url: "void_spirit_dissimilate", id: 6470, name: "Dissimilate" },
    { url: "zuus_heavenly_jump", id: 641, name: "Heavenly Jump" },
    { url: "spectre_spectral_dagger", id: 5334, name: "Spectral Dagger" },
    { url: "keeper_of_the_light_spirit_form", id: 5474, name: "Spirit Form" },
    { url: "enigma_midnight_pulse", id: 5148, name: "Midnight Pulse" },
    { url: "storm_spirit_static_remnant", id: 5098, name: "Static Remnant" },
    { url: "queenofpain_sonic_wave", id: 5176, name: "Sonic Wave" },
    { url: "drow_ranger_multishot", id: 343, name: "Multishot" },
    { url: "ancient_apparition_cold_feet", id: 5345, name: "Cold Feet" },
    { url: "sandking_epicenter", id: 5105, name: "Epicenter" },
    { url: "hoodwink_scurry", id: 9501, name: "Scurry" },
    { url: "disruptor_static_storm", id: 5461, name: "Static Storm" },
    { url: "chen_holy_persuasion", id: 5330, name: "Holy Persuasion" },
    { url: "alchemist_acid_spray", id: 5365, name: "Acid Spray" },
    { url: "ancient_apparition_ice_vortex", id: 5346, name: "Ice Vortex" },
    { url: "visage_grave_chill", id: 5480, name: "Grave Chill" },
    { url: "terrorblade_sunder", id: 5622, name: "Sunder" },
    { url: "leshrac_diabolic_edict", id: 5242, name: "Diabolic Edict" },
    { url: "enigma_demonic_conversion", id: 5147, name: "Demonic Conversion" },
    { url: "viper_viper_strike", id: 5221, name: "Viper Strike" },
    { url: "omniknight_purification", id: 5263, name: "Purification" },
    { url: "dawnbreaker_solar_guardian", id: 7906, name: "Solar Guardian" },
    { url: "windrunner_powershot", id: 5131, name: "Powershot" },
    { url: "slark_dark_pact", id: 5494, name: "Dark Pact" },
    { url: "disruptor_kinetic_field", id: 5460, name: "Kinetic Field" },
    { url: "troll_warlord_whirling_axes_melee", id: 5510, name: "Whirling Axes (Melee)" },
    { url: "brewmaster_cinder_brew", id: 7310, name: "Cinder Brew" },
    { url: "death_prophet_carrion_swarm", id: 5090, name: "Crypt Swarm" },
    { url: "dark_seer_surge", id: 5257, name: "Surge" },
    { url: "batrider_firefly", id: 5322, name: "Firefly" },
    { url: "kunkka_ghostship", id: 5035, name: "Ghostship" },
    { url: "invoker_deafening_blast_ad", id: 7845, name: "Deafening Blast" },
    { url: "lich_frost_nova", id: 5134, name: "Frost Blast" },
    { url: "disruptor_glimpse", id: 5459, name: "Glimpse" },
    { url: "lich_frost_shield", id: 5136, name: "Frost Shield" },
    { url: "phoenix_sun_ray", id: 5626, name: "Sun Ray" },
    { url: "visage_summon_familiars", id: 5483, name: "Summon Familiars" },
    { url: "shadow_shaman_ether_shock", id: 5078, name: "Ether Shock" },
    { url: "mars_arena_of_blood", id: 6598, name: "Arena Of Blood" },
    { url: "spirit_breaker_bulldoze", id: 7301, name: "Bulldoze" },
    { url: "invoker_forge_spirit_ad", id: 7842, name: "Forge Spirit (AD)" },
    { url: "puck_dream_coil", id: 5073, name: "Dream Coil" },
    { url: "earth_spirit_magnetize", id: 5612, name: "Magnetize" },
    { url: "weaver_the_swarm", id: 5289, name: "The Swarm" },
    { url: "weaver_time_lapse", id: 5292, name: "Time Lapse" },
    { url: "shredder_timber_chain", id: 5525, name: "Timber Chain" },
    { url: "necrolyte_sadist", id: 5160, name: "Ghost Shroud" },
    { url: "queenofpain_scream_of_pain", id: 5175, name: "Scream Of Pain" },
    { url: "phoenix_fire_spirits", id: 5625, name: "Fire Spirits" },
    { url: "brewmaster_thunder_clap", id: 5400, name: "Thunder Clap" },
    { url: "leshrac_lightning_storm", id: 5243, name: "Lightning Storm" },
    { url: "nyx_assassin_mana_burn", id: 5463, name: "Mana Burn" },
    { url: "luna_eclipse", id: 5225, name: "Eclipse" },
    { url: "lycan_summon_wolves", id: 5395, name: "Summon Wolves" },
    { url: "winter_wyvern_splinter_blast", id: 5652, name: "Splinter Blast" },
    { url: "earthshaker_echo_slam", id: 5026, name: "Echo Slam" },
    { url: "omniknight_guardian_angel", id: 5266, name: "Guardian Angel" },
    { url: "techies_reactive_tazer", id: 886, name: "Reactive Tazer" },
    { url: "keeper_of_the_light_radiant_bind", id: 532, name: "Solar Bind" },
    { url: "legion_commander_overwhelming_odds", id: 5595, name: "Overwhelming Odds" },
    { url: "arc_warden_magnetic_field", id: 5678, name: "Magnetic Field" },
    { url: "chen_divine_favor", id: 7306, name: "Divine Favor" },
    { url: "elder_titan_echo_stomp", id: 5589, name: "Echo Stomp" },
    { url: "batrider_flaming_lasso", id: 5323, name: "Flaming Lasso" },
    { url: "rubick_telekinesis", id: 5448, name: "Telekinesis" },
    { url: "dark_willow_cursed_crown", id: 6342, name: "Cursed Crown" },
    { url: "winter_wyvern_cold_embrace", id: 5653, name: "Cold Embrace" },
    { url: "furion_sprout", id: 5245, name: "Sprout" },
    { url: "invoker_emp_ad", id: 7839, name: "E.M.P. (AD)" },
    { url: "spirit_breaker_nether_strike", id: 5356, name: "Nether Strike" },
    { url: "silencer_global_silence", id: 5380, name: "Global Silence" },
    { url: "rattletrap_power_cogs", id: 5238, name: "Power Cogs" },
    { url: "monkey_king_tree_dance", id: 5721, name: "Tree Dance" },
    { url: "nevermore_requiem", id: 5064, name: "Requiem of Souls" },
    { url: "dazzle_shallow_grave", id: 5234, name: "Shallow Grave" },
    { url: "warlock_upheaval", id: 5164, name: "Upheaval" },
    { url: "broodmother_spawn_spiderlings", id: 5279, name: "Spawn Spiderlings" },
    { url: "shadow_demon_disseminate", id: 1001, name: "DISSEMINATE" },
    { url: "oracle_false_promise", id: 5640, name: "False Promise" },
    { url: "arc_warden_flux", id: 5677, name: "Flux" },
    { url: "shadow_demon_soul_catcher", id: 5422, name: "Soul Catcher" },
    { url: "enchantress_natures_attendants", id: 5269, name: "Nature's Attendants" },
    { url: "abaddon_death_coil", id: 5585, name: "Mist Coil" },
    { url: "obsidian_destroyer_sanity_eclipse", id: 5394, name: "Sanity's Eclipse" },
    { url: "rattletrap_rocket_flare", id: 5239, name: "Rocket Flare" },
    { url: "sven_warcry", id: 5096, name: "Warcry" },
    { url: "dazzle_shadow_wave", id: 5235, name: "Shadow Wave" },
    { url: "earth_spirit_boulder_smash", id: 5608, name: "Boulder Smash" },
    { url: "treant_living_armor", id: 5436, name: "Living Armor" },
    { url: "drow_ranger_wave_of_silence", id: 5632, name: "Gust" },
    { url: "broodmother_silken_bola", id: 639, name: "Silken Bola" },
    { url: "gyrocopter_call_down", id: 5364, name: "Call Down" },
    { url: "antimage_mana_void", id: 5006, name: "Mana Void" },
    { url: "beastmaster_call_of_the_wild_hawk", id: 7231, name: "Call of the Wild Hawk" },
    { url: "meepo_earthbind", id: 5430, name: "Earthbind" },
    { url: "dragon_knight_breathe_fire", id: 5226, name: "Breathe Fire" },
    { url: "chen_hand_of_god", id: 5331, name: "Hand of God" },
    { url: "elder_titan_earth_splitter", id: 5594, name: "Earth Splitter" },
    { url: "centaur_stampede", id: 5517, name: "Stampede" },
    { url: "morphling_adaptive_strike_agi", id: 5053, name: "Adaptive Strike (Agility)" },
    { url: "batrider_flamebreak", id: 5321, name: "Flamebreak" },
    { url: "undying_soul_rip", id: 5443, name: "Soul Rip" },
    { url: "invoker_ice_wall_ad", id: 7844, name: "Ice Wall (AD)" },
    { url: "kunkka_x_marks_the_spot", id: 5033, name: "X Marks the Spot" },
    { url: "riki_smoke_screen", id: 5142, name: "Smoke Screen" },
    { url: "morphling_adaptive_strike_str", id: 7000, name: "Adaptive Strike (Strength)" },
    { url: "meepo_poof", id: 5431, name: "Poof" },
    { url: "treant_leech_seed", id: 5435, name: "Leech Seed" },
    { url: "vengefulspirit_nether_swap", id: 5125, name: "Nether Swap" },
    { url: "vengefulspirit_wave_of_terror", id: 5124, name: "Wave of Terror" },
    { url: "enchantress_enchant", id: 5268, name: "Enchant" },
    { url: "mirana_invis", id: 5049, name: "Moonlight Shadow" },
    { url: "troll_warlord_whirling_axes_ranged", id: 5509, name: "Whirling Axes (Ranged)" },
    { url: "night_stalker_crippling_fear", id: 5276, name: "Crippling Fear" },
    { url: "tinker_defense_matrix", id: 650, name: "Defense Matrix" },
    { url: "lycan_howl", id: 5396, name: "Howl" },
    { url: "juggernaut_healing_ward", id: 5029, name: "Healing Ward" },
    { url: "abyssal_underlord_dark_portal", id: 865, name: "Fiend's Gate" },
    { url: "wisp_relocate", id: 5488, name: "Relocate" },
    { url: "oracle_fates_edict", id: 5638, name: "Fate's Edict" },
    { url: "bane_enfeeble", id: 5012, name: "Enfeeble" },
    { url: "lone_druid_savage_roar", id: 5414, name: "Savage Roar" },
    { url: "naga_siren_song_of_the_siren", id: 5470, name: "Song of the Siren" },
    { url: "templar_assassin_psionic_trap", id: 5197, name: "Psionic Trap" },
    { url: "faceless_void_time_dilation", id: 5691, name: "Time Dilation" },
    { url: "death_prophet_silence", id: 5091, name: "Silence" }
  ]

  let result = ''
  if (id === null || id === undefined) {
    return id;
  }

  const filter = list.filter(x => x.id === id)
  if (filter[0] && filter[0].url) {
    result = filter[0].url
  }

  if (result === '') {
    result = id
  }

  return result
}