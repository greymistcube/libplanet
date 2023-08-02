window.BENCHMARK_DATA = {
  "lastUpdate": 1690963971055,
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
      }
    ]
  }
}