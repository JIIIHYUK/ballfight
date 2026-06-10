(function () {
    window.HANNAM_BALLS_CHARACTERS = [
        {
            id: "test",
            name: "테스트",
            shortName: "테스트",
            maxHp: 500,
            baseAttack: 1,
            speedLabel: "보통",
            speed: 230,
            colorName: "빨간색",
            color: "#ff1717",
            textColor: "#ffffff",
            avatarSrc: "images/test.png",
            avatarText: "TEST",
            traits: ["5초마다 잔상", "누적 가속", "속도 비례 공격력"],
            passive: {
                name: "테스트 가속",
                description: "5초마다 1초 동안 잔상을 남기고 이동 속도가 영구적으로 20% 증가합니다. 발동 직후에는 추가 이동 속도 100%를 얻고, 이 추가 속도는 1초 동안 사라집니다. 영구 속도 증가율의 1/4만큼 공격력이 증가합니다.",
                effects: {
                    speedGrowthInterval: 5,
                    speedGrowthMultiplier: 1.2,
                    attackGainFromSpeedRatio: 0.25,
                    temporarySpeedBonus: 1,
                    temporarySpeedDuration: 1,
                    afterimageDuration: 1,
                    afterimageInterval: 0.08
                }
            },
            skill: {
                name: "테스트 모드",
                cooldown: 5,
                description: "스킬 대신 패시브로 5초마다 1초 잔상과 순간 가속을 남기며 점점 빨라집니다.",
                effects: {}
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false
        },
        {
            id: "kim-suyeong",
            name: "김수영",
            shortName: "수영",
            maxHp: 500,
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
            maxHp: 500,
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
                description: "3초가 지날 때마다, 또는 피해를 입을 때마다 점점 빨간색을 띄며 능력의 쿨타임을 0.5초씩 줄입니다. 분노가 10회를 초과하면 초과한 분노 1회당 일반 배구공 피해가 1 증가합니다.",
                effects: {
                    interval: 3,
                    cooldownReduction: 0.5,
                    minCooldown: 1
                }
            },
            skill: {
                name: "배구공",
                cooldown: 5,
                description: "배구공을 던져 적에게 10의 피해를 줍니다. 일반 배구공은 적이나 벽에 최대 3회 튕기며 다시 공격할 수 있습니다. 배구공을 4회 적중시키면 잠시 준비한 뒤 스파이크 배구공을 날려 100의 피해를 줍니다.",
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
                    spikeDamage: 100,
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
            maxHp: 500,
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
                description: "능력을 사용하면 화면 전체가 검게 채워지고 ㄱㅈㅇ 응답 여부가 출력됩니다. 75% 확률로 ㄱㅈㅇ 미응답이 나오면 아무 일도 일어나지 않고, 25% 확률로 ㄱㅈㅇ 응답이 나오면 가장 가까운 적에게 300의 피해를 확정적으로 주고 벽으로 던집니다. 벽에 부딪히면 500의 피해를 추가로 줍니다. 죽을 피해를 받으면 체력을 1 남기고 즉시 호출하며, 이 호출은 50% 확률로 응답합니다.",
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
            maxHp: 500,
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
                    contactPushSpeed: 700,
                    masteryGainOnBasic: 2,
                    comboDamage: 7,
                    comboInterval: 0.25,
                    comboDashSpeedMultiplier: 2.8,
                    comboDamageTakenMultiplier: 0.5,
                    dodgeChance: 0.2,
                    dodgeMasteryGain: 3,
                    dodgeBackDistanceMultiplier: 3.6,
                    dodgeCounterDelay: 0.5,
                    counterDashSpeedMultiplier: 4.8
                }
            },
            skill: {
                name: "타격 연계",
                cooldown: 3,
                description: "적을 공격할수록 숙련도가 1 증가합니다. 공격 후 숙련도 수치만큼 적을 추격해 연타 피해를 주고 이 과정을 반복합니다. 연타 중에는 받는 피해가 50% 감소합니다. 기본 회피율은 20%이며 회피 성공 시 잔상을 남기고 뒤로 빠진 뒤 카운터로 숙련도 3을 얻고 연타를 시작합니다.",
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
            maxHp: 1000,
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
                    earthquakeDamage: 40,
                    earthquakeSlowDuration: 2,
                    earthquakeSlowMultiplier: 0.45
                }
            },
            skill: {
                name: "압도적인 힘",
                cooldown: 0,
                passiveOnly: true,
                description: "모든 넉백을 무시합니다. 자신의 중심 150 범위 안에서 발생한 넉백 효과는 역으로 반사합니다. 체력이 낮아질수록 공격력이 25에서 최대 50까지 증가합니다. 벽에 5번 부딪히면 땅울림을 일으켜 모두에게 슬로우와 40의 피해를 줍니다.",
                effects: {}
            },
            cooldownOnBasicHit: 0,
            cooldownOnDamageTaken: 0,
            immuneToBasic: false,
            immuneToKnockback: true
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
