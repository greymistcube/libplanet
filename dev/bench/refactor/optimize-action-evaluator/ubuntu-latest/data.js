window.BENCHMARK_DATA = {
  "lastUpdate": 1708395734162,
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
          "id": "c1414e8ce929a1e5b5195134d44aef321b719aba",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T11:07:47+09:00",
          "tree_id": "4652084f03c64430ed32917042b6ade68d9df046",
          "url": "https://github.com/greymistcube/libplanet/commit/c1414e8ce929a1e5b5195134d44aef321b719aba"
        },
        "date": 1708395514464,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5820003.766666667,
            "unit": "ns",
            "range": "± 49794.2619793352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14512495.8,
            "unit": "ns",
            "range": "± 96857.75980433516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38136742.85714286,
            "unit": "ns",
            "range": "± 179774.32423837014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77064201.92857143,
            "unit": "ns",
            "range": "± 719734.6133182558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151544537.34615386,
            "unit": "ns",
            "range": "± 723483.34468054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200464.5,
            "unit": "ns",
            "range": "± 11022.361706034315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197816.58241758242,
            "unit": "ns",
            "range": "± 13532.656084093547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168375.05555555556,
            "unit": "ns",
            "range": "± 3403.488063256874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3204759.230769231,
            "unit": "ns",
            "range": "± 43271.31105816309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2917492.285714286,
            "unit": "ns",
            "range": "± 19224.17787550383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15828.80612244898,
            "unit": "ns",
            "range": "± 2790.0439282953594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66913.59183673469,
            "unit": "ns",
            "range": "± 7978.113017586047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89276.375,
            "unit": "ns",
            "range": "± 3132.7065359501225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65876.0306122449,
            "unit": "ns",
            "range": "± 13887.581972962545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3318.795918367347,
            "unit": "ns",
            "range": "± 740.6316503002471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13974.934343434343,
            "unit": "ns",
            "range": "± 2227.09594544938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41907.448979591834,
            "unit": "ns",
            "range": "± 6301.342992384985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959084.9195402298,
            "unit": "ns",
            "range": "± 61596.57099169815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839203.177419355,
            "unit": "ns",
            "range": "± 54481.20874539349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626047.8125,
            "unit": "ns",
            "range": "± 123845.26061333767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7878860.905660378,
            "unit": "ns",
            "range": "± 285072.49600909645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3691385.6947115385,
            "unit": "ns",
            "range": "± 37213.45627305361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1243623.2404891304,
            "unit": "ns",
            "range": "± 26900.764487099437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 795053.5290715144,
            "unit": "ns",
            "range": "± 2904.531992712622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976101.2509014423,
            "unit": "ns",
            "range": "± 3371.5056521143424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627812.2374674479,
            "unit": "ns",
            "range": "± 820.9784099639458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578189.4940655048,
            "unit": "ns",
            "range": "± 1193.8091485070775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480764.1126760566,
            "unit": "ns",
            "range": "± 115238.83884431986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625749.5625,
            "unit": "ns",
            "range": "± 48172.93235344063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3253689.8,
            "unit": "ns",
            "range": "± 52014.345310006276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3362379.3970588236,
            "unit": "ns",
            "range": "± 155478.9609970448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8895520.5,
            "unit": "ns",
            "range": "± 246838.36142399238"
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
          "id": "dc089524488fc43eba798e13fb800087182dd0d0",
          "message": "Changelog",
          "timestamp": "2024-02-20T11:11:09+09:00",
          "tree_id": "192497160d353fc82748f877c127cb77f44b8b25",
          "url": "https://github.com/greymistcube/libplanet/commit/dc089524488fc43eba798e13fb800087182dd0d0"
        },
        "date": 1708395726807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5493109.684210527,
            "unit": "ns",
            "range": "± 38794.34859909456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14621699.066666666,
            "unit": "ns",
            "range": "± 142302.1070396493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36137941.833333336,
            "unit": "ns",
            "range": "± 364362.8593640818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76143696,
            "unit": "ns",
            "range": "± 488117.46567428386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150597849.8,
            "unit": "ns",
            "range": "± 1504022.5303042314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200069.6625,
            "unit": "ns",
            "range": "± 10348.04616664085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190774.97619047618,
            "unit": "ns",
            "range": "± 6925.11309580307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163997.85185185185,
            "unit": "ns",
            "range": "± 4599.883231826516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3379198.933333333,
            "unit": "ns",
            "range": "± 31457.037705567953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846608.4285714286,
            "unit": "ns",
            "range": "± 47757.546552615895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12653.41011235955,
            "unit": "ns",
            "range": "± 881.44303998471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69721.37755102041,
            "unit": "ns",
            "range": "± 9246.347396435705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55233.42857142857,
            "unit": "ns",
            "range": "± 4035.9103671988923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80025.62626262626,
            "unit": "ns",
            "range": "± 25272.216071306713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3660.2391304347825,
            "unit": "ns",
            "range": "± 562.6101527225476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14540.505154639175,
            "unit": "ns",
            "range": "± 3107.7949314442635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42077.32989690721,
            "unit": "ns",
            "range": "± 6181.828620915312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993201.9105263158,
            "unit": "ns",
            "range": "± 104173.09949407293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1967483.8028169014,
            "unit": "ns",
            "range": "± 96226.55391591237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708683.3315789474,
            "unit": "ns",
            "range": "± 165954.3746460539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7798724.236842105,
            "unit": "ns",
            "range": "± 262359.3457708735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3780824.0255408655,
            "unit": "ns",
            "range": "± 11204.413854614013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214892.4244290865,
            "unit": "ns",
            "range": "± 6070.487348930189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 789975.0037109375,
            "unit": "ns",
            "range": "± 14007.461251986002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960605.8836495536,
            "unit": "ns",
            "range": "± 4677.405847417137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623359.1682692308,
            "unit": "ns",
            "range": "± 1819.7803479186027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568972.7611607143,
            "unit": "ns",
            "range": "± 922.4656772880273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436995.1707317075,
            "unit": "ns",
            "range": "± 87755.3618310307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2598745.6842105263,
            "unit": "ns",
            "range": "± 89268.76887662859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3165743.777777778,
            "unit": "ns",
            "range": "± 65247.062592936214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3264856.365591398,
            "unit": "ns",
            "range": "± 187652.5920976675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8991964.65,
            "unit": "ns",
            "range": "± 194372.93537906546"
          }
        ]
      }
    ]
  }
}