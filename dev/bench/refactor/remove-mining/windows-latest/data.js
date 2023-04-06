window.BENCHMARK_DATA = {
  "lastUpdate": 1680757358196,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf92e685aa65475d9195d1a1dd417b9b6f71d853",
          "message": "Merge pull request #3062 from greymistcube/refactor/propose-block\n\n🧹 Remove tx execution update from `ProposeBlock()`",
          "timestamp": "2023-04-05T17:49:00+09:00",
          "tree_id": "4341efa3d4b52de994ffcc71b591010988e1172d",
          "url": "https://github.com/greymistcube/libplanet/commit/bf92e685aa65475d9195d1a1dd417b9b6f71d853"
        },
        "date": 1680757334863,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608362.7659574468,
            "unit": "ns",
            "range": "± 138790.00536049463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3014598.947368421,
            "unit": "ns",
            "range": "± 198464.93580368554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2601254.347826087,
            "unit": "ns",
            "range": "± 215260.02850273563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6394987.62886598,
            "unit": "ns",
            "range": "± 423519.188186353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58966.31578947369,
            "unit": "ns",
            "range": "± 5817.190418690215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8262884.615384615,
            "unit": "ns",
            "range": "± 329703.72165384813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23275696.226415094,
            "unit": "ns",
            "range": "± 962875.7618082375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58745567.94871795,
            "unit": "ns",
            "range": "± 3003207.1040370488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117421600,
            "unit": "ns",
            "range": "± 4336818.8915588595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236244171.42857143,
            "unit": "ns",
            "range": "± 6605975.584488422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5740466.796875,
            "unit": "ns",
            "range": "± 72588.27927159963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854819.9479166667,
            "unit": "ns",
            "range": "± 29431.27534235207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422743.1119791667,
            "unit": "ns",
            "range": "± 22556.23956708419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3171747.9631696427,
            "unit": "ns",
            "range": "± 50489.410474657154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999862.1940104166,
            "unit": "ns",
            "range": "± 15152.402703910497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939464.19921875,
            "unit": "ns",
            "range": "± 21175.95712178648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530941.975308642,
            "unit": "ns",
            "range": "± 184465.09687756482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3882884,
            "unit": "ns",
            "range": "± 195238.4336055705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531662.962962963,
            "unit": "ns",
            "range": "± 188283.2253335347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4875465.306122449,
            "unit": "ns",
            "range": "± 193005.02751549895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8336081.720430108,
            "unit": "ns",
            "range": "± 481507.34405574406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371817.7419354839,
            "unit": "ns",
            "range": "± 16754.657039834474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305851.92307692306,
            "unit": "ns",
            "range": "± 12465.332166981452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260593.67088607594,
            "unit": "ns",
            "range": "± 13563.869255206886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6122895.918367347,
            "unit": "ns",
            "range": "± 241222.9328159463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4433914.814814814,
            "unit": "ns",
            "range": "± 119305.24749470192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25144.086021505376,
            "unit": "ns",
            "range": "± 2770.5933427301707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106990.72164948453,
            "unit": "ns",
            "range": "± 10991.76853447451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105254.25531914894,
            "unit": "ns",
            "range": "± 12649.840960312822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 211001.03092783506,
            "unit": "ns",
            "range": "± 21561.233029663454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8584.69387755102,
            "unit": "ns",
            "range": "± 1358.0118913601348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24218.947368421053,
            "unit": "ns",
            "range": "± 2493.4507720265096"
          }
        ]
      }
    ]
  }
}