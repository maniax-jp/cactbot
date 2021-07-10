// TODO:
//   Update Knave knockback directions to instead use cardinals
//   Hansel and Gretel Bloody Sweep
//   Hansel and Gretel Stronger Together Tethered
//   Hansel & Gretel Passing Lance
//   Hansel & Gretel Breakthrough
//   2P-operated Flight Unit adds
//   Red Girl
//   Meng-Zi / Xun-Zi
//   Better Her Inflorescence Recreate Structure
//   Her Inflorescence Distortion
//   Her Inflorescence Pillar Impact
Options.Triggers.push({
  zoneId: ZoneId.TheTowerAtParadigmsBreach,
  timelineFile: 'the_tower_at_paradigms_breach.txt',
  triggers: [
    {
      id: 'Paradigm Knave Roar',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5EB5', source: 'Knave Of Hearts', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5EB5', source: 'Herzbube', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5EB5', source: 'Jack', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5EB5', source: 'ジャック', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paradigm Knave Colossal Impact Sides',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5EA4', source: 'Knave Of Hearts', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5EA4', source: 'Herzbube', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5EA4', source: 'Jack', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5EA4', source: 'ジャック', capture: false }),
      durationSeconds: 5,
      response: Responses.goMiddle(),
    },
    {
      id: 'Paradigm Copied Knave Colossal Impact Sides',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5EA4', source: 'Copied Knave', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5EA4', source: 'Kopiert(?:e|er|es|en) Herzbube', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5EA4', source: 'Réplique De Jack', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5EA4', source: '複製サレタジャック', capture: false }),
      // Cast time of 8 seconds, clones start casting 6 seconds into the cast.
      delaySeconds: 2.1,
      durationSeconds: 5,
      response: Responses.goMiddle(),
    },
    {
      id: 'Paradigm Knave Colossal Impact Middle',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5EA7', source: 'Knave Of Hearts', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5EA7', source: 'Herzbube', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5EA7', source: 'Jack', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5EA7', source: 'ジャック', capture: false }),
      durationSeconds: 5,
      alertText: (_data, _matches, output) => output.text(),
      tts: (_data, _matches, output) => output.ttsText(),
      outputStrings: {
        text: {
          en: 'Go E/W Sides',
          de: 'Geh seitlich nach O/W',
          fr: 'Allez côtés E/O',
          ja: '東/西側へ',
          cn: '去东/西侧',
          ko: '동/서쪽으로',
        },
        ttsText: {
          en: 'Go East/West Sides',
          de: 'Geh seitlich nach Osten/Westen',
          fr: 'Allez côtés Est/Ouest',
          ja: '東側や西側へ',
          cn: '去东西侧',
          ko: '동쪽이나 서쪽으로',
        },
      },
    },
    {
      id: 'Paradigm Copied Knave Colossal Impact Middle',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5EA7', source: 'Copied Knave', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5EA7', source: 'Kopiert(?:e|er|es|en) Herzbube', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5EA7', source: 'Réplique De Jack', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5EA7', source: '複製サレタジャック', capture: false }),
      delaySeconds: 2.1,
      durationSeconds: 5,
      alertText: (_data, _matches, output) => output.text(),
      tts: (_data, _matches, output) => output.ttsText(),
      outputStrings: {
        text: {
          en: 'Go N/S Sides',
          de: 'Geh seitlich nach N/S',
          fr: 'Allez côtés N/S',
          ja: '北/南側へ',
          cn: '去南/北侧',
          ko: '남/북쪽으로',
        },
        ttsText: {
          en: 'Go North/South Sides',
          de: 'Geh seitlich nach Norden/Süden',
          fr: 'Allez côtés Nord/Sud',
          ja: '北側や南側へ',
          cn: '去南北侧',
          ko: '남쪽이나 북쪽으로',
        },
      },
    },
    {
      // Also applies for Red Girl Manipulate Energy
      id: 'Paradigm Knave Magic Artillery Beta You',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00DA' }),
      condition: Conditions.targetIsYou(),
      response: Responses.tankBuster(),
    },
    {
      id: 'Paradigm Knave Magic Artillery Beta Collect',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00DA' }),
      run: (data, matches) => {
        let _a;
        (_a = data.busterTargets) !== null && _a !== void 0 ? _a : (data.busterTargets = []);
        data.busterTargets.push(matches.target);
      },
    },
    {
      id: 'Paradigm Knave Magic Artillery Beta',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00DA', capture: false }),
      delaySeconds: 0.5,
      suppressSeconds: 5,
      infoText: (data, _matches, output) => {
        if (!data.busterTargets)
          return;
        if (data.busterTargets.includes(data.me))
          return;
        if (data.role === 'healer')
          return output.tankBuster();
        return output.avoidTankBuster();
      },
      run: (data) => delete data.busterTargets,
      outputStrings: {
        tankBuster: Outputs.tankBuster,
        avoidTankBuster: {
          en: 'Avoid tank buster',
          de: 'Tank buster ausweichen',
          fr: 'Évitez le tank buster',
          ja: 'タンクバスターを避ける',
          cn: '远离坦克死刑',
          ko: '탱버 피하기',
        },
      },
    },
    {
      id: 'Paradigm Knave Magic Artillery Alpha Spread',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00A9' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Paradigm Knave Lunge',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5EB1', source: 'Knave of Hearts' }),
      netRegexDe: NetRegexes.startsUsing({ id: '5EB1', source: 'Herzbube' }),
      netRegexFr: NetRegexes.startsUsing({ id: '5EB1', source: 'Jack' }),
      netRegexJa: NetRegexes.startsUsing({ id: '5EB1', source: 'ジャック' }),
      delaySeconds: (_data, matches) => parseFloat(matches.castTime) - 6,
      durationSeconds: 5,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Knockback (from boss)',
          de: 'Rückstoß (vom Boss)',
          fr: 'Poussée (depuis le boss)',
          ja: 'ノックバック (ボスから)',
          cn: '击退 (来自Boss)',
          ko: '보스기준 넉백',
        },
      },
    },
    {
      id: 'Paradigm Copied Knave Lunge',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5EB1', source: 'Copied Knave' }),
      netRegexDe: NetRegexes.startsUsing({ id: '5EB1', source: 'Kopiert(?:e|er|es|en) Herzbube' }),
      netRegexFr: NetRegexes.startsUsing({ id: '5EB1', source: 'Réplique De Jack' }),
      netRegexJa: NetRegexes.startsUsing({ id: '5EB1', source: '複製サレタジャック' }),
      condition: (data) => !data.cloneLunge,
      delaySeconds: (_data, matches) => parseFloat(matches.castTime) - 6,
      durationSeconds: 5,
      infoText: (_data, _matches, output) => output.text(),
      run: (data) => data.cloneLunge = true,
      outputStrings: {
        text: {
          en: 'Knockback (from clone)',
          de: 'Rückstoß (vom Klon)',
          fr: 'Poussée (depuis le clone)',
          ja: 'ノックバック (複製体から)',
          cn: '击退 (来自复制体)',
          ko: '분신기준 넉백',
        },
      },
    },
    {
      id: 'Paradigm Copied Knave Lunge Get Middle',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '60C7', source: 'Knave of Hearts' }),
      netRegexDe: NetRegexes.startsUsing({ id: '60C7', source: 'Herzbube' }),
      netRegexFr: NetRegexes.startsUsing({ id: '60C7', source: 'Jack' }),
      netRegexJa: NetRegexes.startsUsing({ id: '60C7', source: 'ジャック' }),
      // Half a second longer cast time than the Lunge itself
      delaySeconds: (_data, matches) => parseFloat(matches.castTime) - 6.5,
      durationSeconds: 5,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Knockback -> Get Middle',
          de: 'Rückstoß -> Geh in die Mitte',
          fr: 'Poussée -> Allez au milieu',
          ja: 'ノックバック -> 中へ',
          cn: '击退 -> 去中间',
          ko: '넉백 -> 가운데로',
        },
      },
    },
    {
      id: 'Paradigm Copied Knave Lunge Out of Middle',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '60C8', source: 'Knave of Hearts' }),
      netRegexDe: NetRegexes.startsUsing({ id: '60C8', source: 'Herzbube' }),
      netRegexFr: NetRegexes.startsUsing({ id: '60C8', source: 'Jack' }),
      netRegexJa: NetRegexes.startsUsing({ id: '60C8', source: 'ジャック' }),
      delaySeconds: (_data, matches) => parseFloat(matches.castTime) - 6.5,
      durationSeconds: 5,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Knockback -> Out of Middle',
          de: 'Rückstoß -> Raus aus der Mitte',
          fr: 'Poussée -> Éloignez-vous du milieu',
          ja: 'ノックバック -> 外へ',
          cn: '击退 -> 去外面',
          ko: '넉백 -> 가운데 피하기',
        },
      },
    },
    {
      id: 'Paradigm Gretel Upgraded Shield',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5C69', source: 'Gretel', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C69', source: 'Gretel', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C69', source: 'Gretel', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C69', source: 'グレーテル', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Attack Hansel',
          de: 'Hänsel angreifen',
          fr: 'Attaquez Hansel',
          ja: 'ヘンゼルに攻撃',
          cn: '攻击Hansel',
          ko: '헨젤 공격',
        },
      },
    },
    {
      id: 'Paradigm Hansel Upgraded Shield',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5C6B', source: 'Hansel', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C6B', source: 'Hänsel', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C6B', source: 'Hansel', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C6B', source: 'ヘンゼル', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Attack Gretel',
          de: 'Gretel angreifen',
          fr: 'Attaquez Gretel',
          ja: 'グレーテルに攻撃',
          cn: '攻击Gretel',
          ko: '그레텔 공격',
        },
      },
    },
    {
      id: 'Paradigm Hansel/Gretel Wail',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5C7[67]', source: ['Hansel', 'Gretel'], capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C7[67]', source: ['Hänsel', 'Gretel'], capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C7[67]', source: ['Hansel', 'Gretel'], capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C7[67]', source: ['ヘンゼル', 'グレーテル'], capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paradigm Hansel/Gretel Crippling Blow',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5C7[89]', source: ['Hansel', 'Gretel'] }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C7[89]', source: ['Hänsel', 'Gretel'] }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C7[89]', source: ['Hansel', 'Gretel'] }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C7[89]', source: ['ヘンゼル', 'グレーテル'] }),
      condition: Conditions.targetIsYou(),
      response: Responses.tankBuster(),
    },
    {
      id: 'Paradigm Hansel/Gretel Seed Of Magic Alpha',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '0060' }),
      preRun: (data, matches) => {
        let _a;
        (_a = data.seedTargets) !== null && _a !== void 0 ? _a : (data.seedTargets = []);
        data.seedTargets.push(matches.target);
      },
      infoText: (data, matches, output) => {
        if (data.me === matches.target)
          return output.text();
      },
      outputStrings: {
        text: Outputs.spread,
      },
    },
    {
      id: 'Paradigm Hansel/Gretel Riot Of Magic',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      delaySeconds: 0.5,
      infoText: (data, matches, output) => {
        if (!data.seedTargets)
          return;
        if (data.seedTargets.includes(data.me))
          return;
        if (matches.target === data.me)
          return output.stackOnYou();
        return output.stackOn({ player: data.ShortName(matches.target) });
      },
      run: (data) => delete data.seedTargets,
      outputStrings: {
        stackOnYou: Outputs.stackOnYou,
        stackOn: Outputs.stackOnPlayer,
      },
    },
    {
      id: 'Paradigm Hansel/Gretel Lamentation',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5C7[34]', source: ['Hansel', 'Gretel'], capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C7[34]', source: ['Hänsel', 'Gretel'], capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C7[34]', source: ['Hansel', 'Gretel'], capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C7[34]', source: ['ヘンゼル', 'グレーテル'], capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paradigm Red Girl Cruelty',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '601[23]', source: 'Red Girl', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '601[23]', source: 'Rot(?:e|er|es|en) Mädchen', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '601[23]', source: 'Fille En Rouge', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '601[23]', source: '赤い少女', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paradigm Red Sphere Wave: White',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '618D', source: 'Red Sphere', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '618D', source: 'Rot(?:e|er|es|en) Sphäre', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '618D', source: 'Noyau Orange', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '618D', source: '赤球', capture: false }),
      infoText: (data, _matches, output) => {
        // Skip the first callout, since you're still zoning in
        if (data.seenSphere)
          return output.text();
      },
      run: (data) => data.seenSphere = true,
      outputStrings: {
        text: {
          en: 'Switch to white',
          de: 'Auf Weiß wechseln',
          fr: 'Changez en blanc',
          ja: '白に切替',
          cn: '切换白',
          ko: '하얀색으로 바꾸기',
        },
      },
    },
    {
      id: 'Paradigm Red Sphere Wave: Black',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '618E', source: 'Red Sphere', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '618E', source: 'Rot(?:e|er|es|en) Sphäre', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '618E', source: 'Noyau Orange', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '618E', source: '赤球', capture: false }),
      infoText: (data, _matches, output) => {
        if (data.seenSphere)
          return output.text();
      },
      run: (data) => data.seenSphere = true,
      outputStrings: {
        text: {
          en: 'Switch to black',
          de: 'Auf Schwarz wechseln',
          fr: 'Changez en noir',
          ja: '黒に切替',
          cn: '切换黑',
          ko: '검은색으로 바꾸기',
        },
      },
    },
    {
      id: 'Paradigm Meng-Zi/Xun-Zi Universal Assault',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5C06', source: ['Meng-Zi', 'Xun-Zi'], capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C06', source: ['Meng-Zi', 'Xun-Zi'], capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C06', source: ['Meng-Zi', 'Xun-Zi'], capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C06', source: ['モウシ', 'ジュンシ'], capture: false }),
      condition: Conditions.caresAboutAOE(),
      suppressSeconds: 5,
      response: Responses.aoe(),
    },
    {
      id: 'Paradigm False Idol Screaming Score',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5BDD', source: 'False Idol', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5BDD', source: 'Ihre Abgöttlichkeit', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5BDD', source: 'Déesse Factice', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5BDD', source: '偽造サレタ神', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paradigm False Idol Made Magic Left',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5BD6', source: 'False Idol', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5BD6', source: 'Ihre Abgöttlichkeit', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5BD6', source: 'Déesse Factice', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5BD6', source: '偽造サレタ神', capture: false }),
      durationSeconds: 5,
      response: Responses.goRight(),
    },
    {
      id: 'Paradigm False Idol Made Magic Right',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5BD7', source: 'False Idol', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5BD7', source: 'Ihre Abgöttlichkeit', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5BD7', source: 'Déesse Factice', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5BD7', source: '偽造サレタ神', capture: false }),
      durationSeconds: 5,
      response: Responses.goLeft(),
    },
    {
      id: 'Paradigm False Idol Lighter Note',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '0001' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Lighter Note on YOU',
          de: 'Weißer Choral auf DIR',
          fr: 'Blanc : imprécation sur VOUS',
          ja: '自分に連続AoE',
          cn: '地火点名',
          ko: '장판 대상자',
        },
      },
    },
    {
      id: 'Paradigm False Idol Darker Note You',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.tankBuster(),
    },
    {
      id: 'Paradigm False Idol Darker Note Collect',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      run: (data, matches) => {
        let _a;
        (_a = data.busterTargets) !== null && _a !== void 0 ? _a : (data.busterTargets = []);
        data.busterTargets.push(matches.target);
      },
    },
    {
      id: 'Paradigm False Idol Darker Note',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '008B', capture: false }),
      delaySeconds: 0.5,
      suppressSeconds: 5,
      infoText: (data, _matches, output) => {
        if (!data.busterTargets)
          return;
        if (data.busterTargets.includes(data.me))
          return;
        if (data.role === 'healer')
          return output.tankBuster();
        return output.avoidTankBuster();
      },
      run: (data) => delete data.busterTargets,
      outputStrings: {
        tankBuster: Outputs.tankBuster,
        avoidTankBuster: {
          en: 'Avoid tank buster',
          de: 'Tank buster ausweichen',
          fr: 'Évitez le tank buster',
          ja: 'タンクバスターを避ける',
          cn: '远离坦克死刑',
          ko: '탱버 피하기',
        },
      },
    },
    {
      id: 'Paradigm Her Inflorescence Screaming Score',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5BF5', source: 'Her Inflorescence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5BF5', source: 'Ihre Infloreszenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5BF5', source: 'Déesse Éclose', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5BF5', source: '開花シタ神', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      // startsUsing callout is too early, instead callout when the cast has finished
      id: 'Paradigm Her Inflorescence Recreate Structure',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '5BE1', source: 'Her Inflorescence', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '5BE1', source: 'Ihre Infloreszenz', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '5BE1', source: 'Déesse Éclose', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '5BE1', source: '開花シタ神', capture: false }),
      durationSeconds: 5,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Dodge Building Below',
          de: 'Gebäude unter einem ausweichen',
          fr: 'Esquivez le bâtiment venant du dessous',
          ja: '下の建物に当たらないように',
          cn: '躲避下方建筑',
          ko: '컨테이너 박스 피하기',
        },
      },
    },
    {
      id: 'Paradigm Her Inflorescence Recreate Signal',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5BE3', source: 'Her Inflorescence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5BE3', source: 'Ihre Infloreszenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5BE3', source: 'Déesse Éclose', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5BE3', source: '開花シタ神', capture: false }),
      run: (data) => data.signalCount = 0,
    },
    {
      id: 'Paradigm Her Inflorescence Recreate Signal Collect',
      type: 'Tether',
      netRegex: NetRegexes.tether({ id: '0036', target: 'Her Inflorescence', capture: false }),
      netRegexDe: NetRegexes.tether({ id: '0036', target: 'Ihre Infloreszenz', capture: false }),
      netRegexFr: NetRegexes.tether({ id: '0036', target: 'Déesse Éclose', capture: false }),
      netRegexJa: NetRegexes.tether({ id: '0036', target: '開花シタ神', capture: false }),
      preRun: (data) => {
        let _a; return data.signalCount = ((_a = data.signalCount) !== null && _a !== void 0 ? _a : 0) + 1;
      },
      durationSeconds: 5,
      alertText: (data, _matches, output) => {
        let _a;
        if (((_a = data.signalCount) !== null && _a !== void 0 ? _a : 0) % 5 === 0)
          return output.text();
      },
      outputStrings: {
        text: {
          en: 'Go To Red Light',
          de: 'Geh zum roten Licht',
          fr: 'Allez au feu rouge',
          ja: '赤信号の線路へ',
          cn: '去红灯',
          ko: '빨간 신호등으로',
        },
      },
    },
    {
      id: 'Paradigm Her Inflorescence Heavy Arms Middle',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5BED', source: 'Her Inflorescence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5BED', source: 'Ihre Infloreszenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5BED', source: 'Déesse Éclose', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5BED', source: '開花シタ神', capture: false }),
      response: Responses.goSides(),
    },
    {
      id: 'Paradigm Her Inflorescence Heavy Arms Sides',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5BEF', source: 'Her Inflorescence', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5BEF', source: 'Ihre Infloreszenz', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5BEF', source: 'Déesse Éclose', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5BEF', source: '開花シタ神', capture: false }),
      suppressSeconds: 1,
      response: Responses.goFrontBack(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'White Dissonance / Black Dissonance': 'White/Black Dissonance',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        '2P-Operated Flight Unit': '2Ps Flugeinheit',
        'Beyond': 'Zenit',
        'Black Lance': 'schwarz(?:e|er|es|en) Lanze',
        'Black Pylon': 'schwarz(?:e|er|es|en) Turm',
        'Closed Area A': 'Sperrgebiet A',
        'Copied Knave': 'Kopiert(?:e|er|es|en) Herzbube',
        'False Idol': 'Ihre Abgöttlichkeit',
        'Gretel': 'Gretel',
        'Hansel': 'Hänsel',
        'Her Inflorescence': 'Ihre Infloreszenz',
        'Knave Of Hearts': 'Herzbube',
        'Meng-Zi': 'Meng-Zi',
        'Red Girl': 'Rot(?:e|er|es|en) Mädchen',
        'Red Sphere': 'rot(?:e|er|es|en) Sphäre',
        'Serial-Jointed Model': 'Modell mit Omnigelenk',
        'Spheroid': 'Sphäre',
        'Staging Node B': 'Sammelknoten B',
        'Staging Node C': 'Sammelknoten C',
        'Staging Node D': 'Sammelknoten D',
        'The Ascension Platform': 'Aufzug',
        'White Lance': 'weiß(?:e|er|es|en) Lanze',
        'Xun-Zi': 'Xun-Zi',
        'Hansel & Gretel': 'Hänsel & Gretel',
      },
      'replaceText': {
        '--targetable\\?--': '--anvisierbar?--',
        'Black Dissonance': 'Schwarze Korrosion',
        '(?<!Tandem Assault: )Bloody Sweep': 'Zertrümmern',
        '(?<!Tandem Assault: )Breakthrough': 'Tjost',
        'Child\'s Play': 'Puppenspiel',
        'Colossal Impact': 'Schwerer Angriff',
        'Crash': 'Kollision',
        'Crippling Blow': 'Verkrüppelnder Schlag',
        'Cruelty': 'Berstender Boden',
        'Darker Note': 'Schwarzer Choral',
        'Deploy Armaments': 'Aktivierte Armierung',
        'Diffuse Energy': 'Diffusionsenergie',
        'Distortion': 'Kontaminierung',
        'Eminence': 'Hoheit',
        'Explosion': 'Explosion',
        'Generate: Barrier': 'Schöpfung: Barrieren',
        'Heavy Arms': 'Armierung',
        'High-Powered Laser': 'Hochleistungslaser',
        'Hungry Lance': 'Lanzentreffer',
        'Knavish Bullets': 'Störschuss',
        'Lamentation': 'Wehklagen',
        'Light Leap': 'Springen',
        'Lighter Note': 'Weißer Choral',
        'Lightfast Blade': 'Lichtklingenschnitt',
        'Lunge': 'Vliesabreibung',
        'Made Magic': 'Magiefeuer',
        'Magic Artillery Alpha': 'Magieschock α',
        'Magic Artillery Beta': 'Magieschock β',
        'Magic Barrage': 'Gebündelter Magiestoß',
        'Magical Interference': 'Magieinterferenz',
        'Maneuver: Standard Laser': 'Offensive: Laser',
        'Manipulate Energy': 'Energetische Ballung',
        'Mixed Signals': 'Signalschaltung',
        '(?<!Tandem Assault: )Passing Lance': 'Scharfrennen',
        'Pervasion': 'Klarheit',
        'Pillar Impact': 'Säuleneinschlag',
        'Place Of Power': 'Kraftfeld-Generierung',
        'Point: Black': 'Schwarzer Durchstoß',
        'Point: White': 'Weißer Durchstoß',
        'Recreate Meteor': 'Reprise: Meteor',
        'Recreate Signal': 'Reprise: Signal',
        'Recreate Structure': 'Reprise: Gebäude',
        'Replicate': 'Kopieren',
        'Rhythm Rings': 'Staccato',
        'Riot Of Magic': 'Magiewelle',
        'Roar': 'Biestschrei',
        'Scattered Magic': 'Magieschauer',
        'Screaming Score': 'Solmisation',
        'Seed Of Magic(?! )': 'Magiestoß',
        'Seed Of Magic Alpha': 'Magiestoß α',
        'Seed Of Magic Beta': 'Magiestoß β',
        'Shock: Black': 'Schwarzer Impakt',
        'Shock: White': 'Weißer Impakt',
        'Shockwave': 'Schockwelle',
        'Spheroids': 'Sphärisches Feuer',
        'Stacking The Deck': 'Kettenangriff',
        'Sublime Transcendence': 'Transzendenz',
        'Tandem(?! Assault)': 'Verbundenheit',
        'Tandem Assault: Bloody Sweep': 'Kettenangriff: Zertrümmern',
        'Tandem Assault: Breakthrough': 'Kettenangriff: Tjost',
        'Tandem Assault: Passing Lance': 'Kettenangriff: Scharfrennen',
        'The Final Song': 'Das Letzte Lied',
        'Towerfall': 'Turmsturz',
        'Transference': 'Transfer',
        'Uneven Footing': 'Aufschlag',
        'Universal Assault': 'Omnidirektionalangriff',
        'Upgraded Lance': 'Upgrade: Lanze',
        'Upgraded Shield': 'Upgrade: Schild',
        'Vortex': 'Einsaugen',
        'Wail': 'Feldgeschrei',
        'Wandering Trail': 'Ringstechen',
        'Wave: Black': 'Schwarze Partikel',
        'Wave: White': 'Weiße Partikel',
        'White Dissonance': 'Weiße Korrosion',
        'Wipe: Black': 'Schwarze Detonation',
        'Wipe: White': 'Weiße Detonation',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        '2P-Operated Flight Unit': '2P : module de vol équipé',
        'Beyond': 'Sommet',
        'Black Lance': 'lance noire',
        'Black Pylon': 'pilier noir',
        'Closed Area A': 'Secteur cloisonné A',
        'Copied Knave': 'réplique de Jack',
        'False Idol': 'déesse factice',
        'Gretel': 'Gretel',
        'Hansel': 'Hansel',
        'Her Inflorescence': 'déesse éclose',
        'Knave Of Hearts': 'Jack',
        'Meng-Zi': 'Meng-Zi',
        'Red Girl': 'fille en rouge',
        'Red Sphere': 'noyau orange',
        'Serial-Jointed Model': 'modèle multiarticulé',
        'Spheroid': 'sphère',
        'Staging Node B': 'Pare-feu B',
        'Staging Node C': 'Pare-feu C',
        'Staging Node D': 'Pare-feu D',
        'The Ascension Platform': 'Plateforme élévatrice',
        'White Lance': 'lance blanche',
        'Xun-Zi': 'Xun-Zi',
        'Hansel & Gretel': 'duo d\'armures',
      },
      'replaceText': {
        '--targetable\\?--': '--ciblable ?--',
        'Black Dissonance': 'Noir : rongement',
        '(?<!Tandem Assault: )Bloody Sweep': 'Balayage tranchant',
        '(?<!Tandem Assault: )Breakthrough': 'Grande ruée',
        'Child\'s Play': 'Marionnettiste',
        'Colossal Impact': 'Attaque puissante',
        'Crash': 'Collision',
        'Crippling Blow': 'Coup handicapant',
        'Cruelty': 'Embûche',
        'Darker Note': 'Noir : imprécation',
        'Deploy Armaments': 'Activation de l\'armement',
        'Diffuse Energy': 'Tirs dispersés',
        'Distortion': 'Corruption',
        'Eminence': 'Autorité',
        'Explosion': 'Explosion',
        'Generate: Barrier': 'Matérialisation : murs',
        'Heavy Arms': 'Bras armé',
        'High-Powered Laser': 'Laser surpuissant',
        'Hungry Lance': 'Lance tranchante',
        'Knavish Bullets': 'Projectile anti-magie',
        'Lamentation': 'Lamentation',
        'Light Leap': 'Bond',
        'Lighter Note': 'Blanc : imprécation',
        'Lightfast Blade(?! 1\\?)': 'Lame éclair',
        'Lightfast Blade 1\\?': 'Lame éclair 1 ?',
        'Lunge': 'Charge',
        'Made Magic': 'Déferlante magique',
        'Magic Artillery Alpha': 'Balles magiques percutantes α',
        'Magic Artillery Beta': 'Balles magiques percutantes β',
        'Magic Barrage': 'Rafale magique',
        'Magical Interference': 'Interférence magique',
        'Maneuver: Standard Laser': 'Attaque : laser',
        'Manipulate Energy': 'Concentration énergétique',
        'Mixed Signals': 'Allumage des feux',
        '(?<!Tandem Assault: )Passing Lance': 'Ruée des lances',
        'Pervasion': 'Perméabilisation',
        'Pillar Impact': 'Éboulis',
        'Place Of Power': 'Déploiement de champ de force',
        'Point: Black': 'Noir : poignardage',
        'Point: White': 'Blanc : poignardage',
        'Recreate Meteor': 'Recréation : météore',
        'Recreate Signal': 'Recréation : feux de circulation',
        'Recreate Structure': 'Recréation : immeuble',
        'Replicate': 'Réplication',
        'Rhythm Rings': 'Anneau d\'incantation',
        'Riot Of Magic': 'Pilonnage magique',
        'Roar': 'Rugissement',
        'Scattered Magic': 'Éclatement magique',
        'Screaming Score': 'Récital',
        'Seed Of Magic(?! )': 'Balles magiques',
        'Seed Of Magic Alpha': 'Balles magiques α',
        'Seed Of Magic Beta': 'Balles magiques β',
        'Shock: Black': 'Noir : impact',
        'Shock: White': 'Blanc : impact',
        'Shockwave': 'Onde de choc',
        'Spheroids': 'Déploiement de sphères',
        'Stacking The Deck': 'Combinaison',
        'Sublime Transcendence': 'Abstraction',
        'Tandem(?! Assault)': 'Combo',
        'Tandem Assault: Bloody Sweep': 'Combinaison : balayage tranchant',
        'Tandem Assault: Breakthrough': 'Combinaison : grande ruée',
        'Tandem Assault: Passing Lance': 'Combinaison : ruée des lances',
        'The Final Song': 'Ultime cantate',
        'Towerfall': 'Écroulement',
        'Transference': 'Transfert',
        'Uneven Footing': 'Impact frontal',
        'Universal Assault': 'Attaque multidirectionnelle',
        'Upgraded Lance': 'Renforcement : lance',
        'Upgraded Shield': 'Renforcement : bouclier',
        'Vortex': 'Aspiration',
        'Wail': 'Cri déchirant',
        'Wandering Trail': 'Disques magiques',
        'Wave: Black': 'Noir : onde',
        'Wave: White': 'Blanc : onde',
        'White Dissonance': 'Blanc : rongement',
        'Wipe: Black': 'Noir : grosse Explosion',
        'Wipe: White': 'Blanc : grosse Explosion',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        '2P-Operated Flight Unit': '２Ｐ：飛行ユニット装備',
        'Beyond': '頂上',
        'Black Lance': '黒槍',
        'Black Pylon': '黒柱',
        'Closed Area A': '封鎖区画A',
        'Copied Knave': '複製サレタジャック',
        'False Idol': '偽造サレタ神',
        '(?<!& )Gretel': 'グレーテル',
        'Hansel(?! &)': 'ヘンゼル',
        'Her Inflorescence': '開花シタ神',
        'Knave Of Hearts': 'ジャック',
        'Meng-Zi': 'モウシ',
        'Red Girl': '赤い少女',
        'Red Sphere': '赤球',
        'Serial-Jointed Model': '多関節型',
        'Spheroid': '球体',
        'Staging Node B': '迎撃区画B',
        'Staging Node C': '迎撃区画C',
        'Staging Node D': '迎撃区画D',
        'The Ascension Platform': '昇降機',
        'White Lance': '白槍',
        'Xun-Zi': 'ジュンシ',
        'Hansel & Gretel': 'ヘンゼル&グレーテル',
      },
      'replaceText': {
        'Black Dissonance': '浸食：黒',
        '(?<!Tandem Assault: )Bloody Sweep': '薙ぎ払い',
        '(?<!Tandem Assault: )Breakthrough': '重突進',
        'Child\'s Play': '人形遣い',
        'Colossal Impact': '強攻撃',
        'Crash': '衝突',
        'Crippling Blow': '痛打',
        'Cruelty': '強襲',
        'Darker Note': '断唱：黒',
        'Deploy Armaments': '武装起動',
        'Diffuse Energy': '拡散エネルギー弾',
        'Distortion': '汚染',
        'Eminence': '威光',
        'Explosion': '爆発',
        'Generate: Barrier': '生成：障壁',
        'Heavy Arms': '武装',
        'High-Powered Laser': '高出力レーザー',
        'Hungry Lance': '槍薙ぎ',
        'Knavish Bullets': '魔障弾',
        'Lamentation': '慟哭',
        'Light Leap': '跳躍',
        'Lighter Note': '断唱：白',
        'Lightfast Blade': '光刃斬機',
        'Lunge': '体当たり',
        'Made Magic': '魔力放出',
        'Magic Artillery Alpha': '魔法衝撃弾α',
        'Magic Artillery Beta': '魔法衝撃弾β',
        'Magic Barrage': '魔法弾連射',
        'Magical Interference': '魔力干渉',
        'Maneuver: Standard Laser': '攻撃：レーザー',
        'Manipulate Energy': 'エネルギー集中',
        'Mixed Signals': '信号切替',
        '(?<!Tandem Assault: )Passing Lance': '槍突進',
        'Pervasion': '透過',
        'Pillar Impact': '崩落',
        'Place Of Power': '力場生成',
        'Point: Black': '刺突：黒',
        'Point: White': '刺突：白',
        'Recreate Meteor': '再現：メテオ',
        'Recreate Signal': '再現：信号',
        'Recreate Structure': '再現：建物',
        'Replicate': '複製',
        'Rhythm Rings': '魔唱輪',
        'Riot Of Magic': '魔法弾放射',
        'Roar': '咆哮',
        'Scattered Magic': '魔力飛散',
        'Screaming Score': '唱譜',
        'Seed Of Magic(?! )': '魔法弾',
        'Seed Of Magic Alpha': '魔法弾α',
        'Seed Of Magic Beta': '魔法弾β',
        'Shock: Black': '衝撃：黒',
        'Shock: White': '衝撃：白',
        'Shockwave': '衝撃波',
        'Spheroids': '球体放出',
        'Stacking The Deck': '連携攻撃',
        'Sublime Transcendence': '超越',
        'Tandem(?! Assault)': '連携',
        'Tandem Assault: Bloody Sweep': '連携攻撃：薙ぎ払い',
        'Tandem Assault: Breakthrough': '連携攻撃：重突進',
        'Tandem Assault: Passing Lance': '連携攻撃：槍突進',
        'The Final Song': '最後の歌',
        'Towerfall': '倒壊',
        'Transference': '転移',
        'Uneven Footing': '激突衝撃',
        'Universal Assault': '全方位攻撃',
        'Upgraded Lance': '強化：槍',
        'Upgraded Shield': '強化：盾',
        'Vortex': '吸引',
        'Wail': '叫び声',
        'Wandering Trail': '魔障輪',
        'Wave: Black': '波動：黒',
        'Wave: White': '波動：白',
        'White Dissonance': '浸食：白',
        'Wipe: Black': '大爆発：黒',
        'Wipe: White': '大爆発：白',
      },
    },
  ],
});
