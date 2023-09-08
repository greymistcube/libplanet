window.BENCHMARK_DATA = {
  "lastUpdate": 1694142929987,
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
          "id": "3d2009bc9b8484ac33f00f7d05eb3b419a512285",
          "message": "Bug fix for trie value resolution",
          "timestamp": "2023-09-08T11:58:58+09:00",
          "tree_id": "21775bbb67c59255d5b850b82f213bed62184d45",
          "url": "https://github.com/greymistcube/libplanet/commit/3d2009bc9b8484ac33f00f7d05eb3b419a512285"
        },
        "date": 1694142905732,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696966.5,
            "unit": "ns",
            "range": "± 84565.72414855342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18803512.133333333,
            "unit": "ns",
            "range": "± 230593.59515881326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46021308.94444445,
            "unit": "ns",
            "range": "± 977619.5066935158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91791352.35714285,
            "unit": "ns",
            "range": "± 1304684.5667426288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188159535.16666666,
            "unit": "ns",
            "range": "± 1249218.8348915533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53853.62765957447,
            "unit": "ns",
            "range": "± 5192.695347061945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276096.40506329114,
            "unit": "ns",
            "range": "± 14275.801837032848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290419.9569892473,
            "unit": "ns",
            "range": "± 22953.377308529023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264896.4324324324,
            "unit": "ns",
            "range": "± 8047.276176655265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3881763.0263157897,
            "unit": "ns",
            "range": "± 132134.35070483555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3467982.8571428573,
            "unit": "ns",
            "range": "± 59342.87678704696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17096.516483516483,
            "unit": "ns",
            "range": "± 2209.9656073876777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79183.74725274726,
            "unit": "ns",
            "range": "± 5471.689939220295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71592.80434782608,
            "unit": "ns",
            "range": "± 5395.006372887558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83378.03157894737,
            "unit": "ns",
            "range": "± 12482.496894973967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4576.264367816092,
            "unit": "ns",
            "range": "± 577.7682697094277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16360.170588235294,
            "unit": "ns",
            "range": "± 1723.8820558776722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463965.2842105264,
            "unit": "ns",
            "range": "± 188051.36795039306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2726585.87654321,
            "unit": "ns",
            "range": "± 142190.25294182287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1843166.59375,
            "unit": "ns",
            "range": "± 200160.10170882172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5053577.456521739,
            "unit": "ns",
            "range": "± 183902.28944254387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3070084.864864865,
            "unit": "ns",
            "range": "± 154008.9223806796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3250975.4411764704,
            "unit": "ns",
            "range": "± 170007.22321001493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4986424.674603174,
            "unit": "ns",
            "range": "± 229142.78156048353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3744355.577777778,
            "unit": "ns",
            "range": "± 298702.2141330342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6343649.261904762,
            "unit": "ns",
            "range": "± 227092.93668514522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5391818.558333334,
            "unit": "ns",
            "range": "± 51343.17080304087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1658445.9235677083,
            "unit": "ns",
            "range": "± 17778.167334698475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 944425.4147786458,
            "unit": "ns",
            "range": "± 5705.11836264377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2407313.095572917,
            "unit": "ns",
            "range": "± 34313.87868473375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 737956.1685267857,
            "unit": "ns",
            "range": "± 2931.5203689394293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724973.3432942708,
            "unit": "ns",
            "range": "± 4034.2647928413076"
          }
        ]
      }
    ]
  }
}