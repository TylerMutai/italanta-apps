export const storyBlocks = [
  {
    position: {
      x: 40,
      y: 40,
    },
    httpMethod: 1,
    type: 25,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 679000000,
    },
    defaultTarget: '',
    variablesToPost: ['userId'],
    httpUrl:
      'https://europe-west1-farmbetter-prod.cloudfunctions.net/createInnovation',
    id: '4e8ca33c',
    createdOn: {
      seconds: 1708503566,
      nanoseconds: 931000000,
    },
    variablesToSave: [],
  },
  {
    type: 27,
    position: {
      x: 390,
      y: 40,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 695000000,
    },
    id: 'c6921ffd',
    variable: {
      validators: {
        regex: '',
        max: '',
        min: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
      type: 1,
      validate: false,
      name: 'innovation_title',
    },
    defaultTarget: '',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 189000000,
    },
    message: "What's the name of your innovation?",
  },
  {
    type: 16,
    options: [
      {
        id: '3d08e75f-1',
        message: 'Crops and seeds',
        value: '',
      },
      {
        id: '3d08e75f-2',
        message: 'Animals and fertilizers',
        value: '',
      },
      {
        message: 'Agroforestry',
        id: '3d08e75f-3',
        value: '',
      },
      {
        id: '3d08e75f-4',
        value: '',
        message: 'Technology',
      },
      {
        message: 'Ecosystems',
        value: '',
        id: '3d08e75f-5',
      },
    ],
    id: '3d08e75f',
    position: {
      x: 740,
      y: 40,
    },
    variable: {
      name: 'innovation_theme',
      type: 1,
    },
    message: 'What is the theme of the practice?',
    createdOn: {
      seconds: 1715690517,
      nanoseconds: 212000000,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 698000000,
    },
  },
  {
    options: [
      {
        value: '',
        id: '857e2107-1',
        message: '✍️ Write a message',
      },
      {
        value: '',
        message: '📷 Take a photo',
        id: '857e2107-2',
      },
      {
        message: ' 🔉 Voice note',
        id: '857e2107-3',
        value: '',
      },
      {
        message: '📹 Share a video',
        value: '',
        id: '857e2107-4',
      },
    ],
    type: 16,
    variable: {
      name: '',
      type: 1,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 687000000,
    },
    message:
      'Please select one option to describe your innovation/good practice in three sentences. What is the weather like where this practice was used? Please share a photo.',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 189000000,
    },
    id: '857e2107',
    position: {
      x: 1090,
      y: 40,
    },
  },
  {
    type: 50,
    id: '0abfb842',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 672000000,
    },
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 189000000,
    },
    position: {
      x: 1440,
      y: 40,
    },
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'gp_more_image',
    },
    defaultTarget: '',
  },
  {
    position: {
      x: 1440,
      y: 440,
    },
    variable: {
      name: 'gp_more_audio',
      type: 1,
    },
    type: 21,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 678000000,
    },
    id: '2d97093d',
    message: 'Please add a voice note 🔉',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    defaultTarget: '',
  },
  {
    id: 'a8aab7be',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    position: {
      x: 1440,
      y: 840,
    },
    defaultTarget: '',
    variable: {
      type: 1,
      name: 'gp_more_video',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    type: 23,
    message: 'Please add a video 🎥 ',
  },
  {
    createdOn: {
      seconds: 1715691752,
      nanoseconds: 669000000,
    },
    position: {
      x: 1440,
      y: 1240,
    },
    variable: {
      validators: {
        min: '',
        max: '',
        regex: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
      type: 1,
      validate: false,
      name: 'gp_more_text',
    },
    id: '08047947',
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
  },
  {
    type: 50,
    id: '0abfb842',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 672000000,
    },
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 189000000,
    },
    position: {
      x: 1790,
      y: 40,
    },
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'gp_more_image',
    },
    defaultTarget: '',
  },
  {
    position: {
      x: 1790,
      y: 440,
    },
    variable: {
      name: 'gp_more_audio',
      type: 1,
    },
    type: 21,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 678000000,
    },
    id: '2d97093d',
    message: 'Please add a voice note 🔉',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    defaultTarget: '',
  },
  {
    id: 'a8aab7be',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    position: {
      x: 1790,
      y: 840,
    },
    defaultTarget: '',
    variable: {
      type: 1,
      name: 'gp_more_video',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    type: 23,
    message: 'Please add a video 🎥 ',
  },
  {
    createdOn: {
      seconds: 1715691752,
      nanoseconds: 669000000,
    },
    position: {
      x: 1790,
      y: 1240,
    },
    variable: {
      validators: {
        min: '',
        max: '',
        regex: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
      type: 1,
      validate: false,
      name: 'gp_more_text',
    },
    id: '08047947',
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
  },
  {
    type: 50,
    id: '0abfb842',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 672000000,
    },
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 189000000,
    },
    position: {
      x: 2140,
      y: 40,
    },
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'gp_more_image',
    },
    defaultTarget: '',
  },
  {
    position: {
      x: 2140,
      y: 440,
    },
    variable: {
      name: 'gp_more_audio',
      type: 1,
    },
    type: 21,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 678000000,
    },
    id: '2d97093d',
    message: 'Please add a voice note 🔉',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    defaultTarget: '',
  },
  {
    id: 'a8aab7be',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    position: {
      x: 2140,
      y: 840,
    },
    defaultTarget: '',
    variable: {
      type: 1,
      name: 'gp_more_video',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    type: 23,
    message: 'Please add a video 🎥 ',
  },
  {
    createdOn: {
      seconds: 1715691752,
      nanoseconds: 669000000,
    },
    position: {
      x: 2140,
      y: 1240,
    },
    variable: {
      validators: {
        min: '',
        max: '',
        regex: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
      type: 1,
      validate: false,
      name: 'gp_more_text',
    },
    id: '08047947',
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
  },
  {
    type: 50,
    id: '0abfb842',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 672000000,
    },
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 189000000,
    },
    position: {
      x: 2490,
      y: 40,
    },
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'gp_more_image',
    },
    defaultTarget: '',
  },
  {
    position: {
      x: 2490,
      y: 440,
    },
    variable: {
      name: 'gp_more_audio',
      type: 1,
    },
    type: 21,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 678000000,
    },
    id: '2d97093d',
    message: 'Please add a voice note 🔉',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    defaultTarget: '',
  },
  {
    id: 'a8aab7be',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    position: {
      x: 2490,
      y: 840,
    },
    defaultTarget: '',
    variable: {
      type: 1,
      name: 'gp_more_video',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    type: 23,
    message: 'Please add a video 🎥 ',
  },
  {
    createdOn: {
      seconds: 1715691752,
      nanoseconds: 669000000,
    },
    position: {
      x: 2490,
      y: 1240,
    },
    variable: {
      validators: {
        min: '',
        max: '',
        regex: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
      type: 1,
      validate: false,
      name: 'gp_more_text',
    },
    id: '08047947',
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 684000000,
    },
    position: {
      x: 2840,
      y: 40,
    },
    type: 6,
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
    options: [
      {
        value: '',
        id: '79f3a571-1',
        message: 'Yes',
      },
      {
        message: 'No',
        id: '79f3a571-2',
        value: '',
      },
    ],
    variable: {
      name: 'innovation_description_more',
      type: 1,
    },
    message: 'Do you want to provide more information?',
    id: '79f3a571',
  },
  {
    httpUrl:
      'https://europe-west1-farmbetter-prod.cloudfunctions.net/createInnovationSummary',
    type: 25,
    id: '96b78060',
    createdOn: {
      seconds: 1708503866,
      nanoseconds: 670000000,
    },
    position: {
      x: 3190,
      y: 40,
    },
    variablesToPost: [
      'gp_more_text',
      'gp_more_image',
      'gp_more_audio',
      'gp_more_video',
      'innovation_title',
      'userId',
    ],
    defaultTarget: '',
    variablesToSave: [],
    httpMethod: 1,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 690000000,
    },
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 687000000,
    },
    message: 'Where is this innovation practiced? What is your location?',
    type: 1,
    position: {
      x: 3540,
      y: 40,
    },
    id: '8400020f',
    defaultTarget: '',
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
  },
  {
    variable: {
      validators: {
        min: '',
        max: '',
        validationMessage:
          "I'm afraid I didn't get that, could you send your pin again, please?",
        regex: '',
      },
      validate: false,
      name: 'innovation_location',
      type: 1,
    },
    type: 22,
    defaultTarget: '',
    message: '',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 686000000,
    },
    id: '82ad84ce',
    position: {
      x: 3890,
      y: 40,
    },
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 190000000,
    },
  },
  {
    variable: {
      validate: false,
      validators: {
        regex: '',
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
        min: '',
      },
      name: 'innovation_implementation_materials',
      type: 1,
    },
    defaultTarget: '',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 674000000,
    },
    message:
      'What materials and ingredients are required and how much does it cost to implement?',
    id: '1e39d1b2',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 733000000,
    },
    position: {
      x: 4240,
      y: 40,
    },
    type: 27,
  },
  {
    httpMethod: 1,
    variablesToSave: [],
    httpUrl:
      'https://europe-west1-farmbetter-prod.cloudfunctions.net/createInnovationTools',
    defaultTarget: '',
    variablesToPost: [
      'userId',
      'innovation_implementation_materials',
      'innovation_location',
      'innovation_theme',
    ],
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 681000000,
    },
    createdOn: {
      seconds: 1708943919,
      nanoseconds: 226000000,
    },
    id: '56d85615',
    type: 25,
    position: {
      x: 4590,
      y: 40,
    },
  },
  {
    type: 16,
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 733000000,
    },
    position: {
      x: 4940,
      y: 40,
    },
    variable: {
      type: 1,
      name: '',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 680000000,
    },
    options: [
      {
        value: '',
        message: '✍️ Write a message',
        id: '50aa8fbb-1',
      },
      {
        message: '📷 Take a photo',
        id: '50aa8fbb-2',
        value: '',
      },
      {
        message: '🔉 Voice note',
        value: '',
        id: '50aa8fbb-3',
      },
      {
        id: '50aa8fbb-4',
        message: '🎥  Add a video',
        value: '',
      },
    ],
    id: '50aa8fbb',
    message:
      'Thanks for these details 😊. Now, please describe how to implement your innovation step by step. Select from the options below.',
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      validators: {
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
        min: '',
        regex: '',
      },
      name: 'implementation_text',
      validate: false,
    },
    defaultTarget: '',
    message: 'Write a message',
    id: '764ae367',
    type: 27,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 684000000,
    },
    position: {
      x: 5290,
      y: 40,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    id: 'ac717e5d',
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'implementation_image',
    },
    defaultTarget: '',
    position: {
      x: 5290,
      y: 440,
    },
    type: 50,
  },
  {
    message: 'Please add a voice note 🔉',
    position: {
      x: 5290,
      y: 840,
    },
    id: '7d92080a',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      name: 'implementation_audio',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 686000000,
    },
    defaultTarget: '',
    type: 21,
  },
  {
    id: '37fc9ab3',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    type: 23,
    variable: {
      name: 'implementation_video',
      type: 1,
    },
    message: 'Please add a video 🎥 ',
    position: {
      x: 5290,
      y: 1240,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 679000000,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      validators: {
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
        min: '',
        regex: '',
      },
      name: 'implementation_text',
      validate: false,
    },
    defaultTarget: '',
    message: 'Write a message',
    id: '764ae367',
    type: 27,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 684000000,
    },
    position: {
      x: 5640,
      y: 40,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    id: 'ac717e5d',
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'implementation_image',
    },
    defaultTarget: '',
    position: {
      x: 5640,
      y: 440,
    },
    type: 50,
  },
  {
    message: 'Please add a voice note 🔉',
    position: {
      x: 5640,
      y: 840,
    },
    id: '7d92080a',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      name: 'implementation_audio',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 686000000,
    },
    defaultTarget: '',
    type: 21,
  },
  {
    id: '37fc9ab3',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    type: 23,
    variable: {
      name: 'implementation_video',
      type: 1,
    },
    message: 'Please add a video 🎥 ',
    position: {
      x: 5640,
      y: 1240,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 679000000,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      validators: {
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
        min: '',
        regex: '',
      },
      name: 'implementation_text',
      validate: false,
    },
    defaultTarget: '',
    message: 'Write a message',
    id: '764ae367',
    type: 27,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 684000000,
    },
    position: {
      x: 5990,
      y: 40,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    id: 'ac717e5d',
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'implementation_image',
    },
    defaultTarget: '',
    position: {
      x: 5990,
      y: 440,
    },
    type: 50,
  },
  {
    message: 'Please add a voice note 🔉',
    position: {
      x: 5990,
      y: 840,
    },
    id: '7d92080a',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      name: 'implementation_audio',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 686000000,
    },
    defaultTarget: '',
    type: 21,
  },
  {
    id: '37fc9ab3',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    type: 23,
    variable: {
      name: 'implementation_video',
      type: 1,
    },
    message: 'Please add a video 🎥 ',
    position: {
      x: 5990,
      y: 1240,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 679000000,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      validators: {
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
        min: '',
        regex: '',
      },
      name: 'implementation_text',
      validate: false,
    },
    defaultTarget: '',
    message: 'Write a message',
    id: '764ae367',
    type: 27,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 684000000,
    },
    position: {
      x: 6340,
      y: 40,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 692000000,
    },
    id: 'ac717e5d',
    message: 'Please add the image',
    variable: {
      type: 1,
      name: 'implementation_image',
    },
    defaultTarget: '',
    position: {
      x: 6340,
      y: 440,
    },
    type: 50,
  },
  {
    message: 'Please add a voice note 🔉',
    position: {
      x: 6340,
      y: 840,
    },
    id: '7d92080a',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      name: 'implementation_audio',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 686000000,
    },
    defaultTarget: '',
    type: 21,
  },
  {
    id: '37fc9ab3',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    type: 23,
    variable: {
      name: 'implementation_video',
      type: 1,
    },
    message: 'Please add a video 🎥 ',
    position: {
      x: 6340,
      y: 1240,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 679000000,
    },
  },
  {
    type: 6,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 682000000,
    },
    position: {
      x: 6690,
      y: 40,
    },
    options: [
      {
        id: '6916de86-1',
        value: '',
        message: 'Yes',
      },
      {
        message: 'No',
        id: '6916de86-2',
        value: '',
      },
    ],
    message: 'Do you want to provide more information?',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    variable: {
      type: 1,
      name: '',
    },
    id: '6916de86',
  },
  {
    defaultTarget: '',
    id: '607bdcd6',
    position: {
      x: 7040,
      y: 40,
    },
    variablesToPost: [
      'implementation_text',
      'implementation_image',
      'implementation_audio',
      'implementation_video',
      'userId',
    ],
    httpMethod: 1,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 681000000,
    },
    createdOn: {
      seconds: 1708668334,
      nanoseconds: 513000000,
    },
    type: 25,
    httpUrl:
      'https://europe-west1-farmbetter-prod.cloudfunctions.net/createInnovationSection',
    variablesToSave: [],
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    options: [
      {
        value: '',
        id: 'a31b1bd7-1',
        message: '✍️ Write a message',
      },
      {
        id: 'a31b1bd7-2',
        value: '',
        message: '📷 Take a photo',
      },
      {
        message: '🔉 Voice note',
        value: '',
        id: 'a31b1bd7-3',
      },
      {
        id: 'a31b1bd7-4',
        message: '🎥 Add a video',
        value: '',
      },
    ],
    variable: {
      type: 1,
      name: '',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 691000000,
    },
    position: {
      x: 7390,
      y: 40,
    },
    message:
      'How is this practice made sustainable over time? Also indicate what risks exist.',
    id: 'a31b1bd7',
    type: 16,
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
    id: 'f35e09f5',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 697000000,
    },
    position: {
      x: 7740,
      y: 40,
    },
    variable: {
      validate: false,
      name: 'maintenance_text',
      type: 1,
      validators: {
        regex: '',
        min: '',
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '0a932a74',
    position: {
      x: 7740,
      y: 440,
    },
    variable: {
      type: 1,
      name: 'maintenance_video',
    },
    message: 'Please add a video 🎥 ',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 671000000,
    },
    type: 23,
    defaultTarget: '',
  },
  {
    position: {
      x: 7740,
      y: 840,
    },
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 689000000,
    },
    variable: {
      type: 1,
      name: 'maintenance_image',
    },
    id: '8c761f6a',
    message: 'Please add the image',
    type: 50,
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 690000000,
    },
    defaultTarget: '',
    message: 'Please add a voice note 🔉',
    position: {
      x: 7740,
      y: 1240,
    },
    type: 21,
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '90a22de4',
    variable: {
      name: 'maintenance_audio',
      type: 1,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
    id: 'f35e09f5',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 697000000,
    },
    position: {
      x: 8090,
      y: 40,
    },
    variable: {
      validate: false,
      name: 'maintenance_text',
      type: 1,
      validators: {
        regex: '',
        min: '',
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '0a932a74',
    position: {
      x: 8090,
      y: 440,
    },
    variable: {
      type: 1,
      name: 'maintenance_video',
    },
    message: 'Please add a video 🎥 ',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 671000000,
    },
    type: 23,
    defaultTarget: '',
  },
  {
    position: {
      x: 8090,
      y: 840,
    },
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 689000000,
    },
    variable: {
      type: 1,
      name: 'maintenance_image',
    },
    id: '8c761f6a',
    message: 'Please add the image',
    type: 50,
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 690000000,
    },
    defaultTarget: '',
    message: 'Please add a voice note 🔉',
    position: {
      x: 8090,
      y: 1240,
    },
    type: 21,
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '90a22de4',
    variable: {
      name: 'maintenance_audio',
      type: 1,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
    id: 'f35e09f5',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 697000000,
    },
    position: {
      x: 8440,
      y: 40,
    },
    variable: {
      validate: false,
      name: 'maintenance_text',
      type: 1,
      validators: {
        regex: '',
        min: '',
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '0a932a74',
    position: {
      x: 8440,
      y: 440,
    },
    variable: {
      type: 1,
      name: 'maintenance_video',
    },
    message: 'Please add a video 🎥 ',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 671000000,
    },
    type: 23,
    defaultTarget: '',
  },
  {
    position: {
      x: 8440,
      y: 840,
    },
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 689000000,
    },
    variable: {
      type: 1,
      name: 'maintenance_image',
    },
    id: '8c761f6a',
    message: 'Please add the image',
    type: 50,
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 690000000,
    },
    defaultTarget: '',
    message: 'Please add a voice note 🔉',
    position: {
      x: 8440,
      y: 1240,
    },
    type: 21,
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '90a22de4',
    variable: {
      name: 'maintenance_audio',
      type: 1,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    type: 27,
    defaultTarget: '',
    message: 'Could you tell us more?',
    id: 'f35e09f5',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 697000000,
    },
    position: {
      x: 8790,
      y: 40,
    },
    variable: {
      validate: false,
      name: 'maintenance_text',
      type: 1,
      validators: {
        regex: '',
        min: '',
        max: '',
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
      },
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '0a932a74',
    position: {
      x: 8790,
      y: 440,
    },
    variable: {
      type: 1,
      name: 'maintenance_video',
    },
    message: 'Please add a video 🎥 ',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 671000000,
    },
    type: 23,
    defaultTarget: '',
  },
  {
    position: {
      x: 8790,
      y: 840,
    },
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    defaultTarget: '',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 689000000,
    },
    variable: {
      type: 1,
      name: 'maintenance_image',
    },
    id: '8c761f6a',
    message: 'Please add the image',
    type: 50,
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 690000000,
    },
    defaultTarget: '',
    message: 'Please add a voice note 🔉',
    position: {
      x: 8790,
      y: 1240,
    },
    type: 21,
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '90a22de4',
    variable: {
      name: 'maintenance_audio',
      type: 1,
    },
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 673000000,
    },
    message: 'Do you want to provide more information?',
    position: {
      x: 9140,
      y: 40,
    },
    variable: {
      name: '',
      type: 1,
    },
    options: [
      {
        value: '',
        id: '0e323f07-1',
        message: 'Yes',
      },
      {
        id: '0e323f07-2',
        value: '',
        message: 'No',
      },
    ],
    type: 6,
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    id: '0e323f07',
  },
  {
    defaultTarget: '',
    id: 'c60d709a',
    httpUrl:
      'https://europe-west1-farmbetter-prod.cloudfunctions.net/createInnovationMaintenance',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 695000000,
    },
    variablesToPost: [
      'maintenance_text',
      'maintenance_image',
      'maintenance_audio',
      'maintenance_video',
      'maintenance_description',
      'userId',
    ],
    variablesToSave: [],
    httpMethod: 1,
    createdOn: {
      seconds: 1708668807,
      nanoseconds: 329000000,
    },
    type: 25,
    position: {
      x: 9490,
      y: 40,
    },
  },
  {
    options: [
      {
        message: 'Heat waves',
        id: 'e8946e66-1',
        value: '',
      },
      {
        message: 'Drought',
        id: 'e8946e66-2',
        value: '',
      },
      {
        id: 'e8946e66-3',
        value: '',
        message: 'Floods',
      },
      {
        value: '',
        message: 'Hailstorms',
        id: 'e8946e66-4',
      },
      {
        value: '',
        message: 'Frosts',
        id: 'e8946e66-5',
      },
      {
        value: '',
        message: 'Extreme rainfall',
        id: 'e8946e66-6',
      },
      {
        id: 'e8946e66-7',
        value: '',
        message: 'Pest management 🌿',
      },
      {
        value: '',
        id: 'e8946e66-8',
        message: 'Animal health 🐮',
      },
      {
        value: '',
        message: 'Soil erosion',
        id: 'e8946e66-9',
      },
      {
        value: '',
        message: 'Landslide',
        id: 'e8946e66-10',
      },
    ],
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 734000000,
    },
    message:
      'How has this good practice helped in your territory to face climate change? Select from the options below.',
    type: 16,
    position: {
      x: 9840,
      y: 40,
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 696000000,
    },
    id: 'e8946e66',
    variable: {
      name: 'innovation_climate_impact',
      type: 1,
    },
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 735000000,
    },
    id: 'bbd61a7a',
    variable: {
      type: 1,
      name: 'innovation_neighbour_practice',
    },
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 694000000,
    },
    type: 6,
    message:
      'Do you know if your neighbors or other people practice this innovation?',
    position: {
      x: 10190,
      y: 40,
    },
    options: [
      {
        value: '',
        id: 'bbd61a7a-1',
        message: 'Yes',
      },
      {
        value: '',
        id: 'bbd61a7a-2',
        message: 'No',
      },
    ],
  },
  {
    id: '27fe28ca',
    position: {
      x: 10540,
      y: 40,
    },
    type: 16,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 675000000,
    },
    options: [
      {
        message: 'Better income',
        id: '27fe28ca-1',
        value: '',
      },
      {
        value: '',
        message: 'Better yields',
        id: '27fe28ca-2',
      },
      {
        message: 'Food sovereignty',
        id: '27fe28ca-3',
        value: '',
      },
      {
        value: '',
        id: '27fe28ca-4',
        message: 'Climate adaptation',
      },
      {
        id: '27fe28ca-5',
        value: '',
        message: 'Better ecosystem',
      },
    ],
    createdOn: {
      seconds: 1709736297,
      nanoseconds: 236000000,
    },
    variable: {
      name: 'innovation_advantage',
      type: 1,
    },
    message: 'What positive results have you seen?\n',
  },
  {
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 735000000,
    },
    message: 'Who is the author of this innovation?',
    position: {
      x: 10890,
      y: 40,
    },
    options: [
      {
        value: '',
        id: '10e8d1fc-1',
        message: 'Me',
      },
      {
        message: 'Another person',
        value: '',
        id: '10e8d1fc-2',
      },
      {
        value: '',
        message: 'A community',
        id: '10e8d1fc-3',
      },
    ],
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 674000000,
    },
    type: 16,
    id: '10e8d1fc',
    variable: {
      name: 'innovation_author',
      type: 1,
    },
  },
  {
    defaultTarget: '',
    position: {
      x: 11240,
      y: 40,
    },
    type: 25,
    httpUrl:
      'https://europe-west1-farmbetter-prod.cloudfunctions.net/completeInnovation',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 685000000,
    },
    httpMethod: 1,
    createdOn: {
      seconds: 1708669521,
      nanoseconds: 901000000,
    },
    variablesToPost: [
      'innovation_intellectual_property',
      'innovation_author',
      'innovation_author_name',
      'innovation_climate_impact',
      'innovation_practice_proof',
      'userId',
      'innovation_advantage',
      'innovation_neighbour_practice',
      'name',
    ],
    id: '7ba47645',
    variablesToSave: [],
  },
  {
    message:
      'Farmbetter aims to support collective and sustainable knowledge and our information is free to access and use. By submitting an innovation, you accept our data policy. The data is made available to users under the following Creative Commons CC BY-NC license: reusers can distribute, remix, adapt, and build upon the material in any medium or format for non-commercial purposes only, and only as long as attribution is given to the creator. Do you agree?',
    position: {
      x: 11240,
      y: 440,
    },
    options: [
      {
        message: 'Yes',
        id: '02878cd5-1',
        value: '',
      },
      {
        message: 'No',
        value: '',
        id: '02878cd5-2',
      },
    ],
    variable: {
      name: 'innovation_intellectual_property',
      type: 1,
    },
    createdOn: {
      seconds: 1715691692,
      nanoseconds: 281000000,
    },
    type: 6,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 670000000,
    },
    id: '02878cd5',
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 676000000,
    },
    defaultTarget: '',
    position: {
      x: 11590,
      y: 840,
    },
    id: '2c511899',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 735000000,
    },
    message: 'What is your name?',
    type: 27,
    variable: {
      name: 'innovation_author_name',
      validators: {
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
        min: '',
        max: '',
        regex: '',
      },
      validate: false,
      type: 1,
    },
  },
  {
    message:
      'Farmbetter aims to support collective and sustainable knowledge, and our information is free to access and use. By submitting an innovation, you agree to our data policy. The data is made available to users under the following Creative Commons license CC BY-NC: reusers may distribute, remix, adapt, and build upon the material in any medium or format for non-commercial purposes only, and only if proper attribution is given to the creator. Do you agree?',
    position: {
      x: 11940,
      y: 440,
    },
    options: [
      {
        message: 'Yes',
        id: '02878cd5-1',
        value: '',
      },
      {
        message: 'No',
        value: '',
        id: '02878cd5-2',
      },
    ],
    variable: {
      name: 'innovation_intellectual_property',
      type: 1,
    },
    createdOn: {
      seconds: 1715691692,
      nanoseconds: 281000000,
    },
    type: 6,
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 670000000,
    },
    id: '02878cd5',
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 676000000,
    },
    defaultTarget: '',
    position: {
      x: 11940,
      y: 840,
    },
    id: '2c511899',
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 735000000,
    },
    message: 'What is your name?',
    type: 27,
    variable: {
      name: 'innovation_author_name',
      validators: {
        validationMessage:
          "I'm afraid I didn't understand, could you try again, please?",
        min: '',
        max: '',
        regex: '',
      },
      validate: false,
      type: 1,
    },
  },
  {
    message:
      'Thank you very much for sharing your innovation/good practice, it has been received.',
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 693000000,
    },
    type: 1,
    position: {
      x: 12290,
      y: 40,
    },
    createdOn: {
      seconds: 1707988845,
      nanoseconds: 735000000,
    },
    id: 'b7694146',
    defaultTarget: '',
  },
  {
    updatedOn: {
      seconds: 1715691752,
      nanoseconds: 697000000,
    },
    type: 9999,
    createdOn: {
      seconds: 1707989057,
      nanoseconds: 187000000,
    },
    position: {
      x: 12640,
      y: 40,
    },
    id: 'story-end-anchor',
    deleted: false,
  },
];
