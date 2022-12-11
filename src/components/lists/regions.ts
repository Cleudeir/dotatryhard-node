const regions = function (id: number) {
    const region = {
        1: 'NORTH AMERICA',
        2: 'NORTH AMERICA',
        3: 'EUROPE',
        5: 'ASIAN',
        6: 'MIDDLE EAST',
        7: 'ASIAN',
        8: 'EUROPE',
        9: 'EUROPE',
        10: 'SOUTH AMERICA',
        11: 'SOUTH AFRICA',
        12: 'CHINA',
        13: 'CHINA',
        14: 'SOUTH AMERICA',
        15: 'SOUTH AMERICA',
        16: 'INDIA',
        17: 'CHINA',
        18: 'CHINA',
        19: 'ASIAN',
        20: 'CHINA',
        25: 'CHINA',
        37: 'ASIAN',
        38: 'SOUTH AMERICA',
    };
    const cluster = {
        111: 1,
        112: 1,
        113: 1,
        114: 1,
        117: 1,
        118: 1,
        121: 2,
        122: 2,
        123: 2,
        124: 2,
        131: 3,
        132: 3,
        133: 3,
        134: 3,
        135: 3,
        136: 3,
        137: 3,
        138: 3,
        141: 19,
        142: 19,
        143: 19,
        144: 19,
        145: 19,
        151: 5,
        152: 5,
        153: 5,
        154: 5,
        155: 5,
        156: 5,
        161: 6,
        162: 6,
        163: 6,
        171: 7,
        172: 7,
        181: 8,
        182: 8,
        183: 8,
        184: 8,
        185: 8,
        186: 8,
        187: 8,
        188: 8,
        191: 9,
        192: 9,
        193: 9,
        200: 10,
        201: 10,
        202: 10,
        203: 10,
        204: 10,
        211: 11,
        212: 11,
        213: 11,
        214: 11,
        221: 12,
        222: 12,
        223: 18,
        224: 12,
        225: 17,
        227: 20,
        231: 13,
        232: 25,
        235: 13,
        236: 13,
        241: 14,
        242: 14,
        251: 15,
        261: 16,
        273: 3,
        274: 3,
        346: 38,
        347: 38,
    };
    let result = '';
    if (!id) {
        result = 'SOUTH AMERICA'
        return result;
    }
    Object.keys(cluster).forEach((key) => {
        Object.keys(region).forEach((type) => {
            if (+cluster[key] === +type) {
                if (id === +key) {
                    result = region[type]
                }
            }
        });
    });
    if (result === '') {
        result = 'SOUTH AMERICA'
        return result;
    }
    return result;
}
export default regions;