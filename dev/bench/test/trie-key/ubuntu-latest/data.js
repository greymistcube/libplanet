window.BENCHMARK_DATA = {
  "lastUpdate": 1698491161190,
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
          "id": "d513aa040397dea6f1673fd73b03d7ceec5b4e04",
          "message": "Fixed trie key conversion",
          "timestamp": "2023-10-28T19:52:12+09:00",
          "tree_id": "07ce30e41caa5c9406c7e657fa5b57405dd93423",
          "url": "https://github.com/greymistcube/libplanet/commit/d513aa040397dea6f1673fd73b03d7ceec5b4e04"
        },
        "date": 1698491153876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50051.54761904762,
            "unit": "ns",
            "range": "± 2687.4425313206025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4969808.8171875,
            "unit": "ns",
            "range": "± 29923.289270953905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1603930.4907552083,
            "unit": "ns",
            "range": "± 6965.465900887464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060803.7010416666,
            "unit": "ns",
            "range": "± 3996.139215863899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617717.8180803573,
            "unit": "ns",
            "range": "± 7354.4468260175545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823298.4694661458,
            "unit": "ns",
            "range": "± 2551.75700954541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757803.35625,
            "unit": "ns",
            "range": "± 2123.330879289537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7949783.461538462,
            "unit": "ns",
            "range": "± 66490.17565351966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22007370,
            "unit": "ns",
            "range": "± 381133.2765803285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53959367.3125,
            "unit": "ns",
            "range": "± 1052214.807814749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107625565.26086956,
            "unit": "ns",
            "range": "± 2664217.866174632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214351226.5,
            "unit": "ns",
            "range": "± 4543103.306217513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343971.277777778,
            "unit": "ns",
            "range": "± 111494.66735553155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511937.709677419,
            "unit": "ns",
            "range": "± 106573.56445829441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193390.2666666666,
            "unit": "ns",
            "range": "± 71491.83512268744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4014203,
            "unit": "ns",
            "range": "± 136924.94060951393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9322070.10638298,
            "unit": "ns",
            "range": "± 349446.33562258695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271270.44680851063,
            "unit": "ns",
            "range": "± 10480.620235148945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264090.0975609756,
            "unit": "ns",
            "range": "± 9170.39012748334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232628.9024390244,
            "unit": "ns",
            "range": "± 8253.068716558944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4358587.458333333,
            "unit": "ns",
            "range": "± 109980.05370974405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009694.6842105263,
            "unit": "ns",
            "range": "± 84947.15211958591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19533.505376344085,
            "unit": "ns",
            "range": "± 1918.7467978936936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86938.41176470589,
            "unit": "ns",
            "range": "± 4702.189523671564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69267.2,
            "unit": "ns",
            "range": "± 2016.8782706501377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77002.83157894737,
            "unit": "ns",
            "range": "± 7880.9292486607455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4819.063157894737,
            "unit": "ns",
            "range": "± 538.5114197119077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18037.119565217392,
            "unit": "ns",
            "range": "± 1506.4675648710793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367019.5208333333,
            "unit": "ns",
            "range": "± 92445.78393221438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616588.093023256,
            "unit": "ns",
            "range": "± 95867.7493449561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1969054.5154639175,
            "unit": "ns",
            "range": "± 125276.15272943955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7920795.545454546,
            "unit": "ns",
            "range": "± 405816.9871195683"
          }
        ]
      }
    ]
  }
}