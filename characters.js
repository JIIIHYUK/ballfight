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
                cooldown: 15,
                description: "5초 동안 몸에 붙어 전방 180도 안에서 회전하는 살색 막대를 소환합니다. 적에게 충돌하면 5의 피해를 주고 벽으로 날려보내며 잔상을 남깁니다. 벽에 부딪힌 뒤에는 4000의 힘으로 튀어다니다가 0.1초마다 속도가 500씩 감소하고, 이 추가 속도가 유지되는 동안 벽에 부딪힐 때마다 20의 피해를 입힙니다.",
                effects: {
                    damage: 5,
                    wallDamage: 20,
                    duration: 5,
                    lengthMultiplier: 1.225,
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
            avatarSrc: "images/GU MINCHAN avatar.png",
            avatarText: "민찬",
            traits: ["분노", "쿨타임 감소", "배구공 투척"],
            passive: {
                name: "분노",
                description: "3초가 지날 때마다 점점 빨간색을 띄며 액티브 능력의 쿨타임을 0.5초씩 줄입니다.",
                effects: {
                    interval: 3,
                    cooldownReduction: 0.5,
                    minCooldown: 1
                }
            },
            skill: {
                name: "배구공",
                cooldown: 5,
                description: "배구공을 던져 적에게 20의 피해를 줍니다. 배구공 크기는 구민찬과 같습니다.",
                effects: {
                    damage: 20,
                    projectileSpeed: 500,
                    projectileDuration: 2.6,
                    sizeMultiplier: 1,
                    imageSrc: "images/배구공.png",
                    spikeEvery: 4,
                    spikeDelay: 0.5,
                    spikeDamage: 90,
                    spikeProjectileSpeed: 1800,
                    spikeKnockback: 1200
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
