window.BENCHMARK_DATA = {
  "lastUpdate": 1702005503725,
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
          "id": "c667983c7f840a61f5dbec49f6002de8d3d4f6e2",
          "message": "Prepare 3.9.2",
          "timestamp": "2023-12-08T12:06:46+09:00",
          "tree_id": "b3037719533c28a873c12113bb86fca1a23b8831",
          "url": "https://github.com/greymistcube/libplanet/commit/c667983c7f840a61f5dbec49f6002de8d3d4f6e2"
        },
        "date": 1702005486921,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962654.6391752578,
            "unit": "ns",
            "range": "± 91172.12432698677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720915.2777777778,
            "unit": "ns",
            "range": "± 83509.941484127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1330568.4210526317,
            "unit": "ns",
            "range": "± 106965.0611709739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5588772.164948453,
            "unit": "ns",
            "range": "± 327685.2624032791"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34463.63636363636,
            "unit": "ns",
            "range": "± 1624.3944541450953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5141857.142857143,
            "unit": "ns",
            "range": "± 83607.15569564894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13572926.666666666,
            "unit": "ns",
            "range": "± 119637.32376685478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33657161.538461536,
            "unit": "ns",
            "range": "± 423306.08810973796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67258207.14285715,
            "unit": "ns",
            "range": "± 469207.73890969367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133116313.33333333,
            "unit": "ns",
            "range": "± 2014827.933052727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3233192.4944196427,
            "unit": "ns",
            "range": "± 6300.178661637696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047273.2700892857,
            "unit": "ns",
            "range": "± 2458.090081441258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732307.2544642857,
            "unit": "ns",
            "range": "± 1949.3506659382242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2028517.4278846155,
            "unit": "ns",
            "range": "± 5684.784039474267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630787.3395647322,
            "unit": "ns",
            "range": "± 2818.3330496504373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569520.4477163461,
            "unit": "ns",
            "range": "± 1505.3361885680674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2197980.3278688523,
            "unit": "ns",
            "range": "± 98804.01614589043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2239549.3670886075,
            "unit": "ns",
            "range": "± 100680.65390186492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2815874.193548387,
            "unit": "ns",
            "range": "± 75145.72495155412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2586581.5789473685,
            "unit": "ns",
            "range": "± 118466.11297247419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6393307.692307692,
            "unit": "ns",
            "range": "± 297523.2287715597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174175.58139534883,
            "unit": "ns",
            "range": "± 9414.343700176956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167103.38983050847,
            "unit": "ns",
            "range": "± 6711.183823360025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147783.33333333334,
            "unit": "ns",
            "range": "± 5760.9224044726225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2816121.4285714286,
            "unit": "ns",
            "range": "± 45590.94340852272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2629780,
            "unit": "ns",
            "range": "± 44718.24811288692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12832.258064516129,
            "unit": "ns",
            "range": "± 1757.1073864341447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57008.42105263158,
            "unit": "ns",
            "range": "± 4706.551865126586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45589.24731182796,
            "unit": "ns",
            "range": "± 2974.5464530270024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64142.391304347824,
            "unit": "ns",
            "range": "± 11895.545696000574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2836.734693877551,
            "unit": "ns",
            "range": "± 543.6394641960319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10862.765957446809,
            "unit": "ns",
            "range": "± 1396.076225123659"
          }
        ]
      }
    ]
  }
}