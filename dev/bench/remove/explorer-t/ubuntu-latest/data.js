window.BENCHMARK_DATA = {
  "lastUpdate": 1684474973702,
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
          "id": "68abe2621ad7ee020dce0d6fb79b25d81f103d5d",
          "message": "Removed t from rest of the Explorer",
          "timestamp": "2023-05-19T14:31:04+09:00",
          "tree_id": "445f0508d49175ce2fa994a79892c3f4394ccff0",
          "url": "https://github.com/greymistcube/libplanet/commit/68abe2621ad7ee020dce0d6fb79b25d81f103d5d"
        },
        "date": 1684474965550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3104944.5714285714,
            "unit": "ns",
            "range": "± 21515.44740847406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3303897.6551724137,
            "unit": "ns",
            "range": "± 88134.11282539641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4097379.3333333335,
            "unit": "ns",
            "range": "± 31017.799962663525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4044164.641025641,
            "unit": "ns",
            "range": "± 140347.52924202633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6554738.333333333,
            "unit": "ns",
            "range": "± 169323.55551574257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267454.7931034483,
            "unit": "ns",
            "range": "± 11637.294471788084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254363.83333333334,
            "unit": "ns",
            "range": "± 8985.69416110467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225272.46153846153,
            "unit": "ns",
            "range": "± 1924.1285739863563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4076531.230769231,
            "unit": "ns",
            "range": "± 19651.356192189578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3802308.6153846155,
            "unit": "ns",
            "range": "± 21516.59056224004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15344.712765957447,
            "unit": "ns",
            "range": "± 999.1925731959288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79592.38356164383,
            "unit": "ns",
            "range": "± 3949.4107705036804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68942.93333333333,
            "unit": "ns",
            "range": "± 1236.1130592458344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72186.90909090909,
            "unit": "ns",
            "range": "± 3129.6414212873206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4272.428571428572,
            "unit": "ns",
            "range": "± 530.4899894116566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15255.670103092783,
            "unit": "ns",
            "range": "± 1027.838455222592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5844105.651041667,
            "unit": "ns",
            "range": "± 19088.879468526262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1985855.97890625,
            "unit": "ns",
            "range": "± 2955.8828918388917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350097.230859375,
            "unit": "ns",
            "range": "± 2610.710016253671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577967.107421875,
            "unit": "ns",
            "range": "± 5258.364537552966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783288.2802036831,
            "unit": "ns",
            "range": "± 1014.0224076937403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743744.3661458333,
            "unit": "ns",
            "range": "± 1282.1714836913316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7537813.4,
            "unit": "ns",
            "range": "± 22107.30446449124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19018419.6,
            "unit": "ns",
            "range": "± 138669.01381903188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48177178.64285714,
            "unit": "ns",
            "range": "± 412287.69257113634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96612457.92307693,
            "unit": "ns",
            "range": "± 468184.1843328438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191757324.8,
            "unit": "ns",
            "range": "± 1247722.464162329"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1288032.9892473118,
            "unit": "ns",
            "range": "± 78036.73018904438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2538137.533333333,
            "unit": "ns",
            "range": "± 95042.12092818254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048644.076923077,
            "unit": "ns",
            "range": "± 76189.53056529233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5055269.454545454,
            "unit": "ns",
            "range": "± 157135.4892901129"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45726.1625,
            "unit": "ns",
            "range": "± 2404.441693893916"
          }
        ]
      }
    ]
  }
}