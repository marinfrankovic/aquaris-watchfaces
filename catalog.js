window.AQUARIS_CATALOG = [
  {
    id: 'r01',
    name: 'AQUARIS R01',
    series: 'R01',
    category: 'Analog / Digital',
    tagline: 'Classic instruments. Digital precision.',
    description: 'A textured dial, red hour track, orange and white hands, and a recessed green LCD. R01 brings an analog-digital watch layout to an AMOLED display, with the readings you use every day.',
    device: 'Garmin fenix 8 AMOLED 47 mm',
    compatibleWatches: [
      { name: 'Garmin fenix 8 AMOLED 47 mm', status: 'Declared build target / 454 x 454' }
    ],
    compatibilityNote: 'Only the model above is currently supported by this project. Other case sizes, Solar models, and other Garmin families have not been validated. A shared SDK profile or a successful scaled-layout test is not a compatibility claim.',
    resolution: '454 x 454',
    status: 'Personal project',
    images: [
      { src: 'assets/r01-active.png', label: 'Active', alt: 'AQUARIS R01 active face with analog hands, green digital clock, battery gauge and dot-matrix temperature', caption: 'Active face / Native simulator capture. Missing heart-rate data is shown as --.' },
      { src: 'assets/r01-aod.png', label: 'Always-on', alt: 'R01 low-power display with two thin digital clocks on a black background', caption: 'Always-on / Native simulator capture with a second time zone enabled. Matching times show one centered clock.' }
    ],
    highlights: ['Local analog time', 'Optional second time zone', 'Four selectable metrics', 'Digital always-on'],
    features: [
      ['Two ways to read time', 'Analog hands always show local time. The larger 24-hour digital clock can show local time or a second fixed UTC offset. The date and weekday follow the digital clock. Awake seconds can be hidden.'],
      ['Battery at a glance', 'A radial ring indicates remaining battery percentage. The central estimate shows whole days, or whole hours below one day, when the watch supplies an estimate. The lightning symbol identifies battery power, not charging status.'],
      ['Heart-rate subdial', 'A large number and red heart use recent heart-rate history. Readings are checked every five seconds while awake; data older than two minutes or unavailable off-wrist is shown as --.'],
      ['Your right-side metric', 'Choose Celsius temperature, daily steps, active notification count, or altitude in meters. Your selection stays fixed. Larger square dots preserve the LCD texture, with compact notation for long counts.'],
      ['A quieter always-on view', 'Thin digital time on black replaces the full dial in low-power mode. Local time sits above the second zone; matching times collapse to one clock. Minute-by-minute movement and an alternating pixel mask reduce persistent illumination.'],
      ['Settings on the watch', 'Change the second-zone toggle, UTC offset in 15-minute increments, awake seconds, and the right-side metric from the native watch-face settings menu. No weather API key is required.']
    ],
    notes: [
      'UTC offsets are fixed, not named time zones. Adjust them manually when daylight saving time changes.',
      'Weather uses Garmin phone-synced weather, not the internal temperature sensor. Observations older than two hours show STALE.',
      'Altitude uses recent elevation history; samples older than 15 minutes are unavailable. Steps require activity tracking. Notifications show the active count, not a daily total.',
      'Environment readings refresh once per awake minute and after wake or settings changes. Heart rate refreshes separately. AOD does not fetch these metrics.',
      'The original build has been tried on the owner\'s watch. The latest typography revision has simulator validation; long-term battery and burn-in behavior have not been established.'
    ]
  }
];