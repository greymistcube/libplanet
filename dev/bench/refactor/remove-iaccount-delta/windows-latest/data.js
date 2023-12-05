window.BENCHMARK_DATA = {
  "lastUpdate": 1701747047192,
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
          "id": "994021d4014c1a3eff9336c73c55959c1de602c0",
          "message": "Remove IAccountDelta and AccountDelta",
          "timestamp": "2023-12-05T12:19:24+09:00",
          "tree_id": "e063b5281a3b9b71847ed41dda78efc7329a6b5f",
          "url": "https://github.com/greymistcube/libplanet/commit/994021d4014c1a3eff9336c73c55959c1de602c0"
        },
        "date": 1701747030406,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 919335.7142857143,
            "unit": "ns",
            "range": "± 92093.06616163644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1659865.1515151516,
            "unit": "ns",
            "range": "± 72102.12733962685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1304544.8979591837,
            "unit": "ns",
            "range": "± 114708.03917795533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5410222.7272727275,
            "unit": "ns",
            "range": "± 275041.559843505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34443.8202247191,
            "unit": "ns",
            "range": "± 2343.218215121507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5095885.714285715,
            "unit": "ns",
            "range": "± 29678.27117976686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12955792.307692308,
            "unit": "ns",
            "range": "± 108227.65713638435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31534642.85714286,
            "unit": "ns",
            "range": "± 258308.05614252892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63138878.571428575,
            "unit": "ns",
            "range": "± 305829.2162392182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128981321.42857143,
            "unit": "ns",
            "range": "± 695306.7703468088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3275385.9933035714,
            "unit": "ns",
            "range": "± 21278.779901889233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054004.1145833333,
            "unit": "ns",
            "range": "± 13087.212475466138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725693.5686383928,
            "unit": "ns",
            "range": "± 6714.873706880124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1851526.9949776786,
            "unit": "ns",
            "range": "± 3553.120455439003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617569.8467548077,
            "unit": "ns",
            "range": "± 1280.5942142062493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569537.8487723215,
            "unit": "ns",
            "range": "± 828.015288651519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2093939.3442622952,
            "unit": "ns",
            "range": "± 92914.46295507233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2169205.714285714,
            "unit": "ns",
            "range": "± 57159.19432425827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2719061.5384615385,
            "unit": "ns",
            "range": "± 94318.00524481168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2570948.1481481483,
            "unit": "ns",
            "range": "± 108327.0915795806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6174875,
            "unit": "ns",
            "range": "± 175290.03399656957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175490.1098901099,
            "unit": "ns",
            "range": "± 10551.640788101315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158943.42105263157,
            "unit": "ns",
            "range": "± 8101.8077904677675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143727.58620689655,
            "unit": "ns",
            "range": "± 6306.159425749106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2765421.4285714286,
            "unit": "ns",
            "range": "± 25152.440730976283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2629200,
            "unit": "ns",
            "range": "± 35657.19722981202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12064.516129032258,
            "unit": "ns",
            "range": "± 1294.5240153691475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56702.12765957447,
            "unit": "ns",
            "range": "± 5414.967880312691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46623.07692307692,
            "unit": "ns",
            "range": "± 3443.3858312576567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67359.5744680851,
            "unit": "ns",
            "range": "± 12472.484288749556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3445.2631578947367,
            "unit": "ns",
            "range": "± 744.7359122181289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12429.670329670329,
            "unit": "ns",
            "range": "± 1772.9131397846318"
          }
        ]
      }
    ]
  }
}