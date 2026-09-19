window.AQUARIS_CATALOG = [
  {
    id: 'r01',
    name: 'AQUARIS R01',
    series: 'R01',
    category: 'Analog / Digital',
    tagline: 'Classic instruments. Digital precision.',
    description: 'A textured dial, red hour track, orange and white hands, and a recessed green LCD. R01 brings an analog-digital watch layout to an AMOLED display, with the readings you use every day.',
    device: 'fenix 8 AMOLED 47 mm',
    compatibleWatches: [
      { name: 'fenix 8 AMOLED 47 mm', status: 'Declared build target / 454 x 454' }
    ],
    compatibilityNote: 'The downloadable PRG is for fenix 8 AMOLED 47 mm only. The assessment below covers 15 selected device profiles across recent generations, not every model or case size. A simulator pass is a candidate result, not a supported download or confirmation that every function works on a physical watch.',
    compatibilityAssessment: {
      date: '2026-09-19',
      method: 'SDK 9.2.0: device-specific release compilation, 14 existing automated tests, and one runtime check for the required fonts. Nine profiles passed all 15 tests; six were blocked. Layout assertions currently cover 416 and 454 pixels, so passing on other sizes does not validate their full layout. Sensor availability, settings interaction, low-power behavior and battery use need device-specific validation. No additional model-specific downloads are offered.',
      results: [
        ['fenix 9 47 mm', '454 x 454', 'Simulator pass', '15/15 tests; candidate only.'],
        ['fenix 8 AMOLED 47 mm', '454 x 454', 'Supported download', '15/15 tests; original build tried on owner\'s watch. Latest typography is simulator-tested.'],
        ['fenix 7 Pro', '260 x 260', 'Simulator pass', '15/15 tests; MIP layout and low-power behavior still need validation.'],
        ['epix (Gen 2)', '416 x 416', 'Simulator pass', '15/15 tests; candidate only.'],
        ['Forerunner 970', '454 x 454', 'Simulator pass', '15/15 tests; candidate only.'],
        ['Forerunner 965', '454 x 454', 'Simulator pass', '15/15 tests; candidate only.'],
        ['Forerunner 955', '260 x 260', 'Simulator pass', '15/15 tests; MIP layout and low-power behavior still need validation.'],
        ['Venu 4 41 mm', '390 x 390', 'Simulator pass', '15/15 tests; smaller-screen layout still needs validation.'],
        ['Venu 3', '454 x 454', 'Blocked', 'Compiled, but required fonts were unavailable at the requested sizes; 14/15 tests passed.'],
        ['Venu 2', '416 x 416', 'Blocked', 'Compiled, but the required vector-font API is absent; runtime tests failed.'],
        ['vivoactive 6', '390 x 390', 'Simulator pass', '15/15 tests; smaller-screen layout still needs validation.'],
        ['vivoactive 5', '390 x 390', 'Blocked', 'Compiled, but the required vector-font API is absent; runtime tests failed.'],
        ['vivoactive 4', '260 x 260', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.'],
        ['Instinct 3 AMOLED 45 mm', '390 x 390', 'Blocked', 'Compiled, but the required vector-font API is absent; runtime tests failed.'],
        ['Instinct 2', '176 x 176', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.']
      ]
    },
    resolution: '454 x 454',
    status: 'Personal project',
    download: {
      url: 'downloads/r01/2026-09-19/fenix847mm/AquarisR01.prg',
      filename: 'AquarisR01.prg',
      device: 'fenix 8 AMOLED 47 mm',
      build: '2026-09-19',
      bytes: 246924,
      sha256: '0780db2a3cd61f28b1bae22f3655c22d74e95f08f10e52a087709143ad1ad4fa'
    },
    images: [
      { src: 'assets/r01-active.png', label: 'Active', alt: 'AQUARIS R01 active face with analog hands, green digital clock, battery gauge and dot-matrix temperature', caption: 'Active face / Native simulator capture. Missing heart-rate data is shown as --.' },
      { src: 'assets/r01-aod.png', label: 'Always-on', alt: 'R01 low-power display with two thin digital clocks on a black background', caption: 'Always-on / Native simulator capture with a second time zone enabled. Matching times show one centered clock.' }
    ],
    highlights: ['Track two time zones', 'Change the right display', 'Battery and heart rate', 'Digital always-on'],
    keyFunctions: [
      ['Track two time zones', 'Keep local time on the analog hands and a second time zone on the digital clock. Always-on mode can show both digital clocks together. Choose a fixed UTC offset from -12:00 to +14:00 in 15-minute steps; adjust it manually for daylight saving time.'],
      ['Change the right display', 'Choose Temperature (C), daily Steps, active Notifications, or Altitude (m) in the watch-face settings. One measurement is shown at a time. Your choice is saved, and you can change it whenever you need.']
    ],
    features: [
      ['Local time + a second time zone', 'Track two time zones at once: analog hands stay on local time while the 24-hour digital clock shows your selected second zone. Enable Second time zone and set its UTC offset on the watch. Disable it to return the digital clock to local time. The date and weekday follow the digital time zone. Awake seconds can be shown or hidden.'],
      ['Battery at a glance', 'A radial ring indicates remaining battery percentage. The central estimate shows whole days, or whole hours below one day, when the watch supplies an estimate. The lightning symbol identifies battery power, not charging status.'],
      ['Heart-rate subdial', 'A large number and red heart use recent heart-rate history. Readings are checked every five seconds while awake; data older than two minutes or unavailable off-wrist is shown as --.'],
      ['Four right-display measurements', 'Open Right display in the watch-face settings to switch between Temperature (C), Steps, Notifications, and Altitude (m). Temperature comes from phone-synced weather, steps are today\'s activity total, notifications are the current active count, and altitude uses recent elevation history. The selected measurement is saved; there is no automatic cycling. Large counts use compact notation.'],
      ['A quieter always-on view', 'Thin digital time on black replaces the full dial in low-power mode. Local time sits above the second zone; matching times collapse to one clock. Minute-by-minute movement and an alternating pixel mask reduce persistent illumination.'],
      ['Settings on the watch', 'Change the second-zone toggle, UTC offset in 15-minute increments, awake seconds, and the right-side metric from the native watch-face settings menu. No weather API key is required.']
    ],
    notes: [
      'UTC offsets are fixed, not named time zones. Adjust them manually when daylight saving time changes.',
      'Weather uses phone-synced observations, not the internal temperature sensor. Observations older than two hours show STALE.',
      'Altitude uses recent elevation history; samples older than 15 minutes are unavailable. Steps require activity tracking. Notifications show the active count, not a daily total.',
      'Environment readings refresh once per awake minute and after wake or settings changes. Heart rate refreshes separately. AOD does not fetch these metrics.',
      'The original build has been tried on the owner\'s watch. The latest typography revision has simulator validation; long-term battery and burn-in behavior have not been established.'
    ]
  }
];