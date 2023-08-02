window.BENCHMARK_DATA = {
  "lastUpdate": 1690964054751,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "9378f081b0be228a89dd695049564cd1e9fa248f",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:53:42+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/9378f081b0be228a89dd695049564cd1e9fa248f"
        },
        "date": 1690963722998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284157.4074074074,
            "unit": "ns",
            "range": "± 48410.64751840903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2475493.6170212766,
            "unit": "ns",
            "range": "± 87881.74466479599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1897256.7567567567,
            "unit": "ns",
            "range": "± 64102.36839332563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4585084.2105263155,
            "unit": "ns",
            "range": "± 231204.34082005272"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43073.170731707316,
            "unit": "ns",
            "range": "± 2270.2612445793466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6890046.153846154,
            "unit": "ns",
            "range": "± 47195.261333185685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17746000,
            "unit": "ns",
            "range": "± 80830.69607872635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45214271.428571425,
            "unit": "ns",
            "range": "± 200190.23425259758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91604069.23076923,
            "unit": "ns",
            "range": "± 622616.3082570937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185864515.3846154,
            "unit": "ns",
            "range": "± 1431063.0045797855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4996151.785714285,
            "unit": "ns",
            "range": "± 45780.486519356804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553581.7940848214,
            "unit": "ns",
            "range": "± 5742.381932386215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155204.8001802885,
            "unit": "ns",
            "range": "± 3757.416999681518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2521357.2823660714,
            "unit": "ns",
            "range": "± 16643.87658015071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818245.33203125,
            "unit": "ns",
            "range": "± 5955.48591638604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748833.0078125,
            "unit": "ns",
            "range": "± 2742.2568090049567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2934350,
            "unit": "ns",
            "range": "± 51849.14137706102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3161982.1428571427,
            "unit": "ns",
            "range": "± 87476.07526281825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3970607.6923076925,
            "unit": "ns",
            "range": "± 46753.38600105989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3502118.5185185187,
            "unit": "ns",
            "range": "± 96341.96320733699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5887918.421052632,
            "unit": "ns",
            "range": "± 196797.6445355402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259381.66666666666,
            "unit": "ns",
            "range": "± 11473.779860786299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243050,
            "unit": "ns",
            "range": "± 7945.921873426937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228895.83333333334,
            "unit": "ns",
            "range": "± 13205.436812294727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3956796.153846154,
            "unit": "ns",
            "range": "± 28746.119024563282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3565933.3333333335,
            "unit": "ns",
            "range": "± 55540.61148213552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18104.21052631579,
            "unit": "ns",
            "range": "± 2022.3178080878617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85679.79797979798,
            "unit": "ns",
            "range": "± 7429.244197529549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74036.17021276595,
            "unit": "ns",
            "range": "± 4651.6467442274325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85504.54545454546,
            "unit": "ns",
            "range": "± 9036.616561051673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4391.7525773195875,
            "unit": "ns",
            "range": "± 764.2630032549856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18403.157894736843,
            "unit": "ns",
            "range": "± 1681.7197777793551"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "572df674c2a42409a261c5439b847ead10d2496e",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:56:57+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/572df674c2a42409a261c5439b847ead10d2496e"
        },
        "date": 1690963946913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480620,
            "unit": "ns",
            "range": "± 42229.33048180111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508112.048192771,
            "unit": "ns",
            "range": "± 131464.5638960853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1763374.7474747475,
            "unit": "ns",
            "range": "± 143909.0354295098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4440262.857142857,
            "unit": "ns",
            "range": "± 141797.15645890767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42894.444444444445,
            "unit": "ns",
            "range": "± 2339.8531170221886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6936025,
            "unit": "ns",
            "range": "± 25196.97402467209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17724653.333333332,
            "unit": "ns",
            "range": "± 139417.19440312264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45590720,
            "unit": "ns",
            "range": "± 323405.40060867433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90342933.33333333,
            "unit": "ns",
            "range": "± 670586.8300724871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182390526.66666666,
            "unit": "ns",
            "range": "± 605753.9145167622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893411.598557692,
            "unit": "ns",
            "range": "± 3933.7235016428526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534316.1197916667,
            "unit": "ns",
            "range": "± 1943.0070302483753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160380.64453125,
            "unit": "ns",
            "range": "± 1415.2772316633848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581666.6766826925,
            "unit": "ns",
            "range": "± 3839.074693381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805995.3776041666,
            "unit": "ns",
            "range": "± 668.2758985075134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724748.4765625,
            "unit": "ns",
            "range": "± 915.8483632130985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2993613.9534883723,
            "unit": "ns",
            "range": "± 110437.10897501658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118554.347826087,
            "unit": "ns",
            "range": "± 78709.9536171822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3979236.8421052634,
            "unit": "ns",
            "range": "± 84964.699928371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3456027.027027027,
            "unit": "ns",
            "range": "± 105795.8008215424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5894773.1707317075,
            "unit": "ns",
            "range": "± 194486.26175695576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260650,
            "unit": "ns",
            "range": "± 3325.457362028066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244526.31578947368,
            "unit": "ns",
            "range": "± 4715.22457752552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222071.71717171717,
            "unit": "ns",
            "range": "± 13013.541145425474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3960906.6666666665,
            "unit": "ns",
            "range": "± 27201.850427253416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3530042.8571428573,
            "unit": "ns",
            "range": "± 32584.06203807467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18970.967741935485,
            "unit": "ns",
            "range": "± 1876.3737370582703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83469.79166666667,
            "unit": "ns",
            "range": "± 4963.755365100239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66834.3137254902,
            "unit": "ns",
            "range": "± 2734.9861095822484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89293.93939393939,
            "unit": "ns",
            "range": "± 15597.100843778093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4424.489795918367,
            "unit": "ns",
            "range": "± 789.0110245123446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18686.315789473683,
            "unit": "ns",
            "range": "± 2064.111293300586"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "c814ca9a59ac105d2d4aed5b76dd332358fd8875",
          "message": "Changelog",
          "timestamp": "2023-08-02T16:58:55+09:00",
          "tree_id": "0bb1e6e41bb766629bce8ff861dd12c4df3504b0",
          "url": "https://github.com/greymistcube/libplanet/commit/c814ca9a59ac105d2d4aed5b76dd332358fd8875"
        },
        "date": 1690964031578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367221.2121212122,
            "unit": "ns",
            "range": "± 126834.3876572648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2582054.4444444445,
            "unit": "ns",
            "range": "± 143237.16497286301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1777047.2527472528,
            "unit": "ns",
            "range": "± 99372.29810796182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4712385.454545454,
            "unit": "ns",
            "range": "± 200567.13332372523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49929.67032967033,
            "unit": "ns",
            "range": "± 3244.225451320975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7220066.666666667,
            "unit": "ns",
            "range": "± 133968.0807754842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19489880,
            "unit": "ns",
            "range": "± 277730.07244959474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49359840.90909091,
            "unit": "ns",
            "range": "± 1201208.5647812772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98194173.68421052,
            "unit": "ns",
            "range": "± 2094982.3485976371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195316673.33333334,
            "unit": "ns",
            "range": "± 2838469.94510037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4898400.111607143,
            "unit": "ns",
            "range": "± 21544.80046633257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529914.3880208333,
            "unit": "ns",
            "range": "± 7616.348095657362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1207154.0104166667,
            "unit": "ns",
            "range": "± 6343.208011232777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673417.4739583335,
            "unit": "ns",
            "range": "± 13127.57039418962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852583.2291666666,
            "unit": "ns",
            "range": "± 4181.422709839909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787839.7879464285,
            "unit": "ns",
            "range": "± 2846.192616424387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3146894.285714286,
            "unit": "ns",
            "range": "± 101864.90749100625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3311639.393939394,
            "unit": "ns",
            "range": "± 155738.03658588688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4082347.0588235296,
            "unit": "ns",
            "range": "± 165892.21241871623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3740343.75,
            "unit": "ns",
            "range": "± 116204.41926386282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6155773.076923077,
            "unit": "ns",
            "range": "± 159234.22385327172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257520.58823529413,
            "unit": "ns",
            "range": "± 6987.8153438580075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248525.8064516129,
            "unit": "ns",
            "range": "± 7158.95559151545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221937.5,
            "unit": "ns",
            "range": "± 10623.736876036963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4108760.8695652173,
            "unit": "ns",
            "range": "± 100480.3722992272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3693146.153846154,
            "unit": "ns",
            "range": "± 38443.21820088721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19939.17525773196,
            "unit": "ns",
            "range": "± 2114.1170685138136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84718.75,
            "unit": "ns",
            "range": "± 5533.425939829587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69403.2258064516,
            "unit": "ns",
            "range": "± 2056.4506430526917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91114.58333333333,
            "unit": "ns",
            "range": "± 14073.438805940834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4883.505154639175,
            "unit": "ns",
            "range": "± 837.9887146678368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18500,
            "unit": "ns",
            "range": "± 1788.3835688894271"
          }
        ]
      }
    ]
  }
}