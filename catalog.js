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
  },
  {
    id: 'c01',
    name: 'AQUARIS C01',
    series: 'C01',
    category: 'Analog / GMT',
    tagline: 'Blue waves. Local time and GMT.',
    description: 'A blue wave-pattern dial, cream hour markers and metal-edged hands frame a red GMT arrow. The weekday and date sit on separate recessed wheel surfaces inside a silver rim. Raised AQUARIS lettering and a double-wave emblem complete the dial.',
    device: 'fenix 8 AMOLED 47 mm',
    compatibleWatches: [
      { name: 'fenix 8 AMOLED 47 mm', status: 'Prototype build target / 454 x 454' }
    ],
    compatibilityNote: 'This prototype PRG targets fenix 8 AMOLED 47 mm only. The existing build passed seven native simulator tests. Other models and sizes have not been assessed for C01. Physical-device behavior, battery consumption and AMOLED burn-in protection remain unverified.',
    resolution: '454 x 454',
    timeFormat: 'Local analog + 24-hour GMT hand',
    status: 'Prototype',
    download: {
      url: 'downloads/c01/2026-09-19/fenix847mm/AquarisC01.prg',
      filename: 'AquarisC01.prg',
      device: 'fenix 8 AMOLED 47 mm',
      build: '2026-09-19',
      bytes: 244748,
      sha256: 'a060a5bb4d72d99ac0fc95a2ad9dc8b442b23c6c9be28bed979ea5ebc259d8bd'
    },
    images: [
      { src: 'assets/c01-active.png', label: 'Active', alt: 'AQUARIS C01 blue wave dial with cream analog hands, a red GMT arrow and separate weekday and date wheels', caption: 'Active / Native simulator capture with separate recessed weekday and date surfaces.' },
      { src: 'assets/c01-aod.png', label: 'Always-on', alt: 'C01 always-on display with grey outlined hands and hour markers, a muted red GMT arrow and matching markers at 3 and 9', caption: 'Always-on / Native simulator capture. Shared hand silhouettes, dim hour markers and a distinct red GMT outline.' }
    ],
    highlights: ['Local time and GMT', 'Separate day/date wheels', 'Blue wave dial', 'Outlined always-on'],
    keyFunctions: [
      ['Local time and GMT', 'Local hour, minute and seconds hands keep the watch time. A red arrow tracks a selected fixed UTC offset on a 24-hour rotation, with midnight at the top and noon at the bottom.'],
      ['Separate calendar wheels', 'The English weekday and two-digit date follow the watch\'s local calendar. A stepped divider and different surface shading give the weekday a deeper recess than the date, inside the same silver frame.']
    ],
    features: [
      ['Blue wave dial', 'Layered wave artwork, cream markers and warm metallic hand edges form the active face. A subtle fin motif sits near 8 o\'clock. Raised lettering, a wave emblem and the C01 GMT caption add shallow relief.'],
      ['Four analog hands', 'A tapered hour hand and broad arrow minute hand show local time. The seconds hand has a forked counterweight; the longer red GMT hand has a cream-filled triangular tip.'],
      ['GMT settings on the watch', 'Open Settings > GMT time zone and choose UTC-12:00 through UTC+14:00 in 15-minute increments. The setting is saved. UTC is the default; local hands and the calendar remain on watch time.'],
      ['Outlined always-on view', 'Low-power mode keeps the standard hour and minute silhouettes as dim grey outlines, plus a muted red GMT hand. Circular and shaped markers remain, with a mirrored 9 o\'clock marker replacing the hidden calendar at 3. Positions update at minute resolution.'],
      ['Reduced low-power detail', 'Always-on mode hides the blue dial, branding, calendar, seconds and minute ticks. Hand interiors stay black and omit the active face\'s bevels and shadows. Hardware battery and burn-in validation is still pending.'],
      ['No sensor or network permissions', 'C01 uses the watch clock and local calendar. It does not request heart-rate, weather, location or network access.']
    ],
    notes: [
      'Prototype download for evaluation, not a hardware-validated daily-use release. Install and use at your own risk.',
      'UTC offsets are fixed. Adjust the GMT setting manually for daylight saving time.',
      'Existing validation covers seven native tests, all 217 weekday/date combinations and 96 AOD time/offset cases. These results do not establish physical-device compatibility, long-term battery life or burn-in safety.',
      'The dial is designed for 454 x 454 pixels. No other device-specific downloads or compatibility claims are provided.',
      'The diver-style artwork does not certify water resistance or replace the watch manufacturer\'s usage limits.'
    ]
  }
];