function get_exp_data(element) {
    var data_from_Katya = {
        Au: {
            'latpar': 4.0492,
            'reference': 'Straumanis, M.E., Woodard, C. L., Chopra, K. S.: Z. Phys. Chem. 42 (1964) 82. ',
            'comment': "25°C, 0,75 at%"
        },
        Ag: {
            'latpar': 4.0497,
            'reference': 'Helfrich, W.J., Dodd, R.A.: Trans. AIME 224 (1962) 757. ',
            'comment': "25°C, 1 at%"
        },
        Ca: {
            'latpar': 4.0719,
            'reference': 'H. NOWOTNY, E. WORMNES, and A. MOHRNHEIM (1940) Z. MetaUk. 32, 39. ',
            'comment': "888°C, 1 at%"
        },
        Fe: {
            'latpar': 4.0457,
            'reference': 'Tonejc, A., Bonefacic, A.: J. Appl. Phys. 40 (1969) 419. ',
            'comment': "1 at%"
        },
        Mg: {
            'latpar': 4.0526,
            'reference': 'D.M. Poole and H.J. Axon (1952) J. Inst. Met. 80, 599. ',
            'comment': "25°C, 1,01 at%"
        },
        Mo: {
            'latpar': 4.0485,
            'reference': 'Varic, N.I., Burov, L.M., Kolesnicenko, K.Ya., Maksimenko, A.P.: Fiz. Metall. Metalloved. 15 (1963) 292; Phys. Met. Metallogr. (English Transl.) 15 (1963) ',
            'comment': "1 at%"
        },
        Cu: {
            'latpar': 4.0472,
            'reference': 'E.C. Ellwood and J.M. Silcock (1948) J. Inst. Met. 74, 457. ',
            'comment': "546°C, 0,95 at%"
        },
        Sc: {
            'latpar': 4.054,
            'reference': 'Ocko, M., Babic, E., Zlatic, V.: Solid State Commun. 18 (1976) 705. ',
            'comment': " 1 at%"
        },
        Ru: {
            'latpar': 4.0362,
            'reference': 'Varich, A.N., Lyukevich, R.B.: Russ. Metall. (English Transl.) 1973, 73. ',
            'comment': "1 at%"
        }
    }

    var data = {
        Ca: {
            'latpar': 4.0732,
            'reference': 'H. NOWOTNY, E. WORMNES, and A. MOHRNHEIM (1940) Z. MetaUk. 32, 39. ',
            'comment': "615°C, 1,5 Wt%"
        },
        Zr: {
            'katya_disapproves': true,
            'latpar': 4.306,
            'reference': 'D. J. MCPHERSON and M. HANSEN (1954) Tr. Amer. Soc. Metal46 354.',
            'comment': "1580°C, Al<sub>3</sub>Zr "
        },
        Au: {
            'katya_disapproves': true,
            'latpar': 4.89,
            'reference': 'O. E. ULLNER (1940) Arkiv Kemi, Min. CeDI. A14, No.3.',
            'comment': "396°C, Al<sub>2</sub>Au"
        },
        Ga: {
            'latpar': 4.0465,
            'reference': 'E. A. OWEN, Y. H. LIU, and D. MORRIS (1948) Phil. Mag. 39, 831.',
            'comment': "18°C, 0.53 at%"
        },
        Li: {
            'latpar': 4.0475,
            'reference': 'E. ZINTL and G. WOLTERSOORF (1935) Z. Elektrochem. 41, 876.',
            'comment': "25°C, 0.53 at%"
        },
        Ti: {
            'latpar': 4.0477,
            'reference': 'E. S. BUMPS, H. D. KESSLER, and M. HANSEN (1952) J. Metals 4, 609.',
            'comment': "380°C, 0.53 at%"
        },
        As: {
            'katya_disapproves': true,
            'latpar': 5.63111,
            'reference': 'G. NATTA and L. PASSER IN I (1928) Gazz. Chim. Ita!. 58, 458.',
            'comment': "AlAs F43m  "
        },
        Ba: {
            'katya_disapproves': true,
            'latpar': 4.53645,
            'reference': 'K. R. ANDRESS and E. ALBERTI (1935) Z. Metalk. 27, 126.',
            'comment': "56 at%"
        },
        Be: {
            'latpar': 4.038952,
            'reference': 'E. S. MAKAROV and L. TARSCHISCH (1937) Z. Fiz. Khim. SSSR 9, 350 ',
            'comment': "25°C, 0.06 Wt%"
        },
        Co: {
            'katya_disapproves': true,
            'latpar': 7.256,
            'reference': 'A. IANDELLI (1938) Afti Xo Congr. Inter. Chi/no 2, 688.',
            'comment': "1100°C, 55 at%"
        },
        Cd: {
            'latpar': 4.045,
            'reference': 'J. E. DORN, P. PIETROKOWSKY, and T. E TIETZ (1950) J. Metals 2, 933.',
            'comment': "30°C, 0.065 at%"
        },
        Cr: {
            'latpar': 4.0357,
            'reference': 'A. P. KLYUCHAREV (1939) Z. Eksper. Teoret. Fiz.9, 1501. ',
            'comment': "600°C, 0.96 at%"
        },
        Cu: {
            'latpar': 4.045,
            'reference': 'F. LAVES and H. WITTE (1936) Metal/wirt. 15, 15.',
            'comment': "510°C, 0.873 at%"
        },
        Fe: {
            'katya_disapproves': true,
            'latpar': 5.658,
            'reference': 'A. OSAWA (1933) Sci. Rep. T6hoku Ifnp. Univ. 0) 22, 803.',
            'comment': "AlFe<sub>3</sub> superlattice has an ordered cubic, DO3 type "
        },
        Ge: {
            'latpar': 4.04902,
            'reference': 'H. STOHR and W. KLEMM (1939) Z. anorg. Chern. 241, 305.',
            'comment': "25°C, 1.13 at%"
        },
        Mg: {
            'latpar': 4.05196,
            'reference': 'K. RIEDERER (1936) Z. MetaUk. 28, 312.',
            'comment': "50°C, 2.6 at%"
        },
        Mn: {
            'latpar': 4.0388,
            'reference': 'J. N. PRATT and G. V. RAYNOR (1951) J. Inst. Met. 79, 211.',
            'comment': "26°C, 0.80 at%"
        },
        Mo: {
            'katya_disapproves': true,
            'latpar': 7.245,
            'reference': 'K. YAMAGUCHI and K. SIMIZU (1940) Nippon Kink. Gakk. 4, 390.',
            'comment': "Al<sub>12</sub>Mo"
        },
        Na: {
            'katya_disapproves': true,
            'latpar': 4.0567,
            'reference': 'W. B. Pearson / A Handbook of Lattice Spacings and Structures of Metals and Alloys / INTERNATIONAL SERIES OF MONOGRAPHS ON 1VIETAL PHYSICS AND PHYSICAL METALLURGY / 1st January 1958',
            'comment': "AlNaSi "
        },
        Nb: {
            'latpar': 4.049082,
            'reference': 'G. BRAUER (1939) Z. anorg. Chern. 242, 1.',
            'comment': "0.03 at%"
        },
        Ni: {
            'katya_disapproves': true,
            'latpar': 4.0275,
            'reference': 'A. J. BRADLEY and A. TAYLOR (1937h) Phil. Mag. 23, 1049. ',
            'comment': "d-Al<sub>3</sub>Ni<sub>2</sub> has a trigonal, D5-type "
        },
        P: {
            'katya_disapproves': true,
            'latpar': 5.4208,
            'reference': 'L. PASSERINI (1928) Gazz. Chim. Ita I. 58, 655.',
            'comment': "AlP, M = 4, F43m "
        },
        Pb: {
            'latpar': 4.0416,
            'reference': 'Y. DARDEL (1946) Light Metals 9, 220.',
            'comment': "380°C, 0.13 at%"
        },
        Pd: {
            'latpar': 4.0051,
            'reference': 'G. GRUBE and R. JANCH (1951) 100 Jahre Heraeus, Festschrift 52.',
            'comment': "550°C, 0.026 at%"
        },
        Pt: {
            'katya_disapproves': true,
            'latpar': 5.8999,
            'reference': 'E. ZINTL, A. HARDER, and W. HAUCKE (1937) Z. phys. Chern. B35, 354.',
            'comment': "Al<sub>2</sub>Pt has a cubic, Cl type of structure"
        },
        Sb: {
            'katya_disapproves': true,
            'latpar': 4.25,
            'reference': 'W. B. Pearson / A Handbook of Lattice Spacings and Structures of Metals and Alloys/ 1st January 1958',
            'comment': "380°C, 0.53 at%"
        },
        Si: {
            'latpar': 4.0495,
            'reference': 'W. HUME-ROTHERY and T. H. BOULTBEE (1949) Phil. Mag. 40, 71.',
            'comment': "25°C, 0.93 at%"
        },
        Sn: {
            'latpar': 4.04667,
            'reference': 'T. A. BADAEVA and R. I. KUZNE1SOVA (1950) Doklady Akad. Nauk SSSR 72, 507.',
            'comment': "380°C, 0.53 at%"
        },
        Sr: {
            'latpar': 4.0775,
            'reference': 'H. NOWOTNY and H. WESENBERG (1939) Z. Metallk. 31, 363.',
            'comment': " 700°C, 0.002 at%"
        },
        Ta: {
            'latpar': 4.035,
            'reference': 'G. BRAUER (1938) Naturwiss. 26, 710; (1939) Z. al1org. Chem. 242, 1. ',
            'comment': "25°C, 1.05 at%"
        },
        V: {
            'latpar': 4.0456,
            'reference': 'G. FALKENHAGEN and W. HOFMANN (1952) Z_ Metallk. 43, 69.',
            'comment': "380°C, 0.54 at%"
        },
        W: {
            'katya_disapproves': true,
            'latpar': 4.9005,
            'reference': 'J. ADAM and J. B. RICH (1954) Acta Cryst. 7, 813.',
            'comment': "870°C, Al<sub>12</sub>W"
        },
        Zn: {
            'latpar': 4.049,
            'reference': 'J. E. DORN, P. PJETROKOWSKY, and T. E. TIETZ (1950) J. Metals 2, 933.',
            'comment': "25°C, 0.44 at%"
        }

    }
    if (data_from_Katya[element] !== undefined) {
        data_from_Katya[element].found = true;
        return data_from_Katya[element];
    }
    if (data[element] === undefined) {
        return {
            'latpar': "NO DATA",
            'reference': "Nobody knows anything about this stuff",
            'comment': "I swear to gods, this is bitter truth.",
            'found': false,
        }
    } else {
        data[element].found = true;
        return data[element];
    }
}
