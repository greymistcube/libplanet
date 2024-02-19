window.BENCHMARK_DATA = {
  "lastUpdate": 1708327446855,
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
          "id": "2e3cefe3e9af512f442b623c2eba6bf0e057cb53",
          "message": "Remove fee processing from ActionEvaluator",
          "timestamp": "2024-02-19T16:07:00+09:00",
          "tree_id": "2fa80e49b49aae078f536a6ec10df13691425a4e",
          "url": "https://github.com/greymistcube/libplanet/commit/2e3cefe3e9af512f442b623c2eba6bf0e057cb53"
        },
        "date": 1708327439509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5833511.857142857,
            "unit": "ns",
            "range": "± 16860.541367607126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15214167.642857144,
            "unit": "ns",
            "range": "± 65238.97084813781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37452788.807692304,
            "unit": "ns",
            "range": "± 222000.26658632065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76117487.64285715,
            "unit": "ns",
            "range": "± 253177.67323838235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154346560.92857143,
            "unit": "ns",
            "range": "± 1083990.3910689263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199846.98484848486,
            "unit": "ns",
            "range": "± 9409.579875347044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193787.85714285713,
            "unit": "ns",
            "range": "± 8724.866295041971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164749.92105263157,
            "unit": "ns",
            "range": "± 3498.0643586575047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3295339.5,
            "unit": "ns",
            "range": "± 25343.49044854289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2893498.0714285714,
            "unit": "ns",
            "range": "± 22438.631085574394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13053.95744680851,
            "unit": "ns",
            "range": "± 1104.0297805015368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62274.645161290326,
            "unit": "ns",
            "range": "± 5529.555025035451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60352.425531914894,
            "unit": "ns",
            "range": "± 6343.124126796137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103003.23404255319,
            "unit": "ns",
            "range": "± 11618.107357409424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7213.778350515464,
            "unit": "ns",
            "range": "± 1030.2754358894765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16043.236559139785,
            "unit": "ns",
            "range": "± 1881.2955203093047"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40374.4,
            "unit": "ns",
            "range": "± 5650.976003819577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980318.90625,
            "unit": "ns",
            "range": "± 61058.57695095202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1961307.59375,
            "unit": "ns",
            "range": "± 59210.42039439722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1769720.5104166667,
            "unit": "ns",
            "range": "± 237971.4591781298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13073629.457446808,
            "unit": "ns",
            "range": "± 980885.200516127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3744719.622488839,
            "unit": "ns",
            "range": "± 38211.999736120306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213009.1819661458,
            "unit": "ns",
            "range": "± 2192.3288187535654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773991.2302734375,
            "unit": "ns",
            "range": "± 12198.019919767734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972224.0849609375,
            "unit": "ns",
            "range": "± 2929.422405566108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612339.5021033654,
            "unit": "ns",
            "range": "± 1089.024246939469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579420.0114746094,
            "unit": "ns",
            "range": "± 646.7539561394442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2556320.705882353,
            "unit": "ns",
            "range": "± 50265.898452336325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2609024.5757575757,
            "unit": "ns",
            "range": "± 80418.30950529483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3229215.2666666666,
            "unit": "ns",
            "range": "± 53133.327554997595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3261243.3653846155,
            "unit": "ns",
            "range": "± 134054.4172172335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14191289.093023255,
            "unit": "ns",
            "range": "± 923375.1669840331"
          }
        ]
      }
    ]
  }
}