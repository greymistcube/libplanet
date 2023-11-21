window.BENCHMARK_DATA = {
  "lastUpdate": 1700526332450,
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
          "id": "f1142cf897d8e43294230fcf03a832bc254509a4",
          "message": "Release 3.7.1",
          "timestamp": "2023-11-21T09:14:45+09:00",
          "tree_id": "b6b49167f5b1d662728c77d704f5f4d189bd5805",
          "url": "https://github.com/greymistcube/libplanet/commit/f1142cf897d8e43294230fcf03a832bc254509a4"
        },
        "date": 1700526326474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200712.69607843139,
            "unit": "ns",
            "range": "± 8179.398701664098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207818.95833333334,
            "unit": "ns",
            "range": "± 18656.567872392632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178123.66666666666,
            "unit": "ns",
            "range": "± 4171.838243907993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3161971.533333333,
            "unit": "ns",
            "range": "± 24669.054851507113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2793864.769230769,
            "unit": "ns",
            "range": "± 19838.709787323394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16240.055555555555,
            "unit": "ns",
            "range": "± 1121.969737731156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69312.51546391753,
            "unit": "ns",
            "range": "± 7461.056895799854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62545.41935483871,
            "unit": "ns",
            "range": "± 6932.106161412964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71054.97916666667,
            "unit": "ns",
            "range": "± 13214.73740542347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4042.6075268817203,
            "unit": "ns",
            "range": "± 1110.5748360975792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11862.455555555556,
            "unit": "ns",
            "range": "± 1166.4093289757236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687716.671875,
            "unit": "ns",
            "range": "± 77058.63447192336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202520.3688401442,
            "unit": "ns",
            "range": "± 4257.295457087679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775740.7287109375,
            "unit": "ns",
            "range": "± 14032.797138308835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967928.3645833333,
            "unit": "ns",
            "range": "± 5767.4578171457515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631354.476784446,
            "unit": "ns",
            "range": "± 15332.319496268945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575109.236328125,
            "unit": "ns",
            "range": "± 4056.3648228889324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39572.0412371134,
            "unit": "ns",
            "range": "± 5075.429271495018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464802.285714286,
            "unit": "ns",
            "range": "± 43308.55457541948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2572523.9375,
            "unit": "ns",
            "range": "± 97528.33805157553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3188240.785714286,
            "unit": "ns",
            "range": "± 44724.84978893565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3022057.5465116277,
            "unit": "ns",
            "range": "± 111162.42483174778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6744788.6,
            "unit": "ns",
            "range": "± 175050.6316585044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5594951.366666666,
            "unit": "ns",
            "range": "± 36808.953046908624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14766598.714285715,
            "unit": "ns",
            "range": "± 57365.92950413709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36671017.76923077,
            "unit": "ns",
            "range": "± 212892.06582685426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75898568.64285715,
            "unit": "ns",
            "range": "± 326840.29013656644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146382738.46153846,
            "unit": "ns",
            "range": "± 717203.4438421936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966880.8157894737,
            "unit": "ns",
            "range": "± 93138.78137720683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895737.2153846154,
            "unit": "ns",
            "range": "± 88434.56428439976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1415077.5625,
            "unit": "ns",
            "range": "± 91247.32871681202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5400912.166666667,
            "unit": "ns",
            "range": "± 108444.11576312962"
          }
        ]
      }
    ]
  }
}