window.BENCHMARK_DATA = {
  "lastUpdate": 1702612468345,
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
          "id": "6bf89675478468b8f5eaeae9d3c6c1d91e28114f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:41:57+09:00",
          "tree_id": "eaa67ccbf19f077892993e50773ef00e76df5b9c",
          "url": "https://github.com/greymistcube/libplanet/commit/6bf89675478468b8f5eaeae9d3c6c1d91e28114f"
        },
        "date": 1702612446461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925450,
            "unit": "ns",
            "range": "± 93786.28617354887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1660998.3606557378,
            "unit": "ns",
            "range": "± 67642.07145409647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1343322,
            "unit": "ns",
            "range": "± 143698.21532248997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5469234.042553191,
            "unit": "ns",
            "range": "± 310804.1476291494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34700,
            "unit": "ns",
            "range": "± 1494.7179727901241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5021586.666666667,
            "unit": "ns",
            "range": "± 43428.21444088865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12694706.666666666,
            "unit": "ns",
            "range": "± 129681.11144907212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32445780,
            "unit": "ns",
            "range": "± 288571.02913692297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63364373.333333336,
            "unit": "ns",
            "range": "± 440319.20315455995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128024740,
            "unit": "ns",
            "range": "± 805695.3924583232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254387.6116071427,
            "unit": "ns",
            "range": "± 5298.478811355922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040400.6911057692,
            "unit": "ns",
            "range": "± 2205.6872025419907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731706.6545758928,
            "unit": "ns",
            "range": "± 1267.6013934437576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1899197.9166666667,
            "unit": "ns",
            "range": "± 4728.074099636786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617265.2762276785,
            "unit": "ns",
            "range": "± 1205.4759709338086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549564.4466145834,
            "unit": "ns",
            "range": "± 993.4811583814503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141012.5,
            "unit": "ns",
            "range": "± 83561.93174029794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259221.8181818184,
            "unit": "ns",
            "range": "± 83601.57869081157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741300,
            "unit": "ns",
            "range": "± 68284.76470567274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2570710.5263157897,
            "unit": "ns",
            "range": "± 104767.87042281774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6341337.5,
            "unit": "ns",
            "range": "± 292058.5489790464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167824.2857142857,
            "unit": "ns",
            "range": "± 7174.258245035485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162038.57142857142,
            "unit": "ns",
            "range": "± 7783.954005426298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145162.5,
            "unit": "ns",
            "range": "± 4077.6930543091753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2697926.3157894737,
            "unit": "ns",
            "range": "± 58408.207586351185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2548800,
            "unit": "ns",
            "range": "± 39612.11935759055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10060.63829787234,
            "unit": "ns",
            "range": "± 1015.1770951077848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50843.333333333336,
            "unit": "ns",
            "range": "± 3886.0756901613386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43787.878787878784,
            "unit": "ns",
            "range": "± 2046.273547509089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53115.15151515151,
            "unit": "ns",
            "range": "± 11932.517428048719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2214.5833333333335,
            "unit": "ns",
            "range": "± 426.979394712171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9646.59090909091,
            "unit": "ns",
            "range": "± 933.5322690660831"
          }
        ]
      }
    ]
  }
}