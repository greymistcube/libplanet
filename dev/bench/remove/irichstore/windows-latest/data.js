window.BENCHMARK_DATA = {
  "lastUpdate": 1702968111816,
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
          "id": "56df40f304df3cbc85ce84447c148d9cdd54da7a",
          "message": "Remove unnecessary arguments",
          "timestamp": "2023-12-19T15:18:03+09:00",
          "tree_id": "4b66446b048ef2de59401d42b381fefc544182ee",
          "url": "https://github.com/greymistcube/libplanet/commit/56df40f304df3cbc85ce84447c148d9cdd54da7a"
        },
        "date": 1702967445240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 921862.2448979592,
            "unit": "ns",
            "range": "± 96165.35535298672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1668075,
            "unit": "ns",
            "range": "± 79215.3808718147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1326713.4020618557,
            "unit": "ns",
            "range": "± 92363.042334838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5166050,
            "unit": "ns",
            "range": "± 162371.77178539155"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34367.469879518074,
            "unit": "ns",
            "range": "± 1849.529171051243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4893476.666666667,
            "unit": "ns",
            "range": "± 29095.20006232414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13243292.857142856,
            "unit": "ns",
            "range": "± 165189.9348036664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32824371.42857143,
            "unit": "ns",
            "range": "± 416246.86171803134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62919734.615384616,
            "unit": "ns",
            "range": "± 492896.222759169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126158007.14285715,
            "unit": "ns",
            "range": "± 817293.7956491493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3337796.09375,
            "unit": "ns",
            "range": "± 24054.68019824626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078636.9838169643,
            "unit": "ns",
            "range": "± 6812.242462354479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732021.2541852678,
            "unit": "ns",
            "range": "± 4243.320131140622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917192.9408482143,
            "unit": "ns",
            "range": "± 8439.103894885713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615353.828125,
            "unit": "ns",
            "range": "± 2810.97633099322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556584.9958147322,
            "unit": "ns",
            "range": "± 1053.04297662259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2113302.7027027025,
            "unit": "ns",
            "range": "± 57317.0252314387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265916,
            "unit": "ns",
            "range": "± 80599.43120273294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775489.4736842103,
            "unit": "ns",
            "range": "± 91305.91227259996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2654032.3529411764,
            "unit": "ns",
            "range": "± 84202.3382695129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6388838.961038961,
            "unit": "ns",
            "range": "± 320006.39555937995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167033.92857142858,
            "unit": "ns",
            "range": "± 6599.126024384918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 156559.0163934426,
            "unit": "ns",
            "range": "± 7061.241086598028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140985.7142857143,
            "unit": "ns",
            "range": "± 3247.350568430473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2688486.6666666665,
            "unit": "ns",
            "range": "± 27759.42225280497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2484029.411764706,
            "unit": "ns",
            "range": "± 48932.70589168714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10008.510638297872,
            "unit": "ns",
            "range": "± 1180.7287320105695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52891.30434782609,
            "unit": "ns",
            "range": "± 4303.554681349536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44052,
            "unit": "ns",
            "range": "± 1777.6664364226697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53874.74747474748,
            "unit": "ns",
            "range": "± 11453.529385947546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2254.1666666666665,
            "unit": "ns",
            "range": "± 353.30519583429384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11036.170212765957,
            "unit": "ns",
            "range": "± 1723.5154786437768"
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
          "id": "9184a49017e02fdccf557059daa88da9e19d452c",
          "message": "Changelog",
          "timestamp": "2023-12-19T15:28:48+09:00",
          "tree_id": "77bd1dbc57562835aab336666e502ff4af90e801",
          "url": "https://github.com/greymistcube/libplanet/commit/9184a49017e02fdccf557059daa88da9e19d452c"
        },
        "date": 1702968084984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 949902.5252525252,
            "unit": "ns",
            "range": "± 103208.78813182365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1693742.105263158,
            "unit": "ns",
            "range": "± 66822.9081425792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1327381.25,
            "unit": "ns",
            "range": "± 102147.21709633755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5190661.764705882,
            "unit": "ns",
            "range": "± 148316.88182117057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34284.61538461538,
            "unit": "ns",
            "range": "± 2257.3791626044313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4929940,
            "unit": "ns",
            "range": "± 35081.98153712855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12982680,
            "unit": "ns",
            "range": "± 68078.49670994296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31854307.14285714,
            "unit": "ns",
            "range": "± 195326.6513159065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64770978.571428575,
            "unit": "ns",
            "range": "± 961397.3229536358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134300510,
            "unit": "ns",
            "range": "± 719044.6238884323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3263952.0052083335,
            "unit": "ns",
            "range": "± 19015.001768821872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1037361.0770089285,
            "unit": "ns",
            "range": "± 1305.028041127006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729732.0103236607,
            "unit": "ns",
            "range": "± 1617.8040209051362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1905034.2215401786,
            "unit": "ns",
            "range": "± 3295.2703022160845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628069.6364182692,
            "unit": "ns",
            "range": "± 2175.1080341699167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549916.2516276041,
            "unit": "ns",
            "range": "± 646.388053252595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2152146.875,
            "unit": "ns",
            "range": "± 65071.251193248456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2181071.6981132077,
            "unit": "ns",
            "range": "± 89036.85144011241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2737912.0689655175,
            "unit": "ns",
            "range": "± 120059.69104236501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2646968.9655172415,
            "unit": "ns",
            "range": "± 76411.91054993734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6104093.939393939,
            "unit": "ns",
            "range": "± 179973.6160166851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170710.86956521738,
            "unit": "ns",
            "range": "± 5887.283027787552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171332.6530612245,
            "unit": "ns",
            "range": "± 5235.192918886483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144951.21951219512,
            "unit": "ns",
            "range": "± 5179.677690321065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2681607.6923076925,
            "unit": "ns",
            "range": "± 29484.92443997049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2468490,
            "unit": "ns",
            "range": "± 35703.837328780224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9364.130434782608,
            "unit": "ns",
            "range": "± 1078.0101246990469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49070.23809523809,
            "unit": "ns",
            "range": "± 2639.7234138568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43835.294117647056,
            "unit": "ns",
            "range": "± 1770.9684954184547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62320.20202020202,
            "unit": "ns",
            "range": "± 17642.787621598018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2444.8979591836733,
            "unit": "ns",
            "range": "± 563.699570671447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8971.27659574468,
            "unit": "ns",
            "range": "± 1094.0329200709818"
          }
        ]
      }
    ]
  }
}