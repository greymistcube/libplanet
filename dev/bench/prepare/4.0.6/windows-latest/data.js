window.BENCHMARK_DATA = {
  "lastUpdate": 1708405636151,
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
          "id": "670f32c138f053a1c5cc89302e44c02d10638d2f",
          "message": "Prepare 4.0.6",
          "timestamp": "2024-02-20T13:54:42+09:00",
          "tree_id": "ed9db8d13dffc5260b39f9aee313d6d1c82c6e13",
          "url": "https://github.com/greymistcube/libplanet/commit/670f32c138f053a1c5cc89302e44c02d10638d2f"
        },
        "date": 1708405616608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062341.4141414142,
            "unit": "ns",
            "range": "± 124895.72467814005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1805910.2564102565,
            "unit": "ns",
            "range": "± 93069.41912656797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1639636.956521739,
            "unit": "ns",
            "range": "± 186317.64836357924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7029119.230769231,
            "unit": "ns",
            "range": "± 287372.1257229621"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39206.31578947369,
            "unit": "ns",
            "range": "± 6691.655815924082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5129814.285714285,
            "unit": "ns",
            "range": "± 41096.83886669588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12969014.285714285,
            "unit": "ns",
            "range": "± 73363.69734352331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32192728.57142857,
            "unit": "ns",
            "range": "± 246056.61146158224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63981171.428571425,
            "unit": "ns",
            "range": "± 524923.5247283045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128709178.57142857,
            "unit": "ns",
            "range": "± 616884.0838982903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3372852.1033653845,
            "unit": "ns",
            "range": "± 6628.539610826481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1133968.2421875,
            "unit": "ns",
            "range": "± 2598.4398392692256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741375.9416852678,
            "unit": "ns",
            "range": "± 1570.1363372887474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946205.15625,
            "unit": "ns",
            "range": "± 4260.751624598681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612336.2825520834,
            "unit": "ns",
            "range": "± 1233.348343535686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573031.3337053572,
            "unit": "ns",
            "range": "± 1020.3563667595524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2220994.4444444445,
            "unit": "ns",
            "range": "± 61870.94716071593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2239665.8536585364,
            "unit": "ns",
            "range": "± 79987.65720333387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2798612.5,
            "unit": "ns",
            "range": "± 85150.70795076298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2814390.909090909,
            "unit": "ns",
            "range": "± 137892.74835119827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7797790.697674419,
            "unit": "ns",
            "range": "± 276407.34761610144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166633.8028169014,
            "unit": "ns",
            "range": "± 7696.2132369844585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167268.75,
            "unit": "ns",
            "range": "± 7249.846741675149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139348.64864864864,
            "unit": "ns",
            "range": "± 4687.727572053413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2828528.5714285714,
            "unit": "ns",
            "range": "± 44156.75623139817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2499926.6666666665,
            "unit": "ns",
            "range": "± 44137.762689539384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10190.425531914894,
            "unit": "ns",
            "range": "± 1478.4523402368657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51972.82608695652,
            "unit": "ns",
            "range": "± 4380.47875502987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44090.47619047619,
            "unit": "ns",
            "range": "± 1616.1999278357716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51809.67741935484,
            "unit": "ns",
            "range": "± 9829.548007169275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2145.360824742268,
            "unit": "ns",
            "range": "± 360.84987025905843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9384.269662921348,
            "unit": "ns",
            "range": "± 860.2191682150878"
          }
        ]
      }
    ]
  }
}