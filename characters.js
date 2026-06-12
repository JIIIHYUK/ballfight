(function () {
    window.HANNAM_BALLS_CHARACTERS = [
        {
            id: "kim-suyeong",
            name: "김수영",
            shortName: "수영",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "보통",
            speed: 230,
            colorName: "살색",
            color: "#f0b38f",
            textColor: "#1c1b1b",
            avatarSrc: "images/KIM SUYEONG.png",
            avatarText: "수영",
            traits: ["회전 막대", "강한 밀치기", "벽 추가 피해"],
            skill: {
                name: "풍차 돌리기",
                cooldown: 10,
                description: "5초 동안 몸에 붙어 전방 180도 안에서 회전하는 살색 무언가를 휘두릅니다. 적에게 충돌하면 피해를 주고 벽으로 날려보내어 피해를 줍니다.",
                effects: {
                    damage: 10,
                    wallDamage: 25,
                    duration: 5,
                    lengthMultiplier: 1.7,
                    widthMultiplier: 0.3,
                    attachOffsetMultiplier: 0.65,
                    rotationSpeed: 11,
                    wallSlamSpeed: 5000,
                    reboundSpeed: 4000,
                    reboundDecayAmount: 500,
                    reboundDecayInterval: 0.1,
                    flightAfterimageInterval: 0.04
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "gu-minchan",
            name: "구민찬",
            shortName: "민찬",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "보통",
            speed: 230,
            colorName: "빨간색",
            color: "#dc2626",
            textColor: "#ffffff",
            avatarSrc: "images/구민찬/GU MINCHAN avatar.png",
            avatarFallbackSrcs: [
                "images/구민찬/GU MINCHAN avatar.png",
                "images/gu-minchan-avatar.png",
                "images/GU MINCHAN avatar.png",
                "images/구민찬/GU MINCHAN.PNG",
                "images/구민찬/GU MINCHAN.PNG",
                "images/GU MINCHAN.PNG"
            ],
            avatarText: "민찬",
            traits: ["분노", "쿨타임 감소", "배구공 투척"],
            passive: {
                name: "분노",
                description: "3초마다 분노가 1 증가하고, 피해를 1번 입을 때마다 분노가 1 증가하며 능력의 쿨타임을 0.3초 줄입니다. 분노가 10회를 초과하면 초과한 분노 1회당 일반 배구공 피해가 1 증가합니다.",
                effects: {
                    interval: 3,
                    damageTakenHitsPerRage: 1,
                    cooldownReduction: 0.5,
                    minCooldown: 1
                }
            },
            skill: {
                name: "배구공",
                cooldown: 5,
                description: "배구공을 던져 적에게 10의 피해를 줍니다. 일반 배구공은 적이나 벽에 최대 3회 튕기며 다시 공격할 수 있습니다. 배구공을 4회 적중시키면 잠시 준비한 뒤 스파이크 배구공을 날려 70의 피해를 줍니다.",
                effects: {
                    damage: 10,
                    rageDamageThreshold: 10,
                    damagePerRageOverThreshold: 1,
                    projectileSpeed: 430,
                    projectileDuration: 2.6,
                    maxBounces: 3,
                    bounceHitCooldown: 0.25,
                    sizeMultiplier: 0.85,
                    imageSrc: "images/구민찬/배구공.png",
                    imageFallbackSrcs: [
                        "images/구민찬/배구공.png",
                        "images/volleyball.png",
                        "images/배구공.png",
                        "images/배구공.png"
                    ],
                    spikeEvery: 4,
                    spikeDelay: 0.5,
                    spikeDamage: 70,
                    spikeProjectileSpeed: 1800,
                    spikeKnockback: 1200
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "gwon-yeojun",
            name: "권여준",
            shortName: "여준",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "보통",
            speed: 230,
            colorName: "연파란색",
            color: "#93c5fd",
            textColor: "#1c1b1b",
            avatarSrc: "images/권여준/GWON YEO-JUN.PNG",
            avatarFallbackSrcs: [
                "images/권여준/GWON YEO-JUN.PNG",
                "images/GWON YEO-JUN.PNG"
            ],
            avatarText: "여준",
            traits: ["확률 호출", "전체 화면 연출", "ㄱㅈㅇ 벽 던지기"],
            skill: {
                name: "ㄱㅈㅇ 호출",
                cooldown: 15,
                description: "능력을 사용하면 화면 전체가 검게 채워지고 ㄱㅈㅇ 응답 여부가 출력됩니다. 75% 확률로 ㄱㅈㅇ 미응답이 나오면 아무 일도 일어나지 않고, 25% 확률로 ㄱㅈㅇ 응답이 나오면 가장 가까운 적에게 300의 피해를 확정적으로 주고 벽으로 던집니다. 벽에 부딪히면 500의 피해를 추가로 줍니다. 죽을 피해를 받으면 최대 2회까지 체력을 1 남기고 즉시 호출하며, 이 호출은 50% 확률로 응답합니다.",
                effects: {
                    responseChance: 0.25,
                    fatalResponseChance: 0.5,
                    responseInitialDamage: 300,
                    responseWallDamage: 500,
                    revealDuration: 2,
                    helperImageSrc: "images/권여준/ㄱㅈㅇ.png",
                    helperImageFallbackSrcs: [
                        "images/권여준/ㄱㅈㅇ.png",
                        "images/ㄱㅈㅇ.png"
                    ],
                    helperSizeMultiplier: 0.92,
                    helperAfterimages: 7,
                    helperDuration: 0.46,
                    targetAfterimageDuration: 0.75,
                    deathSaveLimit: 2
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "kim-donggyu",
            name: "김동규",
            shortName: "동규",
            maxHp: 500,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "베이지",
            color: "#d8c3a5",
            textColor: "#1c1b1b",
            avatarSrc: "images/김동규/김동규.png?v=20260612-donggyu-photo",
            avatarFallbackSrcs: [
                "images/김동규/김동규.png?v=20260612-donggyu-photo"
            ],
            avatarText: "동규",
            traits: ["치명타", "모드 전환", "자가제세동"],
            passive: {
                name: "배그 마스터",
                description: "모든 피해에 20% 확률로 2배 치명타가 발동합니다. 스킬을 사용할 때마다 수류탄, AR, 12 gauge, SR 순서로 모드가 전환됩니다. 전투당 한 번, 처음 사망 시 자가제세동을 시작하며, 성공하면 200의 체력으로 부활합니다.",
                effects: {
                    criticalChance: 0.2,
                    criticalMultiplier: 2,
                    modes: ["수류탄", "AR", "12 gauge", "SR"],
                    selfReviveDuration: 3,
                    selfReviveTempHp: 100,
                    selfReviveHp: 200
                }
            },
            skill: {
                name: "사격 및 투척",
                cooldown: 3,
                description: "현재 모드에 따라 수류탄, AR, 12 gauge, SR 중 하나를 사용하고 다음 모드로 전환합니다.",
                effects: {
                    grenadeSpeed: 300,
                    grenadeDamage: 80,
                    grenadeExplosionDiameter: 150,
                    grenadeSizeMultiplier: 0.5,
                    grenadeImageSrc: "images/김동규/수류탄.png",
                    grenadeImageFallbackSrcs: [
                        "images/김동규/수류탄.png"
                    ],
                    arBulletSpeed: 2000,
                    arBulletDamage: 5,
                    arShots: 20,
                    arDuration: 2,
                    shotgunPellets: 5,
                    shotgunRange: 200,
                    shotgunSpeed: 2000,
                    shotgunDamage: 40,
                    shotgunSpreadRadians: 0.72,
                    srAimDuration: 1.5,
                    srDamage: 400,
                    targetingImageSrc: "images/김동규/타겟팅.png",
                    targetingImageFallbackSrcs: [
                        "images/김동규/타겟팅.png"
                    ],
                    knifeSpeed: 300,
                    knifeBleedDamage: 100,
                    knifeBleedDuration: 3,
                    knifeImageSrc: "images/김동규/칼.png",
                    knifeImageFallbackSrcs: [
                        "images/김동규/칼.png"
                    ]
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "kim-junsu",
            name: "김준수",
            shortName: "준수",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "노란색",
            color: "#facc15",
            textColor: "#1c1b1b",
            avatarSrc: "images/김준수.png",
            avatarFallbackSrcs: [
                "images/김준수.png"
            ],
            avatarText: "준수",
            traits: ["위험 회피", "힐", "딜"],
            passive: {
                name: "본능적 회피",
                description: "자신을 향해 오는 공격이 있다면 회피하려 합니다.",
                effects: {
                    dangerCorrection: 0.05,
                    dangerDetectionRange: 280
                }
            },
            skill: {
                name: "공격? 힐?",
                cooldown: 1,
                description: "1초마다 가장 먼 적에게 10의 힐을 주고, 가장 가까운 적에게 30의 피해를 줍니다.",
                effects: {
                    heal: 10,
                    damage: 30,
                    lineDuration: 0.38
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "kim-jaeyoon",
            name: "김재윤",
            shortName: "재윤",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "회색",
            color: "#6b7280",
            textColor: "#ffffff",
            avatarSrc: "images/KIM JAEYOON.png",
            avatarText: "재윤",
            traits: ["악령 소환", "영역전개", "하수인"],
            passive: {
                name: "악령 소환",
                description: "김재윤은 평타따위를 치지 않습니다. 5초마다 체력 100, 공격력 10을 지니고 김재윤의 절반 크기인 악령을 소환합니다. 필드에 악령은 최대 5개까지 존재할 수 있으며, 악령은 죽을 때 주변 100거리의 적에게 20의 피해를 주는 폭발을 합니다.",
                effects: {
                    interval: 5,
                    maxWraiths: 5,
                    wraithHp: 100,
                    wraithAttack: 10,
                    wraithSpeed: 250,
                    wraithSizeMultiplier: 0.5,
                    explosionRadius: 100,
                    explosionDamage: 20
                }
            },
            skill: {
                name: "영역전개",
                cooldown: 12,
                description: "영역을 20초 동안 전개합니다. 영역 안팎은 서로 넘어갈 수 없으며, 죽은 캐릭터가 있다면 하수인으로 부활시킵니다. 영역 내부 적 1명당 악령 3마리를 소환하고, 악령은 영역 내부 적에게 골고루 배정되어 추적합니다. 영역 내 악령 2마리가 죽을 때마다 악령 1마리를 즉시 추가 소환합니다. 영역 붕괴 시 김재윤의 모든 영역 소환물은 강제 사망합니다.",
                effects: {
                    duration: 12,
                    radius: 300,
                    cinematicLineDuration: 1,
                    domainWraithsPerEnemy: 3,
                    wraithDeathsPerReplacement: 2,
                    summonSteerCorrection: 0.24,
                    summonSteerJitter: 0.16,
                    domainOpacity: 0.5
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "ji-taehyeok",
            name: "지태혁",
            shortName: "태혁",
            maxHp: 600,
            baseAttack: 10,
            speedLabel: "240",
            speed: 240,
            colorName: "주황색",
            color: "#f97316",
            textColor: "#ffffff",
            avatarSrc: "images/지태혁/지태혁.png",
            avatarFallbackSrcs: [
                "images/지태혁/지태혁.png"
            ],
            avatarText: "태혁",
            traits: ["카페인", "3점 슛", "덩크"],
            passive: {
                name: "카페인 과다",
                description: "지태혁 주변에 카페인이 하나씩 설치됩니다. 지태혁은 카페인 방향으로 약간 보정되며, 4.5초 동안 카페인을 먹지 못하면 자동으로 1회 섭취합니다. 섭취 시 최대 체력이 50 감소하는 대신 초당 회복 10과 이동속도 10을 영구적으로 얻습니다. 최대 체력은 150까지 감소하고 초당 회복은 최대 70까지 중첩됩니다. 카페인을 7회 마실 때마다 3점 슛 횟수가 1회 증가하고 준비시간이 30% 감소하며, 3점 슛은 한 스킬당 최대 4회까지 발사됩니다.",
                effects: {
                    caffeineSizeMultiplier: 0.8,
                    caffeineSpawnInterval: 1,
                    caffeineSpawnRadius: 400,
                    caffeineAutoConsumeDelay: 4.5,
                    caffeineSteerStrength: 0.045,
                    caffeineImageSrc: "images/지태혁/카페인.png",
                    caffeineImageFallbackSrcs: [
                        "images/지태혁/카페인.png"
                    ],
                    maxHpLoss: 50,
                    minMaxHp: 150,
                    regenPerCaffeine: 10,
                    maxRegenPerSecond: 70,
                    speedPerCaffeine: 10,
                    requiredCaffeine: 5,
                    caffeineShotBonusInterval: 7,
                    caffeineAimReductionPerBonus: 0.3
                }
            },
            skill: {
                name: "농구가 하고 싶어요",
                cooldown: 1,
                description: "카페인을 5회 섭취하면 맵 밖으로 이동해 무적 상태로 3점 슛을 사용한 뒤 덩크로 복귀합니다. 3점 슛은 2초 뒤 지름 125 직접 타격 지점에 150, 지름 500 충격파에 50의 피해를 줍니다. 덩크는 가장 가까운 적에게 100 피해를 주고 맵 전체 충격파로 10 피해를 줍니다.",
                effects: {
                    threePointShots: 2,
                    maxThreePointShots: 4,
                    delayBetweenShots: 1,
                    warningDiameter: 125,
                    shockwaveDiameter: 500,
                    warningDamage: 70,
                    shockwaveDamage: 10,
                    aimDuration: 2,
                    ballLaunchDelay: 1.5,
                    ballFlightDuration: 0.5,
                    ballDiameter: 125,
                    dunkBallSizeMultiplier: 0.72,
                    dunkSpeed: 1000,
                    dunkDamage: 70,
                    dunkShockwaveDamage: 10,
                    dunkMaxDuration: 2,
                    basketballImageSrc: "images/지태혁/농구공.png",
                    basketballImageFallbackSrcs: [
                        "images/지태혁/농구공.png"
                    ]
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "lee-dohyun",
            name: "이도현",
            shortName: "도현",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "280",
            speed: 280,
            colorName: "파란색",
            color: "#2563eb",
            textColor: "#ffffff",
            avatarSrc: "images/이도현.png",
            avatarFallbackSrcs: [
                "images/이도현.png"
            ],
            avatarText: "도현",
            traits: ["오프사이드", "반칙", "충돌 쿨감"],
            passive: {
                name: "라인 브레이크",
                description: "적과 부딪힐 때마다 현재 스킬 쿨타임이 1.5초 감소합니다.",
                effects: {
                    collisionCooldownReduction: 1.5
                }
            },
            skill: {
                name: "오프사이드",
                cooldown: 8,
                description: "1초에 걸쳐 양옆 선을 그리고, 선보다 위에 있는 적에게 반칙 상태를 부여합니다. 반칙 상태의 적은 정지하고 스킬 쿨타임이 감소하지 않으며, 이도현에게 타격을 입으면 해제됩니다. 이후 이도현은 왼쪽의 적부터 차례대로 돌진해 120의 피해를 줍니다.",
                effects: {
                    lineDrawDuration: 1,
                    dashSpeed: 1000,
                    dashDamage: 120,
                    damageTakenMultiplier: 0.5,
                    healPerTarget: 20,
                    afterimageInterval: 0.045,
                    afterimageLifetime: 420
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "yu-yejun",
            name: "유예준",
            shortName: "예준",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "300",
            speed: 300,
            colorName: "미디엄 로열 블루",
            color: "#4169e1",
            textColor: "#ffffff",
            avatarSrc: "images/유예준.png",
            avatarFallbackSrcs: [
                "images/유예준.png"
            ],
            avatarText: "예준",
            traits: ["동물 특공대", "야옹이", "왈왈이"],
            passive: {
                name: "동물 특공대",
                description: "유예준, 왈왈이, 야옹이 중 하나가 적에게 부딪히면 나머지 기물이 날아와 같은 적에게 40의 피해를 줍니다. 야옹이는 20의 추가 피해와 10초 동안 초당 10의 출혈을, 왈왈이는 2초 동안 90% 슬로우를, 유예준은 동물 특공대 쿨타임 2초 감소와 야옹이/왈왈이 지속시간 1초 증가를 적용합니다.",
                effects: {
                    cooldown: 3,
                    callDamage: 40,
                    dashSpeed: 1250,
                    selfKnockbackSpeed: 300,
                    dashDuration: 0.85,
                    invulnerableAfterHit: 0.2,
                    afterimageInterval: 0.045,
                    afterimageLifetime: 420,
                    catBonusDamage: 20,
                    bleedDuration: 10,
                    bleedTickDamage: 10,
                    bleedTickInterval: 1,
                    dogSlowDuration: 2,
                    dogSlowMultiplier: 0.1,
                    commanderCooldownReduction: 2,
                    summonDurationBonus: 1
                }
            },
            skill: {
                name: "야옹이와 왈왈이",
                cooldown: 8,
                description: "야옹이와 왈왈이를 필드에 소환합니다. 두 기물은 유예준과 같은 이동속도, 절반의 체력과 공격력을 지닙니다. 10초 후 유예준에게 돌아가 사라지며 각자의 남은 체력 10%만큼 유예준을 회복합니다. 야옹이와 왈왈이가 필드에 있는 동안 이 스킬의 쿨타임은 감소하지 않습니다.",
                effects: {
                    summonDuration: 10,
                    petSizeMultiplier: 0.8,
                    returnHealRatio: 0.1,
                    catImageSrc: "images/유예준/야옹이.png",
                    catImageFallbackSrcs: [
                        "images/유예준/야옹이.png"
                    ],
                    dogImageSrc: "images/유예준/왈왈이.png",
                    dogImageFallbackSrcs: [
                        "images/유예준/왈왈이.png"
                    ]
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "lee-taehwan",
            name: "이태환",
            shortName: "태환",
            maxHp: 600,
            baseAttack: 0,
            speedLabel: "280",
            speed: 280,
            colorName: "붉은색",
            color: "#ef4444",
            textColor: "#ffffff",
            avatarSrc: "images/이태환.png",
            avatarFallbackSrcs: [
                "images/이태환.png"
            ],
            avatarText: "태환",
            traits: ["차징 보호막", "축구공 슈팅", "드리블"],
            passive: {
                name: "드리블",
                description: "1초마다 10% 확률로 5초 동안 드리블 상태에 진입합니다. 드리블 중에는 이동속도가 50% 증가하고 흐릿해지며 무적이 됩니다. 적과 닿으면 앵클브레이크를 일으켜 3초 동안 이동속도를 30% 감소시킵니다.",
                effects: {
                    checkInterval: 1,
                    chance: 0.1,
                    duration: 5,
                    speedBonus: 0.5,
                    ankleSlowDuration: 3,
                    ankleSlowMultiplier: 0.7
                }
            },
            skill: {
                name: "차징 슛",
                cooldown: 12,
                description: "5회 피해가 들어오는 공격을 방어하는 보호막을 생성하고 차징 상태에 진입합니다. 차징 중에는 축구공의 궤적이 흐릿한 빨간 직사각형으로 표시되며 방향은 더 천천히 전환되고 쿨타임이 감소하지 않습니다. 보호막 5회가 모두 깨지거나 차징이 20초에 도달하면 공을 강하게 차 공에 맞은 적들을 공의 도착지점까지 날려버리고, 차징시간(초) * (30 + 앵클브레이크 횟수)의 피해를 줍니다.",
                effects: {
                    shieldHits: 5,
                    maxChargeDuration: 20,
                    chargeTurnLerp: 0.035,
                    trajectoryWidthMultiplier: 1.755,
                    kickProjectileSpeed: 2500,
                    ballImageSrc: "images/이태환축구공.png",
                    ballImageFallbackSrcs: [
                        "images/이태환축구공.png"
                    ],
                    hitWidthMultiplier: 2.475,
                    chargeDamageBase: 20,
                    targetAfterimageDuration: 0.75
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "kang-inchan",
            name: "강인찬",
            shortName: "인찬",
            maxHp: 600,
            baseAttack: 20,
            speedLabel: "1.25배",
            speed: 287.5,
            colorName: "보라색",
            color: "#7c3aed",
            textColor: "#ffffff",
            avatarSrc: "images/강인찬.png",
            avatarFallbackSrcs: [
                "images/강인찬.png"
            ],
            avatarText: "인찬",
            traits: ["숙련도", "연타", "회피 카운터"],
            passive: {
                name: "강력한 타격",
                description: "강인찬은 강력한 타격기를 사용하며 이는 중첩될 수 있습니다. 또한 회피한 후 카운터를 언제나 준비하고 있습니다.",
                effects: {
                    contactPushSpeed: 1000,
                    masteryGainOnBasic: 3,
                    comboDamage: 8,
                    comboHealPerHit: 3,
                    comboInterval: 0.15,
                    comboDashSpeedMultiplier: 2.8,
                    comboDamageTakenMultiplier: 0.5,
                    comboFinisherHitThreshold: 20,
                    finisherMasteryThreshold: 15,
                    finisherSlowDuration: 1.2,
                    finisherSlowMultiplier: 0.35,
                    finisherBackDistance: 700,
                    finisherChargeDelay: 0.42,
                    finisherDamage: 200,
                    finisherKnockbackSpeed: 8000,
                    finisherWallDamage: 10,
                    finisherResetMastery: 10,
                    dodgeChance: 0.25,
                    dodgeMasteryGain: 5,
                    dodgeBackDistanceMultiplier: 3.6,
                    dodgeCounterDelay: 0.5,
                    counterDashSpeedMultiplier: 4.8
                }
            },
            skill: {
                name: "타격 연계",
                cooldown: 3,
                description: "적을 공격할수록 숙련도가 1 증가합니다. 공격 후 숙련도 수치만큼 적을 추격해 연타 피해를 주고 이 과정을 반복합니다. 연타 중에는 받는 피해가 50% 감소하고 넉백에 끊기지 않습니다. 숙련도 15 이상에서 연타가 끝나거나 연타를 20번 하면 슬로우 모션 속에서 뒤로 빠진 뒤 간파 돌진으로 200의 피해를 주고 적을 두 배로 강하게 날리며, 발동 후 숙련도는 10으로 재조정됩니다. 기본 회피율은 20%이며 회피 성공 시 잔상을 남기고 뒤로 빠진 뒤 카운터로 숙련도 3을 얻고 연타를 시작합니다.",
                effects: {}
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "kim-gibeom",
            name: "김기범",
            shortName: "기범",
            maxHp: 1400,
            baseAttack: 25,
            speedLabel: "낮음",
            speed: 165,
            colorName: "회색",
            color: "#4b5563",
            textColor: "#ffffff",
            avatarSrc: "images/김기범.png",
            avatarFallbackSrcs: [
                "images/김기범.png"
            ],
            avatarText: "기범",
            traits: ["넉백 무시", "근거리 반사", "체력 반비례 공격력"],
            passive: {
                name: "압도적인 힘",
                description: "그는 단순하지만 압도적인 힘을 가지고 있습니다",
                effects: {
                    maxAttack: 50,
                    reflectRange: 150,
                    reflectedKnockbackSpeed: 1200,
                    wallCrashSlowDuration: 2,
                    wallCrashSlowMultiplier: 0.45,
                    wallCrashCooldown: 0.75,
                    earthquakeWallHits: 5,
                    earthquakeDamage: 90,
                    earthquakeSlowDuration: 2,
                    earthquakeSlowMultiplier: 0.45,
                    appleDropCount: 10,
                    appleHeal: 100,
                    appleDamage: 50,
                    appleSizeMultiplier: 0.8,
                    appleMinSpeed: 260,
                    appleMaxSpeed: 560,
                    appleImageSrc: "images/사과.png",
                    appleImageFallbackSrcs: [
                        "images/사과.png"
                    ]
                }
            },
            skill: {
                name: "압도적인 힘",
                cooldown: 0,
                passiveOnly: true,
                description: "모든 넉백을 무시합니다. 자신의 중심 150 범위 안에서 발생한 넉백 효과는 역으로 반사합니다. 체력이 낮아질수록 공격력이 25에서 최대 50까지 증가합니다. 벽에 5번 부딪히면 땅울림을 일으켜 모두에게 슬로우와 90의 피해를 줍니다.",
                effects: {}
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            immuneToKnockback: true
        },
        {
            id: "kim-sihyeon",
            name: "김시현",
            shortName: "시현",
            maxHp: 690,
            baseAttack: 24,
            speedLabel: "200",
            speed: 200,
            colorName: "검은색",
            color: "#050505",
            textColor: "#ffffff",
            avatarSrc: "images/KIM SIHYEON.PNG",
            avatarText: "시현",
            traits: ["수면", "피해 증폭", "검은 영광"],
            passive: {
                name: "검은 영광",
                description: "10초마다 69% 확률로 검은 기운이 발동합니다. 지속 시간은 3초이며, 이 시간 동안 받는 피해가 69% 감소하고 공격 피해와 이동 속도가 69% 증가합니다. 넉백 효과를 69% 확률로 회피하며, 지속 중에는 패시브 쿨타임이 줄지 않습니다.",
                effects: {
                    interval: 10,
                    chance: 0.69,
                    duration: 3,
                    damageTakenMultiplier: 0.31,
                    damageBonusRatio: 0.69,
                    speedBonus: 0.69,
                    knockbackDodgeChance: 0.69
                }
            },
            skill: {
                name: "하품",
                cooldown: 15,
                description: "주변 적들에게 하품을 날려 4초 동안 수면 상태로 만듭니다. 수면 상태의 적들은 모든 공격에 1.5배 피해를 받습니다. 김시현은 발동 후 첫 피해를 받기 전까지 초당 69씩 회복합니다.",
                effects: {
                    sleepDuration: 4,
                    sleepDamageMultiplier: 1.5,
                    healPerSecond: 69,
                    radiusMultiplier: 3.2
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        }
    ];

    window.HannamBalls = {
        getCharacters() {
            return window.HANNAM_BALLS_CHARACTERS.map((character) => JSON.parse(JSON.stringify(character)));
        },
        getCharacter(id) {
            const character = window.HANNAM_BALLS_CHARACTERS.find((item) => item.id === id);
            return character ? JSON.parse(JSON.stringify(character)) : null;
        }
    };
})();
