window.BENCHMARK_DATA = {
  "lastUpdate": 1702618458219,
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
          "id": "9860c2020284ee06366fe4a6297f552a05539fe0",
          "message": "Prepare 3.9.3",
          "timestamp": "2023-12-15T14:17:36+09:00",
          "tree_id": "10171e9d05502bea7fd706aa57892745ff0e2867",
          "url": "https://github.com/greymistcube/libplanet/commit/9860c2020284ee06366fe4a6297f552a05539fe0"
        },
        "date": 1702618437631,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7732623.615384615,
            "unit": "ns",
            "range": "± 78888.12177438213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18541488.666666668,
            "unit": "ns",
            "range": "± 184377.24582513052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46019759.85714286,
            "unit": "ns",
            "range": "± 687434.4591082967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94001254.22222222,
            "unit": "ns",
            "range": "± 2008224.8497084596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190313095,
            "unit": "ns",
            "range": "± 3627252.047113627"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42679.989583333336,
            "unit": "ns",
            "range": "± 10365.824735761353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219466.89361702127,
            "unit": "ns",
            "range": "± 13642.399923253251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216007.48969072165,
            "unit": "ns",
            "range": "± 15026.085469314441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191963.34831460673,
            "unit": "ns",
            "range": "± 12689.87375653689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3701699.1470588236,
            "unit": "ns",
            "range": "± 71622.10216296815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3320088.6923076925,
            "unit": "ns",
            "range": "± 53380.65495786624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13419.20652173913,
            "unit": "ns",
            "range": "± 1650.2027816654352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61599.41237113402,
            "unit": "ns",
            "range": "± 7517.665310720611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53352.77011494253,
            "unit": "ns",
            "range": "± 5720.059768961496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63997.701030927834,
            "unit": "ns",
            "range": "± 12623.000982139829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4029.4894736842107,
            "unit": "ns",
            "range": "± 1244.3396223028094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12122.588607594937,
            "unit": "ns",
            "range": "± 639.8183674528949"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1059129.71875,
            "unit": "ns",
            "range": "± 99876.46081031181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2213040.5901639345,
            "unit": "ns",
            "range": "± 99157.9368851156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1538545.4210526317,
            "unit": "ns",
            "range": "± 123917.52528439253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7311267.510638298,
            "unit": "ns",
            "range": "± 648993.9078824652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2887854,
            "unit": "ns",
            "range": "± 103649.61330429764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3006644.319587629,
            "unit": "ns",
            "range": "± 172993.73956667155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3631109.3727272726,
            "unit": "ns",
            "range": "± 154693.27958158273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3476092.78,
            "unit": "ns",
            "range": "± 170710.82242989403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14172323.03,
            "unit": "ns",
            "range": "± 2334527.103745984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4350351.860416667,
            "unit": "ns",
            "range": "± 33010.06438897276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1336968.8909254808,
            "unit": "ns",
            "range": "± 11433.386672248525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1012019.5989022091,
            "unit": "ns",
            "range": "± 44272.43864623206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2461764.6832421874,
            "unit": "ns",
            "range": "± 163348.95986385492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 730732.363457434,
            "unit": "ns",
            "range": "± 58443.721210773336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 678229.2345244739,
            "unit": "ns",
            "range": "± 60002.78895763243"
          }
        ]
      }
    ]
  }
}