window.BENCHMARK_DATA = {
  "lastUpdate": 1687178589135,
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
          "id": "35d08c7f409dc239ec327079abe362aef2ca70ee",
          "message": "Remove signer from account state delta; Accept IActionContext for Mint\nand Burn",
          "timestamp": "2023-06-19T21:18:01+09:00",
          "tree_id": "e6e0829644ff46bbc6e3cbe49450e33583d2395f",
          "url": "https://github.com/greymistcube/libplanet/commit/35d08c7f409dc239ec327079abe362aef2ca70ee"
        },
        "date": 1687178570022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9204362.948453609,
            "unit": "ns",
            "range": "± 687617.6744283539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23576021.629032258,
            "unit": "ns",
            "range": "± 1073416.177646423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57562935.358024694,
            "unit": "ns",
            "range": "± 2995786.562573831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112416469.6111111,
            "unit": "ns",
            "range": "± 3683755.562726653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220307710.5,
            "unit": "ns",
            "range": "± 7023555.459531827"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77849.73809523809,
            "unit": "ns",
            "range": "± 8875.700073008391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392342.489010989,
            "unit": "ns",
            "range": "± 62135.27465985351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 345086.92696629214,
            "unit": "ns",
            "range": "± 32316.056586712868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 360026.1666666667,
            "unit": "ns",
            "range": "± 50471.7100836663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4709915.28021978,
            "unit": "ns",
            "range": "± 691987.5969026998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4213783.908045977,
            "unit": "ns",
            "range": "± 497170.15205681924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20742.26530612245,
            "unit": "ns",
            "range": "± 4346.074158212309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103079.78125,
            "unit": "ns",
            "range": "± 13258.55649180489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116972.6551724138,
            "unit": "ns",
            "range": "± 11003.610987463719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130415.91397849462,
            "unit": "ns",
            "range": "± 19575.25257966643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9121.447916666666,
            "unit": "ns",
            "range": "± 1180.0710314909163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24029.06842105263,
            "unit": "ns",
            "range": "± 4638.695521538933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1786134.7173913044,
            "unit": "ns",
            "range": "± 361690.26577471365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3260952.6222222224,
            "unit": "ns",
            "range": "± 304550.3365020979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276137.7790697673,
            "unit": "ns",
            "range": "± 259682.4818243664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7055490.725806451,
            "unit": "ns",
            "range": "± 1185437.998589332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3437038.3068181816,
            "unit": "ns",
            "range": "± 231835.3427382707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3971939.3333333335,
            "unit": "ns",
            "range": "± 355560.52023810544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5685803.5,
            "unit": "ns",
            "range": "± 1320859.1380881986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635082.419354838,
            "unit": "ns",
            "range": "± 848186.9822974885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9872508.94329897,
            "unit": "ns",
            "range": "± 2723725.6625739294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7393245.836269947,
            "unit": "ns",
            "range": "± 275563.24494771415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2172817.6088867188,
            "unit": "ns",
            "range": "± 77241.03666144854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380587.291294643,
            "unit": "ns",
            "range": "± 24269.890917010274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3087175.9639453124,
            "unit": "ns",
            "range": "± 216693.17303526303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926995.189136402,
            "unit": "ns",
            "range": "± 31297.45477305863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770680.9942103794,
            "unit": "ns",
            "range": "± 22014.516388130814"
          }
        ]
      }
    ]
  }
}