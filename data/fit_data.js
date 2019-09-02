function get_fit_data(fit_type) {
    if (fit_type === 'Vinet') {
        return _get_vinet_data();
    } else if (fit_type === 'Birch-Murnaghan') {
        return _get_birchm_data();
    } else if (fit_type === 'Elastic') {
        return _get_elast_data();
    }
}

// 10 elements
// TODO: use provided csv
function _get_vinet_data() {
    return {
        Al: { // vinet
            'V0': 1779.99513764,
            'E0': -404.598922843,
            'B': 77.705706588,
            'BP': 4.58859443918
        }, // clean Al
        Ag: { // vinet
            'V0': 1781.42751025,
            'E0': -403.496097819,
            'B': 77.7906124852,
            'BP': 4.62603583099
        }, // AlAg
        As: { // vinet
            'V0': 1783.1432793,
            'E0': -405.122262429,
            'B': 77.5573779765,
            'BP': 4.61171200038
        }, // AlAs
        At: { // vinet
            'V0': 1807.10257076,
            'E0': -399.25867163,
            'B': 75.1397597537,
            'BP': 4.69250591093
        }, // AlAt
        Au: { // vinet
            'V0': 1780.08603612,
            'E0': -404.647448836,
            'B': 78.2487961644,
            'BP': 4.63159496065
        }, // AlAu
        B: { // vinet
            'V0': 1790.42427192,
            'E0': -402.649454001,
            'B': 76.2911809864,
            'BP': 4.62723912877
        }, // AlB
        Ba: { // vinet
            'V0': 1816.47951626,
            'E0': -400.484010426,
            'B': 73.4470169472,
            'BP': 4.66472203469
        }, // AlBa
        Be: { // vinet
            'V0': 1772.31241333,
            'E0': -403.899938302,
            'B': 77.9599042363,
            'BP': 4.58960925172
        }, // AlBe
        Bi: { // vinet
            'V0': 1800.63608726,
            'E0': -403.109759043,
            'B': 76.35919278,
            'BP': 4.61687343849
        }, // AlBi
        Br: { // vinet
            'V0': 1793.7651113,
            'E0': -400.812338099,
            'B': 75.6105300244,
            'BP': 4.65589471524
        }, // AlBr
        C: { // vinet
            'V0': 1783.78680669,
            'E0': -403.956795204,
            'B': 76.9848378505,
            'BP': 4.64577308753
        }, // AlC
        Ca: { // vinet
            'V0': 1797.58236912,
            'E0': -402.469301187,
            'B': 75.8611762257,
            'BP': 4.606041118
        }, // AlCa
        Cd: { // vinet
            'V0': 1787.62125068,
            'E0': -400.973855935,
            'B': 77.0700683371,
            'BP': 4.61089823427
        }, // AlCd
        Cl: { // vinet
            'V0': 1789.34104202,
            'E0': -401.676460629,
            'B': 75.96386422,
            'BP': 4.63490992349
        }, // AlCl
        Co: { // vinet
            'V0': 1767.30090406,
            'E0': -408.576424527,
            'B': 79.1583962059,
            'BP': 4.66118894259
        }, // AlCo
        Cr: { // vinet
            'V0': 1769.8518631,
            'E0': -410.516613833,
            'B': 79.433337255,
            'BP': 4.64817092667
        }, // AlCr
        Cs: { // vinet
            'V0': 1816.98435934,
            'E0': -397.073753419,
            'B': 72.1270606271,
            'BP': 4.7707968281
        }, // AlCs
        Cu: { // vinet
            'V0': 1774.15112322,
            'E0': -404.712033066,
            'B': 78.0757130378,
            'BP': 4.61349907928
        }, // AlCu
        F: { // vinet
            'V0': 1772.67063497,
            'E0': -406.850862314,
            'B': 78.3275253853,
            'BP': 4.64809243049
        }, // AlF
        Fe: { // vinet
            'V0': 1766.73716752,
            'E0': -409.549065342,
            'B': 79.398535957,
            'BP': 4.66870617169
        }, // AlFe
        Ga: { // vinet
            'V0': 1781.45861801,
            'E0': -403.640771661,
            'B': 77.3691585255,
            'BP': 4.60015405351
        }, // AlGa
        Ge: { // vinet
            'V0': 1782.31692569,
            'E0': -404.981929698,
            'B': 77.473107311,
            'BP': 4.60511577005
        }, // AlGe
        Hf: { // vinet
            'V0': 1786.15552151,
            'E0': -411.681981241,
            'B': 78.5967911196,
            'BP': 4.59417377517
        }, // AlHf
        Hg: { // vinet
            'V0': 1788.09206159,
            'E0': -400.301136119,
            'B': 77.1308300916,
            'BP': 4.62257377337
        }, // AlHg
        I: { // vinet
            'V0': 1787.10433434,
            'E0': -404.632519505,
            'B': 77.3127097604,
            'BP': 4.65926915387
        }, // AlI
        In: { // vinet
            'V0': 1790.7361839,
            'E0': -402.63315105,
            'B': 76.8673019244,
            'BP': 4.60634084355
        }, // AlIn
        Ir: { // vinet
            'V0': 1770.2909456,
            'E0': -411.572940853,
            'B': 79.8344294084,
            'BP': 4.67979254016
        }, // AlIr
        K: { // vinet
            'V0': 1803.93592681,
            'E0': -399.132809453,
            'B': 74.1711215291,
            'BP': 4.66842110648
        }, // AlK
        Li: { // vinet
            'V0': 1779.14198601,
            'E0': -403.074075089,
            'B': 76.9448793297,
            'BP': 4.60941042979
        }, // AlLi
        Mg: { // vinet
            'V0': 1785.19817372,
            'E0': -402.267997086,
            'B': 77.0441598786,
            'BP': 4.59560263515
        }, // AlMg
        Mn: { // vinet
            'V0': 1767.61664817,
            'E0': -410.207346043,
            'B': 79.4879584577,
            'BP': 4.66341599755
        }, // AlMn
        Mo: { // vinet
            'V0': 1774.73764562,
            'E0': -412.62876327,
            'B': 79.713928285,
            'BP': 4.64736595823
        }, // AlMo
        N: { // vinet
            'V0': 1777.17503202,
            'E0': -406.609003076,
            'B': 78.0406764009,
            'BP': 4.63172481884
        }, // AlN
        Na: { // vinet
            'V0': 1789.63233152,
            'E0': -401.205126326,
            'B': 76.0408199945,
            'BP': 4.62874796812
        }, // AlNa
        Nb: { // vinet
            'V0': 1780.03682115,
            'E0': -412.016201919,
            'B': 79.2524208101,
            'BP': 4.62221018822
        }, // AlNb
        Ni: { // vinet
            'V0': 1769.62579108,
            'E0': -407.137398626,
            'B': 78.7252434268,
            'BP': 4.63977992436
        }, // AlNi
        O: { // vinet
            'V0': 1770.89194036,
            'E0': -409.483254397,
            'B': 79.0288272306,
            'BP': 4.66165985436
        }, // AlO
        Os: { // vinet
            'V0': 1769.46490422,
            'E0': -413.258494431,
            'B': 80.1366380408,
            'BP': 4.68755713212
        }, // AlOs
        P: { // vinet
            'V0': 1785.49374948,
            'E0': -405.410681131,
            'B': 77.6215451524,
            'BP': 4.63585788113
        }, // AlP
        Pb: { // vinet
            'V0': 1798.58557741,
            'E0': -402.842408585,
            'B': 76.1967918783,
            'BP': 4.62007211559
        }, // AlPb
        Pd: { // vinet
            'V0': 1775.02237096,
            'E0': -407.615356488,
            'B': 78.7764798164,
            'BP': 4.65114940087
        }, // AlPd
        Po: { // vinet
            'V0': 1802.76078078,
            'E0': -401.998572623,
            'B': 76.1773950825,
            'BP': 4.63734009648
        }, // AlPo
        Pt: { // vinet
            'V0': 1773.76583851,
            'E0': -408.865720543,
            'B': 79.2184506217,
            'BP': 4.65816409416
        }, // AlPt
        Rb: { // vinet
            'V0': 1810.85990938,
            'E0': -398.030359037,
            'B': 73.1304338793,
            'BP': 4.70192694839
        }, // AlRb
        Re: { // vinet
            'V0': 1771.04603177,
            'E0': -414.088835944,
            'B': 80.1606632597,
            'BP': 4.67721779208
        }, // AlRe
        Rh: { // vinet
            'V0': 1771.09457944,
            'E0': -410.097990874,
            'B': 79.4720731759,
            'BP': 4.67302468463
        }, // AlRh
        Ru: { // vinet
            'V0': 1769.92446545,
            'E0': -411.646612874,
            'B': 79.8330482496,
            'BP': 4.67965889566
        }, // AlRu
        S: { // vinet
            'V0': 1789.18651046,
            'E0': -404.455255212,
            'B': 76.9355010144,
            'BP': 4.61180961074
        }, // AlS
        Sb: { // vinet
            'V0': 1793.39436397,
            'E0': -403.981694396,
            'B': 76.9520930689,
            'BP': 4.61427533693
        }, // AlSb
        Sc: { // vinet
            'V0': 1786.99837934,
            'E0': -408.125956684,
            'B': 77.8705522817,
            'BP': 4.59173537691
        }, // AlSc
        Se: { // vinet
            'V0': 1786.19950151,
            'E0': -403.783287119,
            'B': 77.038828029,
            'BP': 4.62554365528
        }, // AlSe
        Si: { // vinet
            'V0': 1777.50156579,
            'E0': -405.856336139,
            'B': 77.8785455122,
            'BP': 4.60098278852
        }, // AlSi
        Sn: { // vinet
            'V0': 1792.20811352,
            'E0': -403.854407877,
            'B': 76.8873365998,
            'BP': 4.6067033181
        }, // AlSn
        Sr: { // vinet
            'V0': 1807.10901143,
            'E0': -401.189681038,
            'B': 74.7226546731,
            'BP': 4.62501969752
        }, // AlSr
        Ta: { // vinet
            'V0': 1779.73287737,
            'E0': -413.318146733,
            'B': 79.3983885623,
            'BP': 4.62340794925
        }, // AlTa
        Tc: { // vinet
            'V0': 1771.24510115,
            'E0': -412.50390557,
            'B': 79.9087812486,
            'BP': 4.67016739575
        }, // AlTc
        Te: { // vinet
            'V0': 1795.50575768,
            'E0': -402.701331061,
            'B': 76.5750487314,
            'BP': 4.6367198896
        }, // AlTe
        Ti: { // vinet
            'V0': 1778.95925588,
            'E0': -409.764460018,
            'B': 78.7561567877,
            'BP': 4.60651298346
        }, // AlTi
        Tl: { // vinet
            'V0': 1794.56579333,
            'E0': -401.642216688,
            'B': 76.3513176866,
            'BP': 4.62709620381
        }, // AlTl
        V: { // vinet
            'V0': 1773.53561121,
            'E0': -410.436210337,
            'B': 79.2145800496,
            'BP': 4.62888129242
        }, // AlV
        W: { // vinet
            'V0': 1774.62088019,
            'E0': -414.127839364,
            'B': 79.8905146275,
            'BP': 4.65097908888
        }, // AlW
        Y: { // vinet
            'V0': 1797.25804187,
            'E0': -407.811169667,
            'B': 76.8919371256,
            'BP': 4.58578969261
        }, // AlY
        Zn: { // vinet
            'V0': 1779.04423112,
            'E0': -401.851346469,
            'B': 77.5237222799,
            'BP': 4.59943947186
        }, // AlZn
        Zr: { // vinet
            'V0': 1787.6173423,
            'E0': -410.476031854,
            'B': 78.4235948653,
            'BP': 4.59396549957
        } // AlZr
    }
}

function _get_birchm_data() {
    return {
        Al: { // birch-murnaghan
          'V0': 1780.00262295,
          'E0': -404.59829209,
          'B': 77.5849512561,
          'BP': 4.58377732348
        }, // clean Al
        Ag: { // birch-murnaghan
            'V0': 1781.43725967,
            'E0': -403.495462369,
            'B': 77.6686743708,
            'BP': 4.61941102993
        }, // AlAg
        As: { // birch-murnaghan
            'V0': 1783.15576352,
            'E0': -405.121635446,
            'B': 77.436627467,
            'BP': 4.60291504454
        }, // AlAs
        At: { // birch-murnaghan
            'V0': 1807.15023975,
            'E0': -399.258231226,
            'B': 75.0418119649,
            'BP': 4.65336684715
        }, // AlAt
        Au: { // birch-murnaghan
            'V0': 1780.09373022,
            'E0': -404.646806481,
            'B': 78.1257987848,
            'BP': 4.62662502351
        }, // AlAu
        B: { // birch-murnaghan
            'V0': 1790.44794933,
            'E0': -402.64886528,
            'B': 76.1751825844,
            'BP': 4.60934443494
        }, // AlB
        Ba: { // birch-murnaghan
            'V0': 1816.5375086,
            'E0': -400.483703983,
            'B': 73.3680447108,
            'BP': 4.6143369413
        }, // AlBa
        Be: { // birch-murnaghan
            'V0': 1772.30791226,
            'E0': -403.899307218,
            'B': 77.8396729623,
            'BP': 4.59437503954
        }, // AlBe
        Bi: { // birch-murnaghan
            'V0': 1800.67437108,
            'E0': -403.109250014,
            'B': 76.2527858717,
            'BP': 4.58642705028
        }, // AlBi
        Br: { // birch-murnaghan
            'V0': 1793.79398145,
            'E0': -400.811771635,
            'B': 75.4971677158,
            'BP': 4.63368500004
        }, // AlBr
        C: { // birch-murnaghan
            'V0': 1783.80039036,
            'E0': -403.956169223,
            'B': 76.8640991697,
            'BP': 4.63610407258
        }, // AlC
        Ca: { // birch-murnaghan
            'V0': 1797.61624381,
            'E0': -402.468769175,
            'B': 75.7524057013,
            'BP': 4.57947146598
        }, // AlCa
        Cd: { // birch-murnaghan
            'V0': 1787.64050914,
            'E0': -400.973249107,
            'B': 76.951777949,
            'BP': 4.59659811878
        }, // AlCd
        Cl: { // birch-murnaghan
            'V0': 1789.36311557,
            'E0': -401.675867304,
            'B': 75.8474629648,
            'BP': 4.61833760892
        }, // AlCl
        Co: { // birch-murnaghan
            'V0': 1767.28854428,
            'E0': -408.575787652,
            'B': 79.0366063983,
            'BP': 4.67238667302
        }, // AlCo
        Cr: { // birch-murnaghan
            'V0': 1769.84356177,
            'E0': -410.515967258,
            'B': 79.3100194553,
            'BP': 4.65606573397
        }, // AlCr
        Cs: { // birch-murnaghan
            'V0': 1817.04433043,
            'E0': -397.073453612,
            'B': 72.048694573,
            'BP': 4.71853818557
        }, // AlCs
        Cu: { // birch-murnaghan
            'V0': 1774.14945506,
            'E0': -404.711394238,
            'B': 77.9540053627,
            'BP': 4.61599678848
        }, // AlCu
        F: { // birch-murnaghan
            'V0': 1772.66669721,
            'E0': -406.850218097,
            'B': 78.2047948971,
            'BP': 4.65244736102
        }, // AlF
        Fe: { // birch-murnaghan
            'V0': 1766.72394117,
            'E0': -409.548427856,
            'B': 79.2765421823,
            'BP': 4.68062679389
        }, // AlFe
        Ga: { // birch-murnaghan
            'V0': 1781.46842652,
            'E0': -403.64014413,
            'B': 77.248722474,
            'BP': 4.59349010736
        }, // AlGa
        Ge: { // birch-murnaghan
            'V0': 1782.32810776,
            'E0': -404.981302397,
            'B': 77.352509165,
            'BP': 4.59736067828
        }, // AlGe
        Hf: { // birch-murnaghan
            'V0': 1786.17255609,
            'E0': -411.681359167,
            'B': 78.4760534996,
            'BP': 4.58169635275
        }, // AlHf
        Hg: { // birch-murnaghan
            'V0': 1788.11213034,
            'E0': -400.300529201,
            'B': 77.0123186168,
            'BP': 4.60762696512
        }, // AlHg
        I: { // birch-murnaghan
            'V0': 1787.12315644,
            'E0': -404.63190122,
            'B': 77.1923330185,
            'BP': 4.64537966903
        }, // AlI
        In: { // birch-murnaghan
            'V0': 1790.7601567,
            'E0': -402.632562902,
            'B': 76.7512886237,
            'BP': 4.58817974588
        }, // AlIn
        Ir: { // birch-murnaghan
            'V0': 1770.2832696,
            'E0': -411.572285255,
            'B': 79.709422262,
            'BP': 4.68719089665
        }, // AlIr
        K: { // birch-murnaghan
            'V0': 1803.9791816,
            'E0': -399.132341381,
            'B': 74.0704670004,
            'BP': 4.63346885161
        }, // AlK
        Li: { // birch-murnaghan
            'V0': 1779.14811915,
            'E0': -403.07344588,
            'B': 76.8245675019,
            'BP': 4.60566720734
        }, // AlLi
        Mg: { // birch-murnaghan
            'V0': 1785.21364753,
            'E0': -402.267383205,
            'B': 76.925368736,
            'BP': 4.58436154303
        }, // AlMg
        Mn: { // birch-murnaghan
            'V0': 1767.60482169,
            'E0': -410.206704775,
            'B': 79.3653872446,
            'BP': 4.67418999449
        }, // AlMn
        Mo: { // birch-murnaghan
            'V0': 1774.73703656,
            'E0': -412.62810488,
            'B': 79.5884695361,
            'BP': 4.64906703325
        }, // AlMo
        N: { // birch-murnaghan
            'V0': 1777.17818739,
            'E0': -406.6083601,
            'B': 77.9179787571,
            'BP': 4.63039011418
        }, // AlN
        Na: { // birch-murnaghan
            'V0': 1789.65476091,
            'E0': -401.204534721,
            'B': 75.9246493709,
            'BP': 4.61186655654
        }, // AlNa
        Nb: { // birch-murnaghan
            'V0': 1780.04450398,
            'E0': -412.01555287,
            'B': 79.1281388722,
            'BP': 4.6172664133
        }, // AlNb
        Ni: { // birch-murnaghan
            'V0': 1769.61705476,
            'E0': -407.136759953,
            'B': 78.6033991883,
            'BP': 4.64799879606
        }, // AlNi
        O: { // birch-murnaghan
            'V0': 1770.88522518,
            'E0': -409.482606292,
            'B': 78.9052906222,
            'BP': 4.66826977663
        }, // AlO
        Os: { // birch-murnaghan
            'V0': 1769.45594497,
            'E0': -413.257837811,
            'B': 80.0113667361,
            'BP': 4.69600794782
        }, // AlOs
        P: { // birch-murnaghan
            'V0': 1785.5099507,
            'E0': -405.410057283,
            'B': 77.5006869223,
            'BP': 4.62407434585
        }, // AlP
        Pb: { // birch-murnaghan
            'V0': 1798.6210598,
            'E0': -402.84188119,
            'B': 76.0881890086,
            'BP': 4.59212539232
        }, // AlPb
        Pd: { // birch-murnaghan
            'V0': 1775.0221182,
            'E0': -407.614705096,
            'B': 78.6523412145,
            'BP': 4.65254318694
        }, // AlPd
        Po: { // birch-murnaghan
            'V0': 1802.80216324,
            'E0': -401.998083398,
            'B': 76.0732978178,
            'BP': 4.60409543215
        }, // AlPo
        Pt: { // birch-murnaghan
            'V0': 1773.76363321,
            'E0': -408.865065761,
            'B': 79.0937056289,
            'BP': 4.66113460845
        }, // AlPt
        Rb: { // birch-murnaghan
            'V0': 1810.91225349,
            'E0': -398.029975159,
            'B': 73.0408409999,
            'BP': 4.65803399927
        }, // AlRb
        Re: { // birch-murnaghan
            'V0': 1771.03959149,
            'E0': -414.088175867,
            'B': 80.0348582163,
            'BP': 4.68362583197
        }, // AlRe
        Rh: { // birch-murnaghan
            'V0': 1771.08816196,
            'E0': -410.097337028,
            'B': 79.3474520723,
            'BP': 4.67939726016
        }, // AlRh
        Ru: { // birch-murnaghan
            'V0': 1769.91622783,
            'E0': -411.645958366,
            'B': 79.7082210602,
            'BP': 4.68751653457
        }, // AlRu
        S: { // birch-murnaghan
            'V0': 1789.20823523,
            'E0': -404.454657226,
            'B': 76.8182501936,
            'BP': 4.59551627994
        }, // AlS
        Sb: { // birch-murnaghan
            'V0': 1793.42239571,
            'E0': -403.98112159,
            'B': 76.8376779943,
            'BP': 4.59274879308
        }, // AlSb
        Sc: { // birch-murnaghan
            'V0': 1787.01664801,
            'E0': -408.125344214,
            'B': 77.7513847937,
            'BP': 4.57824594479
        }, // AlSc
        Se: { // birch-murnaghan
            'V0': 1786.21675421,
            'E0': -403.782672327,
            'B': 76.9194810441,
            'BP': 4.61290602065
        }, // AlSe
        Si: { // birch-murnaghan
            'V0': 1777.505264,
            'E0': -405.85569967,
            'B': 77.7570535374,
            'BP': 4.59921553658
        }, // AlSi
        Sn: { // birch-murnaghan
            'V0': 1792.23432258,
            'E0': -403.853828747,
            'B': 76.7723325239,
            'BP': 4.5866956205
        }, // AlSn
        Sr: { // birch-murnaghan
            'V0': 1807.15577331,
            'E0': -401.189249757,
            'B': 74.6268797703,
            'BP': 4.58659605825
        }, // AlSr
        Ta: { // birch-murnaghan
            'V0': 1779.74009922,
            'E0': -413.317495876,
            'B': 79.2738144355,
            'BP': 4.61883635954
        }, // AlTa
        Tc: { // birch-murnaghan
            'V0': 1771.23897337,
            'E0': -412.503248064,
            'B': 79.783476481,
            'BP': 4.67631727933
        }, // AlTc
        Te: { // birch-murnaghan
            'V0': 1795.53705538,
            'E0': -402.700773193,
            'B': 76.4623344985,
            'BP': 4.61243818955
        }, // AlTe
        Ti: { // birch-murnaghan
            'V0': 1778.96522367,
            'E0': -409.763816383,
            'B': 78.6330989169,
            'BP': 4.60293203284
        }, // AlTi
        Tl: { // birch-murnaghan
            'V0': 1794.59558874,
            'E0': -401.641654486,
            'B': 76.2383602137,
            'BP': 4.60407261479
        }, // AlTl
        V: { // birch-murnaghan
            'V0': 1773.53310236,
            'E0': -410.435560346,
            'B': 79.0907562248,
            'BP': 4.63209373253
        }, // AlV
        W: { // birch-murnaghan
            'V0': 1774.62009698,
            'E0': -414.127179062,
            'B': 79.7646959236,
            'BP': 4.65282394837
        }, // AlW
        Y: { // birch-murnaghan
            'V0': 1797.291278,
            'E0': -407.810630989,
            'B': 76.782025076,
            'BP': 4.55976129833
        }, // AlY
        Zn: { // birch-murnaghan
            'V0': 1779.05022533,
            'E0': -401.850714145,
            'B': 77.402827732,
            'BP': 4.59581035426
        }, // AlZn
        Zr: { // birch-murnaghan
            'V0': 1787.63658504,
            'E0': -410.475417508,
            'B': 78.303811692,
            'BP': 4.57969060162
        } // AlZr
    }
}


function _get_elast_data() {
    return {
         'Ag' : {
             'c11' : 104.19,
             'c12' : 60.19,
             'c44' : 34.08,
             'g' : 31.01,
             'e' : 82.11,
             'cprime' : 26.40
        },
         'Al' : {
             'c11' : 103.59,
             'c12' : 60.45,
             'c44' : 34.40,
             'g' : 30.99,
             'e' : 82.06,
             'cprime' : 25.88
        },
         'As' : {
             'c11' : 102.32,
             'c12' : 61.05,
             'c44' : 33.71,
             'g' : 30.13,
             'e' : 80.03,
             'cprime' : 24.77
        },
         'At' : {
             'c11' : 96.89,
             'c12' : 60.64,
             'c44' : 29.43,
             'g' : 26.36,
             'e' : 70.79,
             'cprime' : 21.75
        },
         'Au' : {
             'c11' : 104.55,
             'c12' : 60.71,
             'c44' : 33.86,
             'g' : 30.84,
             'e' : 81.77,
             'cprime' : 26.30
        },
         'B' : {
             'c11' : 97.61,
             'c12' : 62.08,
             'c44' : 31.52,
             'g' : 27.44,
             'e' : 73.50,
             'cprime' : 21.32
        },
         'Ba' : {
             'c11' : 93.85,
             'c12' : 59.85,
             'c44' : 30.31,
             'g' : 26.34,
             'e' : 70.59,
             'cprime' : 20.40
        },
         'Be' : {
             'c11' : 104.24,
             'c12' : 60.44,
             'c44' : 34.38,
             'g' : 31.14,
             'e' : 82.45,
             'cprime' : 26.28
        },
         'Bi' : {
             'c11' : 99.49,
             'c12' : 60.94,
             'c44' : 31.78,
             'g' : 28.32,
             'e' : 75.61,
             'cprime' : 23.13
        },
         'Br' : {
             'c11' : 98.49,
             'c12' : 60.36,
             'c44' : 31.05,
             'g' : 27.78,
             'e' : 74.25,
             'cprime' : 22.88
        },
         'C' : {
             'c11' : 87.48,
             'c12' : 69.99,
             'c44' : 28.76,
             'g' : 21.45,
             'e' : 58.88,
             'cprime' : 10.49
        },
         'Ca' : {
             'c11' : 99.65,
             'c12' : 60.00,
             'c44' : 34.08,
             'g' : 29.96,
             'e' : 79.43,
             'cprime' : 23.79
        },
         'Cd' : {
             'c11' : 102.56,
             'c12' : 60.08,
             'c44' : 33.42,
             'g' : 30.25,
             'e' : 80.24,
             'cprime' : 25.49
        },
         'Cl' : {
             'c11' : 99.29,
             'c12' : 60.41,
             'c44' : 31.71,
             'g' : 28.36,
             'e' : 75.66,
             'cprime' : 23.33
        },
         'Co' : {
             'c11' : 107.03,
             'c12' : 60.58,
             'c44' : 35.39,
             'g' : 32.38,
             'e' : 85.49,
             'cprime' : 27.87
        },
         'Cr' : {
             'c11' : 108.25,
             'c12' : 60.22,
             'c44' : 34.52,
             'g' : 32.24,
             'e' : 85.19,
             'cprime' : 28.82
        },
         'Cs' : {
             'c11' : 92.36,
             'c12' : 58.64,
             'c44' : 28.07,
             'g' : 24.93,
             'e' : 67.07,
             'cprime' : 20.23
        },
         'Cu' : {
             'c11' : 104.67,
             'c12' : 60.35,
             'c44' : 34.45,
             'g' : 31.31,
             'e' : 82.84,
             'cprime' : 26.59
        },
         'F' : {
             'c11' : 102.43,
             'c12' : 62.26,
             'c44' : 33.57,
             'g' : 29.78,
             'e' : 79.29,
             'cprime' : 24.10
        },
         'Fe' : {
             'c11' : 107.72,
             'c12' : 60.52,
             'c44' : 35.23,
             'g' : 32.47,
             'e' : 85.72,
             'cprime' : 28.32
        },
         'Ga' : {
             'c11' : 102.78,
             'c12' : 60.43,
             'c44' : 33.92,
             'g' : 30.52,
             'e' : 80.92,
             'cprime' : 25.42
        },
         'Ge' : {
             'c11' : 102.56,
             'c12' : 60.75,
             'c44' : 33.95,
             'g' : 30.40,
             'e' : 80.66,
             'cprime' : 25.09
        },
         'Hf' : {
             'c11' : 104.06,
             'c12' : 61.62,
             'c44' : 34.99,
             'g' : 31.18,
             'e' : 82.61,
             'cprime' : 25.47
        },
         'Hg' : {
             'c11' : 102.33,
             'c12' : 60.34,
             'c44' : 32.82,
             'g' : 29.77,
             'e' : 79.13,
             'cprime' : 25.19
        },
         'I' : {
             'c11' : 100.48,
             'c12' : 61.87,
             'c44' : 31.79,
             'g' : 28.34,
             'e' : 75.77,
             'cprime' : 23.17
        },
         'In' : {
             'c11' : 101.64,
             'c12' : 60.35,
             'c44' : 33.09,
             'g' : 29.77,
             'e' : 79.09,
             'cprime' : 24.78
        },
         'Ir' : {
             'c11' : 108.07,
             'c12' : 61.01,
             'c44' : 35.29,
             'g' : 32.47,
             'e' : 85.78,
             'cprime' : 28.23
        },
         'K' : {
             'c11' : 96.73,
             'c12' : 59.13,
             'c44' : 32.24,
             'g' : 28.37,
             'e' : 75.49,
             'cprime' : 22.56
        },
         'Li' : {
             'c11' : 103.51,
             'c12' : 59.23,
             'c44' : 34.63,
             'g' : 31.41,
             'e' : 82.94,
             'cprime' : 26.57
        },
         'Mg' : {
             'c11' : 102.97,
             'c12' : 59.76,
             'c44' : 34.41,
             'g' : 31.02,
             'e' : 82.04,
             'cprime' : 25.93
        },
         'Mn' : {
             'c11' : 108.27,
             'c12' : 60.30,
             'c44' : 34.83,
             'g' : 32.41,
             'e' : 85.60,
             'cprime' : 28.78
        },
         'Mo' : {
             'c11' : 108.76,
             'c12' : 60.35,
             'c44' : 34.42,
             'g' : 32.27,
             'e' : 85.31,
             'cprime' : 29.05
        },
         'N' : {
             'c11' : 83.65,
             'c12' : 74.30,
             'c44' : 24.86,
             'g' : 17.16,
             'e' : 47.97,
             'cprime' : 5.61
        },
         'Na' : {
             'c11' : 101.29,
             'c12' : 59.21,
             'c44' : 34.06,
             'g' : 30.53,
             'e' : 80.79,
             'cprime' : 25.25
        },
         'Nb' : {
             'c11' : 106.60,
             'c12' : 61.02,
             'c44' : 34.41,
             'g' : 31.59,
             'e' : 83.65,
             'cprime' : 27.35
        },
         'Ni' : {
             'c11' : 106.01,
             'c12' : 60.53,
             'c44' : 35.06,
             'g' : 31.95,
             'e' : 84.44,
             'cprime' : 27.29
        },
         'O' : {
             'c11' : 85.61,
             'c12' : 74.64,
             'c44' : 13.20,
             'g' : 10.55,
             'e' : 30.30,
             'cprime' : 6.58
        },
         'Os' : {
             'c11' : 109.06,
             'c12' : 60.85,
             'c44' : 35.10,
             'g' : 32.63,
             'e' : 86.19,
             'cprime' : 28.93
        },
         'P' : {
             'c11' : 101.83,
             'c12' : 61.48,
             'c44' : 33.07,
             'g' : 29.52,
             'e' : 78.60,
             'cprime' : 24.21
        },
         'Pb' : {
             'c11' : 99.75,
             'c12' : 60.50,
             'c44' : 31.94,
             'g' : 28.58,
             'e' : 76.21,
             'cprime' : 23.55
        },
         'Pd' : {
             'c11' : 106.12,
             'c12' : 60.55,
             'c44' : 34.87,
             'g' : 31.86,
             'e' : 84.23,
             'cprime' : 27.34
        },
         'Po' : {
             'c11' : 98.85,
             'c12' : 61.07,
             'c44' : 31.14,
             'g' : 27.75,
             'e' : 74.24,
             'cprime' : 22.67
        },
         'Pt' : {
             'c11' : 106.58,
             'c12' : 60.98,
             'c44' : 34.85,
             'g' : 31.85,
             'e' : 84.26,
             'cprime' : 27.36
        },
         'Rb' : {
             'c11' : 94.47,
             'c12' : 58.91,
             'c44' : 30.42,
             'g' : 26.79,
             'e' : 71.62,
             'cprime' : 21.34
        },
         'Rh' : {
             'c11' : 107.60,
             'c12' : 60.72,
             'c44' : 35.35,
             'g' : 32.46,
             'e' : 85.71,
             'cprime' : 28.13
        },
         'Ru' : {
             'c11' : 108.58,
             'c12' : 60.67,
             'c44' : 35.24,
             'g' : 32.64,
             'e' : 86.17,
             'cprime' : 28.74
        },
         'S' : {
             'c11' : 100.04,
             'c12' : 61.53,
             'c44' : 31.78,
             'g' : 28.31,
             'e' : 75.65,
             'cprime' : 23.10
        },
         'Sb' : {
             'c11' : 100.81,
             'c12' : 61.05,
             'c44' : 32.81,
             'g' : 29.23,
             'e' : 77.83,
             'cprime' : 23.86
        },
         'Sc' : {
             'c11' : 103.34,
             'c12' : 60.89,
             'c44' : 35.01,
             'g' : 31.19,
             'e' : 82.56,
             'cprime' : 25.47
        },
         'Se' : {
             'c11' : 100.98,
             'c12' : 61.08,
             'c44' : 32.61,
             'g' : 29.14,
             'e' : 77.64,
             'cprime' : 23.94
        },
         'Si' : {
             'c11' : 103.30,
             'c12' : 60.93,
             'c44' : 34.34,
             'g' : 30.78,
             'e' : 81.58,
             'cprime' : 25.42
        },
         'Sn' : {
             'c11' : 101.15,
             'c12' : 60.71,
             'c44' : 32.99,
             'g' : 29.50,
             'e' : 78.46,
             'cprime' : 24.26
        },
         'Sr' : {
             'c11' : 96.72,
             'c12' : 60.06,
             'c44' : 32.73,
             'g' : 28.44,
             'e' : 75.71,
             'cprime' : 22.00
        },
         'Ta' : {
             'c11' : 106.60,
             'c12' : 61.26,
             'c44' : 34.47,
             'g' : 31.56,
             'e' : 83.61,
             'cprime' : 27.20
        },
         'Tc' : {
             'c11' : 109.17,
             'c12' : 60.40,
             'c44' : 34.78,
             'g' : 32.57,
             'e' : 86.03,
             'cprime' : 29.26
        },
         'Te' : {
             'c11' : 99.90,
             'c12' : 61.03,
             'c44' : 32.08,
             'g' : 28.58,
             'e' : 76.24,
             'cprime' : 23.32
        },
         'Ti' : {
             'c11' : 105.48,
             'c12' : 60.94,
             'c44' : 34.78,
             'g' : 31.56,
             'e' : 83.51,
             'cprime' : 26.72
        },
         'Tl' : {
             'c11' : 100.57,
             'c12' : 60.21,
             'c44' : 32.18,
             'g' : 29.00,
             'e' : 77.22,
             'cprime' : 24.22
        },
         'V' : {
             'c11' : 107.21,
             'c12' : 60.55,
             'c44' : 34.46,
             'g' : 31.87,
             'e' : 84.31,
             'cprime' : 27.99
        },
         'W' : {
             'c11' : 108.83,
             'c12' : 60.60,
             'c44' : 34.35,
             'g' : 32.18,
             'e' : 85.12,
             'cprime' : 28.94
        },
         'Y' : {
             'c11' : 100.35,
             'c12' : 61.25,
             'c44' : 34.59,
             'g' : 30.14,
             'e' : 79.96,
             'cprime' : 23.46
        },
         'Zn' : {
             'c11' : 103.47,
             'c12' : 60.22,
             'c44' : 34.03,
             'g' : 30.80,
             'e' : 81.60,
             'cprime' : 25.95
        },
         'Zr' : {
             'c11' : 103.54,
             'c12' : 61.68,
             'c44' : 34.83,
             'g' : 30.94,
             'e' : 82.04,
             'cprime' : 25.11
        }
    }
}