Options.Triggers.push({
  id: 'TheSeatOfSacrifice',
  zoneId: ZoneId.TheSeatOfSacrifice,
  timelineFile: 'wol.txt',
  timelineTriggers: [
    {
      id: 'WOL Ultimate Crossover',
      regex: /Ultimate Crossover/,
      beforeSeconds: 8,
      condition: (data) => data.role === 'tank',
      alarmText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Limit break now!',
          de: 'Limit break jetzt!',
          fr: 'Transcendance maintenant !',
          ja: 'タンクLBを！',
          cn: '坦克LB！',
          ko: '리미트 브레이크!',
        },
      },
    },
    {
      id: 'WOL Twincast Towers',
      regex: /Meteor Impact 1/,
      beforeSeconds: 10,
      durationSeconds: 8,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get Towers',
          de: 'Türme nehmen',
          fr: 'Prenez les tours',
          ja: '塔を踏む',
          cn: '踩塔',
          ko: '장판 들어가기',
        },
      },
    },
  ],
  triggers: [
    {
      id: 'WOL Terror Unleashed',
      type: 'Ability',
      netRegex: { source: 'Warrior Of Light', id: '4F27', capture: false },
      condition: (data) => data.role === 'healer',
      suppressSeconds: 5,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Full Heal Everyone',
          de: 'Alle voll heilen',
          fr: 'Soignez tout le monde complètement',
          ja: 'HPを満タンに！',
          cn: '奶满全队',
          ko: '전원 체력 풀피로',
        },
      },
    },
    {
      id: 'WOL Coruscant Saber In',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F11', capture: false },
      response: Responses.getUnder(),
    },
    {
      id: 'WOL Coruscant Saber Out',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F10', capture: false },
      response: Responses.getOut('info'),
    },
    {
      id: 'WOL Absolute Blizzard III',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F2D', capture: false },
      response: Responses.moveAround('alert'),
    },
    {
      id: 'WOL Absolute Fire III',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F2E', capture: false },
      // I mean, stop if you want, I guess?
      response: Responses.stopEverything('info'),
    },
    {
      id: 'WOL Imbued Absolute Blizzard III',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F13', capture: false },
      run: (data) => data.imbued = 'blizzard',
    },
    {
      id: 'WOL Imbued Absolute Fire III',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F12', capture: false },
      run: (data) => data.imbued = 'fire',
    },
    {
      id: 'WOL Imbued Coruscance Out',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F4B', capture: false },
      alertText: (data, _matches, output) => {
        if (data.imbued === 'blizzard')
          return output.outMove();
        else if (data.imbued === 'fire')
          return output.outStop();
        return output.out();
      },
      outputStrings: {
        outMove: {
          en: 'Out => Move',
          de: 'Raus => Bewegen',
          fr: 'Extérieur => Bougez',
          ja: '外 => 動け',
          cn: '钢铁 => 动动动',
          ko: '밖으로 => 움직이기',
        },
        outStop: {
          en: 'Out => Stop',
          de: 'Raus => Nichts machen',
          fr: 'Extérieur => Stoppez tout',
          ja: '外 => 動かない',
          cn: '钢铁 => 停停停',
          ko: '밖으로 => 멈추기',
        },
        out: {
          en: 'Out => ???',
          de: 'Raus => ???',
          fr: 'Extérieur => ???',
          ja: '外 => ???',
          cn: '钢铁 => ？？？',
          ko: '밖으로 => ???',
        },
      },
    },
    {
      id: 'WOL Imbued Coruscance In',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F4C', capture: false },
      alertText: (data, _matches, output) => {
        if (data.imbued === 'blizzard')
          return output.underMove();
        else if (data.imbued === 'fire')
          return output.underStop();
        return output.under();
      },
      outputStrings: {
        underMove: {
          en: 'Under => Move',
          de: 'Runter => Bewegen',
          fr: 'Intérieur => Bougez',
          ja: '中 => 動け',
          cn: '月环 => 动动动',
          ko: '안으로 => 움직이기',
        },
        underStop: {
          en: 'Under => Stop',
          de: 'Runter => Nichts machen',
          fr: 'Intérieur => Stoppez tout',
          ja: '中 => 動かない',
          cn: '月环 => 停停停',
          ko: '안으로 => 멈추기',
        },
        under: {
          en: 'Under => ???',
          de: 'Runter => ???',
          fr: 'Intérieur => ???',
          ja: '中 => ???',
          cn: '月环 => ？？？',
          ko: '안으로 => ???',
        },
      },
    },
    {
      id: 'WOL Sword Of Light',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F42', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Out of Triangle',
          de: 'Raus aus den Dreiecken',
          fr: 'Sortez du triangle',
          ja: '三角の外へ',
          cn: '站在三角外面',
          ko: '삼각형 밖으로',
        },
      },
    },
    {
      id: 'WOL Summon Wyrm',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F41', capture: false },
      delaySeconds: 6,
      // This applies to both phases.  We could say something like "go side without wyrm" and
      // "go to corner without wyrm", but "avoid wyrm dash" covers both.  Hopefully it's obvious
      // not to stand in the giant black circle.
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid Wyrm Dash',
          de: 'Wyrm-Ansturm ausweichen',
          fr: 'Évitez la charge du Wyrm',
          ja: '竜を避ける',
          cn: '躲避巴哈冲锋',
          ko: '용 돌진 피하기',
        },
      },
    },
    {
      id: 'WOL Bitter End',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F28' },
      response: Responses.tankBusterSwap(),
    },
    {
      id: 'WOL Elddragon Dive',
      type: 'StartsUsing',
      netRegex: { source: 'Warrior Of Light', id: '4F29', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'WOL Deluge of Death Marker',
      type: 'HeadMarker',
      netRegex: { id: '0057' },
      condition: Conditions.targetIsYou(),
      alarmText: (_data, _matches, output) => output.text(),
      run: (data, matches) => data.deluge = matches.target,
      outputStrings: {
        text: {
          en: 'GTFO',
          de: 'GTFO',
          fr: 'Éloignez-vous',
          ja: '出ていく！',
          cn: '快出去！',
          ko: '진영 벗어나기!',
        },
      },
    },
    {
      id: 'WOL Deluge of Death Cleanup',
      type: 'HeadMarker',
      netRegex: { id: '0057', capture: false },
      delaySeconds: 10,
      run: (data) => {
        // Clean this up so it doesn't apply during Katon San.
        delete data.deluge;
      },
    },
    {
      // Both for Absolute Holy and Katon San
      id: 'WOL Absolute Holy Katon San',
      type: 'HeadMarker',
      netRegex: { id: '00A1' },
      condition: (data) => data.deluge !== data.me,
      delaySeconds: 0.5,
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'WOL Radiant Braver',
      type: 'HeadMarker',
      netRegex: { id: '00EA' },
      response: Responses.earthshaker(),
    },
    {
      id: 'WOL Radiant Desperado',
      type: 'StartsUsing',
      // There are two single target 4F46 lines to indicate who the stacks
      // are on, that come slightly after this starts casting.
      netRegex: { source: 'Warrior Of Light', id: '515D', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stack Groups',
          de: 'Gruppen stacken',
          fr: 'Packages de groupes',
          ja: '集合',
          cn: '集合',
          ko: '쉐어징 모이기',
        },
      },
    },
    {
      id: 'WOL Radiant Meteor',
      type: 'HeadMarker',
      netRegex: { id: '00E9' },
      condition: Conditions.targetIsYou(),
      alarmText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Go to Corner',
          de: 'In die Ecken gehenr',
          fr: 'Allez dans un coin',
          ja: 'コーナーへ',
          cn: '去角落',
          ko: '구석으로',
        },
      },
    },
    {
      id: 'WOL Suiton San',
      type: 'Ability',
      netRegex: { source: 'Spectral Ninja', id: '4F38', capture: false },
      delaySeconds: 5,
      response: Responses.knockback(),
    },
    {
      id: 'WOL Spectral Egi Flare Breath',
      type: 'Tether',
      netRegex: { source: 'Spectral Egi', id: '0011' },
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Point tether outside',
          de: 'Verbindungen nach Außen zeigen',
          fr: 'Pointez le lien vers l\'extérieur',
          ja: '線を外に引く',
          cn: '把线拉向场外',
          ko: '선 연결 바깥으로 빼기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Spectral Bard': 'Phantom-Barde',
        'Spectral Black Mage': 'Phantom-Schwarzmagier',
        'Spectral Dark Knight': 'Phantom-Dunkelritter',
        'Spectral Egi': 'Phantom-Primae',
        'Spectral Ninja': 'Phantom-Ninja',
        'Spectral Summoner': 'Phantom-Beschwörer',
        'Spectral Warrior': 'Phantom-Berserker',
        'Warrior Of Light': 'Krieger des Lichts',
        'Wyrm Of Light': 'Wyrm des Lichts',
      },
      'replaceText': {
        '--active time event--': '--Aktives Zeitevent--',
        'Absolute Blizzard III': 'Absolutes Eisga',
        'Absolute Fire III': 'Absolutes Feuga',
        'Absolute Fire/Blizzard': 'Absolutes Feuga/Eisga',
        'Absolute Holy': 'Absolutes Sanctus',
        'Absolute Teleport': 'Absoluter Teleport',
        'Ascendance': 'Himmelstanz',
        'Brimstone Earth': 'Schwefelerde',
        'Cauterize': 'Kauterisieren',
        'Coruscant Saber': 'Gleißender Säbel',
        'Deluge Of Death': 'Tödlicher Sturzregen',
        'Elddragon Dive': 'Drachensturz',
        'Flare Breath': 'Flare-Atem',
        'Imbued Coruscance': 'Magieklingentechnik: Gleißender Säbel',
        'Imbued Fire/Blizzard': 'Magieklinge Feuga/Eisga',
        'Katon: San': 'Katon: San',
        'Meteor Impact': 'Meteoreinschlag',
        'Perfect Decimation': 'Perfektes Dezimieren',
        'Radiant Braver': 'Gleißende Gerechtigkeit',
        'Radiant Desperado': 'Gleißender Desperado',
        'Radiant Meteor': 'Gleißender Meteor',
        'Shining Wave': 'Leuchtwelle',
        'Solemn Confiteor': 'Feierlicher Confiteor',
        'Specter Of Light': 'Heldenruf',
        'Suiton: San': 'Suiton: San',
        'Summon(?! Wyrm)': 'Beschwörung',
        'Summon Wyrm': 'Drachenbeschwörung',
        'Sword Of Light': 'Schwert des Lichts',
        'Terror Unleashed': 'Entfesselter Terror',
        'The Bitter End': 'Schwertschimmer',
        'To The Limit': 'Bis ans Limit',
        'Twincast': 'Dualzauber',
        'Ultimate Crossover': 'Ultimative Kreuzigung',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Spectral Bard': 'barde spectral',
        'Spectral Black Mage': 'mage noir spectral',
        'Spectral Dark Knight': 'chevalier noir spectral',
        'Spectral Egi': 'Egi spectral',
        'Spectral Ninja': 'ninja spectral',
        'Spectral Summoner': 'invocatrice spectrale',
        'Spectral Warrior': 'berserker spectral',
        'Warrior Of Light': 'Guerrier de la Lumière primordial',
        'Wyrm Of Light': 'wyrm de Lumière',
      },
      'replaceText': {
        '--active time event--': '--temps d\'évènement actif--',
        'Absolute Blizzard III': 'Méga Glace absolue',
        'Absolute Fire/Blizzard': 'Méga Feu/Glace absolue',
        'Absolute Fire III': 'Méga Feu absolu',
        'Absolute Holy': 'Miracle absolu',
        'Absolute Teleport': 'Téléportation absolue',
        'Ascendance': 'Ascendance',
        'Brimstone Earth': 'Terre de soufre',
        'Cauterize': 'Cautérisation',
        'Coruscant Saber': 'Fureur flamboyante',
        'Deluge Of Death': 'Averse mortelle',
        'Elddragon Dive': 'Piqué du dragon ancien',
        'Flare Breath': 'Souffle brasier',
        'Imbued Coruscance': 'Magilame Fureur flamboyante',
        'Imbued Fire/Blizzard': 'Magilame Méga Feu/Glace',
        'Katon: San': 'Katon : San',
        'Meteor Impact': 'Impact de météore',
        'Perfect Decimation': 'Décimation parfaite',
        'Radiant Braver': 'Âme brave flamboyante',
        'Radiant Desperado': 'Desperado flamboyant',
        'Radiant Meteor': 'Météore flamboyant',
        'Shining Wave': 'Épée flamboyante',
        'Solemn Confiteor': 'Confiteor solennel',
        'Specter Of Light': 'Sommation des braves',
        'Suiton: San': 'Suiton : San',
        'Summon(?! Wyrm)': 'Invocation',
        'Summon Wyrm': 'Invocation de wyrm',
        'Sword Of Light': 'Lame de Lumière',
        'Terror Unleashed': 'Déchaînement de la terreur',
        'The Bitter End': 'Éradication',
        'To The Limit': 'Pas vers la transcendance',
        'Twincast': 'Tandem',
        'Ultimate Crossover': 'Taillade croisée ultime',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Spectral Bard': '幻光の吟遊詩人',
        'Spectral Black Mage': '幻光の黒魔道士',
        'Spectral Dark Knight': '幻光の暗黒騎士',
        'Spectral Egi': '幻光の召喚獣',
        'Spectral Ninja': '幻光の忍者',
        'Spectral Summoner': '幻光の召喚士',
        'Spectral Warrior': '幻光の狂戦士',
        'Warrior Of Light': 'ウォーリア・オブ・ライト',
        'Wyrm Of Light': 'ウィルム・オブ・ライト',
      },
      'replaceText': {
        '--active time event--': '--QTE--',
        'Absolute Blizzard III': 'アブソリュートブリザガ',
        'Absolute Fire III': 'アブソリュートファイガ',
        'Absolute Fire/Blizzard': 'アブソリュート ファイガ／ブリザガ',
        'Absolute Holy': 'アブソリュートホーリー',
        'Absolute Teleport': 'アブソリュートテレポ',
        'Ascendance': 'アセンダンス',
        'Brimstone Earth': 'ブリムストーンアース',
        'Cauterize': 'カータライズ',
        'Coruscant Saber': 'ブライトセイバー',
        'Deluge Of Death': 'ヘビーレイン・オブ・デス',
        'Elddragon Dive': 'エンシェントドラゴンダイブ',
        'Flare Breath': 'フレアブレス',
        'Imbued Coruscance': '魔法剣技：ブライトセイバー',
        'Imbued Fire/Blizzard': '魔法剣アブソリュート ファイガ／ブリザガ',
        'Katon: San': '火遁の術：参',
        'Meteor Impact': 'メテオインパクト',
        'Perfect Decimation': 'パーフェクトデシメート',
        'Radiant Braver': 'ブライトブレイバー',
        'Radiant Desperado': 'ブライトデスペラード',
        'Radiant Meteor': 'ブライトメテオ',
        'Shining Wave': 'シャイニングウェーブ',
        'Solemn Confiteor': 'ソーレムコンフィテオル',
        'Specter Of Light': '幻光召喚',
        'Suiton: San': '水遁の術：参',
        'Summon(?! Wyrm)': '召喚',
        'Summon Wyrm': 'サモン・ウィルム',
        'Sword Of Light': 'ソード・オブ・ライト',
        'Terror Unleashed': 'アンリーシュ・テラー',
        'The Bitter End': 'エンドオール',
        'To The Limit': 'リミットチャージ',
        'Twincast': 'ふたりがけ',
        'Ultimate Crossover': 'アルティメット・クロスオーバー',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Spectral Bard': '幻光吟游诗人',
        'Spectral Black Mage': '幻光黑魔法师',
        'Spectral Dark Knight': '幻光暗黑骑士',
        'Spectral Egi': '幻光召唤兽',
        'Spectral Ninja': '幻光忍者',
        'Spectral Summoner': '幻光召唤师',
        'Spectral Warrior': '幻光狂战士',
        'Warrior Of Light': '光之战士',
        'Wyrm Of Light': '光之真龙',
      },
      'replaceText': {
        '--active time event--': '--XJB按--',
        'Absolute Blizzard III': '绝对冰封',
        'Absolute Fire III': '绝对爆炎',
        'Absolute Fire/Blizzard': '绝对爆炎/绝对冰封',
        'Absolute Holy': '绝对神圣',
        'Absolute Teleport': '绝对传送',
        'Ascendance': '生辰星位',
        'Brimstone Earth': '狱火大地',
        'Cauterize': '灼热俯冲',
        'Coruscant Saber': '光明利剑',
        'Deluge Of Death': '死亡暴雨',
        'Elddragon Dive': '远古龙炎冲',
        'Flare Breath': '核爆吐息',
        'Imbued Coruscance': '魔法剑技·光明利剑',
        'Imbued Fire/Blizzard': '魔法剑·绝对爆炎/绝对冰封',
        'Katon: San': '叁式火遁之术',
        'Meteor Impact': '陨石冲击',
        'Perfect Decimation': '完美地毁人亡',
        'Radiant Braver': '光之勇猛烈斩',
        'Radiant Desperado': '光之亡命暴徒',
        'Radiant Meteor': '光之陨石流星',
        'Shining Wave': '光芒波动',
        'Solemn Confiteor': '庄严悔罪',
        'Specter Of Light': '幻光召唤',
        'Suiton: San': '叁式水遁之术',
        'Summon(?! Wyrm)': '召唤',
        'Summon Wyrm': '真龙召唤',
        'Sword Of Light': '光之剑',
        'Terror Unleashed': '恐惧释放',
        'The Bitter End': '尽灭',
        'To The Limit': '突破极限',
        'Twincast': '合力咏唱',
        'Ultimate Crossover': '究极·交汇',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Warrior Of Light': '빛의 전사',
        'Spectral Bard': '환상빛의 음유시인',
        'Spectral Black Mage': '환상빛의 흑마도사',
        'Spectral Dark Knight': '환상빛의 암흑기사',
        'Spectral Egi': '환상빛의 소환수',
        'Spectral Ninja': '환상빛의 닌자',
        'Spectral Summoner': '환상빛의 소환사',
        'Spectral Warrior': '환상빛의 전사',
        'Wyrm Of Light': '빛의 비룡',
      },
      'replaceText': {
        '--active time event--': '--긴급 조작--',
        'Summon(?! Wyrm)': '소환',
        'Absolute Blizzard III': '앱솔루트 블리자가',
        'Absolute Fire III': '앱솔루트 파이가',
        'Absolute Holy': '앱솔루트 홀리',
        'Absolute Teleport': '앱솔루트 텔레포',
        'Ascendance': '상승세',
        'Brimstone Earth': '유황 지대',
        'Cauterize': '인두질',
        'Coruscant Saber': '빛나는 도검',
        'Deluge Of Death': '죽음의 화살 폭우',
        'Elddragon Dive': '고룡 강타',
        'Flare Breath': '타오르는 숨결',
        'Imbued Coruscance': '마법검: 빛나는 도검',
        'Imbued Fire/Blizzard': '마법검 파이가/블리자가',
        'Absolute Fire/Blizzard': '앱솔루트 파이가/블리자가',
        'Katon: San': '화둔술 3',
        'Meteor Impact': '운석 낙하',
        'Perfect Decimation': '완전 섬멸',
        'Radiant Braver': '빛나는 브레이버',
        'Radiant Desperado': '빛나는 무법자',
        'Radiant Meteor': '빛나는 메테오',
        'Shining Wave': '찬란한 파동',
        'Solemn Confiteor': '엄숙한 기도',
        'Specter Of Light': '환상빛 소환',
        'Suiton: San': '수둔술 3',
        'Summon Wyrm': '비룡 소환',
        'Sword Of Light': '빛의 검',
        'Terror Unleashed': '공포 촉발',
        'The Bitter End': '파국',
        'To The Limit': '리미트 축적',
        'Twincast': '합동 시전',
        'Ultimate Crossover': '궁극의 협력기',
      },
    },
  ],
});
