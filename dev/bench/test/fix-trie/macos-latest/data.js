window.BENCHMARK_DATA = {
  "lastUpdate": 1692945934437,
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
          "id": "6fcd8099d02bc91daaa0343e8fb3c79eaa0b5993",
          "message": "Change PathCursor to use Nibbles internally",
          "timestamp": "2023-08-25T15:02:56+09:00",
          "tree_id": "ed0b15e2dee8bfb58845170ff9685d398e0e31ef",
          "url": "https://github.com/greymistcube/libplanet/commit/6fcd8099d02bc91daaa0343e8fb3c79eaa0b5993"
        },
        "date": 1692945919630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11135890.479591837,
            "unit": "ns",
            "range": "± 2574748.4583608443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30149370.916666668,
            "unit": "ns",
            "range": "± 8197743.16054812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51660758.34057971,
            "unit": "ns",
            "range": "± 2484061.0487783886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106178025.25,
            "unit": "ns",
            "range": "± 1226033.6316463847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275478305.6122449,
            "unit": "ns",
            "range": "± 67519230.39808436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78723.52380952382,
            "unit": "ns",
            "range": "± 6945.686539533035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364874.9534883721,
            "unit": "ns",
            "range": "± 63055.061441084865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332452.3409090909,
            "unit": "ns",
            "range": "± 33298.707409204704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332054.0215053763,
            "unit": "ns",
            "range": "± 34190.30862590034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4480076.627659574,
            "unit": "ns",
            "range": "± 322347.7301212501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4144431.7789473683,
            "unit": "ns",
            "range": "± 277353.41422690824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25345.58695652174,
            "unit": "ns",
            "range": "± 3676.5785475807934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119482.90625,
            "unit": "ns",
            "range": "± 16224.83379110594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121111.04444444444,
            "unit": "ns",
            "range": "± 13892.6655258713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119699.86458333333,
            "unit": "ns",
            "range": "± 18536.093140067544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8475.826315789474,
            "unit": "ns",
            "range": "± 1832.2177611572574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18394.453608247422,
            "unit": "ns",
            "range": "± 2601.654597801731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1825160.445054945,
            "unit": "ns",
            "range": "± 390804.92359744915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3352972.6333333333,
            "unit": "ns",
            "range": "± 460739.5978596719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317813.8720930233,
            "unit": "ns",
            "range": "± 435647.0083223693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7303518.385416667,
            "unit": "ns",
            "range": "± 1908568.872695515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3751953.488888889,
            "unit": "ns",
            "range": "± 602364.3603523413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4176868.0224719103,
            "unit": "ns",
            "range": "± 1082296.110063881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5478752.582417582,
            "unit": "ns",
            "range": "± 1137877.400788504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4290957.711764706,
            "unit": "ns",
            "range": "± 547342.3083293814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9901738.851063829,
            "unit": "ns",
            "range": "± 2775228.446614766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7759487.77600221,
            "unit": "ns",
            "range": "± 1686816.6603198363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2407058.0771683673,
            "unit": "ns",
            "range": "± 441242.32440561015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347944.829765625,
            "unit": "ns",
            "range": "± 266397.21262741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3672130.5941124354,
            "unit": "ns",
            "range": "± 841260.0005540533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856822.5163274397,
            "unit": "ns",
            "range": "± 35742.93219643126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860925.563276242,
            "unit": "ns",
            "range": "± 29263.424906424203"
          }
        ]
      }
    ]
  }
}