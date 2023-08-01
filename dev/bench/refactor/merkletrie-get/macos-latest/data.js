window.BENCHMARK_DATA = {
  "lastUpdate": 1690874723940,
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
          "id": "97d0159a1bc6953ac6c44c96cbdfe29a75db0436",
          "message": "Cleanup and optimize Get()",
          "timestamp": "2023-08-01T16:03:20+09:00",
          "tree_id": "839690871fa2434a8c18fc659198a5124016dda8",
          "url": "https://github.com/greymistcube/libplanet/commit/97d0159a1bc6953ac6c44c96cbdfe29a75db0436"
        },
        "date": 1690874708732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10524115.265957447,
            "unit": "ns",
            "range": "± 2164984.9395494014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22161668.095238097,
            "unit": "ns",
            "range": "± 1150298.3633629829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56198947.44594595,
            "unit": "ns",
            "range": "± 1869685.4381367494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112501971.1875,
            "unit": "ns",
            "range": "± 2194911.6675847406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231842895.73333332,
            "unit": "ns",
            "range": "± 4102865.575720262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81386.67045454546,
            "unit": "ns",
            "range": "± 5632.623373044331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375317.1818181818,
            "unit": "ns",
            "range": "± 39232.74128691624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370341.78571428574,
            "unit": "ns",
            "range": "± 41540.195107039726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339709.1989247312,
            "unit": "ns",
            "range": "± 25084.605045284923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4648202.302083333,
            "unit": "ns",
            "range": "± 342182.7397586549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4469024.308080808,
            "unit": "ns",
            "range": "± 401356.41558235476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31257.16304347826,
            "unit": "ns",
            "range": "± 5425.527815063324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 137173.36082474227,
            "unit": "ns",
            "range": "± 15632.074901721546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130923.1559139785,
            "unit": "ns",
            "range": "± 11245.435089785491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133438.4,
            "unit": "ns",
            "range": "± 17126.885785531424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10025.768041237114,
            "unit": "ns",
            "range": "± 1028.4904341989923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29327.331325301206,
            "unit": "ns",
            "range": "± 3247.1977706086495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722854.324742268,
            "unit": "ns",
            "range": "± 296803.1203577975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3257062.6063829786,
            "unit": "ns",
            "range": "± 317866.99543792824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225186.4,
            "unit": "ns",
            "range": "± 272791.8687794263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6352378.322580645,
            "unit": "ns",
            "range": "± 374792.4324076264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3845785.8958333335,
            "unit": "ns",
            "range": "± 363055.6247516054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3944997.0816326533,
            "unit": "ns",
            "range": "± 443224.3233705907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4898139.63,
            "unit": "ns",
            "range": "± 474009.15426402265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4388766.65625,
            "unit": "ns",
            "range": "± 367732.1168433212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9692355.112903226,
            "unit": "ns",
            "range": "± 3004033.451362218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7471339.690885416,
            "unit": "ns",
            "range": "± 109385.19075084446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2241335.93761489,
            "unit": "ns",
            "range": "± 70817.89458072072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1443188.9303385417,
            "unit": "ns",
            "range": "± 44940.36588499114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2748165.9961328125,
            "unit": "ns",
            "range": "± 269467.0487511453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880869.3425580193,
            "unit": "ns",
            "range": "± 41876.886441549745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858074.9923046875,
            "unit": "ns",
            "range": "± 21897.09499760619"
          }
        ]
      }
    ]
  }
}