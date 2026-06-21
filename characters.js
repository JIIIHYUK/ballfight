(function () {
    window.HANNAM_BALLS_CHARACTERS = [
        {
            id: "kim-suyeong",
            name: "김수영",
            shortName: "수영",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "보통",
            speed: 230,
            colorName: "살색",
            color: "#f0b38f",
            textColor: "#1c1b1b",
            avatarSrc: "images/part1/kim-suyeong/avatar.png",
            avatarText: "수영",
            traits: ["회전 막대", "강한 밀치기", "벽 추가 피해"],
            skill: {
                name: "풍차 돌리기",
                cooldown: 10,
                description: "5초 동안 무언가를 휘두릅니다. 막대가 닿을 수 있는 범위 안의 적을 자동으로 향해 회전하며 타격하고, 적에게 충돌하면 피해를 주고 벽으로 날려보내어 피해를 줍니다.",
                effects: {
                    damage: 10,
                    cooldownDamageTakenMultiplier: 0.75,
                    wallDamage: 25,
                    duration: 5,
                    lengthMultiplier: 1.7,
                    widthMultiplier: 0.3,
                    attachOffsetMultiplier: 0.65,
                    rotationSpeed: 11,
                    autoHitInReach: true,
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
            maxHp: 1000,
            baseAttack: 4,
            speedLabel: "보통",
            speed: 230,
            colorName: "빨간색",
            color: "#dc2626",
            textColor: "#ffffff",
            avatarSrc: "images/part1/gu-minchan/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/gu-minchan/avatar.png",
                "images/part1/gu-minchan/avatar-normalized.png",
                "images/part1/gu-minchan/avatar.png",
                "images/part1/gu-minchan/avatar-full.png",
                "images/part1/gu-minchan/avatar-full.png",
                "images/part1/gu-minchan/avatar-full.png"
            ],
            avatarText: "민찬",
            traits: ["분노", "쿨타임 감소", "배구공 투척"],
            passive: {
                name: "분노",
                description: "3초마다 분노가 1 증가하고, 적과 충돌하거나 피해를 받을 때마다 분노가 1 증가하며 능력의 쿨타임을 줄입니다. 분노가 10회를 초과하면 초과한 분노 1회당 일반 배구공 피해가 1 증가합니다.",
                effects: {
                    interval: 3,
                    collisionRageGain: 1,
                    damageTakenRageGain: 1,
                    cooldownReduction: 0.5,
                    minCooldown: 1
                }
            },
            skill: {
                name: "배구공",
                cooldown: 5,
                description: "배구공을 던져 적에게 피해를 줍니다. 일반 배구공은 적이나 벽에 최대 3회 튕기며 다시 공격할 수 있습니다. 배구공을 4회 적중시키면 잠시 준비한 뒤 스파이크 배구공을 날려 피해를 줍니다.",
                effects: {
                    damage: 10,
                    rageDamageThreshold: 10,
                    damagePerRageOverThreshold: 1,
                    projectileSpeed: 430,
                    projectileDuration: 2.6,
                    maxBounces: 3,
                    bounceHitCooldown: 0.25,
                    sizeMultiplier: 0.85,
                    imageSrc: "images/part1/gu-minchan/volleyball.png",
                    imageFallbackSrcs: [
                        "images/part1/gu-minchan/volleyball.png",
                        "images/part1/gu-minchan/volleyball-fallback.png",
                        "images/part1/gu-minchan/volleyball.png",
                        "images/part1/gu-minchan/volleyball.png"
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
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "보통",
            speed: 230,
            colorName: "연파란색",
            color: "#93c5fd",
            textColor: "#1c1b1b",
            avatarSrc: "images/part1/gwon-yeojun/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/gwon-yeojun/avatar.png",
                "images/part1/gwon-yeojun/avatar.png"
            ],
            avatarText: "여준",
            traits: ["확률 호출", "전체 화면 연출", "ㄱㅈㅇ 벽 던지기"],
            skill: {
                name: "ㄱㅈㅇ 호출",
                cooldown: 15,
                description: "능력을 사용하면 화면 전체가 검게 채워지고 ㄱㅈㅇ 응답 여부가 출력됩니다. 75% 확률로 ㄱㅈㅇ 미응답이 나오면 아무 일도 일어나지 않고, 25% 확률로 ㄱㅈㅇ 응답이 나오면 가장 가까운 적에게 큰 피해를 줍니다. 죽을 피해를 받으면 최대 2회까지 체력을 1 남기고 즉시 호출하며, 이 호출은 50% 확률로 응답합니다.",
                effects: {
                    responseChance: 0.25,
                    fatalResponseChance: 0.5,
                    responseInitialDamage: 300,
                    responseWallDamage: 500,
                    revealDuration: 2,
                    helperImageSrc: "images/part1/gwon-yeojun/helper.png",
                    helperImageFallbackSrcs: [
                        "images/part1/gwon-yeojun/helper.png",
                        "images/part1/gwon-yeojun/helper.png"
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
            id: "kwon-gisang",
            name: "권기상 선생님",
            shortName: "기상",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "보통",
            speed: 230,
            colorName: "파란색",
            color: "#0284c7",
            textColor: "#ffffff",
            avatarSrc: "images/part1/kwon-gisang/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/kwon-gisang/avatar.png"
            ],
            avatarText: "기상",
            traits: ["당구채", "스파이럴", "강한 넉백"],
            passive: {
                name: "선생님들",
                description: "게임 시작 2초 후 즉시 당구채 스파이럴을 사용합니다.",
                effects: {
                    autoCastDelay: 2
                }
            },
            skill: {
                name: "당구채 스파이럴",
                cooldown: 15,
                description: "게임 시작 후 첫 사용은 2초 뒤 가능하며, 이후 15초마다 거대한 당구채가 사방에서 시계방향으로 중앙을 꿰뚫습니다. 30도 간격으로 총 30개의 당구채가 0.2초마다 나오고 맞으면 큰 피해를 입습니다",
                effects: {
                    cueCount: 30,
                    angleStep: 30,
                    spawnInterval: 0.15,
                    warningDuration: 0.15,
                    activeDuration: 0.6,
                    damage: 200,
                    knockbackSpeed: 10000,
                    wallDamage: 100,
                    cueImageSrc: "images/part1/kwon-gisang/cue-transparent.png",
                    cueImageFallbackSrcs: [
                        "images/part1/kwon-gisang/cue-transparent.png"
                    ],
                    cueWidthMultiplier: 1.05,
                    cueLengthMultiplier: 1.75
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "kwon-soonbeom",
            name: "권순범 선생님",
            shortName: "순범",
            maxHp: 1500,
            baseAttack: 0,
            speedLabel: "보통",
            speed: 230,
            colorName: "보라색",
            color: "#7c3aed",
            textColor: "#ffffff",
            avatarSrc: "images/part1/kwon-soonbeom/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/kwon-soonbeom/avatar.png"
            ],
            avatarText: "순범",
            traits: ["절대방어", "블랙홀", "3연속 충격파"],
            passive: {
                name: "선생님들",
                description: "게임 시작 2초 후 즉시 중력 펀치를 사용합니다.",
                effects: {
                    autoCastDelay: 2
                }
            },
            skill: {
                name: "중력 펀치",
                cooldown: 15,
                description: "맵 중앙으로 이동해 최대 15초 동안 절대방어 100개로 차징합니다. 차징이 끝나거나 절대방어가 모두 파괴되면 블랙홀로 모든 유닛을 끌어온 뒤 중심부에 큰 피해를 주고 살아남은 적을 날려보내며 3연속 충격파를 퍼뜨립니다.",
                effects: {
                    shieldHits: 100,
                    maxChargeDuration: 15,
                    centerDiameter: 300,
                    outerDiameterMultiplier: 1.42,
                    blackHoleDiameter: 200,
                    blackHolePullDuration: 1.2,
                    blackHolePullSpeed: 1700,
                    blackHoleContactDamage: 10,
                    blackHoleContactDamageInterval: 0.1,
                    centerDamage: 10000,
                    launchSpeed: 2600,
                    shockwaveCount: 3,
                    shockwaveInterval: 1,
                    shockwaveDamage: 1000,
                    interruptedSelfDamage: 500,
                    blackHoleImageSrc: "images/part1/kwon-soonbeom/blackhole.png",
                    blackHoleImageFallbackSrcs: [
                        "images/part1/kwon-soonbeom/blackhole.png"
                    ]
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "nam-dongyun",
            name: "남동윤",
            shortName: "동윤",
            maxHp: 1000,
            baseAttack: 100,
            speedLabel: "보통",
            speed: 230,
            colorName: "검은색",
            color: "#111827",
            textColor: "#ffffff",
            avatarSrc: "images/part1/nam-dongyun/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/nam-dongyun/avatar.png"
            ],
            avatarText: "동윤",
            traits: ["자퇴 선언", "전투 이탈", "시작 지연"],
            passive: {
                name: "NDY",
                description: "강력합니다",
                effects: {
                    triggerRemainingSeconds: 1,
                    startDelay: 2,
                    overlayDuration: 1.2,
                    removeDelay: 0.65,
                    line: "저 자퇴할래요..."
                }
            },
            skill: {
                name: "NDY",
                cooldown: 0,
                passiveOnly: true,
                description: "NDY입니다."
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "kim-donggyu",
            name: "김동규",
            shortName: "동규",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "베이지",
            color: "#d8c3a5",
            textColor: "#1c1b1b",
            avatarSrc: "images/part2/kim-donggyu/avatar.png?v=20260612-donggyu-photo",
            avatarFallbackSrcs: [
                "images/part2/kim-donggyu/avatar.png?v=20260612-donggyu-photo"
            ],
            avatarText: "동규",
            traits: ["치명타", "모드 전환", "자가제세동"],
            passive: {
                name: "배그 마스터",
                description: "모든 피해에 20% 확률로 2배 치명타가 발동합니다. 스킬을 사용할 때마다 수류탄, AR, 12 gauge, SR 순서로 모드가 전환됩니다. 체력이 200 감소할 때마다 연막작전을 사용합니다. 전투당 한 번, 처음 사망 시 400의 임시 체력으로 자가제세동을 시작하며, 성공하면 400의 체력으로 부활합니다.",
                effects: {
                    criticalChance: 0.2,
                    criticalMultiplier: 2,
                    modes: ["수류탄", "AR", "12 gauge", "SR"],
                    damageEscapeThreshold: 200,
                    damageEscapeInvulnerableDuration: 1,
                    selfReviveDuration: 3,
                    selfReviveTempHp: 400,
                    selfReviveHp: 400
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
                    grenadeImageSrc: "images/part2/kim-donggyu/grenade.png",
                    grenadeImageFallbackSrcs: [
                        "images/part2/kim-donggyu/grenade.png"
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
                    srDamage: 600,
                    targetingImageSrc: "images/part2/kim-donggyu/targeting.png",
                    targetingImageFallbackSrcs: [
                        "images/part2/kim-donggyu/targeting.png"
                    ],
                    knifeSpeed: 300,
                    knifeBleedDamage: 100,
                    knifeBleedDuration: 3,
                    knifeImageSrc: "images/part2/kim-donggyu/knife.png",
                    knifeImageFallbackSrcs: [
                        "images/part2/kim-donggyu/knife.png"
                    ]
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "admin-kim-donggyu",
            name: "관리자 김동규",
            shortName: "관리자",
            maxHp: 900,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "관리자 베이지",
            color: "#d8c3a5",
            textColor: "#1c1b1b",
            avatarSrc: "images/part2/admin-kim-donggyu/avatar.jpeg",
            avatarFallbackSrcs: [
                "images/part2/admin-kim-donggyu/avatar.jpeg",
                "images/part2/admin-kim-donggyu/avatar.jpeg"
            ],
            avatarText: "관리",
            selectable: false,
            adminSelectable: true,
            traits: ["터렛", "공중지원", "각성"],
            passive: {
                name: "터렛 설치",
                description: "등장 시 맵 모서리에 터렛을 설치하고, 3초 후 각 변의 중점에도 터렛을 추가합니다. 터렛은 초당 10발을 발사하고 100발 사용 후 2초 동안 과열됩니다. 5초마다 공격 헬기를 호출하며, 체력이 감소하면 충격파와 헬기 호출을 발동합니다.",
                effects: {
                    turretImageSrc: "images/part2/admin-kim-donggyu/turret.png",
                    turretImageFallbackSrcs: [
                        "images/part2/admin-kim-donggyu/turret.png",
                        "images/part2/admin-kim-donggyu/turret.png",
                        "images/part2/admin-kim-donggyu/turret.png"
                    ],
                    turretHp: 100,
                    turretShotsBeforeOverheat: 100,
                    turretOverheatDuration: 2,
                    turretFireRate: 10,
                    turretBulletDamage: 8,
                    turretBulletSpeed: 2000,
                    turretBulletLengthMultiplier: 2.8,
                    turretBulletThicknessMultiplier: 0.55,
                    midTurretDelay: 3,
                    turretCriticalChance: 0.2,
                    turretCriticalMultiplier: 2,
                    helicopterInterval: 5,
                    helicopterHp: 200,
                    helicopterSpeed: 150,
                    helicopterPreferredDistance: 200,
                    helicopterBulletRate: 5,
                    helicopterBulletDamage: 10,
                    helicopterBulletSpeed: 1200,
                    helicopterMissileInterval: 3,
                    helicopterMissileCount: 6,
                    helicopterMissileLaunchInterval: 0.12,
                    helicopterMissileSpeed: 600,
                    helicopterMissileTurnRate: 4.2,
                    helicopterMissileDamage: 30,
                    helicopterMissileExplosionDiameter: 30,
                    helicopterImageSrc: "images/part2/admin-kim-donggyu/helicopter.png",
                    helicopterImageFallbackSrcs: [
                        "images/part2/admin-kim-donggyu/helicopter.png",
                        "images/part2/admin-kim-donggyu/helicopter.png"
                    ],
                    damageShockwaveThreshold: 100,
                    damageShockwaveKnockback: 700,
                    damageHelicopterThreshold: 200
                }
            },
            skill: {
                name: "공중지원",
                cooldown: 3,
                description: "맵 중앙으로 이동해 방벽을 소환하고 좌우에 타겟을 표시한 뒤 2초 후 아래에서부터 폭격합니다.",
                effects: {
                    barrierSize: 150,
                    barrierHp: 200,
                    barrierBonusHp: 250,
                    targetsPerSide: 9,
                    empoweredTargetMultiplier: 2,
                    entryTargetMultiplier: 2,
                    explosionCountGrowthPerUse: 0.5,
                    innerDiameter: 50,
                    outerDiameter: 150,
                    innerDamage: 225,
                    outerDamage: 75,
                    explosionKnockbackSpeed: 950,
                    warningDuration: 2,
                    planeDuration: 0.55,
                    explosionStepDelay: 0.08,
                    planeImageSrc: "images/part2/admin-kim-donggyu/plane.png",
                    planeImageFallbackSrcs: [
                        "images/part2/admin-kim-donggyu/plane.png",
                        "images/part2/admin-kim-donggyu/plane.png",
                        "images/part2/admin-kim-donggyu/plane.png"
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
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "노란색",
            color: "#facc15",
            textColor: "#1c1b1b",
            avatarSrc: "images/part1/kim-junsu/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/kim-junsu/avatar.png"
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
                description: "1초마다 가장 먼 적에게 10의 힐을 주고, 가장 가까운 적에게 20의 피해를 줍니다. 같은 대상에게 5번째 공격을 맞추면 20의 추가 피해를 줍니다.",
                effects: {
                    heal: 10,
                    damage: 20,
                    transferChance: 0.2,
                    repeatedHitThreshold: 5,
                    repeatedHitBonusDamage: 20,
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
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "회색",
            color: "#6b7280",
            textColor: "#ffffff",
            avatarSrc: "images/part1/kim-jaeyoon/avatar.png",
            avatarText: "재윤",
            traits: ["악령 소환", "영역전개", "하수인"],
            passive: {
                name: "악령 소환",
                description: "김재윤은 평타따위를 치지 않습니다. 8초마다 체력 80, 공격력 6을 지니고 김재윤의 절반 크기인 악령을 소환합니다. 필드에 악령은 최대 5개까지 존재할 수 있으며, 악령은 죽을 때 주변 100거리의 적에게 10의 피해를 주는 폭발을 합니다.",
                effects: {
                    interval: 8,
                    maxWraiths: 5,
                    wraithHp: 80,
                    wraithAttack: 6,
                    wraithSpeed: 250,
                    wraithSizeMultiplier: 0.5,
                    explosionRadius: 100,
                    explosionDamage: 10
                }
            },
            skill: {
                name: "영역전개",
                cooldown: 9,
                description: "영역을 20초 동안 전개합니다. 영역 안팎은 서로 넘어갈 수 없으며, 죽은 캐릭터가 있다면 하수인으로 부활시킵니다. 영역 내부 적 1명당 악령 3마리를 소환하고, 악령은 영역 내부 적에게 골고루 배정되어 추적합니다. 영역 내 악령 2마리가 죽을 때마다 악령 1마리를 즉시 추가 소환합니다. 영역 안의 김재윤과 하수인은 받는 피해가 80% 감소합니다. 부활체는 자신의 원래 스킬 쿨타임 구간에 따라 8/10/12초마다 스킬을 사용합니다. 영역 붕괴 시 강제 사망하지 않고 영역 내부 유닛은 밖으로 밀려납니다.",
                effects: {
                    duration: 12,
                    radius: 300,
                    cinematicLineDuration: 1,
                    revivedHp: 150,
                    revivedFirstSkillCooldownReduction: 6,
                    domainWraithsPerEnemy: 3,
                    wraithDeathsPerReplacement: 2,
                    domainDamageTakenMultiplier: 0.2,
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
            id: "heian-kim-jaeyoon",
            name: "헤이안 김재윤",
            shortName: "헤이안",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "흑금색",
            color: "#7c2d12",
            textColor: "#ffffff",
            avatarSrc: "images/part1/kim-jaeyoon/avatar.png",
            avatarText: "平",
            selectable: false,
            adminSelectable: true,
            traits: ["조건부", "마허라", "적응"],
            passive: {
                name: "마허라의 법진",
                description: "피해를 받으면 8초마다 적을 밀어내며 악령 4명을 발산합니다. 마허라 사망 후에는 같은 공격 5회, 조복 후에는 같은 공격 6회 적중시 적응하는 패시브로 교체됩니다. 죽기 직전 체력을 1 남기고 범위와 대미지 감소 없는 세계참을 차징합니다.",
                effects: {
                    damagePulseCooldown: 20,
                    damagePulseKnockback: 1200,
                    damagePulseWraiths: 4,
                    wraithHp: 80,
                    wraithAttack: 6,
                    wraithSpeed: 250,
                    wraithSizeMultiplier: 0.5,
                    maxWraiths: 8,
                    explosionRadius: 100,
                    explosionDamage: 10,
                    adaptedDamageTakenMultiplier: 1,
                    adaptationHitsRequired: 5,
                    tamedAdaptationHitsRequired: 6,
                    cleaveChargeDuration: 3,
                    cleaveDamage: 300,
                    cleaveRange: 1120,
                    cleaveAngleDegrees: 70,
                    miniCleaveAdaptationInterval: 10,
                    miniCleaveRangeMultiplier: 0.5
                }
            },
            skill: {
                name: "조복의 준비",
                cooldown: 10,
                description: "10초마다 준비를 1 쌓습니다. 1단계는 피해감소 30%, 2단계는 마허라 소환, 3단계는 피해반사 50%, 4단계는 마허라를 조복합니다. 조복 이후에는 피해감소가 사라지고, 4회 충전마다 1.5초 동안 소형 세계참을 준비해 절반 범위에 150 피해를 줍니다.",
                effects: {
                    maxGauge: 4,
                    gaugeDamageTakenMultiplier: 0.7,
                    summonGauge: 2,
                    reflectGauge: 3,
                    reflectRatio: 0.5,
                    tameGauge: 4,
                    postTameMiniCleaveGauge: 4,
                    postTameMiniCleaveChargeDuration: 1.5,
                    postTameMiniCleaveRangeMultiplier: 0.5,
                    postTameMiniCleaveDamage: 150,
                    mahoragaHp: 700,
                    mahoragaAttack: 30,
                    mahoragaSpeed: 300,
                    mahoragaSizeMultiplier: 1.15,
                    mahoragaSteerCorrection: 0.6,
                    mahoragaCollisionKnockback: 1000,
                    mahoragaHitPause: 0.2,
                    tamedHitPause: 0.2,
                    fanSlashHitInterval: 3,
                    fanSlashRange: 180,
                    fanSlashAngleDegrees: 180,
                    fanSlashDamage: 50,
                    fanSlashKnockback: 2000,
                    mahoragaImageSrc: "images/part1/heian-kim-jaeyoon/mahoraga.png",
                    mahoragaImageFallbackSrcs: [
                        "images/part1/heian-kim-jaeyoon/mahoraga.png"
                    ],
                    wheelImageSrc: "images/part1/heian-kim-jaeyoon/wheel.webp"
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
            maxHp: 1000,
            baseAttack: 10,
            speedLabel: "240",
            speed: 240,
            colorName: "주황색",
            color: "#f97316",
            textColor: "#1c1b1b",
            avatarSrc: "images/part2/ji-taehyeok/avatar.png",
            avatarFallbackSrcs: [
                "images/part2/ji-taehyeok/avatar.png"
            ],
            avatarText: "태혁",
            traits: ["카페인 과다", "3점 슛", "덩크"],
            passive: {
                name: "카페인 과다",
                description: "맵에 카페인이 하나씩 설치됩니다. 카페인을 먹으면 최대 체력이 100 감소하는 대신 초당 회복 10과 이동속도 10을 얻습니다. 최대 체력은 최소 150까지 감소하고 초당 회복은 최대 50까지 중첩됩니다. 최대 체력이 더 줄지 않는 상태에서 카페인을 먹으면 10% 확률로 149 피해를 입습니다. 3초 동안 카페인을 먹지 못하면 자동으로 1회 섭취합니다.",
                effects: {
                    caffeineSpawnInterval: 1,
                    caffeineSpawnRadius: 400,
                    caffeineSizeMultiplier: 0.8,
                    caffeineImageSrc: "images/part2/ji-taehyeok/caffeine.png",
                    caffeineImageFallbackSrcs: [
                        "images/part2/ji-taehyeok/caffeine.png"
                    ],
                    caffeineAutoConsumeDelay: 3,
                    maxHpLoss: 100,
                    minMaxHp: 150,
                    minHpBackfireChance: 0.1,
                    minHpBackfireDamage: 149,
                    regenPerCaffeine: 10,
                    maxRegenPerSecond: 50,
                    speedPerCaffeine: 10,
                    caffeineShotBonusInterval: 7,
                    caffeineAimReductionPerBonus: 0.3
                }
            },
            skill: {
                name: "농구가 하고 싶어요",
                cooldown: 10,
                description: "10초마다 맵에서 잠시 사라져 3점 슛을 두 번 쏘고 덩크로 복귀합니다. 카페인 7회마다 3점 슛 횟수가 1회 증가하고 준비 시간이 30% 감소하며, 한 스킬당 3점 슛은 최대 4회입니다.",
                effects: {
                    skillInterval: 10,
                    threePointShots: 2,
                    maxThreePointShots: 4,
                    aimDuration: 2,
                    ballFlightDuration: 0.5,
                    delayBetweenShots: 1,
                    warningDiameter: 125,
                    shockwaveDiameter: 500,
                    warningDamage: 150,
                    shockwaveDamage: 50,
                    ballDiameter: 125,
                    basketballImageSrc: "images/part2/ji-taehyeok/basketball.png",
                    basketballImageFallbackSrcs: [
                        "images/part2/ji-taehyeok/basketball.png"
                    ],
                    dunkSpeed: 1000,
                    dunkDamage: 100,
                    dunkShockwaveDamage: 10,
                    dunkMaxDuration: 2,
                    dunkBallSizeMultiplier: 0.72
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "developer-ji-taehyeok",
            name: "관리자 지태혁",
            shortName: "관리자",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "240",
            speed: 240,
            colorName: "초록색",
            color: "#22c55e",
            textColor: "#ffffff",
            avatarSrc: "images/part2/ji-taehyeok/admin-avatar.png",
            avatarFallbackSrcs: [
                "images/part2/ji-taehyeok/admin-avatar.png",
                "images/part2/ji-taehyeok/avatar.png"
            ],
            avatarText: "관리",
            selectable: false,
            adminSelectable: true,
            traits: ["드론 소환", "대각선 레이저", "관리자 부활"],
            passive: {
                name: "드론 소환",
                description: "2초마다 자신의 주위를 도는 체력 150의 드론을 소환합니다. 주변 드론이 4개 이상이면 가장 가까운 적에게 드론들을 돌진시켜 폭발시키며, 드론은 1초마다 랜덤으로 통합 너프, 통합 버프, 대미지 중 하나를 사용합니다. 오버클럭 중에는 즉시 드론 6개를 배치하고 60도 간격으로 회전시키며, 자동 드론 생성과 폭격은 멈춥니다.",
                effects: {
                    droneInterval: 1,
                    droneHp: 600,
                    droneOrbitRadius: 41,
                    droneOrbitSlots: 4,
                    droneOrbitSpeed: 1.8,
                    droneSkillCooldown: 0.6,
                    droneOverclockSkillCooldown: 0.1,
                    droneOverclockExplosionThreshold: 8,
                    droneOverclockDroneCount: 6,
                    droneOverclockOrbitSlots: 6,
                    droneOverclockDuration: 5,
                    droneLaunchThreshold: 4,
                    droneLaunchSpeed: 760,
                    droneExplosionDiameter: 200,
                    droneExplosionDamage: 50,
                    droneSizeMultiplier: 0.7,
                    droneImageSrc: "images/part2/ji-taehyeok/drone.png",
                    droneImageFallbackSrcs: [
                        "images/part2/ji-taehyeok/drone.png"
                    ],
                    droneNerfMaxHpLoss: 50,
                    droneNerfDamage: 10,
                    droneBuffHeal: 100,
                    droneBuffMaxHpGain: 50,
                    droneNerf2Damage: 10,
                    droneNerf2Duration: 2,
                    droneNerf2SlowMultiplier: 0.5,
                    droneDamage: 30,
                    reviveHp: 500,
                    reviveDroneCount: 2
                }
            },
            skill: {
                name: "프로그래밍",
                cooldown: 15,
                description: "양 대각선 레이저와 십자가 레이저를 번갈아 사용합니다. 경고 범위를 표시한 뒤 레이저를 발사하며, 레이저가 드론에 맞으면 다음 드론 스킬 효과를 두 배로 강화하고, 적에게 맞으면 최대체력 50 감소, 스킬 쿨타임 초기화, 2초 동안 이동속도 및 쿨타임 감소속도 50% 감소, 15 피해를 줍니다. 게임에서 1회 사망하면 관리자 권한으로 체력 500으로 부활하고 드론 2개를 즉시 소환합니다.",
                effects: {
                    warningDuration: 0.75,
                    laserDuration: 0.35,
                    laserWidth: 120,
                    codeMaxHpLoss: 10,
                    codeDamage: 15,
                    codeSlowDuration: 2,
                    codeSlowMultiplier: 0.5
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
            maxHp: 900,
            baseAttack: 0,
            speedLabel: "280",
            speed: 280,
            colorName: "파란색",
            color: "#2563eb",
            textColor: "#ffffff",
            avatarSrc: "images/part1/lee-dohyun/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/lee-dohyun/avatar.png"
            ],
            avatarText: "도현",
            traits: ["오프사이드", "반칙", "충돌 쿨감"],
            passive: {
                name: "라인 브레이크",
                description: "적과 부딪힐 때마다 현재 스킬 쿨타임이 1초 감소합니다.",
                effects: {
                    collisionCooldownReduction: 1
                }
            },
            skill: {
                name: "오프사이드",
                cooldown: 12,
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
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "300",
            speed: 300,
            colorName: "미디엄 로열 블루",
            color: "#4169e1",
            textColor: "#ffffff",
            avatarSrc: "images/part1/yu-yejun/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/yu-yejun/avatar.png"
            ],
            avatarText: "예준",
            traits: ["동물 특공대", "야옹이", "왈왈이"],
            passive: {
                name: "동물 특공대",
                description: "유예준, 왈왈이, 야옹이 중 하나가 적에게 부딪히면 나머지 기물이 날아와 같은 적에게 40의 피해를 줍니다. 야옹이는 20의 추가 피해와 10초 동안 초당 10의 출혈을, 왈왈이는 2초 동안 90% 슬로우를, 유예준은 동물 특공대 쿨타임 2초 감소와 야옹이/왈왈이 지속시간 1초 증가를 적용합니다.",
                effects: {
                    cooldown: 1.5,
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
                cooldown: 5,
                description: "야옹이와 왈왈이를 필드에 소환합니다. 두 기물은 유예준과 같은 이동속도와 같은 체력, 절반의 공격력을 지닙니다. 10초 후 유예준에게 돌아가 사라지며 각자의 남은 체력 10%만큼 유예준을 회복합니다. 야옹이와 왈왈이가 필드에 있는 동안 유예준이 받는 피해 90%를 감소시키고 그 피해는 소환수가 나눠 받으며, 이 스킬의 쿨타임은 감소하지 않습니다.",
                effects: {
                    summonDuration: 10,
                    petSizeMultiplier: 0.8,
                    petHpRatio: 1,
                    petDamageShareRatio: 0.9,
                    returnHealRatio: 0.1,
                    catImageSrc: "images/part1/yu-yejun/cat.png",
                    catImageFallbackSrcs: [
                        "images/part1/yu-yejun/cat.png"
                    ],
                    dogImageSrc: "images/part1/yu-yejun/dog.png",
                    dogImageFallbackSrcs: [
                        "images/part1/yu-yejun/dog.png"
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
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "280",
            speed: 280,
            colorName: "붉은색",
            color: "#ef4444",
            textColor: "#ffffff",
            avatarSrc: "images/part1/lee-taehwan/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/lee-taehwan/avatar.png"
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
                cooldown: 8,
                description: "5회 피해가 들어오는 공격을 방어하는 보호막을 생성하고 차징 상태에 진입합니다. 차징 중에는 축구공의 궤적이 흐릿한 빨간 직사각형으로 표시되며 방향은 더 천천히 전환되고 쿨타임이 감소하지 않습니다. 보호막이 1회 깨질 때마다 차징 시간이 즉시 1초 추가되며, 보호막 5회가 모두 깨지거나 차징이 20초에 도달하면 공을 강하게 차 공에 맞은 적들을 공의 도착지점까지 날려버리고, 차징시간(초) * (30 + 앵클브레이크 횟수)의 피해를 줍니다.",
                effects: {
                    shieldHits: 5,
                    maxChargeDuration: 20,
                    chargeTimeBonusPerShieldBreak: 1,
                    chargeTurnLerp: 0.035,
                    trajectoryWidthMultiplier: 1.755,
                    kickProjectileSpeed: 2500,
                    ballImageSrc: "images/part1/lee-taehwan/soccer-ball.png",
                    ballImageFallbackSrcs: [
                        "images/part1/lee-taehwan/soccer-ball.png"
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
            maxHp: 1000,
            baseAttack: 20,
            speedLabel: "1.25배",
            speed: 287.5,
            colorName: "보라색",
            color: "#7c3aed",
            textColor: "#ffffff",
            avatarSrc: "images/part1/kang-inchan/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/kang-inchan/avatar.png"
            ],
            avatarText: "인찬",
            traits: ["숙련도", "연타", "회피 카운터"],
            passive: {
                name: "강력한 타격",
                description: "강인찬은 강력한 타격기를 사용하며 이는 중첩될 수 있습니다. 또한 회피한 후 카운터를 언제나 준비하고 있습니다.",
                effects: {
                    contactPushSpeed: 1000,
                    masteryGainOnBasic: 1,
                    comboDamage: 8,
                    comboHealPerHit: 1,
                    comboInterval: 0.15,
                    comboDashSpeedMultiplier: 2.8,
                    comboDamageTakenMultiplier: 0.5,
                    comboTriggerRadius: 100,
                    comboTriggerMasteryGain: 1,
                    comboFinisherHitThreshold: 20,
                    finisherMasteryThreshold: 15,
                    finisherSlowDuration: 1.2,
                    finisherSlowMultiplier: 0.35,
                    finisherBackDistance: 700,
                    finisherChargeDelay: 0.42,
                    finisherDamage: 200,
                    finisherExtraDamagePerMasteryOverThreshold: 2,
                    finisherHealPerMasteryOverThreshold: 1,
                    finisherKnockbackSpeed: 8000,
                    finisherWallDamage: 10,
                    finisherResetMastery: 5,
                    dodgeChance: 0.5,
                    dodgeMasteryGain: 5,
                    dodgeBackDistanceMultiplier: 3.6,
                    dodgeCounterDelay: 0.5,
                    counterDashSpeedMultiplier: 4.8
                }
            },
            skill: {
                name: "타격 연계",
                cooldown: 3,
                description: "강인찬 중심 100 범위의 흐릿한 원 안에 적이 들어오면 연타를 시작합니다. 적을 공격할수록 숙련도가 1 증가합니다. 공격 후 숙련도 수치만큼 적을 추격해 연타 피해를 주고 이 과정을 반복합니다. 연타 중에는 받는 피해가 50% 감소하고 넉백에 끊기지 않습니다. 숙련도 15 이상이 되면 즉시 간파를 사용하며, 15를 초과한 숙련도 1당 2의 추가 피해를 주고 같은 수치만큼 회복합니다. 발동 후 숙련도는 5로 재조정됩니다. 기본 회피율은 50%이며 회피 성공 시 잔상을 남기고 뒤로 빠진 뒤 카운터로 숙련도 3을 얻고 연타를 시작합니다.",
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
            maxHp: 2000,
            baseAttack: 25,
            speedLabel: "낮음",
            speed: 165,
            colorName: "회색",
            color: "#4b5563",
            textColor: "#ffffff",
            avatarSrc: "images/part2/kim-gibeom/avatar.png",
            avatarFallbackSrcs: [
                "images/part2/kim-gibeom/avatar.png"
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
                    earthquakeDamage: 50,
                    earthquakeSlowDuration: 2,
                    earthquakeSlowMultiplier: 0.45,
                    appleDropCount: 10,
                    appleHeal: 100,
                    appleDamage: 50,
                    appleSizeMultiplier: 0.8,
                    appleMinSpeed: 260,
                    appleMaxSpeed: 560,
                    appleImageSrc: "images/part2/kim-gibeom/apple.png",
                    appleImageFallbackSrcs: [
                        "images/part2/kim-gibeom/apple.png"
                    ]
                }
            },
            skill: {
                name: "압도적인 힘",
                cooldown: 0,
                passiveOnly: true,
                description: "모든 넉백을 무시합니다. 자신의 중심 150 범위 안에서 발생한 넉백 효과는 역으로 반사합니다. 체력이 낮아질수록 공격력이 25에서 최대 50까지 증가합니다. 벽에 5번 부딪히면 땅울림을 일으켜 모두에게 슬로우와 50의 피해를 줍니다.",
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
            maxHp: 1200,
            baseAttack: 24,
            speedLabel: "200",
            speed: 200,
            colorName: "검은색",
            color: "#050505",
            textColor: "#ffffff",
            avatarSrc: "images/part1/kim-sihyeon/avatar.png",
            avatarText: "시현",
            traits: ["수면", "피해 증폭", "검은 영광", "어둠"],
            passive: {
                name: "검은 영광",
                description: "10초마다 69% 확률로 검은 기운이 발동합니다. 지속 시간은 3초이며, 이 시간 동안 받는 피해가 69% 감소하고 공격 피해와 이동 속도가 69% 증가합니다. 넉백 효과를 69% 확률로 회피하며, 지속 중에는 패시브 쿨타임이 줄지 않습니다. 검은 영광 중 피해를 준 적에게 어둠 게이지를 쌓고, 2회가 되면 대상에게 150 피해를 주며 십자가로 퍼진 어둠이 50 피해와 어둠 1회를 부여합니다.",
                effects: {
                    interval: 10,
                    chance: 0.69,
                    duration: 3,
                    damageTakenMultiplier: 0.31,
                    damageBonusRatio: 0.69,
                    speedBonus: 0.69,
                    knockbackDodgeChance: 0.69,
                    darknessStacksRequired: 2,
                    darknessBurstDamage: 150,
                    darknessCrossDamage: 50,
                    darknessCrossWidthMultiplier: 0.84
                }
            },
            skill: {
                name: "하품",
                cooldown: 10,
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
        },
        {
            id: "mega-tanker-kim-gibeom",
            name: "메가 탱커 김기범",
            shortName: "메가기범",
            maxHp: 300,
            baseAttack: 40,
            speedLabel: "130",
            speed: 130,
            colorName: "강철 회색",
            color: "#374151",
            textColor: "#ffffff",
            avatarSrc: "images/part2/mega-tanker-kim-gibeom/avatar.png",
            avatarFallbackSrcs: [
                "images/part2/mega-tanker-kim-gibeom/avatar.png"
            ],
            avatarText: "메가",
            selectable: false,
            adminSelectable: true,
            traits: ["조건부", "아군 피해감소", "투포환"],
            passive: {
                name: "때리면 아파요",
                description: "체력 100 감소마다 공격력이 10 증가합니다. 기본 공격력은 40입니다. 아군 전체가 받는 피해를 50% 줄이고, 이 효과로 감소한 피해량의 50%를 자신이 대신 받습니다.",
                effects: {
                    attackGainPerMissingHp: 10,
                    missingHpStep: 100,
                    allyDamageTakenMultiplier: 0.5,
                    redirectedDamageRatio: 0.5
                }
            },
            skill: {
                name: "투포환 마스터",
                cooldown: 16,
                description: "스킬 발동 후 처음 부딪힌 적을 0.5초 동안 붙잡아 자신의 주위로 한 바퀴 돌린 뒤 임의의 방향으로 던집니다. 던져진 적은 다른 공을 관통하며 벽에 부딪히면 88 피해를 받고 4초 동안 기절하며 스킬과 패시브가 먹통이 됩니다. 기절 중 받는 피해는 1.5배가 됩니다.",
                effects: {
                    readyDuration: 4,
                    throwWindupDuration: 0.5,
                    throwOrbitTurns: 1,
                    throwOrbitRadiusMultiplier: 1.15,
                    throwSpeed: 4200,
                    wallDamage: 88,
                    stunDuration: 4,
                    stunnedDamageMultiplier: 1.5
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            immuneToKnockback: true
        },
        {
            id: "lee-sungwon",
            name: "이성원",
            shortName: "성원",
            maxHp: 1000,
            baseAttack: 11,
            speedLabel: "230",
            speed: 230,
            colorName: "짙은 남색",
            color: "#1e3a8a",
            textColor: "#ffffff",
            avatarSrc: "images/part2/lee-sungwon/avatar.png",
            avatarFallbackSrcs: [
                "images/part2/lee-sungwon/avatar-alt.png"
            ],
            avatarText: "성원",
            traits: ["콤보", "각성", "낙인"],
            passive: {
                name: "콤보 / 각성",
                description: "게임 시작 시 콤보 상태입니다. 충돌 피해로 콤보를 쌓고 25콤보에 도달하면 영구 각성합니다. 콤보 상태에서는 단계별 이동속도, 피해감소, 흡혈, 경직, 감지 범위 효과를 얻고, 각성 상태에서는 공격력과 치명타가 강화되며 적에게 낙인을 부여합니다.",
                effects: {
                    awakenThreshold: 25,
                    comboExpireSeconds: 2,
                    comboSaveChance: 0.2,
                    comboSaveLoss: 2,
                    markRepeatHits: 6,
                    markedDamageBonus: 0.2,
                    combo3SpeedBonus: 0.1,
                    combo3DamageTakenMultiplier: 0.9,
                    combo5AttackBonus: 0.2,
                    combo5LifestealRatio: 0.4,
                    combo10StunDuration: 0.7,
                    combo10CooldownSlowDuration: 2,
                    combo10CooldownSlowMultiplier: 0.4,
                    combo15AuraRadiusMultiplier: 1.6,
                    combo15SpeedBonus: 0.1,
                    combo15HitGain: 2,
                    combo15AuraGain: 1,
                    combo15AuraCooldown: 1.1,
                    awakenHealMissingRatio: 0.6,
                    awakenAttackMultiplier: 3,
                    awakenCriticalChance: 0.3,
                    awakenCriticalMultiplier: 2,
                    brandDamage: 60,
                    brandShield: 40,
                    maxBrands: 2,
                    stolenCooldownMultiplier: 2.5
                }
            },
            skill: {
                name: "느금마 브레스",
                cooldown: 18,
                description: "필드의 모든 적에게 개별 브레스를 발사합니다. 각 대상은 독립적으로 80% 확률로 0피해, 20% 확률로 444피해를 받습니다. 콤보 상태에서는 444 피해를 입힌 대상 수에 따라 콤보가 증가하고, 각성 상태에서는 치명타와 추가 발동 확률이 적용됩니다.",
                effects: {
                    hitChance: 0.2,
                    damage: 444,
                    awakenedCriticalChance: 0.3,
                    awakenedCriticalMultiplier: 2,
                    comboGainPerHit: 2,
                    awakenedRepeatChancePerHit: 0.1,
                    maxRepeatCasts: 3,
                    lineDuration: 0.42
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "park-sungbin",
            name: "박성빈",
            shortName: "성빈",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "분홍과 붉은색 사이",
            color: "#f43f5e",
            textColor: "#ffffff",
            avatarSrc: "images/part1/park-sungbin/avatar.png",
            avatarFallbackSrcs: [
                "images/part1/park-sungbin/avatar.png"
            ],
            avatarText: "성빈",
            traits: ["질주", "회전베기", "참격"],
            passive: {
                name: "연속 질주",
                description: "6초마다 상대를 향해 7번 질주하고 회전베기를 사용합니다. 질주 중에는 충돌 판정을 무시하지만 무적이 아닌 66% 피해감소 상태가 됩니다. 질주 중 적과 부딪히면 베기를 사용해 액티브 쿨타임을 1.5초 줄이고, 회전베기는 액티브 쿨타임을 1초 줄입니다. 같은 상대에게 다시 회전베기를 사용해야 하는 경우 그 회전베기의 모든 피해는 75% 감소합니다.",
                effects: {
                    interval: 6,
                    rushCount: 7,
                    blossomSize: 28,
                    blossomImageSrc: "images/part1/park-sungbin/blossom-transparent.png?v=20260615-sakura-transparent",
                    blossomImageFallbackSrcs: [
                        "images/part1/park-sungbin/blossom.jpeg?v=20260615-sakura-jpeg"
                    ],
                    rushSpeed: 3000,
                    rushOpacity: 0.5,
                    slashDamage: 20,
                    slashCooldownReduction: 1.5,
                    spinDamage: 40,
                    rushDamageTakenMultiplier: 0.34,
                    spinCooldownReduction: 1,
                    spinDiameter: 120,
                    repeatedTargetDamageMultiplier: 0.25,
                    spinStunDuration: 0.1,
                    slashWidth: 34,
                    slashLength: 118,
                    rushAfterimageInterval: 0.028,
                    rushAfterimageLifetime: 650,
                    rushLineInterval: 0.03,
                    rushLineDuration: 0.85
                }
            },
            skill: {
                name: "난무",
                cooldown: 40,
                description: "아래쪽에서 2초 동안 준비하며 대표색 사각형으로 돌진 범위를 표시합니다. 이후 4000의 속도로 반대편까지 돌진하고, 20% 더 넓어진 범위 안에 있던 적에게 기본 회전베기보다 범위와 피해가 50% 증가한 강화 회전베기를 사용한 뒤 1초 동안 이동속도를 99% 감소시킵니다. 이후 따라오는 참격은 유지됩니다.",
                effects: {
                    prepareDuration: 2,
                    dashRangeWidthRatio: 0.3,
                    rushSpeed: 4000,
                    enhancedSpinDiameterMultiplier: 1.5,
                    enhancedSpinDamageMultiplier: 1.5,
                    enhancedSlowMultiplier: 0.01,
                    enhancedSlowDuration: 1,
                    enhancedSlashDamage: 100,
                    fixedSpeed: 10,
                    fixedSpeedDuration: 1,
                    risingSlashDamage: 20,
                    risingSlashDuration: 0.8,
                    risingSlashWidthRatio: 0.32,
                    risingSlashCount: 27,
                    risingSlashLengthRatio: 0.45,
                    risingSlashThickness: 24,
                    risingSlashSpawnInterval: 0.03,
                    risingSlashLifeDuration: 0.34,
                    risingSlashAngleSpread: 1.35,
                    rushAfterimageInterval: 0.024,
                    rushAfterimageLifetime: 460,
                    rushLineInterval: 0.024,
                    rushLineDuration: 0.72
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "protest-leader-gu-minchan",
            name: "시위 지도자 구민찬",
            shortName: "시위장",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "시위 레드",
            color: "#b91c1c",
            textColor: "#ffffff",
            avatarSrc: "images/part2/protest-leader-gu-minchan/avatar.jpeg",
            avatarFallbackSrcs: ["images/part2/protest-leader-gu-minchan/avatar.jpeg"],
            avatarText: "시위",
            selectable: false,
            adminSelectable: true,
            traits: ["관리자 전용", "깃발", "시위"],
            passive: {
                name: "자유를 위하여",
                description: "1초마다 주변 225 범위에 적이 있으면 깃발 하나를 더 빠르게 한 바퀴 돌립니다. 깃발에 맞은 적은 70 피해를 받고 시위 지도자 구민찬의 반대 방향으로 700 넉백되며, 타격한 적 1명당 시위 시작 쿨타임이 0.5초 감소합니다.",
                effects: {
                    interval: 1,
                    detectionRadius: 225,
                    flagLength: 125,
                    flagSpinDuration: 0.3,
                    flagImageSrc: "images/part2/protest-leader-gu-minchan/flag.png",
                    flagImageFallbackSrcs: ["images/part2/protest-leader-gu-minchan/flag.png"],
                    damage: 70,
                    cooldownReductionPerHit: 0.5,
                    knockAwaySpeed: 700
                }
            },
            skill: {
                name: "시위 시작",
                cooldown: 20,
                description: "8초 동안 중앙 150 폭을 제외한 위아래를 붉은 장판으로 덮습니다. 아군은 즉시 스킬을 사용하고 시위 동안 스킬 쿨타임이 66% 감소된 상태로 운용되며, 받는 피해가 20% 감소하고 초당 5 회복하며 피해량이 50% 증가합니다. 장판 위 적은 쿨타임 감소가 40% 느려지고 이동속도가 10으로 고정되며, 한 적은 시위 대상으로 지정되어 스킬과 패시브가 금제되고 1.5배 피해를 받습니다. 시위 시작 유지 중 구민찬의 스킬 쿨타임은 자유를 위하여로만 감소합니다.",
                effects: {
                    duration: 8,
                    centerSafeHeight: 150,
                    allyCooldownMultiplier: 0.34,
                    allyDamageTakenMultiplier: 0.8,
                    allyRegenPerSecond: 5,
                    allyDamageMultiplier: 1.5,
                    enemyCooldownMultiplier: 0.6,
                    enemyFixedSpeed: 10,
                    targetDamageMultiplier: 1.5,
                    targetHomingBias: 0.5
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "park-mingyu",
            name: "박민규",
            shortName: "민규",
            maxHp: 1000,
            baseAttack: 0,
            speedLabel: "230",
            speed: 230,
            colorName: "청록색",
            color: "#0f766e",
            textColor: "#ffffff",
            avatarSrc: "images/part2/BMK/BMK1.png",
            avatarFallbackSrcs: ["images/part2/BMK/BMK1.png"],
            avatarText: "민규",
            traits: ["벌점", "퇴사", "1회 가호"],
            passive: {
                name: "벌점",
                description: "0.2초마다 벌점 1점을 받습니다. 적과 충돌하면 보유한 벌점을 모두 상대에게 전달합니다. 다른 유닛은 벌점이 50점을 초과하면 퇴사하며, 박민규는 벌점이 60점에 도달하면 퇴사합니다. 퇴사 대상은 맵 위의 문으로 끌려가 9999 피해를 받고 이번 게임에서 모든 부활 능력을 잃습니다.",
                effects: {
                    interval: 0.2,
                    gain: 1,
                    resignationThreshold: 50,
                    selfResignationThreshold: 60,
                    resignationDamage: 9999,
                    resignationMoveSpeed: 400
                }
            },
            skill: {
                name: "신승복의 가호",
                cooldown: 0,
                passiveOnly: true,
                description: "게임당 1회, 박민규의 벌점이 60점에 도달하면 퇴사 대신 신승복의 가호가 발동합니다. 신승복이 박민규를 향해 상점 10개를 던지며, 상점에 맞은 유닛은 벌점이 5점 감소합니다.",
                effects: {
                    oncePerGame: true,
                    shopCount: 10,
                    shopSpeed: 1500,
                    shopHomingCorrection: 0.5,
                    shopPenaltyReduction: 5,
                    shopLaunchInterval: 0.12,
                    shopLifetime: 4,
                    protectionDuration: 4
                }
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            contactAttackDisabled: true
        },
        {
            id: "admin-ball",
            name: "볼",
            shortName: "볼",
            maxHp: 1000,
            baseAttack: 1,
            speedLabel: "230",
            speed: 230,
            colorName: "관리자 회색",
            color: "#52525b",
            textColor: "#ffffff",
            avatarText: "볼",
            selectable: false,
            adminSelectable: true,
            traits: ["관리자 전용", "피해감소"],
            passive: {
                name: "관리자 방어",
                description: "받는 피해가 90% 감소합니다.",
                effects: {
                    damageTakenMultiplier: 0.1
                }
            },
            skill: {
                name: "없음",
                cooldown: 1,
                passiveOnly: true,
                description: "관리자 전용 기본 볼입니다.",
                effects: {}
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        }
    ];

    const adminSpecSources = {
        "admin-kim-donggyu": "kim-donggyu",
        "developer-ji-taehyeok": "ji-taehyeok"
    };

    Object.entries(adminSpecSources).forEach(([adminId, regularId]) => {
        const admin = window.HANNAM_BALLS_CHARACTERS.find((character) => character.id === adminId);
        const regular = window.HANNAM_BALLS_CHARACTERS.find((character) => character.id === regularId);
        if (!admin || !regular) {
            return;
        }

        ["maxHp", "baseAttack", "speedLabel", "speed"].forEach((key) => {
            admin[key] = regular[key];
        });
    });

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
