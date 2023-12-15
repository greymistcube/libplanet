window.BENCHMARK_DATA = {
  "lastUpdate": 1702614636290,
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
          "id": "ff955410c709f0d5f5a7b9533f237af4c6fac400",
          "message": "Additional error logging for better debugging",
          "timestamp": "2023-12-15T13:11:53+09:00",
          "tree_id": "b5f8ba557541555efe7169019c7b0391f4389796",
          "url": "https://github.com/greymistcube/libplanet/commit/ff955410c709f0d5f5a7b9533f237af4c6fac400"
        },
        "date": 1702614621356,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9892661.61904762,
            "unit": "ns",
            "range": "± 233237.90132898127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28430304.478723403,
            "unit": "ns",
            "range": "± 2118959.8160905493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59960503.025,
            "unit": "ns",
            "range": "± 3048259.923941597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116418556.04054055,
            "unit": "ns",
            "range": "± 5836178.482130757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240920759.98550725,
            "unit": "ns",
            "range": "± 10800568.931915421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55669.70212765958,
            "unit": "ns",
            "range": "± 11475.34205438586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282112.57303370786,
            "unit": "ns",
            "range": "± 22007.184245815373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273791.6777777778,
            "unit": "ns",
            "range": "± 15185.295451560567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258922.6559139785,
            "unit": "ns",
            "range": "± 16530.696922691528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4766329.837078651,
            "unit": "ns",
            "range": "± 288399.4764520112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4414430.5,
            "unit": "ns",
            "range": "± 38602.88407501557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19423.436170212764,
            "unit": "ns",
            "range": "± 1830.4933103736844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83608.35106382979,
            "unit": "ns",
            "range": "± 11458.33558322475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66625.30808080808,
            "unit": "ns",
            "range": "± 10775.821626590581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72497.84375,
            "unit": "ns",
            "range": "± 15346.294090158859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4819.015463917526,
            "unit": "ns",
            "range": "± 1464.174384205154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14865.582474226803,
            "unit": "ns",
            "range": "± 2075.869269075925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296089.8483146068,
            "unit": "ns",
            "range": "± 71833.77852756844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2831488.5108695654,
            "unit": "ns",
            "range": "± 186978.74648537367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2077780.5430107526,
            "unit": "ns",
            "range": "± 162544.60880297192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8884552.955555556,
            "unit": "ns",
            "range": "± 1151720.249287118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3270565.168421053,
            "unit": "ns",
            "range": "± 186930.75298490413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3271191.005154639,
            "unit": "ns",
            "range": "± 241628.76590495717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4499367.198924731,
            "unit": "ns",
            "range": "± 304796.6054332393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4303675.074074074,
            "unit": "ns",
            "range": "± 211334.09121292862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17026485.21,
            "unit": "ns",
            "range": "± 2832019.2978325565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4555638.2477213545,
            "unit": "ns",
            "range": "± 117289.85972389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1367290.1223493305,
            "unit": "ns",
            "range": "± 17449.15899481806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1028900.66015625,
            "unit": "ns",
            "range": "± 104513.53077305759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2090733.7097252156,
            "unit": "ns",
            "range": "± 60411.15461515399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647229.0727796053,
            "unit": "ns",
            "range": "± 13564.023923939103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599785.3438313802,
            "unit": "ns",
            "range": "± 13950.879889711972"
          }
        ]
      }
    ]
  }
}