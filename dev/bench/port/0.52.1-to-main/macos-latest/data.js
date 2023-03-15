window.BENCHMARK_DATA = {
  "lastUpdate": 1678875952486,
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
          "id": "cb7793374dd1cec07f6eb01fe5cbef40dae6b55b",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:04:12+09:00",
          "tree_id": "46822b9066409fc5abf66ab11c15e867f0f9faca",
          "url": "https://github.com/greymistcube/libplanet/commit/cb7793374dd1cec07f6eb01fe5cbef40dae6b55b"
        },
        "date": 1678875714524,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 10673667.62371134,
            "unit": "ns",
            "range": "± 1167454.0972503594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24024053.130136985,
            "unit": "ns",
            "range": "± 1185291.9015610614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 62004525.44444445,
            "unit": "ns",
            "range": "± 3047556.975998306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 114704725.2413793,
            "unit": "ns",
            "range": "± 4826453.363626068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 234445702.1,
            "unit": "ns",
            "range": "± 4305226.392885559"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82672.39655172414,
            "unit": "ns",
            "range": "± 8279.972710934811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249684.02380952382,
            "unit": "ns",
            "range": "± 39550.130803243155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231931.25,
            "unit": "ns",
            "range": "± 12472.766222855298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218569.03225806452,
            "unit": "ns",
            "range": "± 6674.541629624569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13612060.8,
            "unit": "ns",
            "range": "± 649247.0768564075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10591653.884615384,
            "unit": "ns",
            "range": "± 93545.07964482371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25457.075268817203,
            "unit": "ns",
            "range": "± 2355.93021523466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64856.32584269663,
            "unit": "ns",
            "range": "± 5137.0700965346905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67043.71212121213,
            "unit": "ns",
            "range": "± 3166.3848423236504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128276.7741935484,
            "unit": "ns",
            "range": "± 12825.158763428735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9013.395833333334,
            "unit": "ns",
            "range": "± 1119.7935005044144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24800.98979591837,
            "unit": "ns",
            "range": "± 4135.466628066724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1720611.0104166667,
            "unit": "ns",
            "range": "± 213164.71161726923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3014902.159574468,
            "unit": "ns",
            "range": "± 191024.04769677078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2626744.277777778,
            "unit": "ns",
            "range": "± 260111.78594457408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6307950.530612245,
            "unit": "ns",
            "range": "± 250876.10656275655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3655983.908045977,
            "unit": "ns",
            "range": "± 363930.7105369715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5706115.722222222,
            "unit": "ns",
            "range": "± 120256.71305980266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25529674.40909091,
            "unit": "ns",
            "range": "± 626288.4960211008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6798970.140449438,
            "unit": "ns",
            "range": "± 626557.3975044513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29687925.970588237,
            "unit": "ns",
            "range": "± 952171.5522412037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6624379.1279296875,
            "unit": "ns",
            "range": "± 172010.01371530307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990814.435546875,
            "unit": "ns",
            "range": "± 17303.23866246038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1311576.0219029018,
            "unit": "ns",
            "range": "± 14590.341594696853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2747415.88671875,
            "unit": "ns",
            "range": "± 110760.56270694529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852804.524609375,
            "unit": "ns",
            "range": "± 8319.734154766373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720845.125139509,
            "unit": "ns",
            "range": "± 4258.749080323267"
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
          "id": "56ee645610666979561a79cd9304333e7bc38a59",
          "message": "Changelog",
          "timestamp": "2023-03-15T19:06:07+09:00",
          "tree_id": "9e89b360510d7b32c472927b17445ed8b5652134",
          "url": "https://github.com/greymistcube/libplanet/commit/56ee645610666979561a79cd9304333e7bc38a59"
        },
        "date": 1678875939016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9621381.626262626,
            "unit": "ns",
            "range": "± 1963865.9032623952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 27965423.14,
            "unit": "ns",
            "range": "± 4725148.892549223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 62912715.1,
            "unit": "ns",
            "range": "± 9557764.583398886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110892839.36734694,
            "unit": "ns",
            "range": "± 9420471.363981294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224071069.4680851,
            "unit": "ns",
            "range": "± 14145044.046535904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64225.5,
            "unit": "ns",
            "range": "± 13116.008285314001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216460.14606741574,
            "unit": "ns",
            "range": "± 20096.348863633822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202641.16315789474,
            "unit": "ns",
            "range": "± 14031.468019382268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178199.70967741936,
            "unit": "ns",
            "range": "± 14563.283564723164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12635318.01098901,
            "unit": "ns",
            "range": "± 750513.6397274942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10050034.346666666,
            "unit": "ns",
            "range": "± 502518.8640220248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26416.721649484534,
            "unit": "ns",
            "range": "± 3480.3102404283704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54940.06989247312,
            "unit": "ns",
            "range": "± 6748.510403105474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62974.07272727273,
            "unit": "ns",
            "range": "± 2690.766687207043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123240.55681818182,
            "unit": "ns",
            "range": "± 14396.594223968674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8860.397727272728,
            "unit": "ns",
            "range": "± 932.4500299670647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20783.84375,
            "unit": "ns",
            "range": "± 3745.621183330364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656030.8854166667,
            "unit": "ns",
            "range": "± 325790.7052269462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3039336.234042553,
            "unit": "ns",
            "range": "± 371412.97195588885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2398526.8863636362,
            "unit": "ns",
            "range": "± 225352.92511818054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6449936.342105263,
            "unit": "ns",
            "range": "± 533783.2409083121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3424218.1333333333,
            "unit": "ns",
            "range": "± 446184.4608686341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5456810.446236559,
            "unit": "ns",
            "range": "± 833676.480878555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24997725.277777776,
            "unit": "ns",
            "range": "± 1520228.1670702954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6871497.925531914,
            "unit": "ns",
            "range": "± 893263.7280245678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29911946.06122449,
            "unit": "ns",
            "range": "± 2021896.0431163232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7522781.092566288,
            "unit": "ns",
            "range": "± 585912.9453014788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2118638.158083546,
            "unit": "ns",
            "range": "± 84325.76357318042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381929.9359580593,
            "unit": "ns",
            "range": "± 27136.271702985472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679173.638802083,
            "unit": "ns",
            "range": "± 47022.55567007882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815874.3319335937,
            "unit": "ns",
            "range": "± 18655.631840099133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746328.6567382812,
            "unit": "ns",
            "range": "± 12375.693096492432"
          }
        ]
      }
    ]
  }
}