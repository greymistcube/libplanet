window.BENCHMARK_DATA = {
  "lastUpdate": 1704137008364,
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
          "id": "5b07f53c2372541de60e32b98a8688b00d2a1a4d",
          "message": "Added tests; fixed algorithm",
          "timestamp": "2024-01-02T04:12:32+09:00",
          "tree_id": "b9ccd0f488ee216f5e19c948dfac0fde923765df",
          "url": "https://github.com/greymistcube/libplanet/commit/5b07f53c2372541de60e32b98a8688b00d2a1a4d"
        },
        "date": 1704137001350,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3573513.3606770835,
            "unit": "ns",
            "range": "± 42703.85133474416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1163817.9189453125,
            "unit": "ns",
            "range": "± 8788.992163230734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736859.5430989583,
            "unit": "ns",
            "range": "± 4721.913912290211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1859630.4458705357,
            "unit": "ns",
            "range": "± 18766.645685978507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 592184.6862304688,
            "unit": "ns",
            "range": "± 11872.988427459031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 544771.8846905048,
            "unit": "ns",
            "range": "± 7345.902754528455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2289542.311111111,
            "unit": "ns",
            "range": "± 86372.112115865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2412267.761904762,
            "unit": "ns",
            "range": "± 110795.89354183087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3003741.35483871,
            "unit": "ns",
            "range": "± 133975.9429766963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2845023.3032786883,
            "unit": "ns",
            "range": "± 127787.65564336535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6927914.206349206,
            "unit": "ns",
            "range": "± 315761.88178559387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37901.75268817204,
            "unit": "ns",
            "range": "± 4216.417185695009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188225.77956989247,
            "unit": "ns",
            "range": "± 10649.660395040151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181414.92727272728,
            "unit": "ns",
            "range": "± 7729.613384166563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162707.6170212766,
            "unit": "ns",
            "range": "± 6263.985811082518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2997906.9166666665,
            "unit": "ns",
            "range": "± 100098.41122711619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2653443.125,
            "unit": "ns",
            "range": "± 103107.03391933849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11897.022471910112,
            "unit": "ns",
            "range": "± 999.9238036598779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60978.81914893617,
            "unit": "ns",
            "range": "± 4980.496710476801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51412.48947368421,
            "unit": "ns",
            "range": "± 2972.4897419243457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58786.704081632655,
            "unit": "ns",
            "range": "± 12910.633656068949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4789.676767676768,
            "unit": "ns",
            "range": "± 1889.337222242951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13502.505154639175,
            "unit": "ns",
            "range": "± 2715.3094058033216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5415408.275862069,
            "unit": "ns",
            "range": "± 156474.94061690528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13691116.823529411,
            "unit": "ns",
            "range": "± 279494.0868865197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37163545.90322581,
            "unit": "ns",
            "range": "± 1127389.6919232605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 71516929,
            "unit": "ns",
            "range": "± 1364153.0177549731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145621604.26190478,
            "unit": "ns",
            "range": "± 3354722.4558213893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 930928.8695652174,
            "unit": "ns",
            "range": "± 70128.67408740541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1827427.7872340425,
            "unit": "ns",
            "range": "± 116961.14799190057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1378215.5979381443,
            "unit": "ns",
            "range": "± 128874.71703215456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5850011.925531914,
            "unit": "ns",
            "range": "± 430561.8029895819"
          }
        ]
      }
    ]
  }
}