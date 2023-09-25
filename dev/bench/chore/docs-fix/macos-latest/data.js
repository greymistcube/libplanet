window.BENCHMARK_DATA = {
  "lastUpdate": 1695628545471,
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
          "id": "ec42f31dd8115c2489dbc734b4c3c34f0b416a2f",
          "message": "Docs fix",
          "timestamp": "2023-09-25T16:39:17+09:00",
          "tree_id": "3be4ec43e39631347d4fc02318a7d2438c02fade",
          "url": "https://github.com/greymistcube/libplanet/commit/ec42f31dd8115c2489dbc734b4c3c34f0b416a2f"
        },
        "date": 1695628522540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8109578.944444444,
            "unit": "ns",
            "range": "± 157202.35693356296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20035154.327586208,
            "unit": "ns",
            "range": "± 579090.2765846289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51447526.76923077,
            "unit": "ns",
            "range": "± 547906.6144381044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102556580.16666667,
            "unit": "ns",
            "range": "± 1723819.2023629087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199019810.57142857,
            "unit": "ns",
            "range": "± 4720220.118580484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64892.13829787234,
            "unit": "ns",
            "range": "± 10516.89441629342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296748.28169014084,
            "unit": "ns",
            "range": "± 14445.573004689113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291386.24731182796,
            "unit": "ns",
            "range": "± 17491.56245205839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272811.4210526316,
            "unit": "ns",
            "range": "± 13792.352412612006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3989399.772727273,
            "unit": "ns",
            "range": "± 97782.79389931241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3654106.933333333,
            "unit": "ns",
            "range": "± 60819.782449541235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17716.223529411764,
            "unit": "ns",
            "range": "± 1981.392694284398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81253.8,
            "unit": "ns",
            "range": "± 6138.598855977375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75211.92631578947,
            "unit": "ns",
            "range": "± 7428.850767686442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80365.78723404255,
            "unit": "ns",
            "range": "± 11898.740455500412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4920.833333333333,
            "unit": "ns",
            "range": "± 631.2240516415596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16795.604395604394,
            "unit": "ns",
            "range": "± 2304.5596006329174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1446328.642857143,
            "unit": "ns",
            "range": "± 149598.3616529865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774795.48630137,
            "unit": "ns",
            "range": "± 137318.35119192646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2330779.69,
            "unit": "ns",
            "range": "± 255350.39927517998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12345800.84375,
            "unit": "ns",
            "range": "± 2778775.793381086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112235.3492063493,
            "unit": "ns",
            "range": "± 137709.56795690008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3297845.6818181816,
            "unit": "ns",
            "range": "± 138977.5143700766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4195487.322580645,
            "unit": "ns",
            "range": "± 126110.4518793974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4087616.1296296297,
            "unit": "ns",
            "range": "± 160270.2900922872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15248680.17204301,
            "unit": "ns",
            "range": "± 1785265.1751567281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5464199.09609375,
            "unit": "ns",
            "range": "± 159947.76221219398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1745123.170365767,
            "unit": "ns",
            "range": "± 42536.210757180204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1014504.9407552084,
            "unit": "ns",
            "range": "± 12862.322745805755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2498819.7729166667,
            "unit": "ns",
            "range": "± 35952.295009064306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 784251.6087890625,
            "unit": "ns",
            "range": "± 8513.060924354782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 682158.5475945724,
            "unit": "ns",
            "range": "± 14930.829935641917"
          }
        ]
      }
    ]
  }
}