window.BENCHMARK_DATA = {
  "lastUpdate": 1687248367894,
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
          "id": "6410b97d4821e1fe654a43a26373a02c076057c2",
          "message": "Release 2.1.0",
          "timestamp": "2023-06-20T16:41:20+09:00",
          "tree_id": "3c8b47900f776e7c6b705a66d3eb009253049fe9",
          "url": "https://github.com/greymistcube/libplanet/commit/6410b97d4821e1fe654a43a26373a02c076057c2"
        },
        "date": 1687248335657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9667316.31958763,
            "unit": "ns",
            "range": "± 807787.3498001804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23025889.32828283,
            "unit": "ns",
            "range": "± 2003201.5445828924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60174822.530612245,
            "unit": "ns",
            "range": "± 5196583.585007006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113482142.36868687,
            "unit": "ns",
            "range": "± 10335181.481220692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232667657.33,
            "unit": "ns",
            "range": "± 16386332.162957748"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80414.46511627907,
            "unit": "ns",
            "range": "± 11742.050766317136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351526,
            "unit": "ns",
            "range": "± 49722.21593232174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334697.693877551,
            "unit": "ns",
            "range": "± 42890.38686075374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333374.8043478261,
            "unit": "ns",
            "range": "± 46665.99426571187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4647434.989795919,
            "unit": "ns",
            "range": "± 347956.83958818193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4117344.393939394,
            "unit": "ns",
            "range": "± 326298.29615311336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18854.48888888889,
            "unit": "ns",
            "range": "± 2790.5835209711254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95047.125,
            "unit": "ns",
            "range": "± 14996.158014111832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99237.43478260869,
            "unit": "ns",
            "range": "± 12230.962877377555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114039.8163265306,
            "unit": "ns",
            "range": "± 15276.56117680274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7416.319587628866,
            "unit": "ns",
            "range": "± 1400.8820848129326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22601.54651162791,
            "unit": "ns",
            "range": "± 4504.395035196773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665096.5,
            "unit": "ns",
            "range": "± 186350.54743619193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3173321.0465116277,
            "unit": "ns",
            "range": "± 292729.75932819827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2811595.511627907,
            "unit": "ns",
            "range": "± 345592.19014733995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6907899.252808989,
            "unit": "ns",
            "range": "± 526713.6331427095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3554615.136842105,
            "unit": "ns",
            "range": "± 340336.6233066281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3657313.7696629213,
            "unit": "ns",
            "range": "± 295664.63297808013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5049949.808080808,
            "unit": "ns",
            "range": "± 624946.8690334138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5139355.378947369,
            "unit": "ns",
            "range": "± 885644.8312122064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8608351.79,
            "unit": "ns",
            "range": "± 1038654.7387473907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7328078.306376689,
            "unit": "ns",
            "range": "± 365554.84673386294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2068437.8216911764,
            "unit": "ns",
            "range": "± 40413.78528150101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448821.3431396484,
            "unit": "ns",
            "range": "± 27718.48433941322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2944460.394214527,
            "unit": "ns",
            "range": "± 98609.3301297745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947080.1994995117,
            "unit": "ns",
            "range": "± 49479.879014373226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931694.6085792824,
            "unit": "ns",
            "range": "± 39189.458457203116"
          }
        ]
      }
    ]
  }
}