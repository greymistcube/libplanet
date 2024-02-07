window.BENCHMARK_DATA = {
  "lastUpdate": 1707287289331,
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
          "id": "db763b0d5205886da9a7c7240b3b551bd24e2768",
          "message": "Revert query argument type to be compatible with legacy queries",
          "timestamp": "2024-02-07T15:15:42+09:00",
          "tree_id": "f9cfa42ebc5d7a160cad261c75e8cfbd601eda52",
          "url": "https://github.com/greymistcube/libplanet/commit/db763b0d5205886da9a7c7240b3b551bd24e2768"
        },
        "date": 1707287270306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007605.1020408163,
            "unit": "ns",
            "range": "± 115690.28808506779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1757807.843137255,
            "unit": "ns",
            "range": "± 71599.51911329365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519407.5268817204,
            "unit": "ns",
            "range": "± 146085.4427147518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10886665.168539327,
            "unit": "ns",
            "range": "± 834620.3553250919"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35651.64835164835,
            "unit": "ns",
            "range": "± 2747.0534775105502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5212006.666666667,
            "unit": "ns",
            "range": "± 79887.23719510312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13609528.57142857,
            "unit": "ns",
            "range": "± 142431.47571630814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34396171.428571425,
            "unit": "ns",
            "range": "± 265834.3250064753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67436413.33333333,
            "unit": "ns",
            "range": "± 1114891.68715855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132481892.3076923,
            "unit": "ns",
            "range": "± 856883.5650790392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3443775.390625,
            "unit": "ns",
            "range": "± 8642.891222133352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074465.5859375,
            "unit": "ns",
            "range": "± 2025.9567963299105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749045.9333147322,
            "unit": "ns",
            "range": "± 1004.7429102795803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983428.75,
            "unit": "ns",
            "range": "± 7272.641720315658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629898.6783854166,
            "unit": "ns",
            "range": "± 986.4071901508034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561865.0320870535,
            "unit": "ns",
            "range": "± 863.1513906163182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2224592.592592593,
            "unit": "ns",
            "range": "± 82774.31889555686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2358763.1578947366,
            "unit": "ns",
            "range": "± 80383.79028827598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821147.5,
            "unit": "ns",
            "range": "± 94694.40182597643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2847673.913043478,
            "unit": "ns",
            "range": "± 137209.29338720412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12683855.913978495,
            "unit": "ns",
            "range": "± 1703597.3676862356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183590.74074074073,
            "unit": "ns",
            "range": "± 7742.342985986122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176272.131147541,
            "unit": "ns",
            "range": "± 7875.830774116065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145065.21739130435,
            "unit": "ns",
            "range": "± 6928.942413294537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2909180,
            "unit": "ns",
            "range": "± 50131.900308799675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2545786.6666666665,
            "unit": "ns",
            "range": "± 46482.28336330592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13223.404255319148,
            "unit": "ns",
            "range": "± 2221.4702838249227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56360.98901098901,
            "unit": "ns",
            "range": "± 4607.179193617297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50618.085106382976,
            "unit": "ns",
            "range": "± 6111.336421184328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64713.40206185567,
            "unit": "ns",
            "range": "± 13388.059269877234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3164.8936170212764,
            "unit": "ns",
            "range": "± 676.917022409421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12112.087912087913,
            "unit": "ns",
            "range": "± 1577.257476679425"
          }
        ]
      }
    ]
  }
}