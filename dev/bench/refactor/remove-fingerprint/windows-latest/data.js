window.BENCHMARK_DATA = {
  "lastUpdate": 1691458813300,
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
          "id": "61fdcfcd956d5b1ee1c6309a79e51f1fe2264db8",
          "message": "Removed bencodex fingerprint support",
          "timestamp": "2023-08-08T10:22:41+09:00",
          "tree_id": "8702cf6c8c003452776c96afe2905350bc5e85af",
          "url": "https://github.com/greymistcube/libplanet/commit/61fdcfcd956d5b1ee1c6309a79e51f1fe2264db8"
        },
        "date": 1691458787566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382812,
            "unit": "ns",
            "range": "± 108286.07760012458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2563083.0508474577,
            "unit": "ns",
            "range": "± 112194.43736985693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1754367.0212765958,
            "unit": "ns",
            "range": "± 116558.03150002506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4866309.411764706,
            "unit": "ns",
            "range": "± 261573.1831600085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48072.34042553192,
            "unit": "ns",
            "range": "± 3099.0947084425466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7278921.428571428,
            "unit": "ns",
            "range": "± 114336.94590027406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20453013.333333332,
            "unit": "ns",
            "range": "± 252956.41597111622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52339520,
            "unit": "ns",
            "range": "± 400942.74475469504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102723991.66666667,
            "unit": "ns",
            "range": "± 623294.4225620583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206577280,
            "unit": "ns",
            "range": "± 2953756.636701328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4888585.130208333,
            "unit": "ns",
            "range": "± 12689.42896587564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1552700.5729166667,
            "unit": "ns",
            "range": "± 5443.740609200376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1206636.71875,
            "unit": "ns",
            "range": "± 4740.574901361713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674347.2916666665,
            "unit": "ns",
            "range": "± 6118.827786539597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841921.2541852678,
            "unit": "ns",
            "range": "± 2136.996572143306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774559.94140625,
            "unit": "ns",
            "range": "± 2915.340692819512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3289461.290322581,
            "unit": "ns",
            "range": "± 94892.81910808409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3428427.1428571427,
            "unit": "ns",
            "range": "± 161233.90868722065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4205518.918918919,
            "unit": "ns",
            "range": "± 141635.86299976317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3842703.125,
            "unit": "ns",
            "range": "± 109100.08865605043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6180071.875,
            "unit": "ns",
            "range": "± 189393.83652194176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267124.39024390245,
            "unit": "ns",
            "range": "± 9488.750720927515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255800,
            "unit": "ns",
            "range": "± 10296.433288354685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239815.8536585366,
            "unit": "ns",
            "range": "± 12687.453406953991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190140,
            "unit": "ns",
            "range": "± 61174.5722152128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3838250,
            "unit": "ns",
            "range": "± 81713.24502040478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21813.684210526317,
            "unit": "ns",
            "range": "± 2719.731312070077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89695.69892473119,
            "unit": "ns",
            "range": "± 5138.514291676116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77441.86046511628,
            "unit": "ns",
            "range": "± 4227.764396470748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96871.13402061856,
            "unit": "ns",
            "range": "± 16346.189405350757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5572.448979591837,
            "unit": "ns",
            "range": "± 891.8624798348075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20818.947368421053,
            "unit": "ns",
            "range": "± 2297.3756876906173"
          }
        ]
      }
    ]
  }
}