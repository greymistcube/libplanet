window.BENCHMARK_DATA = {
  "lastUpdate": 1682993981446,
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
          "id": "4d084d486b5cf5677929370e2331902224b7fa40",
          "message": "Changelog",
          "timestamp": "2023-05-02T10:52:10+09:00",
          "tree_id": "704625ba1eeca124c7cafb0b315bbcec741389b2",
          "url": "https://github.com/greymistcube/libplanet/commit/4d084d486b5cf5677929370e2331902224b7fa40"
        },
        "date": 1682993963692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8064724.307692308,
            "unit": "ns",
            "range": "± 196017.05332134126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20392526.71818182,
            "unit": "ns",
            "range": "± 855587.255098112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52005209,
            "unit": "ns",
            "range": "± 1109791.0529293872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104563174.21621622,
            "unit": "ns",
            "range": "± 3504052.2266732296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223967134.4375,
            "unit": "ns",
            "range": "± 8701535.078614429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66269.7191011236,
            "unit": "ns",
            "range": "± 9998.896960743363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391127.92424242425,
            "unit": "ns",
            "range": "± 60175.70190107939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 387245.44329896907,
            "unit": "ns",
            "range": "± 59252.119652480425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348771.9130434783,
            "unit": "ns",
            "range": "± 36399.59874436251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4487700.581632653,
            "unit": "ns",
            "range": "± 310917.38508375175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4177008.7525773197,
            "unit": "ns",
            "range": "± 367904.66366480483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25246.24712643678,
            "unit": "ns",
            "range": "± 2993.2211016258707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114677.45789473684,
            "unit": "ns",
            "range": "± 25482.902016640444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104981.05913978495,
            "unit": "ns",
            "range": "± 17252.246570445335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125305.10638297872,
            "unit": "ns",
            "range": "± 21512.325762306933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8192.5,
            "unit": "ns",
            "range": "± 1284.2984230934958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23352.113636363636,
            "unit": "ns",
            "range": "± 3011.1403172098862"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640644.7448979593,
            "unit": "ns",
            "range": "± 210382.03364568236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096665.25,
            "unit": "ns",
            "range": "± 216447.89040395248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2663802.4375,
            "unit": "ns",
            "range": "± 301291.7482668956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6784356.459183673,
            "unit": "ns",
            "range": "± 454473.3699730302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589769.7346938774,
            "unit": "ns",
            "range": "± 280001.7034361218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779118.696969697,
            "unit": "ns",
            "range": "± 322540.1646709576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4697295.118556701,
            "unit": "ns",
            "range": "± 278154.64814040664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4741800.520833333,
            "unit": "ns",
            "range": "± 447484.5494238816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8250022.5869565215,
            "unit": "ns",
            "range": "± 610022.4998737801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7653121.01850666,
            "unit": "ns",
            "range": "± 344037.79153946164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2014130.1196986607,
            "unit": "ns",
            "range": "± 24408.714902310345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321537.2901141827,
            "unit": "ns",
            "range": "± 8301.198716710069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595580.6727120536,
            "unit": "ns",
            "range": "± 27416.953485102324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899595.3617838542,
            "unit": "ns",
            "range": "± 11118.11962684138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745115.8958984375,
            "unit": "ns",
            "range": "± 9064.947251042953"
          }
        ]
      }
    ]
  }
}