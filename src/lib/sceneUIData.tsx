export type TScene = {
  title: string;
  hudProps: any;
  cameraProps?: any;
  isPlayer?: boolean;
  isPointerLocked?: boolean;
  html?: string;
  model?: string;
};

export const allScenesList: TScene[] = [
  {
    title: "STARTSCREEN",
    hudProps: {
      type: "StartScreenHUD",
    },
    cameraProps: {
      type: "STARTSCREEN",
    },
    html: "screensaver",
  },
  {
    title: "INTRO",
    hudProps: {
      type: "PlayerHUD",
      dialogueText: "Objective: Read the readme.txt on the Apple iMac",
      dialogueBtnText: "EXIT to Room",
    },
    cameraProps: {
      type: "DESK",
    },
    html: "macos",
  },
  {
    title: "DIARY",
    hudProps: {
      type: "PlayerHUD",
      dialogueText: "Objective: Read the readme.txt on the Apple iMac",
      dialogueHoverText: "Press F to interact [DIARY]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "diary", // Update this to diary ins new model
  },
  {
    title: "DIARY_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Jake's Diary",
      year: "Unknown",
      place: "Some bug out shelter",
      description:
        "Gonna be where I keep my secrets kinda like a diary but also not really. Other stuff might be hidden in here too. But I dont want to write that part down... ",
      clue: "Find the leather-bound book of secrets. It rests by the plastic apple.",
      nextClue:
        "Find the framed keepsake of love and kin, often where dreams begin.", //Need to update this in backend
    },
    cameraProps: {
      type: "PLAYER",
    },
  },
  {
    title: "PHOTO",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the framed keepsake of love and kin, often where dreams begin.",
      dialogueHoverText: "Press F to interact [PHOTO]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "picture_frame",
  },
  {
    title: "PHOTO_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Family Photo",
      year: "2001",
      place: "Benihana's",
      description: "A photo of my family",
      clue: "Find the item that shows a photo of my family.",
      nextClue:
        "Find the tales of the cunning raccoon in this PS2 game, where stealthy adventures begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },
  {
    title: "SLY_COOPER",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the tales of the cunning raccoon in this PS2 game, where stealthy adventures begin.",
      dialogueHoverText: "Press F to interact [SLY_COOPER]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "game",
  },
  {
    title: "SLY_COOPER_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Sly Cooper",
      year: "2002",
      place: "PS2 Console",
      description: "A stealth action-adventure game",
      clue: "Find the tales of the cunning raccoon in this PS2 game, where stealthy adventures begin.",
      nextClue:
        "Find the wooden ride made famous by Tony, rolling where tricks begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "SKATEBOARD",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the wooden ride made famous by Tony, rolling where tricks begin.",
      dialogueHoverText: "Press F to interact [SKATEBOARD]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "skateboard",
  },
  {
    title: "SKATEBOARD_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Skateboard",
      year: "2004",
      place: "Krush Skatepark",
      description: "A wooden skateboard",
      clue: "Find the wooden ride made famous by Tony, rolling where tricks begin.",
      nextClue:
        "Find the steel tools of precision, often kept where defense begins.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "MILITARY",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the steel tools of precision, often kept where defense begins.",
      dialogueHoverText: "Press F to interact [MILITARY]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "gun",
  },
  {
    title: "MILITARY_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Military Equipment",
      year: "2008",
      place: "In the Forests of Illinois",
      description: "Guns, Grappling Hooks, and Bombs",
      clue: "Find the steel tools of precision, often kept where defense begins.",
      nextClue:
        "Find the martial art of grappling, practiced where strength and technique begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "GEE",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the martial art of grappling, practiced where strength and technique begin.",
      dialogueHoverText: "Press F to interact [GEE]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "jiu_jitsu",
  },
  {
    title: "GEE_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Jiu Jitsu",
      year: "2012",
      place: "Gracie Academy",
      description: "A photo of my family",
      clue: "Find the martial art of grappling, practiced where strength and technique begin.",
      nextClue:
        "Find the digital realm of blocks and creativity, where endless adventures begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "MINECRAFT",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the digital realm of blocks and creativity, where endless adventures begin.",
      dialogueHoverText: "Press F to interact [MINECRAFT]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "minecraft",
  },
  {
    title: "MINECRAFT_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Minecraft",
      year: "2011",
      place: "Blocky World",
      description: "A photo of my family",
      clue: "Find the digital realm of blocks and creativity, where endless adventures begin.",
      nextClue:
        "Find the symbol of virtual conquests, celebrating victories where epic quests begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "GW2",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the symbol of virtual conquests, celebrating victories where epic quests begin.",
      dialogueHoverText: "Press F to interact [GW2]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "gw2",
  },
  {
    title: "GW2_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "GuildWars2 Trophy",
      year: "2013",
      place: "Tyria",
      description: "A photo of my family",
      clue: "Find the symbol of virtual conquests, celebrating victories where epic quests begin.",
      nextClue:
        "Find the recognition of coding excellence, honoring achievements where innovation begins.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "DEVELOPER",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the recognition of coding excellence, honoring achievements where innovation begins.",
      dialogueHoverText: "Press F to interact [DEVELOPER]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "developer",
  },
  {
    title: "DEVELOPER_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Code Development Award",
      year: "2015",
      place: "Silicon Valley",
      description: "A photo of my family",
      clue: "Find the recognition of coding excellence, honoring achievements where innovation begins.",
      nextClue:
        "Find the collection of paranormal cases, uncovering mysteries where the truth begins.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "XFILES",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the collection of paranormal cases, uncovering mysteries where the truth begins.",
      dialogueHoverText: "Press F to interact [XFILES]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "xfiles",
  },
  {
    title: "XFILES_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "X-Files",
      year: "1993",
      place: "FBI Headquarters",
      description: "A photo of my family",
      clue: "Find the collection of paranormal cases, uncovering mysteries where the truth begins.",
      nextClue:
        "Find the melodies and harmonies, resonating where emotions and rhythm begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "MUSIC",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the melodies and harmonies, resonating where emotions and rhythm begin.",
      dialogueHoverText: "Press F to interact [MUSIC]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "music",
  },
  {
    title: "MUSIC_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Music",
      year: "2001",
      place: "Concert Hall",
      description: "A photo of my family",
      clue: "Find the melodies and harmonies, resonating where emotions and rhythm begin.",
      nextClue:
        "Find the expressions on canvas, depicting beauty and thought where creativity begins.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "ART",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the expressions on canvas, depicting beauty and thought where creativity begins.",
      dialogueHoverText: "Press F to interact [ART]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "art",
  },
  {
    title: "ART_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Art",
      year: "1999",
      place: "Art Gallery",
      description: "A photo of my family",
      clue: "Find the expressions on canvas, depicting beauty and thought where creativity begins.",
      nextClue:
        "Find the place of higher learning, reflecting the journey where knowledge and paths begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "COLLEGE",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the place of higher learning, reflecting the journey where knowledge and paths begin.",
      dialogueHoverText: "Press F to interact [COLLEGE]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "college",
  },
  {
    title: "COLLEGE_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "College",
      year: "2007",
      place: "University Campus",
      description: "A photo of my family",
      clue: "Find the place of higher learning, reflecting the journey where knowledge and paths begin.",
      nextClue:
        "Find the foundation of design and innovation, rooted in basics where understanding begins.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  {
    title: "FIRST_PRINCIPLES",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the foundation of design and innovation, rooted in basics where understanding begins.",
      dialogueHoverText: "Press F to interact [FIRST_PRINCIPLES]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "first_principles",
  },
  {
    title: "FIRST_PRINCIPLES_INVENTORY",
    hudProps: {
      type: "InventoryHUD",
      title: "Engineering First Principles",
      year: "2010",
      place: "Engineering Lab",
      description: "A photo of my family",
      clue: "Find the foundation of design and innovation, rooted in basics where understanding begins.",
      nextClue:
        "Find the tales of the cunning raccoon in this PS2 game, where stealthy adventures begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },

  // --- END GAME ---

  {
    title: "DECRYPT",
    hudProps: {
      type: "PlayerHUD",
      dialogueText: "Objective: Decrypt the messages using the PC.",
      dialogueHoverText: "Press F to interact [DECRYPT]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "pc",
  },
  {
    title: "DECRYPTSCREEN",
    hudProps: {
      type: "PlayerHUD",
    },
    cameraProps: {
      type: "DESK",
    },
    model: "pc",
    html: "macos",
  },
  {
    title: "KEYPAD",
    hudProps: {
      type: "PlayerHUD",
      dialogueText: "Objective: Enter the code on the keypad.",
      dialogueHoverText: "Press F to interact [KEYPAD]",
    },
    cameraProps: {
      type: "PLAYER",
    },
    isPlayer: true,
    model: "keypad",
  },

  {
    title: "KEYPADSCREEN",
    hudProps: {
      type: "KeyPadHUD",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },
  {
    title: "ENDSCREEN",
    hudProps: {
      type: "EndScreenHUD",
    },
    cameraProps: {
      type: "STARTSCREEN",
    },
    html: "screensaver",
  },
];
