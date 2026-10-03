window.AQUARIS_CATALOG = [
  {
    id: 'r01',
    name: 'AQUARIS R01',
    series: 'R01',
    category: 'Analog / Digital',
    tagline: 'Classic instruments. Digital precision.',
    designHeading: ['Needles above,', 'green LCD below.'],
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
    videos: [
      { type: 'video', src: 'assets/r01-video.mp4', poster: 'assets/r01-video-poster.jpg', label: 'Video', alt: 'AQUARIS R01 watch-face video', caption: 'AQUARIS R01 / Watch-face video.' }
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
    designHeading: ['Deep blue water,', 'two time zones.'],
    description: 'A blue wave-pattern dial, cream hour markers and metal-edged hands frame a red GMT arrow. A recessed AM/PM square sits opposite the separate weekday and date wheels, with matching silver rims. A translucent-looking battery band follows the lower minute ticks between 7 and 5 o\'clock.',
    device: 'fenix 8 AMOLED 47 mm',
    compatibleWatches: [
      { name: 'fenix 8 AMOLED 47 mm', status: 'Prototype build target / 454 x 454' }
    ],
    compatibilityNote: 'This prototype PRG targets fenix 8 AMOLED 47 mm only. The assessment below covers the same 15 selected device profiles as R01, not every model or case size. C01 draws its dial at fixed 454 x 454 coordinates, so only 454-pixel screens are candidates. A simulator pass is a candidate result, not a supported download or confirmation that every function works on a physical watch. Battery consumption and AMOLED burn-in protection remain unverified.',
    compatibilityAssessment: {
      date: '2026-09-27',
      method: 'SDK 9.2.0: device-specific release compilation and C01\'s 9 native automated tests in the simulator. Thirteen profiles compiled and passed all 9 tests; two were blocked by API level. The dial is drawn at fixed 454 x 454 coordinates with no scaled layout, so profiles with other screen sizes are listed as blocked even where the build compiled and the tests passed. The tests check time, GMT, calendar, battery-band and always-on logic, not the full rendered image, low-power behavior or battery use. No additional model-specific downloads are offered.',
      results: [
        ['fenix 9 47 mm', '454 x 454', 'Simulator pass', '9/9 tests; candidate only.'],
        ['fenix 8 AMOLED 47 mm', '454 x 454', 'Supported download', '9/9 tests; revision 4 appears on the owner\'s watch in the gallery video.'],
        ['fenix 7 Pro', '260 x 260', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 260-pixel MIP screen.'],
        ['epix (Gen 2)', '416 x 416', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 416-pixel screen.'],
        ['Forerunner 970', '454 x 454', 'Simulator pass', '9/9 tests; candidate only.'],
        ['Forerunner 965', '454 x 454', 'Simulator pass', '9/9 tests; candidate only.'],
        ['Forerunner 955', '260 x 260', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 260-pixel MIP screen.'],
        ['Venu 4 41 mm', '390 x 390', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 390-pixel screen.'],
        ['Venu 3', '454 x 454', 'Simulator pass', '9/9 tests; candidate only.'],
        ['Venu 2', '416 x 416', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 416-pixel screen.'],
        ['vivoactive 6', '390 x 390', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 390-pixel screen.'],
        ['vivoactive 5', '390 x 390', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 390-pixel screen.'],
        ['vivoactive 4', '260 x 260', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.'],
        ['Instinct 3 AMOLED 45 mm', '390 x 390', 'Blocked', 'Compiled and 9/9 tests passed, but the fixed 454-pixel layout does not fit this 390-pixel screen.'],
        ['Instinct 2', '176 x 176', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.']
      ]
    },
    resolution: '454 x 454',
    timeFormat: 'Local analog + 12-hour GMT hand with AM/PM',
    status: 'Prototype',
    download: {
      url: 'downloads/c01/2026-09-19-r4/fenix847mm/AquarisC01.prg',
      filename: 'AquarisC01.prg',
      device: 'fenix 8 AMOLED 47 mm',
      build: '2026-09-19 / revision 4',
      bytes: 247308,
      sha256: 'c0c9302ce251417160e9c5eee919c4005c24bd7f70f871e7352e9bff86889e01'
    },
    images: [
      { src: 'assets/c01-active.png?v=2026-09-19-r4', label: 'Active', alt: 'AQUARIS C01 blue wave dial with a red GMT arrow, recessed PM square, red SAT lettering and a half-filled battery band between thicker 7 and 5 o\'clock endpoint ticks', caption: 'Active / Revision 4 native simulator capture at 50% battery. The lower band shows remaining charge with minute ticks visible above it; thicker endpoint ticks mark its range.' },
      { src: 'assets/c01-aod.png?v=2026-09-19-r3', label: 'Always-on', alt: 'C01 always-on display with grey outlined hands and hour markers, a muted red GMT arrow and PM inside a dim square outline', caption: 'Always-on / Native simulator capture. The GMT hand and AM/PM label remain muted red; the square has a dim outline without a lit background.' }
    ],
    videos: [
      { type: 'video', src: 'assets/c01-video.mp4?v=2026-09-19-r4', poster: 'assets/c01-video-poster.jpg?v=2026-09-19-r4', label: 'Video', alt: 'AQUARIS C01 revision 4 on a physical watch with the lower battery band and thicker endpoint ticks', caption: 'AQUARIS C01 / Revision 4 on the watch, including the live battery band.' }
    ],
    highlights: ['GMT with AM/PM window', 'Separate day/date wheels', 'Live battery band', 'Outlined always-on'],
    keyFunctions: [
      ['Local time and GMT', 'Local hour, minute and seconds hands keep the watch time. The red GMT arrow tracks a selected fixed UTC offset on a 12-hour rotation using the normal hour markers. A small AM/PM square between 9 o\'clock and the center distinguishes morning from afternoon and evening in that GMT zone.'],
      ['Separate calendar wheels', 'The English weekday and two-digit date follow the watch\'s local calendar. SAT and SUN appear in red; Monday through Friday and the date number stay black. A stepped divider and different surface shading give the weekday a deeper recess than the date, inside the same silver frame.']
    ],
    features: [
      ['Blue wave dial', 'Layered wave artwork, cream markers and warm metallic hand edges form the active face. A subtle fin motif sits near 8 o\'clock. Raised lettering, a wave emblem and the C01 GMT caption add shallow relief.'],
      ['Four analog hands', 'A tapered hour hand and broad arrow minute hand show local time. The seconds hand has a forked counterweight; the longer red GMT hand has a cream-filled triangular tip.'],
      ['Live battery band', 'Remaining charge fills the lower minute-tick band from 7 toward 5 o\'clock. A soft silver-blue tint leaves the tick marks clear, and slightly thicker ticks at 7 and 5 mark empty and full. The filled section shrinks toward 7 as the battery drains and turns muted amber below 20%. The gauge uses the watch\'s battery percentage, with no extra icon or number, and is hidden in always-on mode.'],
      ['Recessed AM/PM window', 'Muted red Bahnschrift lettering sits on a white surface inside a silver bevel, matching the calendar window across the dial. The indicator follows the selected GMT offset, not local time. Both noon and midnight point to 12; PM identifies noon and AM identifies midnight. Hands pass over the window.'],
      ['GMT settings on the watch', 'Open Settings > GMT time zone and choose UTC-12:00 through UTC+14:00 in 15-minute increments. The setting is saved. UTC is the default; local hands and the calendar remain on watch time.'],
      ['Outlined always-on view', 'Low-power mode keeps the standard hour and minute silhouettes as dim grey outlines, plus a muted red GMT hand and AM/PM label in an unfilled square. Circular and shaped markers remain, with a mirrored 9 o\'clock marker replacing the hidden calendar at 3. Positions update at minute resolution.'],
      ['Reduced low-power detail', 'Always-on mode hides the blue dial, branding, calendar, seconds, minute ticks and battery band. It does not read battery stats. Hand interiors stay black and omit the active face\'s bevels and shadows. Hardware battery and burn-in validation is still pending.'],
      ['No sensor or network permissions', 'C01 uses the watch clock, local calendar and system battery percentage. It does not request heart-rate, weather, location or network access.']
    ],
    notes: [
      'Prototype download for evaluation, not a hardware-validated daily-use release. Install and use at your own risk.',
      'UTC offsets are fixed. Adjust the GMT setting manually for daylight saving time.',
      'Revision 4 adds the live battery band and thicker endpoint ticks. It retains revision 3\'s 12-hour GMT hand and AM/PM window. The gallery video shows this version on a physical watch.',
      'Current validation covers nine native tests, including battery sweep and low-charge color boundaries, live system battery access during active rendering, GMT noon/midnight and offset rollover, all 217 weekday/date combinations, plus 96 AOD time/offset cases with the AM/PM window included in the pixel bound. These results do not establish physical-device compatibility, long-term battery life or burn-in safety.',
      'The dial is designed for 454 x 454 pixels. No other device-specific downloads or compatibility claims are provided.',
      'The diver-style artwork does not certify water resistance or replace the watch manufacturer\'s usage limits.'
    ]
  },
  {
    id: 'c02',
    name: 'AQUARIS C02',
    series: 'C02',
    category: 'Analog / Battery gauge',
    tagline: 'Polished steel. Sunburst silver.',
    designHeading: ['Applied steel', 'on sunburst silver.'],
    description: 'A silver sunburst dial with applied square steel numerals, tapered batons and a chrome-ringed date window. Broad white-steel hands with lume strips sweep over a recessed battery gauge above 6, where a red needle moves from E to F.',
    device: 'fenix 8 AMOLED 47 mm',
    compatibleWatches: [
      { name: 'fenix 8 AMOLED 47 mm', status: 'Prototype build target / 454 x 454' }
    ],
    compatibilityNote: 'This prototype PRG targets fenix 8 AMOLED 47 mm only. The assessment below covers the same 15 selected device profiles as R01, not every model or case size. C02 is built from 454 x 454 pre-rendered artwork, so only 454-pixel screens are candidates. A simulator pass is a candidate result, not a supported download or confirmation that every function works on a physical watch. Drawing performance, battery consumption and AMOLED burn-in protection remain unverified.',
    compatibilityAssessment: {
      date: '2026-09-27',
      method: 'SDK 9.2.0: device-specific release compilation and C02\'s 6 native automated tests in the simulator. Thirteen profiles compiled and passed all 6 tests; two were blocked by API level. The dial, date sheet and hands are pre-rendered for 454 x 454 pixels and are not scaled, so profiles with other screen sizes are listed as blocked even where the build compiled and the tests passed. The tests check hand and gauge angles, rotation, date selection, resource geometry and draw layers, not the full rendered image, low-power behavior or battery use. No additional model-specific downloads are offered.',
      results: [
        ['fenix 9 47 mm', '454 x 454', 'Simulator pass', '6/6 tests; candidate only.'],
        ['fenix 8 AMOLED 47 mm', '454 x 454', 'Supported download', '6/6 tests; appears on the owner\'s watch in the gallery video.'],
        ['fenix 7 Pro', '260 x 260', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 260-pixel MIP screen.'],
        ['epix (Gen 2)', '416 x 416', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 416-pixel screen.'],
        ['Forerunner 970', '454 x 454', 'Simulator pass', '6/6 tests; candidate only.'],
        ['Forerunner 965', '454 x 454', 'Simulator pass', '6/6 tests; candidate only.'],
        ['Forerunner 955', '260 x 260', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 260-pixel MIP screen.'],
        ['Venu 4 41 mm', '390 x 390', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 390-pixel screen.'],
        ['Venu 3', '454 x 454', 'Simulator pass', '6/6 tests; candidate only.'],
        ['Venu 2', '416 x 416', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 416-pixel screen.'],
        ['vivoactive 6', '390 x 390', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 390-pixel screen.'],
        ['vivoactive 5', '390 x 390', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 390-pixel screen.'],
        ['vivoactive 4', '260 x 260', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.'],
        ['Instinct 3 AMOLED 45 mm', '390 x 390', 'Blocked', 'Compiled and 6/6 tests passed, but the 454-pixel artwork does not fit this 390-pixel screen.'],
        ['Instinct 2', '176 x 176', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.']
      ]
    },
    resolution: '454 x 454',
    timeFormat: 'Local analog hours and minutes',
    status: 'Prototype',
    download: {
      url: 'downloads/c02/2026-09-27/fenix847mm/AquarisC02.prg',
      filename: 'AquarisC02.prg',
      device: 'fenix 8 AMOLED 47 mm',
      build: '2026-09-27',
      bytes: 1268604,
      sha256: '46d71dfa4aa5a93c51fffeb361aecb5f5772be93850a9ea66221b3ba89bdfa93'
    },
    images: [
      { src: 'assets/c02-active.png?v=2026-09-27', label: 'Active', alt: 'AQUARIS C02 silver sunburst dial with square steel 12, 9 and 6 numerals, white steel hands, a chrome-ringed date window at 3 and a red battery gauge needle above 6', caption: 'Active / Native simulator capture. The red gauge needle shows the simulator\'s battery level between E and F.' },
      { src: 'assets/c02-aod.png?v=2026-09-27', label: 'Always-on', alt: 'C02 always-on display with outlined numerals, batons and date frame, grey date, dim red minute dots and outlined hands with green lume', caption: 'Always-on / Native simulator capture. Outlines and dim lume on black; no logo, gauge or dial.' }
    ],
    videos: [
      { type: 'video', src: 'assets/c02-video.mp4?v=2026-09-27', poster: 'assets/c02-video-poster.jpg?v=2026-09-27', label: 'Video', alt: 'AQUARIS C02 on a physical watch with the silver sunburst dial, steel hands, date 27 and the red battery gauge needle', caption: 'AQUARIS C02 / On the watch.' }
    ],
    highlights: ['Battery gauge E to F', 'Applied square numerals', 'Chrome date window', 'Outlined always-on'],
    keyFunctions: [
      ['Battery gauge', 'A red needle in the recessed sub-dial above 6 reads the watch\'s battery percentage. It points at E when empty and sweeps through the bottom to F when full, across 21 ticks at 5% steps. The gauge is hidden in always-on mode.'],
      ['Date window', 'The day of the month appears in a square window inside a faceted chrome ring at 3 o\'clock, following the watch\'s local calendar.']
    ],
    features: [
      ['Sunburst silver dial', 'Two broad bright sectors form an X-shaped sunburst from the upper-left light, over layered radial brushing. A raised white chapter ring carries a quarter-minute track, square 05 to 60 minute numerals and red 5-minute marks.'],
      ['Applied steel markers', 'Square polished-steel 12, 9 and 6 numerals have a black line along each stroke and cast shadows. Tapered steel batons with black centre grooves mark the other hours; the 5 and 7 batons beside the gauge are shorter. The 6 sits in a notch cut into the gauge.'],
      ['Steel hands with lume', 'The broad hour hand stops just below the 12. The minute hand has a black base and counterweight whose side prongs flank the start of its white blade, and it reaches the outer ends of the batons. Both hands carry outlined lume strips and cast their own shadows, with the light fixed at the upper left.'],
      ['Recessed battery gauge', 'A snailed white sub-dial with a beveled edge holds a glossy black arc that follows the outer rim and tapers to points at both ends. Raised E and F letters sit beside the end ticks. The red needle has a black counterweight and a large red hub.'],
      ['AQUARIS branding', 'The raised double-wave logo sits under 12, with AQUARIS in black and C02 in red on one line below it.'],
      ['Outlined always-on view', 'Low-power mode shows outlined numerals with dim centre lines, batons, the date frame and grey date digits, dim red 5-minute dots and outlined hands with dim green lume. Positions update at minute resolution, and the view does not read battery stats.'],
      ['No sensor or network permissions', 'C02 uses the watch clock, local calendar and system battery percentage. It has no settings and does not request heart-rate, weather, location or network access.']
    ],
    notes: [
      'Prototype download for evaluation, not a hardware-validated daily-use release. Install and use at your own risk.',
      'C02 has no seconds hand. The sub-dial above 6 shows battery level instead.',
      'Current validation covers six native tests: hand angles, battery-gauge angles and clamping, rotation about each hand pivot, date-cell selection, resource geometry and the active/always-on draw layers. In the simulator, the always-on view lit about 7.7% of the display. The gallery video shows C02 running on a physical fenix 8 AMOLED 47 mm. These results do not establish long-term battery life or burn-in safety.',
      'The dial is designed for 454 x 454 pixels. No other device-specific downloads or compatibility claims are provided.'
    ]
  },
  {
    id: 's01',
    name: 'AQUARIS S01',
    series: 'S01',
    category: 'Digital / Hiking',
    tagline: 'Daylight on the rim. Readings at a glance.',
    designHeading: ['Daylight on the rim,', 'readings at a glance.'],
    description: 'A digital hiking face on a charcoal dial. A thin 24-hour ring shows today\'s daylight in gold, with sunrise and sunset times beside a sun and a moon, and a white dot for now. Large Bahnschrift time sits above altitude, barometric pressure, outdoor temperature with weather, and heart rate. The daylight left curves along the bottom.',
    device: 'fenix 8 AMOLED 47 mm',
    compatibleWatches: [
      { name: 'fenix 8 AMOLED 47 mm', status: 'Prototype build target / 454 x 454' }
    ],
    compatibilityNote: 'This prototype PRG targets fenix 8 AMOLED 47 mm only. The assessment below covers the same 15 selected device profiles as R01, not every model or case size. S01 draws its layout at fixed 454 x 454 coordinates, so only 454-pixel screens are candidates. A simulator pass is a candidate result, not a supported download or confirmation that every function works on a physical watch. Sunrise and sunset need a location from the watch\'s weather data or GPS. Drawing performance, battery consumption and AMOLED burn-in protection remain unverified.',
    compatibilityAssessment: {
      date: '2026-10-03',
      method: 'SDK 9.2.0: device-specific release compilation and S01\'s 8 native automated tests in the simulator. Thirteen profiles compiled and passed all 8 tests; two were blocked by API level. The time, readings, daylight ring and curved text use fixed 454 x 454 coordinates and are not scaled, so profiles with other screen sizes are listed as blocked even where the build compiled and the tests passed. The tests check battery thresholds, missing and stale readings, time and date formats, the daylight window and location handling, pressure history and altitude, and that every active and always-on layout fits the dial, not the full rendered image, sensor availability, low-power behavior or battery use. No additional model-specific downloads are offered.',
      results: [
        ['fenix 9 47 mm', '454 x 454', 'Simulator pass', '8/8 tests; candidate only.'],
        ['fenix 8 AMOLED 47 mm', '454 x 454', 'Supported download', '8/8 tests; appears on the owner\'s watch in the gallery video.'],
        ['fenix 7 Pro', '260 x 260', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 260-pixel MIP screen.'],
        ['epix (Gen 2)', '416 x 416', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 416-pixel screen.'],
        ['Forerunner 970', '454 x 454', 'Simulator pass', '8/8 tests; candidate only.'],
        ['Forerunner 965', '454 x 454', 'Simulator pass', '8/8 tests; candidate only.'],
        ['Forerunner 955', '260 x 260', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 260-pixel MIP screen.'],
        ['Venu 4 41 mm', '390 x 390', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 390-pixel screen.'],
        ['Venu 3', '454 x 454', 'Simulator pass', '8/8 tests; candidate only.'],
        ['Venu 2', '416 x 416', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 416-pixel screen.'],
        ['vivoactive 6', '390 x 390', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 390-pixel screen.'],
        ['vivoactive 5', '390 x 390', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 390-pixel screen.'],
        ['vivoactive 4', '260 x 260', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.'],
        ['Instinct 3 AMOLED 45 mm', '390 x 390', 'Blocked', 'Compiled and 8/8 tests passed, but the 454-pixel layout does not fit this 390-pixel screen.'],
        ['Instinct 2', '176 x 176', 'Blocked', 'Compilation blocked: device API is below the required version 5.0.']
      ]
    },
    resolution: '454 x 454',
    timeFormat: 'Digital, 24-hour (default) or 12-hour',
    status: 'Prototype',
    download: {
      url: 'downloads/s01/2026-10-03/fenix847mm/AquarisS01.prg',
      filename: 'AquarisS01.prg',
      device: 'fenix 8 AMOLED 47 mm',
      build: '2026-10-03',
      bytes: 76572,
      sha256: '4471e335fa302480e041de662c30ac26e68e64f2f3eb13b3568238906dbde00c'
    },
    images: [
      { src: 'assets/s01-active.png?v=2026-10-03', label: 'Active', alt: 'AQUARIS S01 charcoal dial with a gold daylight ring, sunrise 07:42 beside a sun and sunset 19:17 beside a moon, time 16:57, battery 75%, altitude 1372 m, pressure 861 hPa, 17 degrees partly cloudy, heart rate 80 and DAYLIGHT 2h19m curved along the bottom', caption: 'Active / Native simulator capture with simulated readings and location.' },
      { src: 'assets/s01-aod.png?v=2026-10-03', label: 'Always-on', alt: 'S01 always-on display with dim grey time 16:57, date and a battery outline with charge bars at 75%', caption: 'Always-on / Native simulator capture. Dim time, date and battery only.' }
    ],
    videos: [
      { type: 'video', src: 'assets/s01-video.mp4?v=2026-10-03', poster: 'assets/s01-video-poster.jpg?v=2026-10-03', label: 'Video', alt: 'AQUARIS S01 on a physical watch showing the daylight ring with sunrise 07:42 and sunset 19:17, time 16:54 and DAYLIGHT 2h23m', caption: 'AQUARIS S01 / On the watch.' }
    ],
    highlights: ['24-hour daylight ring', 'Sunrise and sunset times', 'Altitude and barometer', 'Weather and heart rate'],
    keyFunctions: [
      ['Daylight ring', 'A thin ring around the dial covers 24 hours, with midnight at the bottom and noon at the top. Today\'s daylight runs from the sun to the moon in gold; the part still ahead is bright. Sunrise and sunset times sit on the ring beside their icons and move with the season and your location.'],
      ['Daylight left', 'Curved text along the bottom shows the daylight left until sunset, such as DAYLIGHT 2h19m. Before sunrise and after sunset it shows the next sunrise time.']
    ],
    features: [
      ['Location for sun times', 'Sunrise and sunset use the location in the watch\'s weather data, then an activity or last known GPS position. The face saves the last valid location and reuses it. Without any location it shows NO LOCATION.'],
      ['Hiking readings', 'Altitude in meters with a mountain icon, local barometric pressure in hPa on a 500 to 1100 gauge, outdoor temperature in Celsius with a weather icon, and heart rate. Missing or old readings show -- instead of a guess.'],
      ['Battery and date', 'A ten-bar battery meter with percentage turns green above 50%, yellow from 15% and red below 15%. The date format is a setting: SAT 03 OCT, SAT 03.10., 03.10.2026, SAT OCT 03 or 2026-10-03.'],
      ['AQUARIS branding', 'The double-wave logo and AQUARIS S01 curve along the top, just inside the daylight ring.'],
      ['Always-on view', 'Low-power mode shows dim time, date and the battery with charge bars. It shifts by up to 2 pixels each minute and blanks alternate pixel rows. In the simulator it lit about 4.2% of the display.'],
      ['Permissions', 'S01 reads the watch\'s sensor history for altitude, pressure and heart rate, and position for sunrise and sunset. It does not use network access.']
    ],
    notes: [
      'Prototype download for evaluation, not a hardware-validated daily-use release. Install and use at your own risk.',
      'Do not use S01 for navigation or weather warnings. Pressure also falls as you climb, so a pressure change alone is not a forecast.',
      'Current validation covers eight native tests, including battery colors, data freshness, date and time formats, sunrise and sunset selection across midnight, location checks and text clipping in every layout. The gallery video shows S01 running on a physical fenix 8 AMOLED 47 mm. These results do not establish long-term battery life or burn-in safety.',
      'The dial is designed for 454 x 454 pixels. No other device-specific downloads or compatibility claims are provided.'
    ]
  }
];