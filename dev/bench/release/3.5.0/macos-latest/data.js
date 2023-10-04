window.BENCHMARK_DATA = {
  "lastUpdate": 1696401932712,
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
          "id": "e141590210a6e5f95fa8f369d3ffea84eb95acf4",
          "message": "Release 3.5.0",
          "timestamp": "2023-10-04T15:29:44+09:00",
          "tree_id": "3e3fb2039e8bdf70273fc070e13a90ca8e2a47eb",
          "url": "https://github.com/greymistcube/libplanet/commit/e141590210a6e5f95fa8f369d3ffea84eb95acf4"
        },
        "date": 1696401916838,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8197537.182926829,
            "unit": "ns",
            "range": "± 295044.47558727814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20322595.23809524,
            "unit": "ns",
            "range": "± 482491.77815708995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49921512.89655172,
            "unit": "ns",
            "range": "± 1440862.031331699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98853144.03333333,
            "unit": "ns",
            "range": "± 1842107.5760606718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210428068.85714287,
            "unit": "ns",
            "range": "± 1953952.9147137215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71671.55102040817,
            "unit": "ns",
            "range": "± 11273.408904007596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311748.4948453608,
            "unit": "ns",
            "range": "± 17977.403057451796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303680.4456521739,
            "unit": "ns",
            "range": "± 17597.656123500365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303712.3222222222,
            "unit": "ns",
            "range": "± 16890.327678135247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4106873.5,
            "unit": "ns",
            "range": "± 128252.90192753274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741812.5588235296,
            "unit": "ns",
            "range": "± 76157.45783200633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21730.79381443299,
            "unit": "ns",
            "range": "± 4197.152660678984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109214.63,
            "unit": "ns",
            "range": "± 18400.591429699405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114536.91,
            "unit": "ns",
            "range": "± 8058.205478719982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112706.60416666667,
            "unit": "ns",
            "range": "± 12689.467221596911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8692.515463917525,
            "unit": "ns",
            "range": "± 877.0760860357991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24330.125,
            "unit": "ns",
            "range": "± 2167.2142402535783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496821.9536082475,
            "unit": "ns",
            "range": "± 134908.1768326625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2836797.887755102,
            "unit": "ns",
            "range": "± 112868.96974678506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366506.9263157896,
            "unit": "ns",
            "range": "± 210160.88881622677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10787195.2,
            "unit": "ns",
            "range": "± 602297.5667480046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291532.5714285714,
            "unit": "ns",
            "range": "± 56627.51532021036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3407441.3913043477,
            "unit": "ns",
            "range": "± 130461.09814355103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4297752.625,
            "unit": "ns",
            "range": "± 77132.91455060318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4208523.617283951,
            "unit": "ns",
            "range": "± 219917.21360324248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15410033.810526315,
            "unit": "ns",
            "range": "± 1831036.066458755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5618313.53515625,
            "unit": "ns",
            "range": "± 54549.12980747923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1757164.314732143,
            "unit": "ns",
            "range": "± 11549.35221582103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 997813.2696614583,
            "unit": "ns",
            "range": "± 6472.049189475931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558559.021918403,
            "unit": "ns",
            "range": "± 83648.10533157595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826345.4103515625,
            "unit": "ns",
            "range": "± 10326.5408829542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786586.31875,
            "unit": "ns",
            "range": "± 5878.637695382371"
          }
        ]
      }
    ]
  }
}