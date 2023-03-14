window.BENCHMARK_DATA = {
  "lastUpdate": 1678784632342,
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
          "id": "c34cc82e18265600663ca1a3145961e639934c5b",
          "message": "Merge tag '0.48.1' into port/0.48.1-to-0.49.3\n\nLibplanet 0.48.1",
          "timestamp": "2023-03-14T17:42:43+09:00",
          "tree_id": "730b09276955c28f464a1ee14c8717eaf443750e",
          "url": "https://github.com/greymistcube/libplanet/commit/c34cc82e18265600663ca1a3145961e639934c5b"
        },
        "date": 1678784615744,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 148394.1403508772,
            "unit": "ns",
            "range": "± 6435.073394071953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 127542.64444444445,
            "unit": "ns",
            "range": "± 13234.486546210346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230372.96907216494,
            "unit": "ns",
            "range": "± 27071.094212913707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222962.62886597938,
            "unit": "ns",
            "range": "± 29045.268646660134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3789564.4507042253,
            "unit": "ns",
            "range": "± 185821.59220059813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10437622.184615385,
            "unit": "ns",
            "range": "± 485148.4075205716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20430.840206185567,
            "unit": "ns",
            "range": "± 5110.038033710785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57859.97872340425,
            "unit": "ns",
            "range": "± 10240.530804380036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56565.989583333336,
            "unit": "ns",
            "range": "± 10097.579430103968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130401.68085106384,
            "unit": "ns",
            "range": "± 30344.489522674005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7656.894736842105,
            "unit": "ns",
            "range": "± 1401.2976772588872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25615.510638297874,
            "unit": "ns",
            "range": "± 4671.003427679215"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7521660.145751953,
            "unit": "ns",
            "range": "± 1041286.3603550025"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8866715.191489361,
            "unit": "ns",
            "range": "± 1607954.3571019752"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 37398896.6,
            "unit": "ns",
            "range": "± 7989045.418993392"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8354914.25,
            "unit": "ns",
            "range": "± 1704824.8350308128"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33428668.425287355,
            "unit": "ns",
            "range": "± 2070457.714630223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7474169.6471619895,
            "unit": "ns",
            "range": "± 295333.8848133477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2273827.9321818524,
            "unit": "ns",
            "range": "± 121066.87713910476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397701.1717122395,
            "unit": "ns",
            "range": "± 16752.67544514682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2941283.865234375,
            "unit": "ns",
            "range": "± 32763.862717597516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 873737.8526506696,
            "unit": "ns",
            "range": "± 28557.344915186124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765954.1776592548,
            "unit": "ns",
            "range": "± 8913.626878895317"
          }
        ]
      }
    ]
  }
}