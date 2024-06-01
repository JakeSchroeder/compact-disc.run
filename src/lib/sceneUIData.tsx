export type TScene = {
  title: string;
  hudProps: any;
  cameraProps?: any;
  isPlayer?: boolean;
  isPointerLocked?: boolean;
  html?: string;
  model?: string;
  diaryImage?: string;
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
    html: "macos_intro",
  },

  {
    title: "DIARY",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Look for the leather-bound book of secrets.\n It rests by the plastic apple.",
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
      image: "/images/diary.jpg",
      dialogueBtnText: "EXIT Diary",
      type: "InventoryHUD",
      title: "Jake's Diary",
      year: "0000",
      place: "Some bug out shelter",
      description:
        "Gonna be where I keep my secrets kinda like a diary but also not really. Other stuff might be hidden in here too. But I dont want to write that part down... well ok actually ill just say something else my own self will forget. 'British accent YUUUUUUUURS'",
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
    model: "photo",
  },
  {
    title: "PHOTO_INVENTORY",
    hudProps: {
      image: "/images/photo.jpg",
      type: "InventoryHUD",
      title: "Family Photo",
      year: "2001",
      place: "Benihana's",
      description:
        "A photo of me and my family when I was very very young and things were less complicated. Such good memories from that time. Its incredible to the extent that childhood impacts adulthood. Lol.",
      clue: "Find the framed keepsake of love and kin, often where dreams begin. ",
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
    model: "sly_cooper",
  },
  {
    title: "SLY_COOPER_INVENTORY",
    hudProps: {
      image: "/images/sly_cooper.jpg",
      type: "InventoryHUD",
      title: "Sly Cooper",
      year: "2002",
      place: "PS2 Console",
      description:
        "Honestly, one of the best games ever made. I would sit with my brother and watch him play for hours and hours. The animations and overall design was a work of art. Very nostalgic for me.",
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
      image: "/images/skateboard.jpg",
      type: "InventoryHUD",
      title: "Skateboard",
      year: "2004",
      place: "Krush Skatepark",
      description:
        "I used to skate a lot with my brother, he is now a semi-pro skater. I was never that good but I loved it. My favorite skater to this day is Bob Burnquist. I dont care what anyone says.",
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
    model: "military",
  },
  {
    title: "MILITARY_INVENTORY",
    hudProps: {
      image: "/images/military.jpg",
      type: "InventoryHUD",
      title: "Military Equipment",
      year: "2008",
      place: "In the Forests of Illinois",
      description:
        "Guns, Grappling Hooks, and Bombs. That became my childhood for a while. I always had an intense passion and interest for military things. Dont know where I got it. But in like 2nd 3rd grade I was watching military history channel.",
      clue: "Find the steel tools of precision, often kept where defense begins.",
      nextClue:
        "Find the martial art of grappling, practiced where strength and technique begin.",
    },
    cameraProps: {
      type: "PLAYER",
    },
  },
  {
    title: "JIU_JITSU",
    hudProps: {
      type: "PlayerHUD",
      dialogueText:
        "Objective: Find the martial art of grappling, practiced where strength and technique begin.",
      dialogueHoverText: "Press F to interact [JIU_JITSU]",
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
      image: "/images/jiujitsu.jpg",
      type: "InventoryHUD",
      title: "Jiu Jitsu",
      year: "2009",
      place: "Gracie Academy",
      description:
        "I did BJJ for a while. It was intense, especially competing. It really builds character, properly fighting other people in a controlled manner. Teaches you a lot about humanity.",
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
      image: "/images/trophies.jpg",
      type: "InventoryHUD",
      title: "Minecraft",
      year: "2010",
      place: "Blocky World",
      description:
        "Minecraft was my second massive inspirational video game. I mean my goodness the freedom and abstraction of live. A true true masterpiece. ",
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
      image: "/images/trophies.jpg",
      type: "InventoryHUD",
      title: "GuildWars2 Trophy",
      year: "2013",
      place: "Tyria",
      description:
        "The 3rd game that really inspired me. I only played PVP for Glory.",
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
      image: "/images/trophies.jpg",
      type: "InventoryHUD",
      title: "Code Development Award",
      year: "2014",
      place: "High Scool",
      description:
        "I build an app in Highschool and got a few awards for it. I also got a scholarship for it. It was a big deal for me. (I swear chatGPT didnt write that.)",
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
      image: "/images/xfiles.jpg",
      type: "InventoryHUD",
      title: "X-Files",
      year: "2015",
      place: "FBI Headquarters",
      description:
        "XFiles as my first mega love for a TV show. I watched it all the time in highschool and has stuck with me until now. It has a lot of my personality roped up in it. Hi Scully!",
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
      image: "/images/music.jpg",
      type: "InventoryHUD",
      title: "Music",
      year: "2016",
      place: "Concert Hall",
      description:
        "I became a music addict in 5th grade once my brother showed me limewire and soon after frostwire for sharing music. Ill never forget the first time I heard dubstep... my world changed.",
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
      image: "/images/art.jpg",
      type: "InventoryHUD",
      title: "Art",
      year: "2017",
      place: "Art Gallery",
      description:
        "I suppose I was already an artist before I knew it. I was always drawing and thinking about things to create. I was always creative. I get it from my Grandmother",
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
      image: "/images/college.jpg",
      type: "InventoryHUD",
      title: "College",
      year: "2018",
      place: "University Campus",
      description:
        "I went to college for Design and Engineering. Well sort of. Basically I had a hard time because the cirriculum was not very helpful and for the fact that I was a poor student. I also really lost my way with the social life and learned important lessons about myself.",
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
      image: "/images/first_principles.jpg",
      type: "InventoryHUD",
      title: "Engineering First Principles",
      year: "2022",
      place: "Engineering Lab",
      description:
        "I was extremly lucky to have had a roomate who was a mechanical engineer teach me about abstracting down the complexity chain and getting to the  first principles. I feel in many ways it kickstarted my deeper investigation of the universe.",
      clue: "Find the foundation of design and innovation, rooted in basics where understanding begins.",
      nextClue:
        "Now that you have collected all the artifacts, decrypt the message from the PC.",
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
      dialogueText:
        "Objective: Now that you have collected all the artifacts, decrypt the message from the PC.",
      dialogueHoverText: "Press F to interact [PC]",
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
      dialogueText: "Objective: Read the readme.txt on the Apple iMac",
      dialogueBtnText: "EXIT to Room",
    },
    cameraProps: {
      type: "DESK",
    },
    model: "pc",
    html: "macos_decrypt",
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
      type: "KeypadHUD",
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
  },
];
