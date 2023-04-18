window.BENCHMARK_DATA = {
  "lastUpdate": 1681801186529,
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
          "id": "d2ed2693ec59760d48ad3470a61629982a10c806",
          "message": "Prepare 1.1.0",
          "timestamp": "2023-04-18T15:44:40+09:00",
          "tree_id": "12f24b946ecaf7de0e7fbca77aff22ba4d17a8ae",
          "url": "https://github.com/greymistcube/libplanet/commit/d2ed2693ec59760d48ad3470a61629982a10c806"
        },
        "date": 1681801164111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325802.0202020202,
            "unit": "ns",
            "range": "± 135865.06059231967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2408372.222222222,
            "unit": "ns",
            "range": "± 70797.88782608505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137452.525252525,
            "unit": "ns",
            "range": "± 166558.21948571593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5448695,
            "unit": "ns",
            "range": "± 407466.2550011307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46717.89473684211,
            "unit": "ns",
            "range": "± 2693.1741514574187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6920590,
            "unit": "ns",
            "range": "± 102988.90925032379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19117803.57142857,
            "unit": "ns",
            "range": "± 543544.6456719304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47329560.60606061,
            "unit": "ns",
            "range": "± 1465694.4599615983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94301247.82608695,
            "unit": "ns",
            "range": "± 2346196.888558465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188644660,
            "unit": "ns",
            "range": "± 2906194.6419428177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4822033.370535715,
            "unit": "ns",
            "range": "± 13622.453599066599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508065.8984375,
            "unit": "ns",
            "range": "± 6026.360062073304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160258.8541666667,
            "unit": "ns",
            "range": "± 8336.635575562908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625013.2682291665,
            "unit": "ns",
            "range": "± 10917.34498488353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826918.0598958334,
            "unit": "ns",
            "range": "± 3486.347953083204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781697.0552884615,
            "unit": "ns",
            "range": "± 1609.0947495903706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2973600,
            "unit": "ns",
            "range": "± 146030.25347364656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3113321.4285714286,
            "unit": "ns",
            "range": "± 47852.179093078346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3848106.25,
            "unit": "ns",
            "range": "± 72745.29509413878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4027770.3703703703,
            "unit": "ns",
            "range": "± 163286.74122609463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6725157.142857143,
            "unit": "ns",
            "range": "± 157682.59438323742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303380.95238095237,
            "unit": "ns",
            "range": "± 5769.9756539884165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253571.42857142858,
            "unit": "ns",
            "range": "± 5989.335760928991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206250,
            "unit": "ns",
            "range": "± 3553.546440908337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5124007.142857143,
            "unit": "ns",
            "range": "± 53169.70601162506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3580126.6666666665,
            "unit": "ns",
            "range": "± 47640.58094084236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19579.381443298967,
            "unit": "ns",
            "range": "± 2108.313808094531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86531.25,
            "unit": "ns",
            "range": "± 6196.2010857247715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80275,
            "unit": "ns",
            "range": "± 7219.287032883365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 182076.5306122449,
            "unit": "ns",
            "range": "± 19181.61598935217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6392.783505154639,
            "unit": "ns",
            "range": "± 1047.740368471639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17981.9587628866,
            "unit": "ns",
            "range": "± 1695.0630759989783"
          }
        ]
      }
    ]
  }
}