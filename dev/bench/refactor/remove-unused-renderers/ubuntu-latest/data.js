window.BENCHMARK_DATA = {
  "lastUpdate": 1681800685880,
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
          "id": "b755fdc73e3f970d5d02ebfbd9c7f61e28e70526",
          "message": "Removed unused renderers",
          "timestamp": "2023-04-18T15:38:00+09:00",
          "tree_id": "3bb489379865002ce0123b6b0768d7f297ed0326",
          "url": "https://github.com/greymistcube/libplanet/commit/b755fdc73e3f970d5d02ebfbd9c7f61e28e70526"
        },
        "date": 1681800678557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7625820.533333333,
            "unit": "ns",
            "range": "± 10076.133625458491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19227117.230769232,
            "unit": "ns",
            "range": "± 37091.161818223496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49161252.6,
            "unit": "ns",
            "range": "± 203806.94086974987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98399532.66666667,
            "unit": "ns",
            "range": "± 923147.0840139077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197487110.53333333,
            "unit": "ns",
            "range": "± 1295655.687828856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45270.117647058825,
            "unit": "ns",
            "range": "± 2455.3812108828033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523578.142857143,
            "unit": "ns",
            "range": "± 36201.55404852907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606519.3714285716,
            "unit": "ns",
            "range": "± 84708.26411940389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2186383.569892473,
            "unit": "ns",
            "range": "± 120689.24344224228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5456310.028571429,
            "unit": "ns",
            "range": "± 151120.40946883574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5872256.977120535,
            "unit": "ns",
            "range": "± 21219.862504647255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834329.5608473558,
            "unit": "ns",
            "range": "± 759.3729425108222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334106.50546875,
            "unit": "ns",
            "range": "± 820.2369929492327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571442.57421875,
            "unit": "ns",
            "range": "± 1365.196662047929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804249.5862165178,
            "unit": "ns",
            "range": "± 669.9617114570152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 714977.5357421875,
            "unit": "ns",
            "range": "± 728.2738862314702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325038.6666666667,
            "unit": "ns",
            "range": "± 2348.097230963958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267405.64,
            "unit": "ns",
            "range": "± 7002.1292885331195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237436.66666666666,
            "unit": "ns",
            "range": "± 5086.525984228852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5593688.4,
            "unit": "ns",
            "range": "± 38176.53460625856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3991624.923076923,
            "unit": "ns",
            "range": "± 18964.808103702406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17683.177083333332,
            "unit": "ns",
            "range": "± 1599.513893227312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85333.78494623656,
            "unit": "ns",
            "range": "± 4708.87102884467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74683.16279069768,
            "unit": "ns",
            "range": "± 2759.2641956579014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 180150.35714285713,
            "unit": "ns",
            "range": "± 16407.262437273534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5173.164948453608,
            "unit": "ns",
            "range": "± 584.9497072472052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16301.968421052632,
            "unit": "ns",
            "range": "± 1625.941445470452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3184577,
            "unit": "ns",
            "range": "± 58531.43677668315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314916.6842105263,
            "unit": "ns",
            "range": "± 57089.772684054005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4207513.647058823,
            "unit": "ns",
            "range": "± 85437.6807605558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4140646.2916666665,
            "unit": "ns",
            "range": "± 140054.93656980712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7119499.142857143,
            "unit": "ns",
            "range": "± 155941.80912516237"
          }
        ]
      }
    ]
  }
}