window.BENCHMARK_DATA = {
  "lastUpdate": 1706254388792,
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
          "id": "0d725d42ce3ab3a084b5628aa13d51a18762c422",
          "message": "Changelog",
          "timestamp": "2024-01-26T16:21:33+09:00",
          "tree_id": "c85f56f82aeec4a351fb33ac6ebf26af5323d213",
          "url": "https://github.com/greymistcube/libplanet/commit/0d725d42ce3ab3a084b5628aa13d51a18762c422"
        },
        "date": 1706254382686,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417778.7837837837,
            "unit": "ns",
            "range": "± 80302.34443448194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2543756.5416666665,
            "unit": "ns",
            "range": "± 100406.3745575223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101503.785714286,
            "unit": "ns",
            "range": "± 48098.21483722107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3167796.95,
            "unit": "ns",
            "range": "± 140945.53451688951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13880071.68478261,
            "unit": "ns",
            "range": "± 1014010.1848864049"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39397.43877551021,
            "unit": "ns",
            "range": "± 5682.545023095891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969471.0154639175,
            "unit": "ns",
            "range": "± 90140.17080290763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843973.5588235294,
            "unit": "ns",
            "range": "± 58435.73131703788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1599905.7311827957,
            "unit": "ns",
            "range": "± 148182.89004082375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12926756.170212766,
            "unit": "ns",
            "range": "± 1054495.6704187172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5517072.066666666,
            "unit": "ns",
            "range": "± 27903.57359721579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14104494.73076923,
            "unit": "ns",
            "range": "± 134306.07758968184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36824597.038461536,
            "unit": "ns",
            "range": "± 155720.50989653193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75718590.46153846,
            "unit": "ns",
            "range": "± 681733.5066048678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148901591.23076922,
            "unit": "ns",
            "range": "± 716461.4631035822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3722182.3758370536,
            "unit": "ns",
            "range": "± 47957.34427297746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1222467.9471261161,
            "unit": "ns",
            "range": "± 2952.217642440882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767297.2576822917,
            "unit": "ns",
            "range": "± 12264.320008704017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931671.1723632812,
            "unit": "ns",
            "range": "± 2373.8422503118495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628779.8938551683,
            "unit": "ns",
            "range": "± 1284.688837219385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570852.7119140625,
            "unit": "ns",
            "range": "± 935.0172717980433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201421.72352941177,
            "unit": "ns",
            "range": "± 10456.520815098234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194037.70967741936,
            "unit": "ns",
            "range": "± 11623.806177672655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166109.29411764705,
            "unit": "ns",
            "range": "± 3230.5256879629105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3201201.125,
            "unit": "ns",
            "range": "± 60566.790415072624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2907309.6153846155,
            "unit": "ns",
            "range": "± 32135.722562123035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14642.561224489797,
            "unit": "ns",
            "range": "± 2355.2795446244418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64356.92105263158,
            "unit": "ns",
            "range": "± 7518.852618130582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51809.4,
            "unit": "ns",
            "range": "± 963.7742622478713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58976.886597938144,
            "unit": "ns",
            "range": "± 10373.800038916435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3538.288888888889,
            "unit": "ns",
            "range": "± 373.7394467171742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15240.10824742268,
            "unit": "ns",
            "range": "± 2132.921419656915"
          }
        ]
      }
    ]
  }
}