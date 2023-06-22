window.BENCHMARK_DATA = {
  "lastUpdate": 1687441046179,
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
          "id": "18f486c1265b058fd2042e1802d29cb22cb09679",
          "message": "Release 2.1.1",
          "timestamp": "2023-06-22T22:14:41+09:00",
          "tree_id": "544a06c065337a6185577753894cdc601e3d170c",
          "url": "https://github.com/greymistcube/libplanet/commit/18f486c1265b058fd2042e1802d29cb22cb09679"
        },
        "date": 1687441013295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9437620.785714285,
            "unit": "ns",
            "range": "± 125274.67015963122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25299020.766666666,
            "unit": "ns",
            "range": "± 466831.54227201344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62928643.46666667,
            "unit": "ns",
            "range": "± 1162905.8648466328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119646419.42857143,
            "unit": "ns",
            "range": "± 1724648.8307114185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243985640.47368422,
            "unit": "ns",
            "range": "± 5211525.476523723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78836.20879120879,
            "unit": "ns",
            "range": "± 6921.664500387305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388233.1780821918,
            "unit": "ns",
            "range": "± 16523.02650961048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 383085.1170212766,
            "unit": "ns",
            "range": "± 25877.454487025847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 359755.43333333335,
            "unit": "ns",
            "range": "± 15905.29705003077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4949827.857142857,
            "unit": "ns",
            "range": "± 78205.4931366541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4627896.933333334,
            "unit": "ns",
            "range": "± 84984.4603706774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21311.977777777778,
            "unit": "ns",
            "range": "± 1891.6807711530143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108079.15053763441,
            "unit": "ns",
            "range": "± 8189.323719153622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120825.81818181818,
            "unit": "ns",
            "range": "± 21846.663651956256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139614.98913043478,
            "unit": "ns",
            "range": "± 16470.831744709125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8101.969387755102,
            "unit": "ns",
            "range": "± 1466.771350596104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21333.926315789475,
            "unit": "ns",
            "range": "± 2370.152034095206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2220468.752631579,
            "unit": "ns",
            "range": "± 322282.4982621702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3968932.8846153845,
            "unit": "ns",
            "range": "± 419207.5194208119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3466423.186813187,
            "unit": "ns",
            "range": "± 592321.264497568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9202455.016129032,
            "unit": "ns",
            "range": "± 1628419.8444336383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3949222.987804878,
            "unit": "ns",
            "range": "± 138961.3984261676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4225709.983333333,
            "unit": "ns",
            "range": "± 183899.99296508697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5370113.928571428,
            "unit": "ns",
            "range": "± 76613.89996044028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5489529.265625,
            "unit": "ns",
            "range": "± 253235.32123794238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9464304.087301588,
            "unit": "ns",
            "range": "± 432712.32396711386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7331216.397321428,
            "unit": "ns",
            "range": "± 69068.41274999248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2222489.3551897323,
            "unit": "ns",
            "range": "± 19495.95449224257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1509373.020282452,
            "unit": "ns",
            "range": "± 4182.432814444272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3005114.956730769,
            "unit": "ns",
            "range": "± 45041.870392658384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965791.8337590144,
            "unit": "ns",
            "range": "± 3424.3542650115724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827708.8306039664,
            "unit": "ns",
            "range": "± 6165.644417740354"
          }
        ]
      }
    ]
  }
}